# Bank Login/SignUp Template UI

A client-side practice/template project for a Persian banking mobile app interface

## Overview

This project demonstrates a complete mobile-optimized onboarding and authentication flow for a banking application. It includes:

- **Login page** with username/password validation
- **Multi-step signup flow** guiding users through account creation
- **Custom wheel date picker** for Persian date selection
- **Client-side form validation** using regex patterns
- **Responsive design** optimized for mobile screens (440px max-width)
- **RTL Persian (Farsi) interface** with custom typography

## Key Features

### 📱 Mobile-First Design
- Optimized for mobile screens with a fixed max-width of 440px
- Touch-friendly interactions and spacing
- Responsive layout using Tailwind CSS

### 📝 Multi-Step Sign-Up Flow
The signup process includes 11 steps:
1. **Introduction** — Overview of requirements
2. **Terms & Conditions** — Accept terms to proceed
3. **Phone Number** — Enter mobile number(Iran phone number format)
4. **Verification Code** — Enter 6-digit SMS code
5. **Referral Code** — Optional referral/ambassador code
6. **National ID** — 10-digit Persian national ID validation
7. **Date of Birth** — Custom wheel picker for Persian calendar dates
8. **Username** — Choose a unique username
9. **Password** — Set password with strength requirements
10. **Confirmation** — Review before submission
11. **Complete** — Success state

### 🎡 Custom Wheel Date Picker
- **Snap-scroll interface** for intuitive date selection
- Supports Persian calendar (Jalali) dates
- Visual feedback with scaling effects (active, layer 1-3)
- Real-time date updates as user scrolls

### ✅ Regex Pattern Validation
Form inputs use HTML5 pattern validation with regex:
- **Phone Number:** `۰۹[\u06F0-\u06F9]{9}` — Persian digits, starts with ۰۹
- **National ID:** `^[\u06F0-\u06F9]{10}$` — Exactly 10 Persian digits
- **Username:** `^[a-z][a-z\d_]{3,}$` — Lowercase, min 4 chars, alphanumeric + underscore
- **Verification Code:** `^[0-9]$` — Single digit per input box
- **Date of Birth:** Custom wheel picker (no regex, visual selection)

### 🔐 Password Requirements (Step 9)
- Minimum 8 characters
- Contains at least one digit
- Contains both lowercase and uppercase letters
- Visual checklist shows real-time validation status

## Project Structure

```
bank-template/
├── index.html              # Landing page with login/signup CTAs
├── login.html              # Login form page
├── signup.html             # Multi-step signup flow
├── vite.config.js          # Vite configuration with Tailwind
├── package.json            # Dependencies & scripts
├── src/
│   ├── login.js            # Login form logic & validation
│   ├── signup.js           # Signup flow step navigation
│   ├── wheelSnap.js        # Custom wheel date picker module
│   ├── style.css           # Tailwind + custom styles
│   └── assets/
│       └── fonts/          # Vazirmatn font files
├── public/                 # Static assets (images, icons)
└── README.md              # This file
```

## Tech Stack

- **HTML5** — Semantic markup with RTL support
- **Vanilla JavaScript (ES Modules)** — No framework dependencies
- **Tailwind CSS v4** — Utility-first styling with `@tailwindcss/vite`
- **Vite** — Modern dev server and bundler
- **Font Asset:** Vazirmatn (Persian/Farsi typeface)

## Installation & Running

### Prerequisites
- Node.js 16+ and npm/yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

### Login Page (`login.html`)
- Enter username and password
- Eye icon toggles password visibility
- Login button enables only when both fields have content
- Error messages display for missing fields

### Signup Flow (`signup.html`)
1. Click "Start" to begin the multi-step process
2. Accept terms and conditions
3. Enter phone number (Persian digits, format: ۰۹xxxxxxx)
4. Verify with 6-digit SMS code (auto-focuses between inputs)
5. Optionally enter a referral code
6. Provide 10-digit national ID
7. Select date of birth using the custom wheel picker
8. Choose a username (min 4 chars, alphanumeric + underscore)
9. Create a strong password meeting all criteria
10. Review and complete signup


### Client-Side Only
All validation is performed in the browser using:
- **HTML5 `pattern` attribute** for regex validation
- **`checkValidity()` method** for form checks
- **Custom JavaScript logic** for complex rules (password strength, verification code matching)

**Note:** This is a frontend prototype. In production, validation must be repeated on the backend.
