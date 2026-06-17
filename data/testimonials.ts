export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  service: string;
  source: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [];
