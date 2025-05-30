import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-dark text-light py-5" style={{ 
    background: 'linear-gradient(to right, #1f2937, #4c1d95, #1f2937)' 
    }}>
      <div className="container px-4">
        <div className="row align-items-center justify-content-between gy-5">
          
          {/* Text Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-tight mb-3">
              Designing The Future,, <br className="d-none d-lg-inline" />
              One Line of Code at a Time.
            </h1>
            <p className="fs-5 text-white-50 mb-4">
              Hi, I&apos;m Martins, a results-driven Web Developer specializing in crafting elegant, high-performance web solutions. With a keen eye for design and a passion for clean, scalable code, I transform complex problems into seamless user experiences.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <a
                href="/your-resume.pdf" 
                download="YourName_Resume.pdf" 
                className="btn btn-light btn-lg px-4 me-sm-3 fw-bold"
              >
                Download Resume
              </a>
              <Link
                href="#contact" 
                className="btn btn-outline-light btn-lg px-4"
                passHref
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className="col-lg-5 col-md-8 col-sm-10 mx-auto mx-lg-0">
            <div 
              className="rounded-circle overflow-hidden shadow-lg mx-auto" 
              style={{ 
                width: 'clamp(250px, 70vw, 400px)', 
                height: 'clamp(250px, 70vw, 400px)', 
                border: '4px solid rgb(209, 204, 220)' 
              }}
            >
              <Image
                src="/profile-photo.jpg" 
                alt="Your Name - Professional Headshot"
                width={400} 
                height={400} 
                layout="responsive" 
                objectFit="cover"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;