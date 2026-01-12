import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat, Palanquin } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const palanquin = Palanquin({
  variable: '--font-palanquin',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'MSNET — Transformation digitale, Cloud & Dev',
    template: '%s | MSNET',
  },
  description:
    'MSNET accompagne les organisations dans la transformation digitale : cloud souverain, développement sur‑mesure, formation et gouvernance.',
  applicationName: 'MSNET',
  keywords: [
    'MSNET',
    'Transformation digitale',
    'Cloud souverain',
    'Développement sur‑mesure',
    'Gouvernance',
    'Formation',
    'Mali',
    'Afrique',
    'ELIKIA',
    'SCREEN',
  ],
  authors: [{ name: 'MSNET' }],
  creator: 'MSNET',
  publisher: 'MSNET',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'MSNET — Transformation digitale, Cloud & Dev',
    description:
      'MSNET accompagne les organisations dans la transformation digitale : cloud souverain, développement sur‑mesure, formation et gouvernance.',
    siteName: 'MSNET',
  },
  twitter: {
    card: 'summary',
    title: 'MSNET — Transformation digitale, Cloud & Dev',
    description:
      'MSNET accompagne les organisations dans la transformation digitale : cloud souverain, développement sur‑mesure, formation et gouvernance.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${palanquin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
