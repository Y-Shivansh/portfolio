# Shivansh Sharma Portfolio

A modern, responsive portfolio website built with React and Vite showcasing my skills as a Full Stack Developer.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with AOS (Animate On Scroll)
- 🎯 React Router for navigation
- 🎪 Interactive portfolio gallery
- 📞 Contact form with real-time validation
- � Certificates showcase section
- 💼 Professional services display
- 📄 Downloadable resume
- 🛠️ Tech stack visualization
- �🎨 Beautiful UI/UX with Bootstrap + Tailwind CSS
- ⚡ Loading screen with smooth transitions
- 📊 Typed.js integration for dynamic text

## Technologies Used

- React 19
- Vite 7.0
- React Router DOM
- Bootstrap 5.3.3
- Tailwind CSS 4.1
- AOS (Animate On Scroll)
- React Icons
- React Typed
- Framer Motion
- Swiper.js
- Bootstrap Icons
- Normalize.css
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

4. Open your browser and navigate to `http://localhost:5175`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer component
│   ├── TechStack.jsx   # Technology stack showcase
│   └── LoadingScreen.jsx # Loading screen component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with hero section
│   ├── About.jsx       # About page with personal info
│   ├── Resume.jsx      # Resume page with experience
│   ├── Portfolio.jsx   # Portfolio projects showcase
│   ├── Services.jsx    # Services offered
│   ├── Certificates.jsx # Certificates and achievements
│   └── Contact.jsx     # Contact page with form
├── assets/             # Static assets
│   ├── images/         # Profile and project images
│   ├── certificates/   # Certificate images
│   ├── Projects/       # Project screenshots
│   ├── Resume.pdf      # Downloadable resume
│   └── react.svg       # React logo
├── App.jsx             # Main App component with routing
├── App.css             # Main styles and animations
├── index.css           # Global styles
└── main.jsx            # Entry point with CSS imports
```

## Customization

### Personal Information

Update the following files to customize the portfolio with your information:

1. `src/components/Header.jsx` - Update name and navigation links
2. `src/pages/Home.jsx` - Update hero section, name, and typed text animations
3. `src/pages/About.jsx` - Update personal information, contact details, and bio
4. `src/pages/Resume.jsx` - Update work experience, education, and skills
5. `src/pages/Portfolio.jsx` - Update project details and screenshots
6. `src/pages/Services.jsx` - Update services you offer
7. `src/pages/Contact.jsx` - Update contact information and form handlers
8. `src/pages/Certificates.jsx` - Update certificates and achievements
9. `src/components/TechStack.jsx` - Update your technology stack

### Styling

The main styles are in `src/App.css` with comprehensive styling including:
- Certificate modal and grid layouts
- Contact form animations
- Icon box styling for services
- Responsive design utilities
- Custom color schemes and hover effects

The project uses a combination of Bootstrap 5.3.3 and Tailwind CSS 4.1 for optimal styling flexibility.

### Images

Replace the placeholder images in `src/assets/` with your own:
- `images/Profile.jpg` - Your profile picture
- `Projects/` - Your project screenshots
- `certificates/` - Your certificate images
- `Resume.pdf` - Your resume file

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

### Deploy to Vercel

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Vercel

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspired by iPortfolio Bootstrap template
- Icons from React Icons, Bootstrap Icons, and StackOverflow Stacks Icons
- Fonts from Google Fonts
- Animations powered by AOS and Framer Motion
- Typing effects by React Typed
- Carousel functionality by Swiper.js

## Contact

**Shivansh Sharma**
- 📧 Email: sharma.shivansh1305@gmail.com
- 📱 Phone: +91-6398799630
- 💼 Portfolio: [Live Demo](your-portfolio-url)
- 🐙 GitHub: [Y-Shivansh](https://github.com/Y-Shivansh)
