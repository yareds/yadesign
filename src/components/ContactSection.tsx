import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/siteData';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Sparkles, Copy, RefreshCw, Loader2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Custom Web Application',
    timeline: '1-2 months',
    budget: '$2,000 - $5,000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Note: On first real submission, FormSubmit sends a one-time confirmation email to yared.abegaz@gmail.com that must be clicked before delivery activates.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/yared.abegaz@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          details: formData.details,
          _subject: `YA Design Inquiry: ${formData.projectType} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.message || 'Failed to submit inquiry. Please try again or email directly.');
      }
    } catch (err) {
      setError('Network error occurred while sending inquiry. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const text = `YA DESIGN PROJECT INQUIRY\nName: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.projectType}\nDetails: ${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'Custom Web Application',
      timeline: '1-2 months',
      budget: '$2,000 - $5,000',
      details: '',
    });
  };

  return (
    <section id="contact" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121826] border border-[#2A364F] text-[11px] font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Let's build software that <span className="italic font-normal text-[#FBBF24]">runs your business.</span>
          </h2>

          <p className="font-sans text-base text-[#94A3B8] mt-3">
            Whether you are launching a new product from scratch, replacing legacy spreadsheets, or modernizing an e-commerce platform, send us a note below.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl font-normal text-[#F8FAFC]">
                Studio Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2438] border border-[#2A364F] flex items-center justify-center text-[#F59E0B] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider font-bold">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="font-mono text-sm font-bold text-[#F8FAFC] hover:text-[#FBBF24] transition-colors"
                  >
                    {STUDIO_INFO.email}
                  </a>
                  <div className="text-xs text-[#94A3B8] mt-0.5">Response time: within 24 hours</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#2A364F]">
                <div className="w-10 h-10 rounded-xl bg-[#1B2438] border border-[#2A364F] flex items-center justify-center text-[#06B6D4] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider font-bold">STUDIO PHONE</div>
                  <a
                    href={`tel:${STUDIO_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="font-mono text-sm font-bold text-[#F8FAFC] hover:text-[#FBBF24] transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                  <div className="text-xs text-[#94A3B8] mt-0.5">Direct phone & WhatsApp contact</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#2A364F]">
                <div className="w-10 h-10 rounded-xl bg-[#1B2438] border border-[#2A364F] flex items-center justify-center text-[#06B6D4] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider font-bold">LOCATION & RADIUS</div>
                  <div className="font-serif text-base text-[#F8FAFC] font-normal">{STUDIO_INFO.location}</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">{STUDIO_INFO.workingRadius}</div>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-6 rounded-2xl bg-[#121826] text-[#F8FAFC] border border-[#2A364F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06B6D4]"></span>
                </span>
                <div>
                  <div className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider font-bold">STUDIO STATUS</div>
                  <div className="text-sm font-serif text-[#F8FAFC]">Accepting Q3/Q4 Projects</div>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-[#FBBF24]" />
            </div>
          </div>

          {/* Column 2: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] shadow-md">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#2A364F] pb-4">
                    <h3 className="font-serif text-2xl font-normal text-[#F8FAFC]">
                      Project Inquiry Form
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8] uppercase">
                      STEP 1 OF 1
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider font-bold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Yared Abegaz"
                        className="w-full px-4 py-3 rounded-xl bg-[#1B2438] border border-[#2A364F] text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent text-sm font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yared@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1B2438] border border-[#2A364F] text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider font-bold mb-2">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B2438] border border-[#2A364F] text-[#F8FAFC] focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] text-sm font-sans"
                    >
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Business Management System">Business Management System</option>
                      <option value="E-commerce & Marketplace">E-commerce & Marketplace</option>
                      <option value="UI/UX Design System">UI/UX Design System</option>
                      <option value="Ongoing Maintenance & Support">Ongoing Maintenance & Support</option>
                      <option value="Other Digital Solutions">Other Digital Solutions</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider font-bold mb-2">
                      Project Scope & Goals *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe what business problem you want to solve, core feature expectations, and target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1B2438] border border-[#2A364F] text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent text-sm font-sans"
                    />
                  </div>

                  {/* Error Alert */}
                  {error && (
                    <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/50 text-red-200 text-xs font-mono flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-lg cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success State */
                <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#0891B2]/20 border border-[#0891B2] flex items-center justify-center text-[#06B6D4] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider font-bold">
                      INQUIRY RECEIVED
                    </div>
                    <h3 className="font-serif text-3xl font-light text-[#F8FAFC] mt-1">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="font-sans text-sm text-[#94A3B8] mt-2 max-w-md mx-auto">
                      Your project inquiry has been recorded. We will review your scope and follow up directly at <strong className="text-[#F8FAFC]">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-xl bg-[#1B2438] border border-[#2A364F] text-left text-xs font-mono space-y-2">
                    <div className="text-[#94A3B8] uppercase font-bold border-b border-[#2A364F] pb-1">Inquiry Brief Summary</div>
                    <div className="text-[#F8FAFC]"><strong>Category:</strong> {formData.projectType}</div>
                    <div className="text-[#F8FAFC]"><strong>Details:</strong> {formData.details}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied Brief!' : 'Copy Inquiry Text'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1B2438] border border-[#2A364F] text-[#F8FAFC] font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1E293B] transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
