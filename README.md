# NOVA Creative Studio

A modern, responsive digital agency website built with Next.js, React, and TypeScript.

## 🌟 Project Overview

NOVA Creative Studio is a modern creative agency website designed to showcase digital services, creative projects, and provide an easy way for potential clients to get in touch.

The website features a clean, premium dark interface with lime-green accents, smooth layouts, and a responsive design.

## ✨ Features

- **Hero Section:** Agency introduction with an engaging headline and call-to-action.
- **About Section:** Introduction to NOVA Creative Studio.
- **Services Section:** Highlights the agency's digital services.
- **Portfolio Section:** Showcases selected creative projects.
- **Our Process:** Explains the agency's workflow.
- **Why NOVA:** Highlights the agency's strengths.
- **Contact Form:** Collects visitor name, email, and project details.
- **Email Integration:** Contact form submissions are delivered through Web3Forms.
- **Responsive Design:** Adapted for desktop and mobile devices.
- **SEO Metadata:** Includes page title, description, and keywords.

## 🛠️ Technologies Used

- Next.js 16
- React
- TypeScript
- CSS
- Tailwind CSS
- Lucide React
- Web3Forms

## 📁 Project Structure

```text
nova-agency/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About and other sections
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project folder:

```bash
cd nova-agency
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the root directory and add your Web3Forms access key:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
```

5. Start the development server:

```bash
npm run dev
```

6. Open http://localhost:3000 in your browser.

## 📩 Contact Form

The contact form uses Web3Forms to deliver submitted inquiries to the configured email address.

It includes:
- Required field validation
- Email format validation
- Submission loading state
- Success and error messages

A valid Web3Forms access key is required for email delivery.

## 🔐 Environment Variables

The `.env.local` file contains the Web3Forms access key.

**Important:** Never commit your actual `.env.local` file or access key to GitHub.

## 📌 Assumptions & Additional Features

- The website represents a fictional digital creative agency named NOVA Creative Studio.
- The contact form uses a third-party service instead of a custom backend.
- The design focuses on a modern, minimal, and premium visual experience.
- Additional sections have been included beyond the four core assignment requirements.

## 👩‍💻 Author

**Zainab**

---

Built with ❤️ using Next.js and React.