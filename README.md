# Alex Smith Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with Framer Motion
- 📊 AOS (Animate On Scroll) integration
- 🎯 React Router for navigation
- 🎪 Interactive portfolio gallery
- 📞 Contact form
- 🎨 Beautiful UI/UX

## Technologies Used

- React 18
- Vite
- React Router DOM
- Framer Motion
- AOS (Animate On Scroll)
- React Icons
- CSS3

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   ├── Resume.jsx      # Resume page
│   ├── Portfolio.jsx   # Portfolio page
│   ├── Services.jsx    # Services page
│   ├── Contact.jsx     # Contact page
│   └── PortfolioDetails.jsx # Portfolio details page
├── assets/             # Static assets
│   └── images/         # Image files
├── App.jsx             # Main App component
├── App.css             # Main styles
└── main.jsx            # Entry point
```

## Customization

### Personal Information

Update the following files to customize the portfolio with your information:

1. `src/components/Header.jsx` - Update name and social links
2. `src/pages/Home.jsx` - Update hero section and personal details
3. `src/pages/About.jsx` - Update about information
4. `src/pages/Resume.jsx` - Update resume details
5. `src/pages/Portfolio.jsx` - Update portfolio items
6. `src/pages/Services.jsx` - Update services
7. `src/pages/Contact.jsx` - Update contact information

### Styling

The main styles are in `src/App.css`. You can customize colors, fonts, and layout by modifying this file.

### Images

Replace the placeholder images in `src/assets/images/` with your own images.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspired by iPortfolio Bootstrap template
- Icons from React Icons and Bootstrap Icons
- Fonts from Google Fonts
