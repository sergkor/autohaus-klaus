# Autohaus Klaus Website

A modern, responsive website for Autohaus Klaus, a Mercedes specialist auto repair shop in Redwood City, CA.

## Technologies Used

- **Next.js 14**: A React framework that enables server-side rendering and static site generation
- **TypeScript**: For type safety and better developer experience
- **React**: For building the user interface
- **CSS**: Custom styling with responsive design
- **Font Awesome**: For icons

## Project Structure

```
autohaus-klaus/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── about/            # About page (to be implemented)
│   ├── testimonials/     # Testimonials page (to be implemented)
│   ├── contact/          # Contact page (to be implemented)
│   └── layout.tsx        # Root layout component
├── components/           # Reusable components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   └── CallbackForm.tsx  # Callback request form
├── public/               # Static assets
│   └── images/           # Image files
├── styles/               # CSS styles
│   └── globals.css       # Global styles
└── package.json          # Project dependencies and scripts
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Call-back request form for customers to schedule a service consultation
- Detailed service information with easy navigation
- Google Maps integration for location
- Contact information and business hours clearly displayed

## Deployment

The site is built to be deployed to any static hosting platform or Next.js-compatible hosting service like Vercel.

To build for production:

```bash
npm run build
```

## Future Enhancements

- Add image gallery of the shop and vehicles serviced
- Implement a blog for automotive tips and maintenance advice
- Add a service booking system
- Integrate with a CMS for easy content updates
- Add multi-language support for local customers 