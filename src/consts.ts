/* ----------------------------------------------------------------------------
   Site-wide configuration.
   Edit company details, contact info and navigation here — these values feed
   the header, footer, contact page, and SEO metadata across the whole site.
---------------------------------------------------------------------------- */

export const SITE = {
  name: 'Gupta Enterprises',
  legalName: 'Gupta Enterprises',
  tagline: 'Building the roads that move Madhya Pradesh forward',
  shortDesc:
    'Gupta Enterprises is a Mandsaur-based infrastructure and road construction company delivering highways, RCC roads and EPC projects across Madhya Pradesh since 2001.',
  url: 'https://guptaenterprise.in',
  foundedYear: 2001,
  founder: 'Ashish Gupta',
} as const;

export const CONTACT = {
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'info@guptaenterprise.in',
  emailHref: 'mailto:info@guptaenterprise.in',
  addressLines: [
    'In front of DRP Lines',
    'Mhow–Neemuch Road',
    'Mandsaur, Madhya Pradesh 458001',
  ],
  mapsQuery: 'Gupta+Enterprises+Mhow+Neemuch+Road+Mandsaur',
  hours: 'Mon – Sat: 9:30 AM – 6:30 PM',
} as const;

export const SOCIAL = {
  // Replace '#' with real profile URLs when available.
  facebook: '#',
  instagram: '#',
  linkedin: '#',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Equipment', href: '/equipment/' },
  { label: 'Clients', href: '/clients/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];
