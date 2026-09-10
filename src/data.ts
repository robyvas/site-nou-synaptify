import { FAQItem, PricingPlan, ProductTab, TestimonialItem, VerticalCard } from './types';

export const LOGO_URL = 'https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg?width=1810&height=335';

export const PARTNER_LOGOS = [
  { id: '1', name: 'Partner 1', url: 'https://framerusercontent.com/images/eTOvR4ZuGGQENAaE3zs5ZqZxtks.png?width=600&height=192' },
  { id: '2', name: 'Partner 2', url: 'https://framerusercontent.com/images/QvWxQDGRcrTJWGZp7OsUlI4k6w0.png?width=600&height=192' },
  { id: '3', name: 'Partner 3', url: 'https://framerusercontent.com/images/ZrGThO8Gp1y7Hoki1Dmhr0Flw6U.png?width=600&height=192' },
  { id: '4', name: 'Partner 4', url: 'https://framerusercontent.com/images/dTohPdySQSHpfv4TUIdRVoRdHBw.png?width=600&height=192' },
  { id: '5', name: 'Partner 5', url: 'https://framerusercontent.com/images/WzG2yfwdF7vdqrjvFu4j7tyJ3Gs.png?width=600&height=192' },
  { id: '6', name: 'Partner 6', url: 'https://framerusercontent.com/images/FkPCvWLJEloyx0AnJETPfPfMx4.png?width=600&height=192' },
];

export const INTEGRATION_APPS = [
  { id: 'slack', name: 'Slack', icon: 'https://framerusercontent.com/images/DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg?width=40&height=40' },
  { id: 'notion', name: 'Notion', icon: 'https://framerusercontent.com/images/aap1xSJQbafVrLaeVhlLfdpwNZg.svg?width=60&height=60' },
  { id: 'jira', name: 'Jira', icon: 'https://framerusercontent.com/images/FQP31xwbbI4n1vs2r24mfuxRGQI.svg?width=49&height=40' },
  { id: 'google-drive', name: 'Google Drive', icon: 'https://framerusercontent.com/images/EvRpOn9wuYvQYZzCfYwtnS65jRE.svg?width=40&height=40' },
  { id: 'figma', name: 'Figma', icon: 'https://framerusercontent.com/images/hdYPy2J7QbpyCYtFC4VUGW13ytI.svg?width=51&height=40' },
  { id: 'confluence', name: 'Confluence', icon: 'https://framerusercontent.com/images/QaeKao8eibxNDl43Zp0JVaFeI.svg?width=49&height=48' },
];

export const PRODUCT_TABS: ProductTab[] = [
  {
    id: 'automation',
    label: 'Automation',
    title: 'Process Automation',
    description: 'Streamline complex workflows with intelligent AI agents that enhance efficiency, accuracy, and speed across your enterprise.',
    points: [
      'Automate Tasks — Reduce manual effort',
      'Optimize Workflows — Boost productivity',
      'Stay Compliant — Ensure accuracy',
    ],
    image: 'https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png?width=1924&height=1237',
  },
  {
    id: 'banking',
    label: 'Banking',
    title: 'Financial Intelligence',
    description: 'Deploy real-time autonomous financial verification, risk modeling, and seamless transaction routing with banking-grade compliance.',
    points: [
      'Fraud Detection — Autonomous real-time audits',
      'Instant Ledger Sync — Multi-currency resolution',
      'Zero-latency Audits — Regulatory reporting automated',
    ],
    image: 'https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png?width=1924&height=1237',
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    title: 'Talent Acceleration',
    description: 'Screen candidates, coordinate high-touch interview pipelines, and auto-evaluate skill fit with continuous learning agents.',
    points: [
      'Smart Candidate Sourcing — Active talent mapping',
      'Automated Screenings — Objective evaluation matrix',
      'Fast-track Onboarding — Automated verification',
    ],
    image: 'https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png?width=1924&height=1237',
  },
];

export const VERTICAL_CARDS: VerticalCard[] = [
  {
    title: 'Healthcare',
    description: 'Boost sales with smart automation tools.',
    iconUrl: 'https://framerusercontent.com/images/UhzKcwOlsFcygmiTZBSV1TlJWI.svg?width=24&height=24',
  },
  {
    title: 'Marketing',
    description: 'Optimize campaigns with intelligent automation.',
    iconUrl: 'https://framerusercontent.com/images/xjQCmHyjo6JeuuaTw7eNj6Rnz0.svg?width=24&height=24',
  },
  {
    title: 'Ecommerce',
    description: 'Accelerate coding and improve complex workflows.',
    iconUrl: 'https://framerusercontent.com/images/g03jLOH8iFVEwvrXTl5O92yNWI.svg?width=24&height=24',
  },
  {
    title: 'Development',
    description: 'Improve patient care with intelligent automation.',
    iconUrl: 'https://framerusercontent.com/images/s0leRkmxKn90KJPse58Uwi0gmwA.svg?width=24&height=24',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Daniel Reyes',
    role: 'Chief Operations Officer',
    company: 'LuminaTech',
    quote:
      'Cosmoq is the top-performing AI Agent we’ve seen to date — resolving complex queries faster and more accurately than any human team could. It has not only enhanced our support operations but also improved client satisfaction across the board.',
    avatarUrl: 'https://framerusercontent.com/images/BIY5osAhJGxk35JHUCh9nq0Wro.jpg?width=2304&height=3456',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'VP of Digital Transformation',
    company: 'Nexora',
    quote:
      'Cosmoq’s AI Agents have completely transformed our workflow efficiency. What once took hours now takes minutes. Their adaptability and precision make them the most capable AI solution we’ve ever implemented — truly redefining enterprise automation.',
    avatarUrl: 'https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg?width=3974&height=5000',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Head of Innovation',
    company: 'Altara Global',
    quote:
      'With Cosmoq’s AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched — it’s like having an expert team working 24/7 with consistency and accuracy. Cosmoq continues to push the boundaries.',
    avatarUrl: 'https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?width=4912&height=7360',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'sonic',
    name: 'Sonic',
    monthlyPrice: 49,
    yearlyPrice: 34,
    features: [
      'Access to core AI Agents',
      'Workflow automation for teams',
      'Basic integrations',
      'Standard reporting & analytics',
      'Email support',
      '5,000 AI actions per month',
    ],
    trustedCount: '300+ teams trusted this',
    bgGradientUrl: 'https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp?width=756&height=1274',
  },
  {
    id: 'supersonic',
    name: 'Supersonic',
    monthlyPrice: 99,
    yearlyPrice: 69,
    popular: true,
    features: [
      'Everything in Sonic Monthly',
      'Advanced AI Agents for workflows',
      'Priority integrations',
      'Enhanced dashboards',
      '24/7 support via chat',
      '20,000 AI actions per month',
    ],
    trustedCount: '250+ growing enterprises',
    bgGradientUrl: 'https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp?width=756&height=1274',
  },
  {
    id: 'hypersonic',
    name: 'HyperSonic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    isEnterprise: true,
    description: 'Unlimited automation with dedicated enterprise support.',
    features: [
      'Enterprise-grade AI Agent',
      'Full custom API access',
      'Unlimited workflows & automation',
    ],
    trustedCount: 'Custom tier for enterprise',
    bgGradientUrl: 'https://framerusercontent.com/images/K53jEm1inmwk6lcSyDVU5W7rvLM.webp?width=756&height=1050',
  },
];

export const FAQ_ITEMS_COL1: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is COSMOQ?',
    answer: 'COSMOQ is a next-generation AI agent platform and Framer ecosystem template engineered for startups, enterprises, and high-growth teams to launch, orchestrate, and scale autonomous AI workflows.',
  },
  {
    id: 'faq-2',
    question: 'How are AI Agents different from automation tools?',
    answer: 'Traditional automation tools follow static if-this-then-that scripts. COSMOQ AI Agents perceive context, reason dynamically across complex inputs, make informed decisions, and continuously adapt to evolving enterprise processes.',
  },
  {
    id: 'faq-3',
    question: 'Can COSMOQ integrate with our existing systems?',
    answer: 'Yes! COSMOQ provides bi-directional pre-built connectors and custom APIs for Slack, Jira, SharePoint, SAP, Salesforce, Google Workspace, GitHub, Notion, and databases.',
  },
  {
    id: 'faq-4',
    question: 'Is COSMOQ secure for enterprise use?',
    answer: 'Absolutely. We enforce end-to-end encryption, multi-layered role-based access control (RBAC), SOC2 and GDPR compliance protocols, and strict zero-data-retention options for sensitive enterprise data.',
  },
];

export const FAQ_ITEMS_COL2: FAQItem[] = [
  {
    id: 'faq-5',
    question: 'How quickly can COSMOQ be implemented?',
    answer: 'You can deploy out-of-the-box pre-trained agents in under 15 minutes. For deep enterprise custom integrations and legacy ERP connectors, implementation typically takes 1-3 business days.',
  },
  {
    id: 'faq-6',
    question: 'Can AI Agents replace human employees?',
    answer: 'COSMOQ agents are designed for human-in-the-loop acceleration. They eliminate repetitive, tedious tasks, freeing your team to focus on strategic, creative, and high-impact decision-making.',
  },
  {
    id: 'faq-7',
    question: 'How does COSMOQ improve customer service?',
    answer: 'Our agents resolve complex customer queries 24/7 with zero latency, native multilingual support, high accuracy, and context-aware escalation paths to human specialists when needed.',
  },
  {
    id: 'faq-8',
    question: 'Is COSMOQ scalable for global operations?',
    answer: 'Yes, our distributed edge infrastructure automatically scales to handle millions of simultaneous actions, localized language nuances, and high-throughput enterprise workloads worldwide.',
  },
];
