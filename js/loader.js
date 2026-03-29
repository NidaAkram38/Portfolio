/* ================================================
   loader.js — Dynamically loads section HTML files
   into their placeholder <div> elements.
   ================================================ */

const sections = [
  { id: 'navbar-placeholder',         file: 'sections/navbar.html'         },
  { id: 'hero-placeholder',           file: 'sections/hero.html'           },
  { id: 'skills-placeholder',         file: 'sections/skills.html'         },
  { id: 'education-placeholder',      file: 'sections/education.html'      },
  { id: 'experience-placeholder',     file: 'sections/experience.html'     },
  { id: 'certifications-placeholder', file: 'sections/certifications.html' },
  { id: 'hobbies-placeholder',        file: 'sections/hobbies.html'        },
  { id: 'projects-placeholder',       file: 'sections/projects.html'       },
  { id: 'contact-placeholder',        file: 'sections/contact.html'        },
];

async function loadSection({ id, file }) {
  const placeholder = document.getElementById(id);
  if (!placeholder) return;
  try {
    const res  = await fetch(file);
    const html = await res.text();
    placeholder.innerHTML = html;
  } catch (err) {
    console.error(`Failed to load ${file}:`, err);
  }
}

/* Load all sections, then boot the rest of the JS */
Promise.all(sections.map(loadSection)).then(() => {
  // Dispatch a custom event so other scripts know the DOM is ready
  document.dispatchEvent(new Event('sectionsLoaded'));
});
