import React from 'react';

const SkillsSection = () => {
  // Example skills data - replace with your actual skills, proficiency levels, and icon classes
  // Proficiency is a percentage from 0 to 100
  // Icons are from Bootstrap Icons (e.g., 'bi bi-filetype-html')
  const skillsData = {
    frontend: [
      { name: 'HTML', level: 95, icon: 'bi bi-filetype-html' },
      { name: 'CSS & SASS', level: 90, icon: 'bi bi-filetype-css' }, // or 'bi bi-filetype-sass'
      { name: 'JavaScript (ES6+)', level: 85, icon: 'bi bi-filetype-js' }, // or 'bi bi-braces'
      { name: 'React', level: 80, icon: 'bi bi-bootstrap-reboot' }, // Placeholder, find a better React icon or use SVG
      { name: 'Next.js', level: 75, icon: 'bi bi-filetype-jsx' }, // Placeholder
      { name: 'Bootstrap', level: 90, icon: 'bi bi-bootstrap-fill' },
      { name: 'Tailwind CSS', level: 70, icon: 'bi bi-wind' }, // Placeholder
    ],
    backend: [
      { name: 'Node.js', level: 70, icon: 'bi bi-hdd-stack' }, // Placeholder, Node has its own logo
      { name: 'Express.js', level: 65, icon: 'bi bi-lightning-fill' }, // Placeholder
      // { name: 'Python', level: 60, icon: 'bi bi-filetype-py' },
    ],
    databases: [
      { name: 'MongoDB', level: 60, icon: 'bi bi-database-fill-gear' }, // Placeholder
      { name: 'PostgreSQL', level: 55, icon: 'bi bi-database-fill-up' }, // Placeholder
    ],
    tools: [
      { name: 'Git & GitHub', level: 85, icon: 'bi bi-git' }, // or 'bi bi-github'
      { name: 'Docker', level: 50, icon: 'bi bi-box-seam' }, // Placeholder
      { name: 'VS Code', level: 95, icon: 'bi bi-code-slash' },
    ],
    // other: [
    //   { name: 'RESTful APIs', level: 75, icon: 'bi bi-hdd-network-fill' },
    //   { name: 'Agile Development', level: 80, icon: 'bi bi-people-fill' },
    // ]
  };

  // Define the structure for the 3-column layout
  const skillColumns = [
    { title: 'Frontend', categories: ['frontend'] },
    { title: 'Backend & Databases', categories: ['backend', 'databases'] },
    { title: 'Tools & Others', categories: ['tools', 'other'] } // Assuming 'other' might go here or be its own
  ];


  return (
    <section id="skills" className="py-3 bg-body-tertiary" style={{ color: 'var(--foreground)' }}> {/* Added bg-body-tertiary and increased padding */}
      <div className="container">
        {/* Section Title and Introduction */}
        <div className="row">
          <div className="col-12 text-center mb-2"> {/* Increased bottom margin */}
            <h2 className="display-5 fw-bold mb-1">Skills</h2> {/* Adjusted bottom margin */}
            <p className="fs-5" style={{ color: 'var(--foreground-muted)' }}>
              Here are some of the technologies and tools I work with:
            </p>
          </div>
        </div>

        {/* Skills 3-Column Grid */}
        <div className="row g-4 justify-content-center">
          {skillColumns.map(column => {
            // Check if there are any skills in the categories for this column
            const hasSkillsInColumn = column.categories.some(catKey => skillsData[catKey] && skillsData[catKey].length > 0);
            if (!hasSkillsInColumn) return null; // Don't render column if no skills

            return (
              <div key={column.title} className="col-12 col-md-6 col-lg-4">
                <div className="text-start p-3 rounded h-100 shadow-sm" style={{ border: `1px solid var(--foreground-muted)`, backgroundColor: 'var(--background)' }}> {/* Added shadow-sm, p-3, and explicit background for card */}
                  <h3 className="h5 fw-semibold mb-3 text-center" style={{ color: 'var(--foreground)' }}>
                    {column.title}
                  </h3>
                  {column.categories.map(categoryKey => (
                    skillsData[categoryKey] && skillsData[categoryKey].length > 0 && (
                      <div key={categoryKey} className="mb-4">
                        {/* Optional: Sub-category title if multiple categories in one column and you want to distinguish them */}
                        {column.categories.length > 1 && (
                           <h4 className="h6 fw-medium mb-3 text-capitalize" style={{ color: 'var(--foreground-muted)'}}>{categoryKey.replace(/([A-Z])/g, ' $1')}</h4>
                        )}
                        {skillsData[categoryKey].map(skill => (
                          <div key={skill.name} className="mb-3">
                            <div className="d-flex align-items-center mb-1">
                              {skill.icon && <i className={`${skill.icon} me-2 fs-5`} style={{ color: 'var(--bs-primary)' }}></i>}
                              <span className="fw-medium flex-grow-1 small" style={{ color: 'var(--foreground)' }}>
                                {skill.name}
                              </span>
                              <span className="small" style={{ color: 'var(--foreground-muted)' }}>{skill.level}%</span>
                            </div>
                            <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                              <div className="progress-bar" role="progressbar" style={{ width: `${skill.level}%`, backgroundColor: 'var(--bs-primary)' }} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;