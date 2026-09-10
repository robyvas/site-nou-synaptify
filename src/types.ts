export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  isEnterprise?: boolean;
  description?: string;
  features: string[];
  trustedCount: string;
  bgGradientUrl: string;
}

export interface ProductTab {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export interface VerticalCard {
  title: string;
  description: string;
  iconUrl: string;
}
