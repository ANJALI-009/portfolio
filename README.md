# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my projects, skills, and experience.


## ✨ Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Project showcase with filtering options
- Contact form
- Interactive UI components
- Fast page loads with Next.js
- SEO optimized

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Deployment**: Vercel
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Styling**: Tailwind CSS, CSS Module

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies
   ```bash
   cd portfolio
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_EMAIL_SERVICE=your_service
NEXT_PUBLIC_EMAIL_TEMPLATE=your_template
NEXT_PUBLIC_EMAIL_USER_ID=your_user_id
```

### Images Configuration

The project uses Next.js Image Optimization. Remote images are configured in `next.config.js`:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'example.com',
    },
    // Add other domains as needed
  ],
}
```

## 📝 Project Structure

```
portfolio/
├── components/       # Reusable UI components
├── pages/            # Next.js pages
├── public/           # Static files
├── styles/           # Global styles
├── utils/            # Utility functions
└── next.config.js    # Next.js configuration
```

## 🔄 Deployment

This site is deployed on Vercel. Any push to the main branch will trigger a new deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



