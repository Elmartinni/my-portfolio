import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="fs-5 mb-4" style={{ color: 'var(--foreground-muted)' }}>
              I&apos;m always open to discussing new projects, opportunities, and collaborations. Feel free to reach out!
            </p>

            {/* Contact Information */}
            <div className="mb-4">
              <p className="lead fw-semibold mb-2">Email:</p>
              <p className="fs-5">
                <a href="mailto:your.email@example.com" style={{ color: 'var(--foreground)' }}>martinsigabadia@gmail.com</a> {/* Replace with your email */}
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-4">
              <p className="lead fw-semibold mb-2">Connect with me:</p>
              <div className="d-flex justify-content-center gap-3 fs-4">
                {/* Replace # with your actual profile URLs */}
                <Link href="https://www.linkedin.com/in/martinsigbadia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" style={{ color: 'var(--foreground)' }}>
                  <i className="bi bi-linkedin"></i> {/* Requires Bootstrap Icons */}
                </Link>
                <Link href="https://github.com/Elmartinni" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" style={{ color: 'var(--foreground)' }}>
                  <i className="bi bi-github"></i> {/* Requires Bootstrap Icons */}
                </Link>
                {/* Add other social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;