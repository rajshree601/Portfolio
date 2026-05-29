# Sarada Prasanna Satapathy Portfolio

Production-ready React 18 executive portfolio website built with Vite, Tailwind CSS, Framer Motion, React Icons, and React Scroll. The project is configured for Azure Static Web Apps deployment with GitHub Actions CI/CD.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Azure Static Web Apps

Set the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`, then push to `main`. The workflow builds the Vite app and deploys the `dist` folder.

## Project Structure

```text
.
├── .github/workflows/azure-static-web-apps.yml
├── public
│   ├── Sarada_Prasanna_Satapathy_Profile.pdf
│   ├── favicon.svg
│   └── og-image.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── profile-portrait.svg
│   ├── components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data
│   │   └── portfolio.js
│   ├── hooks
│   │   ├── useCountUp.js
│   │   └── useTypingEffect.js
│   ├── main.jsx
│   └── styles
│       └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── staticwebapp.config.json
├── tailwind.config.js
└── vite.config.js
```
