export interface NavItem {
  label: string;
  href: string;
}

/** Main header navigation (keep short — premium headers stay calm) */
export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

/** Extended list used by the mobile menu */
export const mobileNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/process" },
      { label: "Results", href: "/results" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Get started",
    items: [
      { label: "Get a free quote", href: "/quote" },
      { label: "Book a callback", href: "/booking" },
      { label: "Contact us", href: "/contact" },
      { label: "Areas covered", href: "/areas" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/terms" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];
