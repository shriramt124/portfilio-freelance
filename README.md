# Freelance Portfolio Website

A modern, responsive portfolio website for freelancers and agencies built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Contact form with email notification
- Sections for services, portfolio, team members, and contact information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure email settings in `.env.local`:

```
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM_NAME=Website Contact Form
EMAIL_TO=your-email@gmail.com
```

> **Note for Gmail users:** You'll need to use an "App Password" instead of your regular password. You can generate one in your Google Account settings under Security > 2-Step Verification > App passwords.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Email Service Configuration

The contact form is configured to send emails using Nodemailer. To set up the email service:

1. Create a `.env.local` file in the root directory with the email configuration variables (as shown above).
2. Replace the placeholder values with your actual email credentials.
3. For Gmail users, you'll need to:
   - Enable 2-Step Verification in your Google Account
   - Generate an App Password for the application
   - Use this App Password in the `.env.local` file

## Customization

You can customize the website by modifying the following files:

- `app/page.tsx`: Main page component with data for services, team members, and portfolio projects
- `app/components/`: Individual section components
- `app/globals.css`: Global styles and Tailwind CSS configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. 
 