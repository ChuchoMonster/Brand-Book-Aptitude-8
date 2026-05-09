// Brand Book: Aptitude 8 — Tailwind theme.extend
// Source: https://aptitude8.com — extracted 2026-05-09
// Real display font is Roobert (paid). Free substitute: Bricolage Grotesque.

module.exports = {
  theme: {
    extend: {
      colors: {
        accent:  { DEFAULT: '#FFD131', soft: '#FFE070', dim: '#E8B800' },
        neutral: { 0:'#FFFFFF', 100:'#EFEFF5', 200:'#D5D6E5', 400:'#A0A1AC', 500:'#8C8D94', 700:'#4F505A', 900:'#28282F', 1000:'#141418' },
        surface: { dark:'#14141C', mid:'#1E1E2A', deeper:'#0B0B12', card:'#191923' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Roobert', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'Plus Jakarta Display', 'system-ui', 'sans-serif'],
        editorial: ['Georgia', 'Palatino', 'serif'],
      },
      fontSize: {
        display:  ['3.825rem',  { lineHeight: '1.10', letterSpacing: '-0.015em', fontWeight: '700' }],
        h1:       ['3.5rem',    { lineHeight: '1.10', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2:       ['2.625rem',  { lineHeight: '1.15', fontWeight: '700' }],
        h3:       ['2.0625rem', { lineHeight: '1.25', fontWeight: '500' }],
        h4:       ['1.875rem',  { lineHeight: '1.10', fontWeight: '500' }],
        'h4-mid': ['1.375rem',  { lineHeight: '1.27', fontWeight: '500' }],
        lead:     ['1.0625rem', { lineHeight: '1.70', fontWeight: '400' }],
        body:     ['1rem',      { lineHeight: '1.70', fontWeight: '400' }],
        small:    ['0.75rem',   { lineHeight: '1.80', fontWeight: '400' }],
        mini:     ['0.625rem',  { lineHeight: '2.20', letterSpacing: '0.04em', fontWeight: '500' }],
        eyebrow:  ['0.75rem',   { lineHeight: '1.67', letterSpacing: '0.32em', fontWeight: '500' }],
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at 50% 100%, #2A1F3A 0%, #14141C 60%)',
        'gradient-cta':  'linear-gradient(135deg, #FFD131 0%, #FFE070 100%)',
      },
    },
  },
};
