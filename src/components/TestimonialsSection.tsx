import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { TESTIMONIALS } from '../data/siteData';
import { Testimonial } from '../types';
import { 
  Quote, 
  Info, 
  Star, 
  Plus, 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  X, 
  User, 
  Check,
  Send,
  AlertCircle
} from 'lucide-react';

const STORAGE_KEY = 'ya_design_testimonials_v2';
const HELPFUL_VOTES_KEY = 'ya_design_testimonial_votes_v2';

// Seed community comments to complement client reflections
const SEED_COMMUNITY_COMMENTS: Testimonial[] = [
  {
    id: 'comm-1',
    name: 'Abebe Bikila',
    role: 'Senior Frontend Architect',
    location: 'London, UK',
    projectRelation: 'Portfolio Review & UX',
    quote: 'The craftsmanship across this software portfolio is remarkable. The typography pairing, speed, and clean state handling in GETCH and EthioShein show exceptional full-stack discipline.',
    rating: 5,
    date: '2026-08-01',
    isVisitor: true,
    helpfulCount: 24
  },
  {
    id: 'comm-2',
    name: 'Elena Rostova',
    role: 'Product Lead @ Global Ventures',
    location: 'Berlin, Germany',
    projectRelation: 'ETPhone Auction Experience',
    quote: 'Rare to see a studio that delivers both heavy database engineering and polished, accessible visual aesthetics. Highly recommended for complex digital product builds.',
    rating: 5,
    date: '2026-07-29',
    isVisitor: true,
    helpfulCount: 18
  },
  {
    id: 'comm-3',
    name: 'Michael Chen',
    role: 'Tech Lead & Founder',
    location: 'Singapore',
    projectRelation: 'BUNA Ethiopia Platform',
    quote: 'The attention to localized UX—from multi-currency support to Telegram checkout links—is gold standard. You get code designed for actual business operations.',
    rating: 5,
    date: '2026-07-20',
    isVisitor: true,
    helpfulCount: 15
  }
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [votedIds, setVotedIds] = useState<Record<string, boolean>>({});
  
  // UI State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'clients' | 'visitors' | 'top'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'rating' | 'helpful'>('newest');

  // Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRating, setFormRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [formQuote, setFormQuote] = useState('');
  
  // Form Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Initialize data and sync with Firestore on mount
  useEffect(() => {
    const savedVotes = localStorage.getItem(HELPFUL_VOTES_KEY);
    if (savedVotes) {
      try {
        setVotedIds(JSON.parse(savedVotes));
      } catch (e) {
        console.error('Error loading stored vote states:', e);
      }
    }

    const testimonialsCol = collection(db, 'testimonials');
    const unsubscribe = onSnapshot(
      testimonialsCol,
      async (snapshot) => {
        if (snapshot.empty) {
          // Seed initial static & seed testimonials to Firestore if collection is empty
          const initialSeed = [...TESTIMONIALS, ...SEED_COMMUNITY_COMMENTS];
          for (const item of initialSeed) {
            const itemRef = doc(testimonialsCol, item.id);
            try {
              await setDoc(itemRef, {
                name: item.name,
                role: item.role,
                location: item.location,
                projectRelation: item.projectRelation || 'Portfolio Review',
                quote: item.quote,
                rating: item.rating,
                date: item.date,
                isVisitor: !!item.isVisitor,
                helpfulCount: item.helpfulCount || 0,
              });
            } catch (err) {
              console.error('Failed to seed item:', err);
            }
          }
        } else {
          const firestoreData: Testimonial[] = snapshot.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              name: data.name || 'Anonymous',
              role: data.role || 'Visitor',
              location: data.location || 'Worldwide',
              projectRelation: data.projectRelation || 'User Review',
              quote: data.quote || '',
              rating: typeof data.rating === 'number' ? data.rating : 5,
              date: data.date || '',
              isVisitor: !!data.isVisitor,
              helpfulCount: typeof data.helpfulCount === 'number' ? data.helpfulCount : 0,
            };
          });
          setTestimonials(firestoreData);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'testimonials');
      }
    );

    return () => unsubscribe();
  }, []);

  // Handle Helpful Vote with Firestore update
  const handleToggleHelpful = async (id: string) => {
    const isAlreadyVoted = votedIds[id];
    const newVotedState = { ...votedIds, [id]: !isAlreadyVoted };
    setVotedIds(newVotedState);
    try {
      localStorage.setItem(HELPFUL_VOTES_KEY, JSON.stringify(newVotedState));
    } catch (e) {
      console.error('Failed to save vote locally:', e);
    }

    const targetDoc = testimonials.find((item) => item.id === id);
    if (targetDoc) {
      const currentCount = targetDoc.helpfulCount || 0;
      const newCount = isAlreadyVoted ? Math.max(0, currentCount - 1) : currentCount + 1;
      const docRef = doc(db, 'testimonials', id);
      try {
        await updateDoc(docRef, { helpfulCount: newCount });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `testimonials/${id}`);
      }
    }
  };

  // Handle Form Submission with Firestore save
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formName.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    if (!formQuote.trim() || formQuote.trim().length < 10) {
      setFormError('Please share a testimonial or comment (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      const today = new Date().toISOString().split('T')[0];
      const newId = `review-${Date.now()}`;
      const newReview = {
        name: formName.trim(),
        role: formRole.trim() || 'Community Member',
        location: formLocation.trim() || 'Worldwide',
        projectRelation: 'User Review',
        quote: formQuote.trim(),
        rating: formRating,
        date: today,
        isVisitor: true,
        helpfulCount: 1,
      };

      const docRef = doc(db, 'testimonials', newId);
      await setDoc(docRef, newReview);

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form fields
      setFormName('');
      setFormRole('');
      setFormLocation('');
      setFormQuote('');
      setFormRating(5);

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsFormOpen(false);
      }, 3500);
    } catch (err) {
      setIsSubmitting(false);
      setFormError('Failed to submit review. Please try again.');
      handleFirestoreError(err, OperationType.WRITE, 'testimonials');
    }
  };

  // Filter Logic
  const filteredTestimonials = testimonials.filter((t) => {
    // Tab filter
    if (activeTab === 'clients' && t.isVisitor) return false;
    if (activeTab === 'visitors' && !t.isVisitor) return false;
    if (activeTab === 'top' && (t.rating || 5) < 5) return false;

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchName = t.name?.toLowerCase().includes(query) || false;
      const matchRole = t.role.toLowerCase().includes(query);
      const matchQuote = t.quote.toLowerCase().includes(query);
      const matchLoc = t.location.toLowerCase().includes(query);
      return matchName || matchRole || matchQuote || matchLoc;
    }

    return true;
  });

  // Sort Logic
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortBy === 'rating') {
      return (b.rating || 5) - (a.rating || 5);
    }
    if (sortBy === 'helpful') {
      return (b.helpfulCount || 0) - (a.helpfulCount || 0);
    }
    // Newest first default (by date or order)
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  // Average Rating
  const totalReviews = testimonials.length;
  const avgRating = totalReviews > 0
    ? (testimonials.reduce((sum, item) => sum + (item.rating || 5), 0) / totalReviews).toFixed(1)
    : '5.0';

  // Helper for Avatar colors
  const getAvatarColor = (name: string = '') => {
    const colors = [
      'from-amber-500 to-amber-700',
      'from-emerald-500 to-teal-700',
      'from-cyan-500 to-blue-700',
      'from-[#F59E0B] to-[#D97706]',
      'from-purple-500 to-indigo-700',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const getInitials = (name: string = '', role: string = '') => {
    if (name) {
      const parts = name.split(' ');
      if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      return name.slice(0, 2).toUpperCase();
    }
    return role.slice(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F59E0B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
              <span>TESTIMONIALS & REVIEWS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
              Software built for <span className="italic font-normal text-[#FBBF24]">real operational impact.</span>
            </h2>

            <p className="text-sm md:text-base text-[#94A3B8] font-sans mt-3 max-w-2xl">
              Explore authentic feedback from client partners, system leads, and digital product reviewers. Feel free to leave your own experience below.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] mt-4">
              <Info className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <span>Representative feedback from production stakeholders and community partners</span>
            </div>
          </div>

          {/* Action Header Stats & Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            {/* Rating Summary Card */}
            <div className="p-4 rounded-xl bg-[#121826] border border-[#2A364F] flex items-center gap-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-[#FBBF24]">{avgRating}</div>
                <div className="flex text-[#F59E0B] text-xs mt-0.5 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <div className="h-8 w-px bg-[#2A364F]" />
              <div>
                <div className="text-xs font-mono text-[#F8FAFC] font-semibold">{totalReviews} Reviews</div>
                <div className="text-[11px] text-[#94A3B8]">100% Satisfaction Rate</div>
              </div>
            </div>

            {/* Leave Review Button */}
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-5 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              {isFormOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Close Form</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Leave a Testimonial</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Collapsible / Expandable Testimonial Form Card */}
        {isFormOpen && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#121826] border border-[#F59E0B]/50 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A364F]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#F59E0B]/10 text-[#FBBF24] border border-[#F59E0B]/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F8FAFC] font-normal">
                    Share Your Experience
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-mono">
                    Leave a review or comment about YA Design portfolio projects & software.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsFormOpen(false)}
                className="text-[#94A3B8] hover:text-[#F8FAFC] p-1.5 rounded-lg hover:bg-[#1B2438] transition-colors"
                aria-label="Close review form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center bg-[#0A0E17]/60 rounded-xl border border-emerald-500/30 p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif text-[#F8FAFC] font-medium mb-1">
                  Thank You for Your Review!
                </h4>
                <p className="text-xs text-[#94A3B8] font-mono max-w-md mx-auto">
                  Your feedback has been published and added to the community testimonial stream.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-6">
                {/* Error Banner */}
                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs font-mono flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                    Rating <span className="text-[#FBBF24]">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 bg-[#0A0E17] p-2.5 rounded-xl border border-[#2A364F]">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = (hoverRating !== null ? hoverRating : formRating) >= star;
                        return (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setFormRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 text-[#F59E0B] transition-transform hover:scale-125 focus:outline-hidden"
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            <Star
                              className={`w-6 h-6 ${isFilled ? 'fill-[#F59E0B]' : 'text-[#2A364F]'}`}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-mono text-[#FBBF24] font-semibold px-3 py-1 bg-[#0A0E17] rounded-lg border border-[#2A364F]">
                      {hoverRating !== null ? hoverRating : formRating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Your Name <span className="text-[#FBBF24]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Samuel Girma"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#64748B] transition-colors"
                    />
                  </div>

                  {/* Role / Title */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Role or Title
                    </label>
                    <input
                      type="text"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder="e.g. Software Engineer / Visitor"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#64748B] transition-colors"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Location / Organization
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Addis Ababa / Remote"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#64748B] transition-colors"
                    />
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Your Testimonial / Feedback <span className="text-[#FBBF24]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Describe your thoughts, feedback, or experience working with or viewing YA Design projects..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#64748B] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-3 rounded-xl bg-[#1B2438] hover:bg-[#2A364F] text-[#94A3B8] hover:text-[#F8FAFC] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Posting Review...' : 'Publish Testimonial'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filters, Search & Sort Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A364F]">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All Reviews (${testimonials.length})` },
              { id: 'clients', label: 'Client Reflections' },
              { id: 'visitors', label: 'Community Feedback' },
              { id: 'top', label: '5★ Rated' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#F59E0B] text-[#0A0E17] font-bold shadow-md'
                    : 'bg-[#121826] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#2A364F] hover:border-[#F59E0B]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search feedback..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#121826] border border-[#2A364F] text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#F59E0B] focus:outline-hidden transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F8FAFC]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] focus:text-[#F8FAFC] focus:border-[#F59E0B] focus:outline-hidden cursor-pointer"
            >
              <option value="newest">Sort: Most Recent</option>
              <option value="rating">Sort: Highest Rating</option>
              <option value="helpful">Sort: Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Testimonials Grid */}
        {sortedTestimonials.length === 0 ? (
          <div className="py-16 text-center bg-[#121826] rounded-2xl border border-[#2A364F] p-8">
            <MessageSquare className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
            <h4 className="text-base font-serif text-[#F8FAFC] mb-1">No reviews match your filter</h4>
            <p className="text-xs text-[#94A3B8] font-mono mb-4">
              Try clearing your search query or switching tabs.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#1B2438] border border-[#2A364F] text-xs font-mono text-[#FBBF24] hover:bg-[#2A364F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTestimonials.map((t) => {
              const isVoted = votedIds[t.id];
              const authorName = t.name || t.role;
              return (
                <div
                  key={t.id}
                  className="p-7 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#1A2234] hover:border-[#F59E0B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group relative hover:-translate-y-1"
                >
                  <div>
                    {/* Top row: Avatar, Name & Badge */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-tr ${getAvatarColor(
                            authorName
                          )} flex items-center justify-center font-mono font-bold text-xs text-white shadow-md border border-white/10 shrink-0`}
                        >
                          {getInitials(t.name, t.role)}
                        </div>

                        <div>
                          <div className="font-sans text-sm font-semibold text-[#F8FAFC] group-hover:text-[#FBBF24] transition-colors">
                            {t.name || 'Anonymous Reviewer'}
                          </div>
                          <div className="text-xs text-[#94A3B8] font-mono leading-tight">
                            {t.role}
                          </div>
                        </div>
                      </div>

                      {/* Badge Tag */}
                      {t.isVisitor ? (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 font-bold shrink-0">
                          VISITOR
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#06B6D4] px-2.5 py-1 rounded-full bg-[#0891B2]/20 border border-[#0891B2]/40 font-bold shrink-0">
                          CLIENT
                        </span>
                      )}
                    </div>

                    {/* Star Rating & Quote */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex text-[#F59E0B] gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < (t.rating || 5) ? 'fill-[#F59E0B]' : 'text-[#2A364F]'
                            }`}
                          />
                        ))}
                      </div>

                      <Quote className="w-4 h-4 text-[#2A364F] group-hover:text-[#F59E0B]/50 transition-colors" />
                    </div>

                    <p className="font-serif text-base font-light text-[#F8FAFC] leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[#2A364F]/80 flex items-center justify-between gap-2">
                    {/* Location / Date info */}
                    <div className="text-[11px] font-mono text-[#94A3B8] truncate">
                      {t.location || t.date || 'Verified Review'}
                    </div>

                    {/* Helpful Like Button */}
                    <button
                      onClick={() => handleToggleHelpful(t.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                        isVoted
                          ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#FBBF24]'
                          : 'bg-[#1B2438] border-[#2A364F] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#F59E0B]/40'
                      }`}
                      aria-label="Mark testimonial as helpful"
                    >
                      <ThumbsUp className={`w-3 h-3 ${isVoted ? 'fill-[#FBBF24]' : ''}`} />
                      <span>{t.helpfulCount || 0}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
