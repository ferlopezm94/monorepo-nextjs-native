import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react';

function HomePage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home | NextJS Starter</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Run NextJS applications with typescript, eslint, prettier and semantic release support.'
        />
        <meta name='keywords' content='nextjs, react, typescript' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:title' content='NextJS Starter' />
        <meta
          property='og:description'
          content='Run NextJS applications with typescript, eslint, prettier and semantic release support.'
        />
        <meta property='og:url' content='https://github.com/good-better/starter-nextjs' />
        <meta property='og:type' content='website' />
      </Head>

      <main className='w-full h-full flex justify-center items-center'>
        <div>
          <p className='text-black font-bold'>Welcome to your NextJS application!</p>
          <p className='text-black flex justify-around'>
            <FontAwesomeIcon icon={['fab', 'apple']} size='2x' />
            <FontAwesomeIcon icon='laptop-code' size='2x' />
            <FontAwesomeIcon icon='rocket' size='2x' />
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
