'use client'; // If you plan to add any client-side interactivity later (like active link styling)

import Link from 'next/link';
import { useEffect } from 'react'; // For Bootstrap JS components if needed

const Header = () => {
  // Effect to ensure Bootstrap JS is loaded if you use components like dropdowns or collapse
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand text-danger fw-bold rounded-circle px-3 py-2" style={{ backgroundColor: 'white' }} >
            MI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link href="#about" className="nav-link">About Me</Link></li>
              <li className="nav-item"><Link href="#skills" className="nav-link">Skills</Link></li>
              <li className="nav-item"><Link href="#projects" className="nav-link">Projects/Work</Link></li>
              <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;