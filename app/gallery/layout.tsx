import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Autohaus Klaus - Mercedes Specialist',
  description: 'View our gallery of Mercedes-Benz vehicles and services at Autohaus Klaus, your trusted Mercedes specialist in Redwood City.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 