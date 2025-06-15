# Dr. Guglani's Multispecialty Dental Centre Website

A modern, full-stack dental clinic website built with React and Node.js, featuring online appointment booking, WhatsApp integration, and a patient-centric user experience.

---

## 🚀 Features

- **Responsive, Modern UI:** Built with React and Tailwind CSS for a seamless experience on all devices.
- **Dynamic Routing:** Utilizes React Router for smooth navigation between pages.
- **Online Appointment Booking:** Patients can book appointments through a multi-step form.
- **WhatsApp Integration:** Appointment requests can be sent directly to the doctor's WhatsApp for instant notifications.
- **MongoDB Atlas Integration:** All appointment data is securely stored in the cloud.
- **Admin Panel:** Secure admin dashboard with features like:
  - Protected login system with JWT authentication
  - Real-time appointment statistics
  - Appointment management interface
  - Contact status tracking for each appointment
  - Secure logout functionality
- **Comprehensive Service Listings:** All dental services are clearly listed and selectable during booking.
- **Patient-Centric Design:** Clear, friendly language and intuitive forms.
- **SEO-Ready:** Includes meta tags and sitemap for better search engine visibility.
- **Legal Pages:** Privacy Policy, Terms of Service, and Sitemap included.
- **Accessibility:** Focused on clear labels, placeholders, and accessible navigation.
- **Royalty-Free Images:** All images used are from free sources, ensuring no copyright issues.

---

## 🛠️ Tech Stack

- **Frontend:** 
  - React 19
  - Tailwind CSS
  - React Router v7
  - Axios for API calls
  - Framer Motion for animations
  - React Icons and Lucide React for icons
- **Backend:** 
  - Node.js
  - Express.js
  - JWT for authentication
  - MongoDB with Mongoose
- **Database:** MongoDB Atlas (cloud-hosted)
- **Deployment:**
  - Frontend: Vercel
  - Backend: Render
- **Other:** WhatsApp Web API, dotenv, CORS

---

## 📸 Key Screens

- **Home Page:** Welcoming hero section, clinic highlights, and quick navigation.
- **Services Page:** Detailed cards for each dental service, with modals for more info and direct appointment booking.
- **Appointment Form:** Multi-step, patient-friendly form with WhatsApp integration.
- **Gallery:** Showcases clinic images with lightbox functionality.
- **FAQs:** Common patient questions answered.
- **Contact Page:** Easy ways to reach the clinic, including social media links.
- **Admin Dashboard:** 
  - Login page with secure authentication
  - Dashboard with appointment statistics
  - Appointment management interface
  - Contact status tracking

---

## 📝 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Surveerssg/Dental-Website
   cd Dental Website
   ```

2. **Set up the backend:**
   - Go to the `Backend` folder.
   - Create a `.env` file with the following variables:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     NODE_ENV=development
     ```
   - Install dependencies and start the server:
     ```bash
     npm install
     node server.js
     ```

3. **Set up the frontend:**
   - Go to the `Frontend` folder.
   - Install dependencies and start the dev server:
     ```bash
     npm install
     npm run dev
     ```

4. **Access the app:**  
   - Main website: [http://localhost:5173](http://localhost:5173)
   - Admin panel: [http://localhost:5173/admin/login](http://localhost:5173/admin/login)

---

## 🌐 Live Deployment

- **Frontend:** [https://drguglanidentalwebsite.vercel.app](https://drguglanidentalwebsite.vercel.app)
- **Backend:** [https://dental-website-l7s8.onrender.com](https://dental-website-l7s8.onrender.com)

---

## 🌟 What This Project Demonstrates

- **Full-Stack Development:** End-to-end solution from database to user interface.
- **API Design:** RESTful endpoints for appointment management.
- **Authentication:** Secure JWT-based admin authentication system.
- **Third-Party Integration:** Real-world WhatsApp messaging for instant communication.
- **Cloud Database Usage:** Secure, scalable data storage with MongoDB Atlas.
- **User Experience Focus:** Clean, accessible, and patient-friendly design.
- **Professional Practices:** Environment variables, modular code, and clear documentation.
- **Deployment:** Production deployment on Vercel and Render with proper CORS configuration.

---

## 📄 License

  Copyright © 2025 Surveer Singh Guglani. All rights reserved.
  This project is proprietary and intended for use by Dr. Guglani's Multispecialty Dental Centre. No part of this codebase may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the owner.

---

**Created by Surveer Singh Guglani**  
_If you'd like to discuss this project or need a similar solution, feel free to connect!_ 