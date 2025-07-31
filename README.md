# 🚀 Moch Yunus - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI. Features smooth animations, dark/light theme toggle, and an elegant design showcasing my skills and projects.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8)

## ✨ Features

- **🎨 Modern Design** - Clean, professional layout with stunning visual effects
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **🌓 Theme Toggle** - Dark/Light mode with smooth transitions
- **⚡ Smooth Animations** - Framer Motion powered animations and transitions
- **🎯 Interactive Components** - Engaging UI elements and hover effects
- **📈 Performance Optimized** - Built with Next.js App Router for optimal performance
- **♿ Accessible** - WCAG compliant with semantic HTML and proper ARIA labels
- **🚀 Fast Loading** - Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment:** Ready for [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mchyns/nextjs-portfolio.git
   cd nextjs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📂 Project Structure

```
nextjs-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # ShadCN UI components
│   │   ├── header.tsx     # Navigation header
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── components.json         # ShadCN UI config
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Personalizing Content

1. **Update personal information** in the components:
   - `src/components/hero-section.tsx` - Name, roles, social links
   - `src/components/about-section.tsx` - Bio, skills, experience
   - `src/components/projects-section.tsx` - Your projects
   - `src/components/contact-section.tsx` - Contact information

2. **Modify theme colors** in `tailwind.config.js` or use the ShadCN theme generator

3. **Add your projects** by updating the projects array in `projects-section.tsx`

4. **Update metadata** in `src/app/layout.tsx` for SEO

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/header.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Mobile (< 768px)**: Optimized for touch interactions
- **Tablet (768px - 1024px)**: Adapted layouts and spacing
- **Desktop (> 1024px)**: Full feature experience
- **Large screens (> 1440px)**: Enhanced visual elements

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Deploy with one click**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mchyns/nextjs-portfolio)

### Other Deployment Options

- **Netlify**: Connect your GitHub repository
- **Railway**: Deploy with their GitHub integration
- **Static Export**: Run `npm run build` and deploy the `out/` folder

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Me

**Moch Yunus** - Full Stack Developer

- 🌐 **Portfolio**: [Your Website](https://your-website.com)
- 📧 **Email**: moch.yunus.am@gmail.com
- 💼 **GitHub**: [@mchyns](https://github.com/mchyns)
- 📱 **Instagram**: [@mchynss](https://instagram.com/mchynss)
- 💬 **Telegram**: [@wleooowleoooooo](https://t.me/wleooowleoooooo)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon library

---

**⭐ If you found this project helpful, please give it a star!**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
