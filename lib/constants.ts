// lib/constants.ts
// Central source of truth for all copy, links, features, and configurations.
// Edit this file to update landing page content without modifying components.

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface StepItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  previewType: 'link' | 'obs' | 'alert' | 'payout';
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  colSpan?: 'full' | 'half' | 'third';
  highlight?: string;
}

export interface CreatorCategory {
  title: string;
  tag: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const BRAND_CONFIG = {
  name: 'APEX TIP',
  symbol: '▲',
  tagline: 'Hype in. Rupees out.',
  secondaryTagline: 'Built for top streamers.',
  estYear: 'EST. 2025',
  systemStatus: 'SYSTEM.ACTIVE · V1.0.0',
  license: 'PRODUCTION RELEASE',
};

export const NAV_LINKS: NavItem[] = [
  { label: '01 // FEATURES', href: '#features' },
  { label: '02 // WORKFLOW', href: '#how-it-works' },
  { label: '03 // PREVIEW', href: '#preview' },
  { label: '04 // WHY APEX', href: '#why-us' },
  { label: '05 // FAQ', href: '#faq' },
];

export const HERO_CONTENT = {
  sectionNumber: '001',
  systemStatus: 'STREAM ENGINE ONLINE',
  latLong: 'LAT: 12.9716° N · LONG: 77.5946° E', // Bengaluru / Tech hub
  headlineMain: 'TURN EVERY STREAM',
  headlineSub: 'INTO REAL ₹.',
  alternateHeadline: 'HYPE IN. RUPEES OUT.',
  description:
    'The dedicated tipping engine for Indian live-streamers. One link or QR code allows viewers to tip via UPI and cards. Live alerts hit your OBS canvas with instant text-to-speech shoutouts.',
  primaryCta: 'Request Access',
  secondaryCta: 'See How It Works',
  trustBadge: 'No minimum followers · Setup in minutes · Fees shown clearly before you sign up',
  technicalSpecs: [
    { label: 'ALERT LATENCY', value: '< 250MS' },
    { label: 'RAILS', value: 'UPI / CARDS / NETBANKING' },
    { label: 'OBS OVERLAY', value: 'BROWSER SOURCE V2' },
  ],
};

export const STATS_STRIP: StatItem[] = [
  {
    value: '1 LINK',
    label: 'UNIVERSAL PROFILE',
    detail: 'Add to YouTube, Twitch, Kick, or Instagram bio',
  },
  {
    value: '1 QR CODE',
    label: 'ON-SCREEN TIP CANVAS',
    detail: 'Direct camera scan from any Indian UPI app',
  },
  {
    value: '0 FOLLOWER',
    label: 'ENTRY BARRIER',
    detail: 'Start receiving support from your very first stream',
  },
  {
    value: '₹ INR NATIVE',
    label: 'ZERO FOREX CONVERSION',
    detail: 'Local settlement without international markup losses',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    tag: 'GENERATE PROFILE',
    title: 'Claim your apex handle and UPI tip URL',
    description:
      'Set up your streamer profile in 60 seconds. You get an apex link and an auto-generated high-contrast QR code styled for dark stream overlays.',
    previewType: 'link',
  },
  {
    number: '02',
    tag: 'CONNECT OVERLAY',
    title: 'Paste browser source into OBS Studio or Streamlabs',
    description:
      'Copy your dedicated overlay browser link. Add it as a browser source in OBS. No complex plugins or third-party background software required.',
    previewType: 'obs',
  },
  {
    number: '03',
    tag: 'GO LIVE & RECEIVE',
    title: 'Viewers tip via UPI; alerts trigger instantly on stream',
    description:
      'Viewers scan your QR or open your link, type their message, and pay with any UPI app (GPay, PhonePe, Paytm). Alerts fire live with optional TTS audio.',
    previewType: 'alert',
  },
  {
    number: '04',
    tag: 'TRACK & SETTLE',
    title: 'Monitor real-time tip feed and automated payouts',
    description:
      'Watch every tip land on your live streamer dashboard. Payouts settle straight to your verified Indian bank account with transparent transaction logs.',
    previewType: 'payout',
  },
];

export const BENTO_FEATURES: FeatureItem[] = [
  {
    id: 'tts',
    tag: 'AUDIO ENGINE',
    title: 'Instant Text-to-Speech Shoutouts',
    description:
      'Viewer messages are synthesized in real-time with customizable robotic, neutral, and gamer voice models. Set custom tip thresholds for TTS activation.',
    colSpan: 'half',
    highlight: 'Natural Indian English & Hindi Phonetics',
  },
  {
    id: 'obs',
    tag: 'BROADCAST INTEGRATION',
    title: 'OBS & Streaming Tools in 1 Click',
    description:
      'Native compatibility with OBS Studio, Streamlabs Desktop, vMix, and Prism. Drop in your browser source token and keep streaming uninterrupted.',
    colSpan: 'half',
    highlight: 'Zero CPU Overhead Browser Source',
  },
  {
    id: 'dashboard',
    tag: 'FINANCIAL TELEMETRY',
    title: 'Real-Time Payout & Tip Dashboard',
    description:
      'Track tip volume, top supporters, average tip size, and payout statuses. Filter transactions by stream session or date range with downloadable CSV exports.',
    colSpan: 'full',
    highlight: 'Live WebSocket Feed',
  },
  {
    id: 'moments',
    tag: 'MEDIA MODERATION',
    title: 'Viewer Moments & Media Sharing',
    description:
      'Allow viewers to attach approved video clips, GIFs, or audio stings with tips. Streamers hold full moderation control with one-click preview and skip keys.',
    colSpan: 'third',
    highlight: 'Streamer Moderation Deck',
  },
  {
    id: 'links',
    tag: 'ACCESS POINT',
    title: 'Unified Link & Dynamic QR Engine',
    description:
      'Every creator receives an apex handle (apextip.live/yourname) and a high-contrast dynamic QR code designed for clear readability on 1080p and 720p streams.',
    colSpan: 'third',
    highlight: 'Mobile-Optimized Fast Checkout',
  },
  {
    id: 'alerts',
    tag: 'VISUAL SYSTEM',
    title: 'Monochrome Blueprint Stream Overlays',
    description:
      'Customizable on-screen popups with border animations, sound effects, viewer avatars, and customizable duration. Built to match sleek, dark stream themes.',
    colSpan: 'third',
    highlight: 'CSS & Sound FX Customizer',
  },
];

export const TRY_TIP_CONFIG = {
  sectionNumber: '003',
  title: 'INTERACTIVE STREAM OVERLAY DEMO',
  subtitle: 'Test how a viewer tip triggers on your live broadcast.',
  instruction: 'Choose a tip amount or enter a custom message, then fire the test alert.',
  presetAmounts: [50, 100, 250, 500],
  defaultViewer: 'GamerSamrat_99',
  defaultMessage: 'Insane clutch in the final round! Keep the grind going brother 🔥',
};

export const PRODUCT_PREVIEW_CONTENT = {
  sectionNumber: '004',
  tag: 'INTERFACE ARCHITECTURE',
  title: 'CRAFTED FOR STREAMERS. OPTIMIZED FOR VIEWERS.',
  description:
    'A high-density live telemetry dashboard for your second monitor, paired with a clean 3-step checkout for viewers on mobile.',
  streamerTabs: ['LIVE TELEMETRY', 'PAYOUT LEDGER', 'ALERT ENGINE'],
  mockStats: [
    { label: 'TODAY REVENUE', value: '₹14,850' },
    { label: 'TOTAL TIPS', value: '38' },
    { label: 'AVG TIP', value: '₹390' },
    { label: 'ACTIVE OBS LINK', value: 'CONNECTED' },
  ],
  sampleTips: [
    { donor: 'Rohan_Playz', amount: '₹500', time: 'Just now', msg: 'Rank 1 push lets go! ggwp' },
    { donor: 'CyberViper', amount: '₹200', time: '2m ago', msg: 'Big fan from Mumbai! Play Valorant next' },
    { donor: 'Aarti_Live', amount: '₹1,000', time: '6m ago', msg: 'GG on 50k subs! Keep inspiring!' },
    { donor: 'SpeedyK', amount: '₹100', time: '11m ago', msg: 'TTS test from GPay. Setup looks clean.' },
  ],
};

export const WHY_APEX_POINTS = [
  {
    code: '01',
    title: 'Direct Indian Payments',
    subtitle: 'NATIVE UPI & LOCAL RAILS',
    description:
      'Built specifically around UPI, Google Pay, PhonePe, Paytm, and RuPay/Mastercard/Visa cards. No international payment gate drop-offs.',
  },
  {
    code: '02',
    title: 'Zero Follower Minimum',
    subtitle: 'OPEN TO ALL CREATORS',
    description:
      'You do not need 1,000 subscribers, 4,000 watch hours, or partner affiliate status to begin earning for your stream time.',
  },
  {
    code: '03',
    title: 'Transparent, Low Fees',
    subtitle: 'NO SURPRISE DEDUCTIONS',
    description:
      'Fees are shown clearly before you sign up. No hidden maintenance charges, payout processing gouges, or foreign exchange currency losses.',
  },
  {
    code: '04',
    title: 'Streamer-First Moderation',
    subtitle: 'FULL CANVAS SAFETY',
    description:
      'Profanity filters, blocked words dictionary, and manual hold-before-play controls keep your broadcast compliant with platform community guidelines.',
  },
];

export const WHO_ITS_FOR_ITEMS: CreatorCategory[] = [
  {
    title: 'GAMING STREAMERS',
    tag: 'BGMI / PC / CONSOLE',
    description: 'Instant alerts without frame drops while playing high-refresh competitive titles.',
  },
  {
    title: 'IRL CREATORS',
    tag: 'MOBILE / VLOG',
    description: 'A single clean QR code printed on-screen or physical gear for live street streams.',
  },
  {
    title: 'PODCASTERS & TALK',
    tag: 'ROUNDTABLES / CHAT',
    description: 'Highlight insightful questions and viewer voice notes in real-time during conversations.',
  },
  {
    title: 'EDUCATORS & CODERS',
    tag: 'TECH / WORKSHOPS',
    description: 'Accept student appreciation and Q&A superchats without platform commission cuts.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do viewers send tips to my stream?',
    answer:
      'Viewers either click your Apex Tip link in your stream description/chat or scan the QR code displayed on your stream canvas using any UPI app (Google Pay, PhonePe, Paytm, BHIM) or debit/credit cards.',
  },
  {
    id: 'faq-2',
    question: 'Do I need a minimum subscriber or follower count to use Apex Tip?',
    answer:
      'No. There is strictly zero follower or watch-hour requirement. Whether it is your very first stream or your thousandth, you can generate your link and start accepting tips immediately.',
  },
  {
    id: 'faq-3',
    question: 'How does OBS and streaming software integration work?',
    answer:
      'Apex Tip gives you a dedicated Browser Source URL. In OBS Studio, Streamlabs, or vMix, you create a new "Browser Source", paste your URL, and position the alert box anywhere on your layout. It takes under 60 seconds.',
  },
  {
    id: 'faq-4',
    question: 'How does text-to-speech (TTS) work on stream?',
    answer:
      'When a viewer includes a message with their tip, our engine synthesizes the text into speech and routes it through your browser source audio directly into your stream feed. You can adjust volume, speech rate, and minimum tip amounts required to trigger TTS.',
  },
  {
    id: 'faq-5',
    question: 'Can viewers send spam or inappropriate messages?',
    answer:
      'Apex Tip includes an automated profanity filter and a custom blacklist. You can also turn on "Manual Moderation Mode" to review tips on your streamer dashboard before the audio or alert hits your live stream.',
  },
  {
    id: 'faq-6',
    question: 'What are the platform fees and payout schedules?',
    answer:
      'Fees are kept competitive and are shown clearly before you sign up. Payouts are transferred directly to your registered Indian bank account according to regular scheduled settlement batches.',
  },
  {
    id: 'faq-7',
    question: 'Is Apex Tip compliant with Indian financial regulations?',
    answer:
      'Yes. Apex Tip is built for Indian banking infrastructure and adheres to RBI guidelines and standard digital payment gateway compliance frameworks.',
  },
];

export const EARLY_ACCESS_CONTENT = {
  sectionNumber: '006',
  badge: 'INVITATION ONLY · BATCH 01',
  headline: 'CLAIM YOUR HANDLE. GET EARLY ACCESS.',
  description:
    'We are onboarding Indian creators in weekly rollouts. Reserve your username and be the first to test low-fee UPI stream alerts.',
  platforms: ['YouTube', 'Twitch', 'Kick', 'Facebook Gaming', 'Instagram Live', 'Other'],
  fields: {
    name: 'Creator / Display Name',
    email: 'Primary Email Address',
    platform: 'Primary Streaming Platform',
    channelLink: 'Channel or Profile URL (e.g. youtube.com/@yourchannel)',
  },
  submitButton: 'Request Early Access',
  submittingText: 'Submitting telemetry...',
  successTitle: 'ACCESS REQUEST LOGGED',
  successMessage:
    'Your early-access slot has been queued. We verify streamer links in batches and will email your onboarding token shortly.',
  trustNotice: 'Zero spam. We will only contact you regarding your Apex Tip onboarding.',
};

export const FOOTER_CONTENT = {
  brandName: 'APEX TIP',
  brandTagline: 'Hype in. Rupees out. Built for top streamers.',
  navColumns: [
    {
      title: 'PRODUCT',
      links: [
        { label: 'Alert Engine', href: '#features' },
        { label: 'OBS Setup', href: '#how-it-works' },
        { label: 'Interactive Demo', href: '#try-a-tip' },
        { label: 'Dashboard Preview', href: '#preview' },
      ],
    },
    {
      title: 'CREATORS',
      links: [
        { label: 'Gaming Streamers', href: '#who-its-for' },
        { label: 'IRL Broadcasters', href: '#who-its-for' },
        { label: 'Podcasters', href: '#who-its-for' },
        { label: 'Why Apex', href: '#why-us' },
      ],
    },
    {
      title: 'LEGAL & TRUST',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'Payment Compliance', href: '#' },
      ],
    },
  ],
  statusDetails: {
    status: 'ALL SYSTEMS OPERATIONAL',
    apiLatency: '32ms',
    region: 'AP-SOUTH-1 (MUMBAI)',
    obsServer: 'RTMP GATEWAY ACTIVE',
  },
  copyright: `© ${new Date().getFullYear()} APEX TIP. ALL RIGHTS RESERVED.`,
};

