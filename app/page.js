
import Head from 'next/head';
import HeroSection from '@/app/components/herosection';
import Header from '@/app/components/Header'; 

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Martins Igbadia - Web Developer Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Martins Igbadia, a passionate web developer." />
        <link rel="icon" href="/favicon.ico" /> {/* Make sure you have a favicon */}
      </Head>

      <Header /> {/* Add the Header component here */}

      {/* Add some top padding to the main content to prevent it from being hidden by the fixed-top navbar */}
      <main style={{ paddingTop: '60px' }}> {/* Adjust 70px based on your navbar's height */}
        <HeroSection />

      </main>

      {/* <Footer /> */}
    </>
  );
}
