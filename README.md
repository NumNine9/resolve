# RESOLVE CODEBASE

This project is based on requirements requested by a client and consists of three main dirs:
1. `app` - Your web app, built with [React](https://react.dev/reference/react) and [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for the React web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/).

For more details, check READMEs of each respective directory!

## Setup Instructions

To run your new app, follow the instructions below:

  1. Position into app's root directory:
    cd resolve/app

  2. Run the development database (and leave it running):
    wasp db start

  3. Open new terminal window (or tab) in that same dir and continue in it.

  4. Apply initial database migrations:
    wasp db migrate-dev

  5. Create initial dot env file from the template:
    cp .env.server.example .env.server

  6. Last step: run the app!
    wasp start

Check the links for additional guidance and the link to documentation!

### Software Development Plan for Educational Platform

---

#### **1. Project Overview**

The goal of this project is to develop a comprehensive educational platform tailored for students, enabling them to access educational resources, manage rentals, and engage in marketplace transactions. The platform will serve as a one-stop solution for students, providing:

- **Access to Educational Resources:** Students can access a wide range of books online, enhancing their learning experience.
- **Rental System:** A feature to facilitate apartment rentals, making it easier for students to find affordable housing.
- **Marketplace:** A platform for students to buy and sell goods, fostering a community-driven ecosystem.
- **Payment Processing:** Secure and seamless payment options for all transactions.
- **User Engagement:** Features like reviews and ratings to build trust and improve user experience.

The platform aims to simplify students' lives by consolidating essential services into a single, user-friendly interface. It will also promote collaboration and resource sharing among students, making education more accessible and affordable.

---

#### **2. Requirements Analysis**

##### **Functional Requirements**

1. **User Registration and Profile Management:**
   - User registration with email/social media authentication.
   - Profile customization (name, profile picture, educational institution, etc.).
   - Password recovery and account security features.

2. **Book Access and School Access:**
   - Search and browse books by category, author, or institution.
   - Integration with educational institutions for access to specific resources.
   - Bookmarking and offline access for selected books.

3. **Rental System:**
   - Listing apartments with details (location, price, availability, etc.).
   - Search and filter options for rentals.
   - Booking and payment integration for rentals.

4. **Marketplace Features:**
   - Posting and browsing items for sale/purchase.
   - Chat functionality for buyer-seller communication.
   - Listing management (edit, delete, mark as sold).

5. **Payment Processing and Security Measures:**
   - Integration with secure payment gateways (e.g., Stripe, PayPal).
   - Multi-factor authentication (MFA) for transactions.
   - Data encryption for sensitive information.

6. **User Reviews and Ratings:**
   - Review and rating system for books, rentals, and marketplace items.
   - User reputation tracking based on reviews.

##### **Non-Functional Requirements**

1. **Scalability:**
   - The platform must handle a growing number of users and transactions without performance degradation.
2. **Security:**
   - Compliance with data protection regulations (e.g., GDPR, CCPA).
   - Regular security audits and vulnerability testing.
3. **Performance:**
   - Fast load times (<2 seconds) for pages and transactions.
4. **Usability:**
   - Intuitive UI/UX design with accessibility features (e.g., screen reader support).
5. **Availability:**
   - 99.9% uptime with robust disaster recovery plans.

---

#### **3. System Architecture**

##### **Front-end Framework:**
- **React.js:** For building a dynamic and responsive user interface.

##### **Back-end Framework:**
- **Node.js with Express:** For handling server-side logic and API integrations.

##### **Database Management System:**
- **PostgreSQL:** For structured data storage and efficient querying.
- **MongoDB:** For handling unstructured data like user reviews and marketplace listings.

##### **Cloud Hosting Services:**
- **AWS (Amazon Web Services):** For scalable hosting, storage, and deployment.
- **AWS S3:** For storing book files and media assets.

##### **Third-Party Integrations:**
- **Payment Gateways:** Stripe, PayPal.
- **Book Providers:** Integration with educational publishers and libraries.
- **Educational Institutions:** APIs for accessing institution-specific resources.

---

#### **4. Project Timeline**

| **Phase**               | **Start Date** | **End Date** | **Duration** |
|--------------------------|----------------|--------------|--------------|
| Requirement Gathering    | 23 Dec 2024    | 30 Dec 2024  | 1 week       |
| Design Phase             | 31 Dec 2024    | 13 Jan 2025  | 2 weeks      |
| Development Sprint 1     | 14 Jan 2025    | 27 Jan 2025  | 2 weeks      |
| Development Sprint 2     | 28 Jan 2025    | 10 Feb 2025  | 2 weeks      |
| Development Sprint 3     | 11 Feb 2025    | 24 Feb 2025  | 2 weeks      |
| Testing and QA           | 25 Feb 2025    | 9 Mar 2025   | 2 weeks      |
| Deployment               | 10 Mar 2025    | 11 Mar 2025  | 2 days       |
| Post-Launch Support      | 12 Mar 2025    | 12 Mar 2025  | Ongoing      |

---

#### **5. Risk Management**

| **Risk**                          | **Mitigation Strategy**                          |
|-----------------------------------|-------------------------------------------------|
| Delays in third-party integrations| Early engagement with partners and contingency plans. |
| Security vulnerabilities          | Regular security audits and code reviews.       |
| Resource shortages                | Hiring additional developers if needed.         |
| Performance issues                | Load testing and optimization during development.|
| User adoption challenges          | Marketing and user feedback campaigns.          |

---

#### **6. Team Structure**

| **Role**               | **Responsibilities**                                                                 |
|-------------------------|-------------------------------------------------------------------------------------|
| Project Manager         | Oversee project timeline, budget, and team coordination.                            |
| Front-end Developer     | Develop and maintain the user interface.                                            |
| Back-end Developer      | Implement server-side logic and APIs.                                               |
| UI/UX Designer          | Design intuitive and visually appealing interfaces.                                 |
| QA Engineer             | Perform testing and ensure quality assurance.                                       |
| System Administrator    | Manage cloud infrastructure and ensure system availability.                         |

---

#### **7. Budget Estimation**

| **Category**            | **Estimated Cost** |
|--------------------------|--------------------|
| Development Costs        | $50,000            |
| Tools and Licenses       | $5,000             |
| Cloud Hosting            | $10,000            |
| Maintenance (1st year)   | $15,000            |
| **Total**                | **$80,000**        |

---

### **Conclusion**

This Software Development Plan outlines the roadmap for building a robust and scalable educational platform tailored to students' needs. By adhering to the outlined timeline, architecture, and budget, we aim to deliver a high-quality product that meets the client's expectations and enhances the educational experience for students.
