# Data Scientist Portfolio

A modern, high-performance portfolio website built to showcase data science projects, analytics capabilities, and technical skills. Designed with a minimalistic dark aesthetic using Next.js and Tailwind CSS.

![Portfolio Preview](./public/preview.png)
*(Note: Add a screenshot of your portfolio here as `preview.png` in the public folder)*

## 🚀 Features

- **Data-Centric Design**: Tailored for presenting data science work, ML models, and analytics dashboards.
- **Modern UI/UX**: Built with **Next.js 15+** and **Tailwind CSS 4** for a fast, responsive experience.
- **Smooth Animations**: Powered by **Framer Motion** for engaging component transitions.
- **Clean Architecture**: Modular component-based structure using React Server Components by default.
- **Performance Optimized**: Excellent Core Web Vitals and SEO readiness.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marciano-o/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```bash
portfolio/
├── app/
│   ├── components/    # Reusable UI components (Hero, Skills, Projects, etc.)
│   ├── lib/           # Utility functions
│   ├── layout.tsx     # Root layout (Metadata, Fonts, Navbar/Footer)
│   └── page.tsx       # Main landing page assembly
├── public/            # Static assets
└── tailwind.config.ts # Design system configuration
```

## 🎨 Customization

- **Content**: Update texts in `app/components/*.tsx` files.
- **Colors**: Modify CSS variables in `app/globals.css`.
- **Projects**: Edit the `projects` array in `app/components/Projects.tsx`.
- **Skills**: Update the `skills` object in `app/components/Skills.tsx`.

## 📬 Contact

**Daniel M**  
[LinkedIn](https://www.linkedin.com/in/daniel-m-89a539352/) • [GitHub](https://github.com/marciano-o) • [Email](mailto:daniel.mcnfg@gmail.com)
