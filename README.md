<div align="center">
  <img src="public/logo.png" alt="Shadow Tourist Logo" width="100"/>
  <h1>Shadow Tourist</h1>
  <p><strong>A Premium Travel Agency & Tour Guide Platform</strong></p>

  [![Live Server](https://img.shields.io/badge/Live_Site-Vercel-black?style=for-the-badge&logo=vercel)](https://react-shadow-tourist-client.vercel.app/)
  [![Server Repo](https://img.shields.io/badge/Server-Repo-blue?style=for-the-badge&logo=github)](https://github.com/TanveerAhmed4545/react-shadow-tourist-server)
  [![Client Repo](https://img.shields.io/badge/Client-Repo-darkgreen?style=for-the-badge&logo=github)](https://github.com/TanveerAhmed4545/shadow-touriest-client-modify)
</div>

<br />

## 📖 About The Project

**Shadow Tourist** is a meticulously crafted, multi-award-winning travel and tour guide platform built on the MERN stack. Designed with a deep focus on user experience and modern aesthetics, the platform connects enthusiastic travelers with expert local guides, offering curated travel packages, interactive destination guides, and seamless booking flows.

## ✨ Key Features & Website Details

- **🎨 Modern & Responsive UI:** Fully responsive design built entirely from scratch with Tailwind CSS and DaisyUI, featuring glassmorphism, micro-animations, and a highly polished dark/light aesthetic.
- **🔐 Secure Authentication:** Robust email/password and social login powered by Firebase, protected with JWT verification.
- **💳 Secure Payments:** Fully integrated Stripe checkout process for booking tour packages.
- **🗺️ Extensive Public Pages:** 
  - **Core:** Home, About Us, Contact Us, Login, Register
  - **Explore:** FAQ's, Services, Team, News & Articles (Blogs), Blog Details
  - **Legal & Support:** Privacy Policy, Terms & Conditions, Help, Careers
  - **Destinations:** Highly immersive dynamic destination guides (e.g., Tokyo, France, Dubai, Kenya, Vietnam)
  - **Tourism:** All Packages, Package Details, All Guides, Tour Guide Profiles, Community, Tourist Stories
- **👑 Role-Based Dashboards:** Dedicated dashboards and permission boundaries:
  - **Tourist:** Profile Management, My Wishlist, My Bookings, Payment History
  - **Tour Guide:** Guide Profile, Assigned Tours, Request to Admin
  - **Admin:** Admin Statistics, Manage Users/Guides/Tourists, Add Packages
- **📱 Dynamic Interactions:** SweetAlert notifications, interactive maps (Leaflet), dynamic routing, and smooth transitions (Framer Motion).

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React, React Router DOM, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication**| Firebase, JWT |
| **Payments** | Stripe |
| **State & Fetch** | React Query, Axios |
| **Form Handling** | React Hook Form |

## 📦 Key NPM Packages
- `framer-motion` (Animations)
- `react-leaflet` (Interactive Maps)
- `react-helmet-async` (Dynamic SEO Metadata)
- `react-responsive-carousel` & `swiper` (Image Sliders)
- `sweetalert2` (Custom Alerts)
- `lottie-react` (JSON Animations)
- `react-confetti` & `react-date-picker`

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js installed on your machine.
- npm
  ```bash
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanveerAhmed4545/shadow-touriest-client-modify.git
   ```

2. **Navigate to the directory**
   ```bash
   cd shadow-touriest-client-modify
   ```

3. **Install NPM packages**
   ```bash
   npm install
   ```

4. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and configure your Firebase and Stripe keys:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   # Add other required environment variables here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   *(Note: The project uses Vite. Visit `http://localhost:5173/` to view the app)*

---

## 🔒 Admin Access (Demo)
If you are evaluating the platform, you can use the following credentials to access the Admin Dashboard:

- **Email:** `hero@gmail.com`
- **Password:** `Ta123456`

---

<div align="center">
  <p>Designed and built with ❤️ by Tanveer Ahmed.</p>
</div>
