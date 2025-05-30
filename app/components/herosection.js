import Image from 'next/image';
import Link from 'next/link';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const HeroSection = () => {
  return (
    <section className="bg-dark text-light py-5" style={{ 
      // A more complex gradient like the original Tailwind example might need custom CSS.
      // This is a simpler dark theme. For a gradient:
      // background: 'linear-gradient(to right, #1f2937, #4c1d95, #1f2937)' 
    }}>
      <div className="container px-4">
        <div className="row align-items-center justify-content-between gy-5">
          {/* Text Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-tight mb-3">
              Crafting Digital Excellence, <br className="d-none d-lg-inline" />
              One Line of Code at a Time.
            </h1>
            <p className="fs-5 text-white-50 mb-4">
              Hi, I&apos;m Martins Igbadia, a passionate Web Developer dedicated to building intuitive,
              performant, and visually stunning web experiences.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <a
                href="/your-resume.pdf" // Make sure this path is correct
                download="YourName_Resume.pdf" // Optional: specifies the download filename
                className="btn btn-light btn-lg px-4 me-sm-3 fw-bold"
              >
                Download Resume
              </a>
              <Link
                href="#contact" // This will scroll to an element with id="contact"
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
                width: 'clamp(250px, 70vw, 400px)', // Responsive width
                height: 'clamp(250px, 70vw, 400px)', // Responsive height
                border: '4px solidrgb(230, 226, 236)' // A purple-ish border like Bootstrap's purple
              }}
            >
              <Image
                src="/profile-photo.jpg" // Replace with your image path in the public folder
                alt="Your Name - Professional Headshot"
                width={400} // Base width, Next/Image will handle responsiveness
                height={400} // Base height
                layout="responsive" // 'responsive' or 'intrinsic' are good choices here
                objectFit="cover"
                priority // Good for LCP (Largest Contentful Paint)
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;