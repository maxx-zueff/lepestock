import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Cart from './cart'
import Container from 'react-bootstrap/Container'
import useWindowSize from '../hooks/useWindowSize'
import getBreackpoint from '../lib/getBreackpoint'
import { useState } from "react";


export const siteTitle = 'Лепесток';

export default function Layout({ children }) {
  const width = useWindowSize();
  const point = getBreackpoint(width);
  const [toggle, setToggle] = useState(false);

  const updateToggle = function (value) {
    setToggle(value);    
  }


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
      <Navbar toggle={toggle} updateToggle={updateToggle}/>
      <main>
	    {children}
      </main>
      <Cart toggle={toggle} updateToggle={updateToggle}/>
  </div>);


}
