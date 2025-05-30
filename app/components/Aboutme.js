import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="fs-5 mb-4" style={{ color: 'var(--foreground-muted)' }}>
              Hello! I&apos;m Martins Igbadia, a passionate and dedicated web developer with a knack for creating dynamic and user-friendly web applications. My journey into web development started with a fascination for how websites could connect people and ideas across the globe.
            </p>
            <p className="fs-5 mb-4" style={{ color: 'var(--foreground-muted)' }}>
              Over the years, I&apos;ve honed my skills in various technologies, including React, Next.js, Node.js, and more. I thrive on tackling challenging problems and continuously learning new technologies to stay at the forefront of web development. My goal is to build applications that are not only functional but also provide an exceptional user experience.
            </p>
            <p className="fs-5" style={{ color: 'var(--foreground-muted)' }}>
              When I&apos;m not coding, I enjoy exploring new tech blogs, contributing to open-source projects, and perhaps playing a bit of chess. I believe in the power of collaboration and am always excited to work on projects that make a positive impact.
            </p>
          </div>
        </div>
        {/* Optional: You can add more content here, like a sub-section for your journey or philosophy */}
        {/* <div className="row mt-5 justify-content-center">
          <div className="col-md-5">
            <h4 className="fw-semibold mb-3">My Journey</h4>
            <p style={{ color: 'var(--foreground-muted)' }}>Placeholder for more details about your journey into web development.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;