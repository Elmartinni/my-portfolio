import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Assuming you might want project images

const ProjectsSection = () => {
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One, highlighting its key features and purpose.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/images/project1.jpg', // Optional: Add image paths
      liveLink: '#', // Replace with actual link
      repoLink: '#' // Replace with actual link
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two, highlighting its key features and purpose.',
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
      imageUrl: '/images/project2.jpg', // Optional: Add image paths
      liveLink: '#', // Replace with actual link
      repoLink: '#' // Replace with actual link
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Projects</h2>
            <p className="fs-5 mb-5" style={{ color: 'var(--foreground-muted)' }}>
              Here are some of the projects I&apos;ve worked on:
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map(project => (
            <div key={project.id} className="col">
              <div className="card h-100 shadow-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--foreground-muted)' }}>
                {/* {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    className="card-img-top"
                  />
                )} */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text" style={{ color: 'var(--foreground-muted)' }}>{project.description}</p>
                  <div className="mt-auto"> {/* Push buttons to the bottom */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map(tech => (
                        <span key={tech} className="badge bg-secondary">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <Link href={project.liveLink} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                      <Link href={project.repoLink} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Code</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a link to your GitHub profile */}
        {/* <div className="row mt-5">
          <div className="col text-center">
            <Link href="#" className="btn btn-lg btn-outline-primary">View More Projects on GitHub</Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;