import React from 'react';
import { AccentColor } from '../types';

interface AbstractUiPreviewProps {
  projectId: string;
  projectName: string;
  accent: AccentColor;
}

export const AbstractUiPreview: React.FC<AbstractUiPreviewProps> = ({
  projectId,
  projectName,
  accent,
}) => {
  // Theme color mapping for accents
  const colors = {
    brass: {
      primary: '#F59E0B',
      primarySoft: 'rgba(245, 158, 11, 0.15)',
      primaryBright: '#FBBF24',
      border: 'rgba(245, 158, 11, 0.3)',
      text: '#FBBF24',
    },
    rust: {
      primary: '#6366F1',
      primarySoft: 'rgba(99, 102, 241, 0.15)',
      primaryBright: '#818CF8',
      border: 'rgba(99, 102, 241, 0.3)',
      text: '#818CF8',
    },
    teal: {
      primary: '#0891B2',
      primarySoft: 'rgba(8, 145, 178, 0.18)',
      primaryBright: '#06B6D4',
      border: 'rgba(8, 145, 178, 0.35)',
      text: '#06B6D4',
    },
  }[accent];

  return (
    <div className="w-full aspect-[16/10] bg-[#1B2438] rounded-xl overflow-hidden border border-[#2A364F] relative group/mockup flex flex-col shadow-inner">
      {/* Top Browser Chrome Bar */}
      <div className="h-8 bg-[#121826] border-b border-[#2A364F] px-3 flex items-center justify-between text-xs text-[#94A3B8] font-mono select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2A364F] group-hover/mockup:bg-[#6366F1] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2A364F] group-hover/mockup:bg-[#F59E0B] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2A364F] group-hover/mockup:bg-[#06B6D4] transition-colors" />
        </div>
        <div className="px-2.5 py-0.5 rounded bg-[#1B2438] border border-[#2A364F] text-[10px] text-[#94A3B8]/80 truncate max-w-[180px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }} />
          <span>app.{projectId}.et</span>
        </div>
        <div className="flex items-center gap-1 opacity-60">
          <span className="text-[10px] font-mono uppercase">PROD</span>
        </div>
      </div>

      {/* Abstract Mockup Body Canvas */}
      <div className="flex-1 p-3.5 bg-[#0F172A] relative flex flex-col justify-between overflow-hidden">
        {/* Subtle Accent Glow Grid Backdrop */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, ${colors.primary} 0%, transparent 70%)`
          }}
        />

        {/* Dynamic Project Specific Abstract UI Layout */}
        {projectId === 'getch-property-manager' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10">
            {/* Header KPI row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded border border-[#2A364F] bg-[#121826]">
                <div className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">Occupancy</div>
                <div className="text-sm font-semibold text-[#F8FAFC] mt-0.5">94.2%</div>
                <div className="w-full bg-[#0A0E17] h-1 rounded mt-1 overflow-hidden">
                  <div className="h-full rounded" style={{ width: '94%', backgroundColor: colors.primary }} />
                </div>
              </div>
              <div className="p-2 rounded border border-[#2A364F] bg-[#121826]">
                <div className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">Revenue</div>
                <div className="text-sm font-semibold text-[#F8FAFC] mt-0.5">ETB 420K</div>
                <div className="text-[9px] text-[#06B6D4] font-mono">+8.4% vs mo</div>
              </div>
              <div className="p-2 rounded border border-[#2A364F] bg-[#121826]">
                <div className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">Units</div>
                <div className="text-sm font-semibold text-[#F8FAFC] mt-0.5">148 Active</div>
                <div className="text-[9px] text-[#94A3B8] font-mono">4 Buildings</div>
              </div>
            </div>

            {/* Main Bar Chart & Unit List Representation */}
            <div className="grid grid-cols-12 gap-2 flex-1 items-stretch">
              <div className="col-span-7 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] font-mono text-[#94A3B8]">
                  <span>COLLECTIONS ANALYTICS</span>
                  <span style={{ color: colors.text }}>Q3 2025</span>
                </div>
                {/* SVG Bar Chart */}
                <svg className="w-full h-16 mt-1" viewBox="0 0 160 50">
                  <line x1="0" y1="45" x2="160" y2="45" stroke="#2A364F" strokeWidth="1" />
                  <rect x="10" y="15" width="16" height="30" rx="1" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1" />
                  <rect x="35" y="10" width="16" height="35" rx="1" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1" />
                  <rect x="60" y="22" width="16" height="23" rx="1" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1" />
                  <rect x="85" y="8" width="16" height="37" rx="1" fill={colors.primary} />
                  <rect x="110" y="18" width="16" height="27" rx="1" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1" />
                  <rect x="135" y="12" width="16" height="33" rx="1" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1" />
                </svg>
              </div>

              <div className="col-span-5 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[9px] font-mono text-[#94A3B8] uppercase">LEASES & TENANTS</div>
                <div className="space-y-1.5 mt-1">
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] flex items-center justify-between text-[10px]">
                    <span className="text-[#F8FAFC] truncate">Apt 4B - Sidama Tower</span>
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-[#0891B2]/30 text-[#06B6D4]">PAID</span>
                  </div>
                  <div className="p-1 rounded bg-[#1B2438] border border-[#2A364F] flex items-center justify-between text-[10px]">
                    <span className="text-[#F8FAFC] truncate">Unit 12 - Tech Hub</span>
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-[#F59E0B]/30 text-[#FBBF24]">DUE</span>
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] flex items-center justify-between text-[10px]">
                    <span className="text-[#F8FAFC] truncate">Suite 3 - Commercial</span>
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-[#0891B2]/30 text-[#06B6D4]">PAID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectId === 'buna-ai' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10">
            {/* AI Taste Profile Header */}
            <div className="p-2 rounded border border-[#2A364F] bg-[#121826] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold" style={{ backgroundColor: colors.primarySoft, color: colors.text, border: `1px solid ${colors.border}` }}>
                  AI
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#F8FAFC]">Sidama Yirgacheffe Profile</div>
                  <div className="text-[9px] text-[#94A3B8] font-mono">Floral · Citrus · Medium Light Roast</div>
                </div>
              </div>
              <div className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/40">
                98% MATCH
              </div>
            </div>

            {/* Radar & passport Section */}
            <div className="grid grid-cols-12 gap-2 flex-1">
              {/* Radar Chart SVG */}
              <div className="col-span-6 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col items-center justify-center relative">
                <span className="absolute top-1 left-2 text-[8px] font-mono text-[#94A3B8]">FLAVOR RADAR</span>
                <svg className="w-20 h-20" viewBox="0 0 100 100">
                  <polygon points="50,10 90,40 75,85 25,85 10,40" fill="none" stroke="#2A364F" strokeWidth="1" />
                  <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="#2A364F" strokeWidth="1" />
                  <polygon points="50,15 85,38 70,80 28,70 18,42" fill={colors.primarySoft} stroke={colors.primary} strokeWidth="1.5" />
                  <circle cx="50" cy="15" r="2.5" fill={colors.text} />
                  <circle cx="85" cy="38" r="2.5" fill={colors.text} />
                  <circle cx="70" cy="80" r="2.5" fill={colors.text} />
                  <circle cx="28" cy="70" r="2.5" fill={colors.text} />
                </svg>
              </div>

              {/* Coffee Passport Stamp Matrix */}
              <div className="col-span-6 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[8px] font-mono text-[#94A3B8]">DIGITAL COFFEE PASSPORT</div>
                <div className="grid grid-cols-3 gap-1 my-1">
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#6366F1]/50 text-center text-[8px] font-mono text-[#818CF8]">
                    SIDAMA
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#6366F1]/50 text-center text-[8px] font-mono text-[#818CF8]">
                    YIRGA
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#6366F1]/50 text-center text-[8px] font-mono text-[#818CF8]">
                    GUJI
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] text-center text-[8px] font-mono text-[#94A3B8]/50">
                    HARAR
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] text-center text-[8px] font-mono text-[#94A3B8]/50">
                    JIMMA
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] text-center text-[8px] font-mono text-[#94A3B8]/50">
                    LIMU
                  </div>
                </div>
                <div className="text-[8px] font-mono text-[#94A3B8] flex justify-between">
                  <span>Beans: 1,240</span>
                  <span className="text-[#818CF8]">Level 3 Brewmaster</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectId === 'ethio-phone-auction' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10">
            {/* Live Auction Banner */}
            <div className="p-2 rounded border border-[#2A364F] bg-[#121826] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
                </span>
                <span className="text-[10px] font-mono text-[#F8FAFC]">LIVE BIDDING · iPhone 15 Pro Max 256GB</span>
              </div>
              <span className="text-[10px] font-mono text-[#06B6D4] bg-[#0891B2]/20 px-1.5 py-0.5 rounded border border-[#0891B2]/40">
                02m 45s
              </span>
            </div>

            {/* Bidding Stream & Shop Storefront */}
            <div className="grid grid-cols-12 gap-2 flex-1">
              <div className="col-span-7 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[8px] font-mono text-[#94A3B8]">BID STREAM HISTORY</div>
                <div className="space-y-1 my-1">
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#0891B2]/40 flex justify-between items-center text-[9px] font-mono">
                    <span className="text-[#06B6D4]">User_8921 (Verified)</span>
                    <span className="text-[#F8FAFC] font-bold">ETB 68,500</span>
                  </div>
                  <div className="p-1 rounded bg-[#1B2438] border border-[#2A364F] flex justify-between items-center text-[9px] font-mono opacity-70">
                    <span className="text-[#94A3B8]">Adama_Electronics</span>
                    <span className="text-[#94A3B8]">ETB 67,000</span>
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] flex justify-between items-center text-[9px] font-mono opacity-50">
                    <span className="text-[#94A3B8]">Bole_Shop_Admas</span>
                    <span className="text-[#94A3B8]">ETB 65,500</span>
                  </div>
                </div>
              </div>

              <div className="col-span-5 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[8px] font-mono text-[#94A3B8]">SELLER VERIFICATION</div>
                <div className="p-1.5 rounded bg-[#0A0E17] border border-[#2A364F] text-center my-auto">
                  <div className="text-[10px] font-semibold text-[#F8FAFC]">Mebrat Electronics</div>
                  <div className="text-[8px] text-[#06B6D4] font-mono mt-0.5">✓ Verified Merchant</div>
                  <div className="text-[8px] text-[#94A3B8] mt-0.5">48 Successful Auctions</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectId === 'ethio-shein' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10">
            {/* Top Fashion Header & Currency Switcher */}
            <div className="p-2 rounded border border-[#2A364F] bg-[#121826] flex items-center justify-between">
              <span className="text-[10px] font-serif text-[#F8FAFC] italic">Habesha Couture & Modern Collection</span>
              <div className="flex items-center gap-1 bg-[#0A0E17] p-0.5 rounded border border-[#2A364F] text-[8px] font-mono">
                <span className="px-1.5 py-0.5 rounded bg-[#F59E0B] text-[#0A0E17] font-bold">ETB</span>
                <span className="px-1 text-[#94A3B8]">USD</span>
                <span className="px-1 text-[#94A3B8]">EUR</span>
              </div>
            </div>

            {/* Catalog Cards & Social Handoff */}
            <div className="grid grid-cols-12 gap-2 flex-1">
              <div className="col-span-8 grid grid-cols-2 gap-1.5">
                <div className="p-1.5 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                  <div className="w-full h-10 rounded bg-[#0A0E17] border border-[#2A364F] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#F59E0B]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="text-[9px] font-semibold text-[#F8FAFC] truncate mt-1">Kemis Handwoven</div>
                  <div className="text-[8px] font-mono text-[#FBBF24]">ETB 8,400</div>
                </div>

                <div className="p-1.5 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                  <div className="w-full h-10 rounded bg-[#0A0E17] border border-[#2A364F] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#F59E0B]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 73" />
                    </svg>
                  </div>
                  <div className="text-[9px] font-semibold text-[#F8FAFC] truncate mt-1">Urban Jacket</div>
                  <div className="text-[8px] font-mono text-[#FBBF24]">ETB 3,200</div>
                </div>
              </div>

              <div className="col-span-4 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between text-center">
                <div className="text-[8px] font-mono text-[#94A3B8]">DIRECT CHECKOUT</div>
                <div className="space-y-1 my-auto">
                  <div className="px-1.5 py-1 rounded bg-[#0891B2]/20 text-[#06B6D4] border border-[#0891B2]/50 text-[8px] font-mono flex items-center justify-center gap-1">
                    <span>Telegram</span>
                  </div>
                  <div className="px-1.5 py-1 rounded bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/50 text-[8px] font-mono flex items-center justify-center gap-1">
                    <span>WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectId === 'digital-wedding-invitation' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10 text-center">
            {/* Cinematic Ornament Frame */}
            <div className="p-2 rounded border border-[#6366F1]/40 bg-[#121826] flex flex-col items-center">
              <div className="text-[8px] font-mono text-[#818CF8] uppercase tracking-widest">BESPOKE EXPERIENCE</div>
              <div className="text-sm font-serif italic text-[#F8FAFC] my-0.5">Sebastian & ቤዛዊት</div>
              <div className="text-[8px] font-mono text-[#94A3B8]">Lakefront Pavilion · Dec 2024</div>
            </div>

            {/* Interactive Timeline & Ambient Player Bar */}
            <div className="grid grid-cols-12 gap-2 flex-1">
              <div className="col-span-7 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between text-left">
                <div className="text-[8px] font-mono text-[#94A3B8]">ORDER OF EVENTS</div>
                <div className="space-y-1 my-1">
                  <div className="flex items-center gap-1.5 text-[8px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                    <span className="text-[#94A3B8]">14:00</span>
                    <span className="text-[#F8FAFC]">Greeting Ceremony</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                    <span className="text-[#94A3B8]">16:30</span>
                    <span className="text-[#F8FAFC]">Sunset Vows</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                    <span className="text-[#94A3B8]">19:00</span>
                    <span className="text-[#F8FAFC]">Dinner & Music</span>
                  </div>
                </div>
              </div>

              <div className="col-span-5 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[8px] font-mono text-[#94A3B8]">AMBIENT MUSIC</div>
                <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] flex items-center justify-between text-[8px] font-mono">
                  <span className="text-[#818CF8]">▶ Playing</span>
                  <div className="flex gap-0.5 items-end h-2">
                    <span className="w-0.5 h-2 bg-[#818CF8] animate-pulse" />
                    <span className="w-0.5 h-1 bg-[#818CF8]" />
                    <span className="w-0.5 h-3 bg-[#818CF8] animate-pulse" />
                  </div>
                </div>
                <div className="text-[8px] font-mono text-[#06B6D4] text-center">92 RSVPs Confirmed</div>
              </div>
            </div>
          </div>
        )}

        {projectId === 'event-negotiation-tracker' && (
          <div className="flex flex-col h-full justify-between gap-2 z-10">
            {/* Workflow Pipeline Header */}
            <div className="p-2 rounded border border-[#2A364F] bg-[#121826] flex items-center justify-between text-[9px] font-mono">
              <span className="text-[#06B6D4] font-bold">NEGOTIATION PIPELINE</span>
              <div className="flex items-center gap-1 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-[#0A0E17] border border-[#2A364F] text-[#94A3B8]">Quote (4)</span>
                <span className="px-1.5 py-0.5 rounded bg-[#0891B2]/30 text-[#06B6D4] border border-[#0891B2]/50 font-bold">Counter (2)</span>
                <span className="px-1.5 py-0.5 rounded bg-[#0A0E17] border border-[#2A364F] text-[#94A3B8]">Signed (8)</span>
              </div>
            </div>

            {/* Email simulation log */}
            <div className="grid grid-cols-12 gap-2 flex-1">
              <div className="col-span-7 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between">
                <div className="text-[8px] font-mono text-[#94A3B8]">TRANSACTIONAL EMAIL LOG</div>
                <div className="space-y-1 my-1">
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] text-[8px] font-mono">
                    <div className="flex justify-between text-[#06B6D4]">
                      <span>To: Catering_Vendor</span>
                      <span>11:42 AM</span>
                    </div>
                    <div className="text-[#94A3B8] truncate">Subject: Revised Menu Quote ETB 120K</div>
                  </div>
                  <div className="p-1 rounded bg-[#0A0E17] border border-[#2A364F] text-[8px] font-mono">
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>To: Sound_Stage_Inc</span>
                      <span>09:15 AM</span>
                    </div>
                    <div className="text-[#94A3B8] truncate">Subject: Contract Draft Approved</div>
                  </div>
                </div>
              </div>

              <div className="col-span-5 p-2 rounded border border-[#2A364F] bg-[#121826] flex flex-col justify-between text-center">
                <div className="text-[8px] font-mono text-[#94A3B8]">SCHEMA ARCHITECTURE</div>
                <div className="p-1.5 rounded bg-[#0A0E17] border border-[#2A364F] my-auto text-[8px] font-mono text-[#06B6D4]">
                  <div>Event_ID → Vendor_ID</div>
                  <div className="text-[#94A3B8] mt-0.5">MVC Data Model</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#0A0E17]/80 opacity-0 group-hover/mockup:opacity-100 transition-opacity flex items-center justify-center p-4 text-center backdrop-blur-xs">
          <span className="px-3 py-1.5 rounded-lg bg-[#2A364F] text-[#F8FAFC] text-xs font-mono border border-[#F59E0B]/40 flex items-center gap-1.5 shadow-lg">
            <span>Explore Architecture Details</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
