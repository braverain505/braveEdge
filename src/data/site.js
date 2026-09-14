/**
 * ---------------------------------------------------------------------------
 * BraveEdge Technologies — site content
 * ---------------------------------------------------------------------------
 * This is the only file you need to touch for day-to-day content updates.
 * Product access links live in `products` below.
 */

export const company = {
  name: 'BraveEdge Technologies',
  shortName: 'BraveEdge',
  // Used in the navbar, hero and footer.
  tagline: 'Automation that gives your business an edge.',
  email: 'hello@braveedge.tech',
  phone: '+1 (000) 000-0000',
  location: 'Remote-first · Serving clients worldwide',
  // Update this once the production domain is live.
  url: 'https://braveedge.tech',
  // Shown as the organization description in structured data.
  schemaDescription:
    'Automation agency building workflow automation, AI assistants, systems integrations and internal tools for growing teams.',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'How we work', href: '#process' },
  { label: 'Why us', href: '#why' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Automation agency',
  title: 'We build the automation your team keeps doing by hand.',
  subtitle:
    'BraveEdge Technologies designs, builds and runs the systems that remove manual work from your operations — so your people spend their time on decisions, not data entry.',
  primaryCta: { label: 'Book a discovery call', href: '#contact' },
  secondaryCta: { label: 'See our products', href: '#products' },
};

/** Short value statements under the hero. Keep these honest and specific. */
export const valueProps = [
  {
    title: 'Fixed scope, fixed price',
    description: 'You know the deliverable and the cost before we start building.',
  },
  {
    title: 'You own everything',
    description: 'Code, workflows and credentials are handed over on day one.',
  },
  {
    title: 'Senior engineers only',
    description: 'The people who scope your build are the people who ship it.',
  },
  {
    title: 'Live in weeks, not quarters',
    description: 'We ship working automations early, then extend them iteratively.',
  },
];

export const services = [
  {
    icon: 'flow',
    title: 'Workflow automation',
    description:
      'We map the process your team runs manually today, then automate the handoffs, approvals and follow-ups end to end.',
  },
  {
    icon: 'spark',
    title: 'AI assistants & agents',
    description:
      'Custom assistants trained on your documents and systems — answering customers, triaging tickets and drafting work for review.',
  },
  {
    icon: 'plug',
    title: 'Systems integration',
    description:
      'Your CRM, finance stack, ticketing and internal databases talking to each other, with one source of truth instead of five.',
  },
  {
    icon: 'chart',
    title: 'Data & reporting',
    description:
      'Automated pipelines that clean, reconcile and deliver your numbers to a dashboard before anyone asks for them.',
  },
  {
    icon: 'window',
    title: 'Internal tools',
    description:
      'Purpose-built portals and admin dashboards that replace the spreadsheet-and-email workflow nobody wants to maintain.',
  },
  {
    icon: 'shield',
    title: 'Managed automation',
    description:
      'Monitoring, maintenance and iteration after launch — because processes change and broken automations are worse than none.',
  },
];

/**
 * PRODUCTS
 * ---------------------------------------------------------------------------
 * Each entry renders a card with an "Open" link. To add a product, copy an
 * object below and edit the fields. Set `status` to 'live' or 'soon'.
 * `url` may be null for products that are not publicly accessible yet.
 */
export const products = [
  {
    name: 'Clearis',
    status: 'live',
    tag: 'Platform',
    url: 'https://clearis.site',
    description:
      'Our flagship platform. Clearis brings the workflows we build for clients into a single, self-serve workspace.',
  },
  // {
  //   name: 'Next product',
  //   status: 'live',
  //   tag: 'Internal tool',
  //   url: 'https://example.com',
  //   description: 'One-line description of what it does and who it is for.',
  // },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'A short working session to map the process, the tools involved and where the hours actually go.',
    detail: 'Deliverable: process map + automation opportunities ranked by payback.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We agree the scope, the systems we will touch and how success gets measured — in writing.',
    detail: 'Deliverable: solution design, fixed quote and delivery timeline.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We build in short cycles against your real data, so you see working software rather than status updates.',
    detail: 'Deliverable: a working automation in your environment, tested end to end.',
  },
  {
    step: '04',
    title: 'Run & extend',
    description:
      'We monitor what we shipped, fix what breaks and extend it as your process evolves.',
    detail: 'Deliverable: documentation, handover session and optional ongoing support.',
  },
];

export const differentiators = [
  {
    title: 'Process first, tools second',
    description:
      'We will not automate a process that should be deleted. The audit comes before the build, every time.',
  },
  {
    title: 'No black boxes',
    description:
      'Everything we build is documented and readable by your team. No platform lock-in you cannot walk away from.',
  },
  {
    title: 'Built for the unglamorous edge cases',
    description:
      'The failed payment, the missing field, the duplicate record. That is where automations actually earn their keep.',
  },
  {
    title: 'Security-conscious by default',
    description:
      'Least-privilege access, secrets handled properly, and your data staying inside systems you control.',
  },
];

/**
 * TIME-SAVED CALCULATOR
 * ---------------------------------------------------------------------------
 * Reports time only — deliberately no money figures, so nothing on the site
 * implies a savings claim or a price.
 *
 * Every figure shown is derived from the visitor's own inputs, and
 * `assumptions` are conservative — adjust them here if you want to make the
 * estimate more or less bullish.
 */
export const roi = {
  eyebrow: 'Estimate',
  title: 'How much of your week goes into manual work?',
  description:
    'Move the sliders to match your team. We assume only part of repetitive work can be automated, so treat the result as a floor rather than a promise.',
  assumptions: {
    // Share of the repetitive time you enter that we would expect to automate.
    automatableShare: 0.7,
    // Paid working weeks per year (allows for holidays and leave).
    workingWeeks: 46,
    // Full-time hours per week, used to express savings as "weeks freed".
    hoursPerWeek: 40,
    // Length of a working day, used to express savings in days.
    hoursPerDay: 8,
  },
  defaults: { people: 3, hours: 8 },
  limits: {
    people: { min: 1, max: 25, step: 1 },
    hours: { min: 1, max: 40, step: 1 },
  },
};

/**
 * FAQ
 * ---------------------------------------------------------------------------
 * Rendered as an accordion in the page AND used to generate FAQPage
 * structured data at build time (see plugins/seo.js), so edit it here only.
 */
export const faqs = [
  {
    question: 'Who owns the automations you build?',
    answer:
      'You do. Code, workflow definitions, documentation and credentials are handed over as part of the project, not held on our platform. If you ever want to take it in-house or to another partner, nothing is locked away.',
  },
  {
    question: 'Do we need to replace the tools we already use?',
    answer:
      'No. We deliberately build on top of the systems you already run — your CRM, finance stack, helpdesk and spreadsheets. The goal is to connect what you have, not to trigger a migration project.',
  },
  {
    question: 'How do you handle our data and security?',
    answer:
      'We work with least-privilege access, keep secrets in a managed store rather than in code or chat, and avoid copying your data into third-party systems it does not need to be in. Where an integration touches sensitive records, we document exactly which fields are read and written.',
  },
  {
    question: 'What does a project cost?',
    answer:
      'Every engagement is quoted as a fixed price against a fixed scope, agreed after the discovery session and before any build work starts. You will not receive an open-ended hourly estimate from us.',
  },
  {
    question: 'How long before we see something working?',
    answer:
      'Most projects reach a useful first version within two to four weeks of kickoff. We build in short cycles against your real data so you can judge the output early, rather than waiting for a single large delivery at the end.',
  },
  {
    question: 'What happens when a process changes or something breaks?',
    answer:
      'Automations are software and need maintenance, so we offer ongoing support: monitoring, fixes and incremental changes as your processes evolve. You can also take the handover documentation and run it yourself — both are fine.',
  },
  {
    question: 'Will this replace our team?',
    answer:
      'In our experience it replaces the work, not the people. The usual outcome is that the same team handles more volume with fewer errors, and spends its time on the judgement calls that were previously squeezed out by admin.',
  },
];

export const contact = {
  heading: 'Tell us what your team does manually.',
  description:
    'Send over the process that costs you the most time. We will reply with an honest read on whether it is worth automating, and what it would take.',
  responseTime: 'We reply within one business day.',
  /**
   * Optional: set VITE_CONTACT_ENDPOINT in a .env file to POST form
   * submissions to a form service. With no endpoint set, the form opens the
   * visitor's mail client instead — which needs no backend at all.
   */
};

export const footer = {
  blurb:
    'BraveEdge Technologies is an automation studio building workflow automation, AI assistants and internal tools for growing teams.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Workflow automation', href: '#services' },
        { label: 'AI assistants', href: '#services' },
        { label: 'Systems integration', href: '#services' },
        { label: 'Internal tools', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'How we work', href: '#process' },
        { label: 'Why us', href: '#why' },
        { label: 'Products', href: '#products' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
};
