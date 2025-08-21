# Senzo - AI Powered Career Coach 🚀

Senzo is an AI-powered full-stack career coach that takes your resume, interview preparation, and career growth to the next level.  
It combines **Next.js**, **ShadCN UI**, **PostgreSQL**, and **AI APIs** (Gemini) to deliver enterprise-grade features like **ATS-optimized resume builder, intelligent cover letter generator, interview prep quizzes, and real-time industry insights**.

---

## 🌟 Features

### 🔹 User Onboarding & Dashboard
- Seamless onboarding flow with Google/email login.
- Interactive dashboard showing **in-demand skills** and **salary trends** in your industry.
- Data updates weekly using scheduled background jobs (cron).

### 🔹 AI Resume Builder
- Build **ATS-optimized resumes** tailored to your industry and skills.
- Improve bullet points with AI suggestions powered by **Gemini API**.
- Fully customizable and exportable as **PDF**.
- Markdown-based resume editing and database persistence.

### 🔹 Interview Preparation
- Role-specific interview quizzes with **AI-generated questions**.
- Instant feedback with correct answers and detailed explanations.
- Track performance over time with charts powered by **Recharts**.
- AI-driven **improvement tips** for each attempt.

### 🔹 Cover Letter Generator
- Intelligent cover letter builder analyzing **job descriptions**.
- Generates tailored, professional content instantly.
- Easy editing and saving for multiple applications.

### 🔹 Industry Insights
- Weekly updated data about **job market outlook, demand, and growth trends**.
- Key industry insights, **top skills recommendations**, and **salary benchmarks**.

### 🔹 Modern UI/UX
- Fully responsive design using **Next.js** + **ShadCN UI**.
- Professional **landing page** with animations, testimonials, FAQs, and CTAs.
- Beautiful interactive charts, dropdowns, and forms.

---

## 🛠️ Tech Stack

**Frontend:** Next.js, React, Tailwind CSS, ShadCN UI, Recharts  
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL  
**AI/ML:** Gemini API (for resume, interview, cover letter generation)  
**Auth:** Clerk (Google & Email authentication)  
**Validation & Forms:** React Hook Form + Zod  
**Other:** Cron Jobs for background data updates  

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL installed locally or on cloud (e.g., Supabase, Neon)
- Gemini API key
- Clerk API credentials

### Installation
```bash
# Clone the repository
git clone https://github.com/mohdazam0786/senzo.git

# Move into project directory
cd senzo

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run development server
npm run dev
