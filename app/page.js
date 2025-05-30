
import Head from 'next/head';
import HeroSection from '@/app/components/herosection';
import Header from '@/app/components/Header'; 
import AboutMe from '@/app/components/Aboutme';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Martins Igbadia - Web Developer Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Martins Igbadia, a passionate web developer." />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header /> 
      
      <main style={{ paddingTop: '60px' }}> 
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <AboutMe/>
      </main>

      {/* <Footer /> */}
    </>
  );
}
