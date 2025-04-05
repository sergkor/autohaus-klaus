import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Autohaus Klaus - Mercedes Specialist',
  description: 'See what our customers say about Autohaus Klaus, your trusted Mercedes-Benz specialist in Redwood City. Read reviews about our quality service and expert care.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 