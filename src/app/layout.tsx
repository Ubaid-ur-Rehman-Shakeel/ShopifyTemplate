import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

import { ensureStartsWith } from 'lib/utils';
import { Poppins, Roboto } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import Newsletter from '@/components/layout/newsletter';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
    twitter: {
      card: 'summary_large_image',
      creator: twitterCreator,
      site: twitterSite
    }
  })
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
});


export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
          <main>{children}</main>
          <Newsletter/>
          <div className='mt-[60vh] md:mt-[45vh]'>

          <Footer/>
          </div>
      </body>
    </html>
  );
}
