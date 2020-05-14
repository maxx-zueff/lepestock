import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Container from 'react-bootstrap/Container'
import useWindowSize from '../hooks/useWindowSize'
import getBreackpoint from '../lib/getBreackpoint'


export const siteTitle = 'Лепесток';

export default function Layout({ children }) {
  const width = useWindowSize();
  const point = getBreackpoint(width);

  return (<div>
	<Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>
      	<div><span>Window size: {width}</span></div>
        <div><span>Window point: {point}</span></div>
	    {children}
      </main>

  </div>);


}
