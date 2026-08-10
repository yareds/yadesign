import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { TESTIMONIALS } from '../data/siteData';
import { Quote, Info, MessageSquarePlus, Send, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';

interface ApprovedSubmission {
  id: string;
  name?: string;
  role?: string;
  quote: string;
  submittedAt?: string;
}

export const TestimonialsSection: React.FC = () => {
  const [approvedSubmissions, setApprovedSubmissions] = useState<ApprovedSubmission[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formQuote, setFormQuote] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const q = query(
        collection(db, 'testimonial_submissions'),
        where('status', '==', 'approved')
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const fetched: ApprovedSubmission[] = snapshot.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              name: data.name || '',
              role: data.role || 'Community Member',
              quote: data.quote || '',
              submittedAt: data.submittedAt || '',
            };
          });
          setApprovedSubmissions(fetched);
        },
        (error) => {
          console.error('Error fetching approved testimonial submissions:', error);
          handleFirestoreError(error, OperationType.LIST, 'testimonial_submissions');
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error('Firestore listener setup failed:', err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Honeypot check: if bot filled hidden field, silently pretend success without saving
    if (honeypot.trim() !== '') {
      setSubmitSuccess(true);
      setFormName('');
      setFormRole('');
      setFormQuote('');
      setHoneypot('');
      return;
    }

    if (!formQuote.trim()) {
      setSubmitError('Please enter your feedback or testimonial.');
      return;
    }

    if (formQuote.trim().length > 500) {
      setSubmitError('Testimonial must be 500 characters or fewer.');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionId = `sub-${Date.now()}`;
      const docRef = doc(db, 'testimonial_submissions', submissionId);

      await setDoc(docRef, {
        name: formName.trim() || 'Anonymous',
        role: formRole.trim() || 'Community Member',
        quote: formQuote.trim(),
        submittedAt: new Date().toISOString(),
        status: 'pending',
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormName('');
      setFormRole('');
      setFormQuote('');
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError('Failed to submit feedback. Please try again.');
      handleFirestoreError(err, OperationType.CREATE, 'testimonial_submissions');
    }
  };

  // Combine static testimonials with approved visitor submissions
  const allDisplayTestimonials = [
    ...TESTIMONIALS.map((t) => ({
      id: t.id,
      quote: t.quote,
      role: t.role,
      location: t.location,
      projectRelation: t.projectRelation,
      author: '',
    })),
    ...approvedSubmissions.map((s) => ({
      id: s.id,
      quote: s.quote,
      role: s.role || 'Community Member',
      location: s.name && s.name !== 'Anonymous' ? s.name : 'Community Feedback',
      projectRelation: 'User Review',
      author: s.name && s.name !== 'Anonymous' ? s.name : '',
    })),
  ];

  return (
    <section id="testimonials" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F59E0B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Software built for <span className="italic font-normal text-[#FBBF24]">real operational impact.</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] mt-5">
            <Info className="w-4 h-4 text-[#FBBF24] shrink-0" />
            <span>Representative sample feedback from client roles & project stakeholders</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {allDisplayTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#1A2234] hover:border-[#F59E0B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FBBF24] px-2.5 py-1 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/20 font-semibold">
                    {t.projectRelation}
                  </span>
                  <Quote className="w-5 h-5 text-[#2A364F] group-hover:text-[#F59E0B]/50 transition-colors" />
                </div>

                <p className="font-serif text-base font-light text-[#F8FAFC] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A364F]/80">
                {t.author && (
                  <div className="text-xs font-mono font-semibold text-[#F8FAFC] mb-0.5">
                    {t.author}
                  </div>
                )}
                <div className="text-xs font-mono font-medium text-[#CBD5E1]">
                  {t.role}
                </div>
                {t.location && !t.author && (
                  <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">
                    {t.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Feedback Section / Form */}
        <div className="mt-8 pt-8 border-t border-[#2A364F]/60 max-w-2xl">
          {!isFormOpen && !submitSuccess && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#F59E0B] hover:text-[#FBBF24] text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC] transition-all cursor-pointer shadow-md"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#FBBF24]" />
              <span>Submit A Testimonial</span>
            </button>
          )}

          {submitSuccess && (
            <div className="p-5 rounded-2xl bg-[#064E3B]/30 border border-[#10B981]/40 text-[#A7F3D0] flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#10B981] mb-1">
                    Submission Received
                  </h4>
                  <p className="text-xs text-[#E2E8F0]">
                    Thanks — your testimonial is awaiting review.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setIsFormOpen(false);
                }}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] underline cursor-pointer"
              >
                Close
              </button>
            </div>
          )}

          {isFormOpen && !submitSuccess && (
            <div className="p-6 rounded-2xl bg-[#121826] border border-[#2A364F] shadow-2xl relative">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[#FBBF24] font-semibold">
                    Submit Visitor Feedback
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Share your experience. Submissions are reviewed prior to publication.
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-[#1A2234] transition-colors cursor-pointer"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitError && (
                <div className="mb-4 p-3.5 rounded-xl bg-[#7F1D1D]/30 border border-[#EF4444]/40 text-[#FCA5A5] text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from genuine users) */}
                <div aria-hidden="true" className="hidden" style={{ display: 'none' }}>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Your Name or Alias <span className="text-[#64748B] lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex M."
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#475569] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Role, Title, or Organization <span className="text-[#64748B] lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder="e.g. Founder, Product Manager"
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#475569] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                      Your Testimonial or Feedback <span className="text-[#EF4444]">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${formQuote.length > 450 ? 'text-[#F59E0B]' : 'text-[#64748B]'}`}>
                      {formQuote.length}/500
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    maxLength={500}
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Share your experience working with or reviewing YA Design software projects..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E17] border border-[#2A364F] focus:border-[#F59E0B] focus:outline-hidden text-xs text-[#F8FAFC] placeholder-[#475569] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-transparent border border-transparent hover:border-[#2A364F] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formQuote.trim()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-50 disabled:cursor-not-allowed text-xs font-mono font-bold uppercase tracking-wider text-[#0A0E17] transition-colors cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Feedback</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
