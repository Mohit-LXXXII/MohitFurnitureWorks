import Head from 'next/head'
import FloatingCallButton from '@/components/FloatingCallButton'
import SiteIntro from '@/components/SiteIntro'
import './globals.css'

export const metadata = {
  title: 'Mohit Furniture Works - Premium Quality Furniture',
  description: 'Discover premium quality furniture for every room. Custom woodwork, repairs, and expert craftsmanship at Mohit Furniture Works.',
  keywords: 'furniture, home decor, custom woodwork, furniture repair, quality furniture',
  author: 'Mohit Furniture Works',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SiteIntro />
        {children}
        <FloatingCallButton />
      </body>
    </html>
  )
}
