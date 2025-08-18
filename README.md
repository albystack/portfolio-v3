# Alberto Rescigno Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS.

## Features

- **Clean Design**: Modern, professional UI with smooth animations
- **Responsive**: Works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes
- **Project Showcase**: Display your projects with custom image sizing
- **Document Downloads**: Easy access to CV, cover letter, and other documents
- **Contact Section**: Multiple ways to get in touch (LinkedIn, WhatsApp, GitHub)

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Iconify
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio-v3/
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── data/         # Project data and content
│   ├── lib/          # Utility functions
│   └── email/        # Email templates
├── public/            # Static assets
└── tailwind.config.ts # TailwindCSS configuration
```

## Customization

### Projects
Edit `src/data/data.ts` to:
- Add/remove projects
- Customize project descriptions
- Set custom image dimensions for each project
- Update links and technologies

### Documents
Update `src/components/documents.tsx` to:
- Change document titles
- Update download URLs
- Add/remove documents

### Contact Information
Modify `src/components/contact.tsx` to:
- Update email address
- Change social media links
- Customize contact methods

## Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically build and deploy on push

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

If you have any questions or want to use this template, feel free to reach out!
