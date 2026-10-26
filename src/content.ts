/** Edit this file to personalize your website. Do not publish confidential employer information. */
export const profile = {
  name: 'Arsal Munir',
  initials: 'AM',
  title: 'Software Engineer',
  location: 'Germany',
  email: '', // Add the PERSONAL email you want public, e.g. 'hello@yourdomain.com'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle/'
  github: '', // e.g. 'https://github.com/your-username'
  resume: '', // e.g. '/resume.pdf' after adding public/resume.pdf
};

export const skillGroups = [
  { title: 'Backend & APIs', skills: ['C# / .NET', 'ASP.NET Core', 'Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Entity Framework'] },
  { title: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Material UI', 'AG Grid'] },
  { title: 'Cloud & Delivery', skills: ['Azure', 'Docker', 'CI/CD', 'Azure DevOps', 'SQL Server', 'PostgreSQL', 'Keycloak'] },
];

export const experience = [
  { role: 'Software Developer', company: 'Organic Services GmbH', period: '2026 — Present', summary: 'Working on Python-based geospatial and agricultural technology services, with a focus on API architecture, data models and integration workflows.', tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Docker'] },
  { role: 'Full-Stack Software Engineer', company: 'SupplyOn AG', period: 'Previously', summary: 'Built enterprise performance-management features, from .NET APIs and database services to interactive React interfaces, reporting and automated tests.', tags: ['C#', 'ASP.NET Core', 'React', 'Azure'] },
  { role: 'Earlier roles', company: 'Arbisoft & other teams', period: 'Earlier career', summary: 'Combined software delivery experience with project coordination and cross-functional communication.', tags: ['Software Delivery', 'Collaboration'] },
];

export const work = [
  { num: '01', category: 'ENTERPRISE SOFTWARE', title: 'Performance management systems', summary: 'KPI dashboards, configurable evaluation workflows, advanced data grids and reporting features built for complex enterprise requirements.', stack: 'ASP.NET Core · React · SQL Server', icon: 'chart' },
  { num: '02', category: 'GEOSPATIAL BACKEND', title: 'GIS API architecture', summary: 'Backend architecture and service-layer patterns for geospatial data flows, emphasizing clear schemas, maintainable domain models and APIs.', stack: 'Python · FastAPI · SQLAlchemy', icon: 'globe' },
  { num: '03', category: 'INTEGRATIONS', title: 'Parcel analysis workflows', summary: 'API and integration work involving parcel geometries, requests to external analysis services and asynchronous response workflows.', stack: 'REST APIs · GeoJSON · Docker', icon: 'layers' },
];
