This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# General E-Commerce Marketplace

## Overview
This project is a **General E-Commerce Marketplace**, designed to empower businesses and individuals by providing a platform where sellers can list products, and customers can shop seamlessly. The platform leverages modern technologies and frameworks to ensure scalability, performance, and an excellent user experience.

---

## Features
- **User Authentication:** Sign-up, login, and profile management powered by Firebase.
- **Product Listing:** Dynamic product grid with details such as name, price, and image.
- **Product Detail Pages:** Comprehensive individual product pages for detailed insights.
- **Cart Management:** Add, update, and remove items from the cart.
- **Checkout Flow:** Gather user information, process payments, and confirm orders.
- **Admin Panel:** Manage products, banners, and marketing content using Sanity CMS.

---

## Technologies Used
- **Frontend Framework:** [Next.js](https://nextjs.org/) for server-side and client-side rendering.
- **Hosting:** [Vercel](https://vercel.com/) for frontend deployment and CI/CD pipelines.
- **State Management:** React state for managing cart.
- **Content Management System (CMS):** [Sanity CMS](https://www.sanity.io/) for managing product catalogs and marketing content.
- **Authentication:** [Firebase](https://firebase.google.com/) for user authentication and profile management.
- **Payment Gateways:** cash on delivery for secure payment. (online payment will be added in the future).

---

## Project Structure
```
- src/
- ├── app/              # Next.js application pages
- ├── components/       # Reusable React components (e.g., ProductCard, Cart)
- ├── context/          # React context for state management
- ├── firebase/         # Firebase configuration and authentication logic
- ├── sanity/           # Sanity CMS schemas and data fetching logic
- public/               # Static assets (e.g., images, icons)
- documents/            # Project documentation (e.g., technical plans, test reports)
```

---

## Development Journey

### Day 1: Project Selection & Foundation
- **Marketplace Type:** Chose to build a **General E-Commerce Marketplace** to support small businesses and individuals.  
- **Business Goals:**  
  - Defined the problem: Limited online reach for small businesses.  
  - Identified target audiences: Small sellers and online shoppers.  
  - Outlined key products/services: household items and more.  
- **Data Schema:**  
  - Created a schema with core entities: **Products, Orders, Customers, Shipments, Delivery Zones**.  
  - Ensured alignment with business objectives for scalability and user experience.

### Day 2: Technical Planning
- Defined core technologies and system architecture.
- Designed workflows for user authentication, product catalog, checkout, and payments.
- Created API endpoints for user management, products, orders, and payments.

### Day 3: API Integration and Data Migration
- Designed Sanity CMS schemas for products.
- Migrated API data into Sanity CMS using a custom script.
- Integrated Sanity CMS with Next.js to dynamically fetch and display product data.

### Day 4: Dynamic Frontend Components
- Built reusable components for product listing, product details, cart, checkout.
- Implemented cart and wishlist functionality with React state and local storage.
- Developed user authentication features using Firebase.
- Created a seamless checkout flow with order confirmation.

### Day 5: Testing and Optimization
- Conducted functional testing for product listing, search, cart, and checkout.
- Implemented error handling for network failures, invalid data, and server errors.
- Optimized performance using Lighthouse, achieving a speed index of 0.4.
- Ensured cross-browser compatibility and responsiveness across devices.
- Performed security testing to validate input fields and secure sensitive data.

### Day 6: Deployment Preparation
- Set up hosting on **Vercel** and connected the GitHub repository.
- Configured environment variables for secure deployment.
- Deployed the application to a staging environment.
- Conducted staging environment testing using Cypress and Postman.
- Updated documentation, including the README.md file and test case reports.

---

