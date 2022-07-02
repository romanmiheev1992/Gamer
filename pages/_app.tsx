import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/dist/shared/lib/head';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  const variants = {
    pageInitial: {
      opacity: 0,
     
    },
    pageAnimate: {
      opacity: 1,
    }
  }

  return  <>
            <Head>
              <title>Gamer</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
           
              <motion.div initial="pageInitial" animate="pageAnimate" variants={variants} key={router.route} exit={{ opacity: 0}}>
                <AnimatePresence>
                  <Component {...pageProps} />
                </AnimatePresence>
              </motion.div>
           
            
          </>
  
}

export default MyApp
