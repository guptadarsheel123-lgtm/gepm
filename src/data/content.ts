/* ----------------------------------------------------------------------------
   Editable site content.
   This is placeholder-but-realistic content based on publicly available
   information about Gupta Enterprises. Replace figures, project details and
   names with verified data before going live (look for "TODO" notes).
---------------------------------------------------------------------------- */

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const STATS: Stat[] = [
  { value: 2001, label: 'Established', prefix: '' },
  { value: 170, suffix: '+', label: 'Skilled professionals' },
  { value: 500, suffix: '+ km', label: 'Roads constructed' }, // TODO: verify
  { value: 120, suffix: '+', label: 'Projects delivered' }, // TODO: verify
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: 'highway' | 'road' | 'epc' | 'rcc' | 'bridge' | 'maintenance';
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'highway-construction',
    title: 'Highway Construction',
    short: 'State & national highway works built to MoRTH specifications.',
    description:
      'End-to-end construction of state and national highways — from earthwork and granular sub-base to bituminous and concrete pavements — engineered for heavy traffic and a long service life.',
    icon: 'highway',
    highlights: ['Flexible & rigid pavements', 'MoRTH-compliant QA/QC', 'Heavy-duty earthwork'],
  },
  {
    slug: 'rcc-road-construction',
    title: 'RCC Road Construction',
    short: 'Durable reinforced cement concrete roads for high-load corridors.',
    description:
      'Reinforced Cement Concrete (RCC) roads designed for durability in high-load and high-water-table conditions — the preferred choice for village connectivity and urban roads that must last decades with minimal maintenance.',
    icon: 'rcc',
    highlights: ['Long-life rigid pavement', 'Low lifecycle maintenance', 'Monsoon-resilient'],
  },
  {
    slug: 'rural-road-connectivity',
    title: 'Rural Road Connectivity',
    short: 'PMGSY-grade village roads under MPRRDA & PIU mandates.',
    description:
      'Rural connectivity roads constructed under MPRRDA and PIU Mandsaur programmes, connecting villages to markets, schools and healthcare with all-weather roads built to PMGSY standards.',
    icon: 'road',
    highlights: ['MPRRDA / PIU experience', 'All-weather surfaces', 'Community-first delivery'],
  },
  {
    slug: 'epc-contracts',
    title: 'EPC Contracts',
    short: 'Single-point Engineering, Procurement & Construction delivery.',
    description:
      'Turnkey Engineering, Procurement and Construction contracts where we own design, materials, execution and handover — including a PWD EPC package delivered six months ahead of schedule.',
    icon: 'epc',
    highlights: ['Single-point accountability', 'Ahead-of-schedule delivery', 'Design-to-handover'],
  },
  {
    slug: 'bridges-culverts',
    title: 'Bridges & Culverts',
    short: 'Cross-drainage structures, culverts and minor bridges.',
    description:
      'Construction of culverts, cross-drainage works and minor bridges that keep road corridors safe and serviceable through every monsoon, built with sound structural engineering.',
    icon: 'bridge',
    highlights: ['Cross-drainage works', 'RCC box culverts', 'Structural QA'],
  },
  {
    slug: 'maintenance',
    title: 'Operation & Maintenance',
    short: 'Post-construction upkeep and performance-based maintenance.',
    description:
      'Performance-based maintenance and periodic renewal of road assets — protecting the public investment and keeping corridors at design service levels through the defect-liability period and beyond.',
    icon: 'maintenance',
    highlights: ['Defect-liability upkeep', 'Periodic renewal', 'Asset performance'],
  },
];

export type Project = {
  title: string;
  category: 'Highway' | 'RCC Road' | 'Rural Road' | 'EPC' | 'Bridge';
  location: string;
  client: string;
  year: string;
  scope: string;
  highlight?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'PWD EPC Road Package',
    category: 'EPC',
    location: 'Mandsaur District, MP',
    client: 'Public Works Department (PWD)',
    year: 'FY 2022–23',
    scope: 'Turnkey EPC construction of a major district road corridor.',
    highlight: 'Delivered 6 months ahead of schedule',
  },
  {
    title: 'MPRRDA Rural Connectivity Roads',
    category: 'Rural Road',
    location: 'Mandsaur & Neemuch, MP',
    client: 'MPRRDA / PIU Mandsaur',
    year: '2014–present',
    scope: 'Construction of all-weather village connectivity roads under PMGSY.',
    highlight: 'Connecting 40+ villages', // TODO: verify
  },
  {
    title: 'Mhow–Neemuch Corridor Strengthening',
    category: 'Highway',
    location: 'Mandsaur Region, MP',
    client: 'State Highway Authority',
    year: '2021',
    scope: 'Widening and strengthening of a state highway segment.',
  },
  {
    title: 'Urban RCC Road Network',
    category: 'RCC Road',
    location: 'Mandsaur, MP',
    client: 'Municipal Council',
    year: '2020',
    scope: 'Reinforced concrete roads for high-traffic urban stretches.',
  },
  {
    title: 'Cross-Drainage & Culvert Works',
    category: 'Bridge',
    location: 'Mandsaur District, MP',
    client: 'PIU Mandsaur',
    year: '2019',
    scope: 'RCC box culverts and cross-drainage structures along rural corridors.',
  },
  {
    title: 'Rajasthan Border Link Road',
    category: 'Highway',
    location: 'MP–Rajasthan Border',
    client: 'PWD',
    year: '2018',
    scope: 'Construction of an inter-state link road improving regional connectivity.',
  },
];

export type ValueItem = { title: string; description: string };

export const VALUES: ValueItem[] = [
  {
    title: 'Engineering excellence',
    description:
      'Recognised as one of the most technically proficient contractors in the region, with rigorous quality control on every layer of every road.',
  },
  {
    title: 'On-time, every time',
    description:
      'Disciplined planning and a capable in-house fleet let us deliver — including projects completed months ahead of schedule.',
  },
  {
    title: 'Safety first',
    description:
      'A safety-led culture protecting our 170+ workforce, the travelling public and the communities we build for.',
  },
  {
    title: 'Local roots, lasting impact',
    description:
      'Founded and grown in Mandsaur, we build infrastructure that connects and uplifts the communities of Madhya Pradesh.',
  },
];

export type Milestone = { year: string; title: string; description: string };

export const TIMELINE: Milestone[] = [
  {
    year: '2001',
    title: 'Founded in Mandsaur',
    description:
      'Ashish Gupta establishes Gupta Enterprises as a first-generation entrepreneur, starting with small-scale works and a team of around 30.',
  },
  {
    year: '2001–13',
    title: 'Early infrastructure works',
    description:
      'Builds a reputation for reliable delivery, including civil works in collaboration with BSNL.',
  },
  {
    year: '2014–15',
    title: 'Rural roads breakthrough',
    description:
      'Entrusted with constructing rural roads under MPRRDA and PIU Mandsaur, scaling capability and capacity.',
  },
  {
    year: '2022–23',
    title: 'EPC delivered ahead of schedule',
    description:
      'Completes a significant EPC order for the Public Works Department six months ahead of schedule.',
  },
  {
    year: 'Today',
    title: '170+ strong and growing',
    description:
      'Regarded as one of the most technically proficient and productive construction firms in the region.',
  },
];

export type Equipment = { name: string; purpose: string };

export const EQUIPMENT: Equipment[] = [
  { name: 'Sensor Pavers', purpose: 'Precision bituminous laying' },
  { name: 'Hot Mix Plant', purpose: 'In-house bituminous mix production' },
  { name: 'Concrete Batching Plant', purpose: 'Consistent high-grade RCC' },
  { name: 'Vibratory Soil Compactors', purpose: 'Subgrade & embankment compaction' },
  { name: 'Tandem Rollers', purpose: 'Asphalt finishing & density' },
  { name: 'Motor Graders', purpose: 'Precise grading & profiling' },
  { name: 'Excavators', purpose: 'Earthwork & cutting' },
  { name: 'Transit Mixers & Tippers', purpose: 'Material logistics' },
];

export type Client = { name: string; abbr: string };

export const CLIENTS: Client[] = [
  { name: 'Public Works Department', abbr: 'PWD' },
  { name: 'M.P. Rural Road Development Authority', abbr: 'MPRRDA' },
  { name: 'Project Implementation Unit, Mandsaur', abbr: 'PIU' },
  { name: 'Bharat Sanchar Nigam Limited', abbr: 'BSNL' },
  { name: 'Pradhan Mantri Gram Sadak Yojana', abbr: 'PMGSY' },
  { name: 'Municipal Council, Mandsaur', abbr: 'Nagar Palika' },
];
