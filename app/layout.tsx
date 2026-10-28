import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Apex Tip — Live-Stream Tipping for Indian Creators | UPI & OBS Alerts',
  description:
    'Turn every stream into real ₹. Direct Indian UPI & card tips, instant text-to-speech shoutouts, OBS overlay integration, and real-time payout telemetry. Zero follower minimum.',
  keywords: [
    'Apex Tip',
    'Streamer tipping India',
    'UPI stream alerts',
    'OBS tip alerts',
    'Text to speech stream tips',
    'Live streaming payouts India',
    'YouTube streamer tips UPI',
  ],
  authors: [{ name: 'Apex Tip Engineering' }],
  openGraph: {
    title: 'Apex Tip — Hype in. Rupees out.',
    description:
      'Live-stream tipping platform for Indian creators. One link, one QR code. Instant text-to-speech, OBS overlay, and real-time payout dashboard.',
    url: 'https://apextip.live',
    siteName: 'Apex Tip',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Tip — Live-Stream Tipping for Indian Creators',
    description:
      'Hype in. Rupees out. The high-performance tipping engine for Indian live-streamers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-black text-neutral-100 font-mono flex flex-col selection:bg-white selection:text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
