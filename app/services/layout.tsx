import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Autohaus Klaus - Mercedes Specialist',
  description: 'Expert Mercedes-Benz service and repair in Redwood City. Specializing in maintenance, diagnostics, and repairs for all Mercedes models. Schedule your service today.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 