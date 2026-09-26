# Exponentials AI — Web3 Membership & AI Accelerator Platform

[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Reactstrap](https://img.shields.io/badge/Reactstrap-8.7.1-primary)](https://reactstrap.github.io/)
[![SASS](https://img.shields.io/badge/SASS-SCSS-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Exponentials AI** is a modern Web3 platform and membership portal empowering entrepreneurs and businesses with cutting-edge artificial intelligence training, automation tools, and strategic growth networks. The platform introduces tiered **Gold & Silver Membership NFTs**, granting token-gated access to an intensive Business Mastermind program, AI expert bots, executive mastermind calls, and in-person global networking conferences.

---

## 📌 Project Overview

Exponentials AI connects high-impact business strategy with artificial intelligence automation and blockchain-verified digital memberships. Built with a modular React architecture and custom SCSS styling, the platform delivers an intuitive experience for exploring membership utilities, joining the allowlist, tracking the ecosystem roadmap, and interacting with community resources.

---

## ✨ Key Features

- **Hero & Value Proposition**:
  - High-impact promotional hero section introducing the Exponentials AI mission and membership model.
  - Direct call-to-action for allowlist registration and upcoming pass minting.

- **Tiered Membership NFTs (Utility Showcase)**:
  - 🥈 **Silver Pass**:
    - Exclusive access to the 12-week Business Mastermind training program covering automation, AI, and traffic generation.
    - Verified "Silver Member" Discord role with 1-year access to private channels and AI-trained expert bots.
    - Monthly live strategy calls with industry experts for one year.
    - Exclusive mystery drops for loyal holders.
    - Complimentary access with a guest to two in-real-life (IRL) conferences over 3 years.
  - 🥇 **Gold Pass**:
    - Comprehensive 1-year Business Mastermind program featuring weekly coaching calls.
    - Private 1-on-1 strategy and consulting session with the founder.
    - VIP access for two to all IRL conferences over 3 years.
    - Verified "Gold Member" Discord role with unrestricted AI bot access.
    - Priority allowlist access for all future ecosystem drops and surprise utilities.
  - 🌟 **Bonus Experience**:
    - Access to exclusive executive afterparties and networking sessions at IRL conferences.

- **Structured Onboarding ("How to Join")**:
  - Clear 4-step onboarding pipeline: Allowlist Registration &rarr; Community Discord & Twitter Engagement &rarr; Launch-Day Minting &rarr; Exponential Scaling.

- **Interactive Project Roadmap**:
  - Step-by-step milestone tracker covering the Studio Pass launch, mystery drops, viral/PR campaigns, backoffice rollout, strategy game release, AI-assisted art drop, super conferences, and publication releases.

- **Interactive FAQ Accordion**:
  - Toggleable Q&A component addressing key questions regarding launch strategy, public vs. private minting, and token-gated membership utilities.

- **Digital Asset Carousel**:
  - Multi-item auto-playing carousel powered by `react-elastic-carousel` showcasing digital passes and collection artwork with responsive breakpoints.

- **Responsive Navigation & Footer**:
  - Mobile-responsive collapsible navbar with smooth anchor scrolling across sections (`#about`, `#benefits`, `#roadmap`, `#faq`).
  - Polished footer with community links, contact details, and a back-to-top shortcut.

---

## 🛠️ Tech Stack & Libraries

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 17](https://reactjs.org/), [React DOM 17](https://reactjs.org/) |
| **Routing & Navigation** | [React Router v5](https://v5.reactrouter.com/), [React Scroll](https://www.npmjs.com/package/react-scroll) |
| **UI Components & Layout**| [Bootstrap 4](https://getbootstrap.com/), [Reactstrap 8](https://reactstrap.github.io/) |
| **Styling & Preprocessing**| [Sass / SCSS](https://sass-lang.com/), custom theme variables and mixins |
| **Animations & Effects** | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/), [tsParticles](https://particles.js.org/) |
| **Interactive Widgets** | [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel), [react-icons](https://react-icons.github.io/react-icons/) |
| **Build & Tooling** | [Create React App (`react-scripts`)](https://create-react-app.dev/), [Gulp 4](https://gulpjs.com/), AWS CodeBuild (`buildspec.yml`) |

---

## 📂 Project Structure

```text
Exponent_AI/
├── public/                     # Static HTML template, icons, manifest
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/                 # Fonts, SCSS stylesheets, images, icons
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── img/expo-images/
│   │   └── scss/exponentials/
│   ├── components/             # Reusable UI components
│   │   ├── Footer/             # Footer with navigation and contact links
│   │   └── Navbars/            # Responsive header navigation
│   ├── helper/                 # Helper utilities (anchor scrolling)
│   ├── routes/                 # Application routing configuration
│   ├── views/home/             # Home page sections
│   │   ├── About.js            # About section & onboarding steps
│   │   ├── Banner.js           # Hero banner & allowlist CTA
│   │   ├── Benefits.js         # Silver & Gold pass utilities
│   │   ├── FAQ.js              # Interactive FAQ accordion
│   │   ├── NFTcollection.js    # Carousel asset showcase
│   │   ├── Roadmap.js          # Project timeline & milestones
│   │   └── index.js            # Home page entry view
│   └── index.js                # React application entry point
├── buildspec.yml               # AWS CodeBuild configuration
├── gulpfile.js                 # Gulp build script for production licenses
├── jsconfig.json               # JavaScript compiler options
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v14.x or higher (recommended: Node 14–16 for Create React App 4 / node-sass 4 compatibility)
- **npm**: v6.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anitha-software-dev/exponentials-ai.git
   cd exponentials-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Available Scripts

- **`npm start`**: Runs the app in development mode at `http://localhost:3000`.
- **`npm run build`**: Builds the production bundle to the `build/` folder and prepends license headers via Gulp.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run compile-sass`**: Compiles custom SCSS stylesheets to CSS.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).