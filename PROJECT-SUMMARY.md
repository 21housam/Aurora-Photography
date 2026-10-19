# Aurora Photography Project - Quick Start Guide

**Project by:** Housam Gammoudi
**Location:** `C:\Users\starinfo\Downloads\alena-free-version\html c`

## ✅ Project Structure (Clean & Organized)

```
html c/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions for auto-deployment
├── public/
│   ├── favicon.svg             # Site favicon
│   └── images/                 # All portfolio images
│       ├── portfolio-thumb-1.jpg through portfolio-thumb-12.jpg
│       └── photographer.jpg
├── src/
│   ├── components/             # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LikeButton.jsx
│   │   ├── ProductCard.jsx
│   │   └── QuantityStepper.jsx
│   ├── data/                   # Single source of truth
│   │   ├── events.js
│   │   └── products.js
│   ├── hooks/                  # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Tailwind imports and custom styles
│   └── main.jsx                # React entry point
├── .gitignore                  # Git ignore file
├── DEPLOYMENT.md               # Deployment instructions
├── README.md                   # Full documentation
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── vite.config.js              # Vite configuration
```

## 🚀 How to Run the Project

### Step 1: Open Terminal
Open PowerShell or Command Prompt in Windows

### Step 2: Navigate to Project
```bash
cd "C:\Users\starinfo\Downloads\alena-free-version\html c"
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The server will show a URL like:
```
➜  Local:   http://localhost:5173/
```

Open that URL in your browser (Chrome, Firefox, Edge, etc.)

## 🎯 What You Can Do

The project is **already running** on:
**http://localhost:5173/**

### Test These Features:
1. ✅ **Mobile hamburger menu** - Resize browser to mobile size, click menu icon
2. ✅ **Category filter** - Click Portrait, Landscape, Event, Commercial buttons
3. ✅ **Mobile dropdown** - On mobile, use the "Select a style" dropdown
4. ✅ **Like buttons** - Click "Save" on any gallery card
5. ✅ **"Saved only" toggle** - Click "Saved Only" to see only liked items
6. ✅ **Event booking** - Add tickets with + button, see total price, click "Book"
7. ✅ **Contact form** - Fill out the form and submit (shows "Thank you" message)
8. ✅ **Responsive design** - Resize browser window to see different layouts

## 📁 What Was Cleaned Up

I removed these old files that are no longer needed:
- ❌ Old `index.html` (original HTML file)
- ❌ Old `style.css` (original CSS file)
- ❌ Old `images/` folder (duplicate)
- ❌ Nested `aurora-photography/` folder
- ❌ `dist/` folder (will be regenerated on build)

## 🌐 For GitHub Deployment (When Ready)

If you want to deploy to GitHub Pages:

1. **Edit `vite.config.js`** line 9:
   Change from: `base: '/',`
   To: `base: '/html-c/',` (or your actual repo name)

2. **Follow DEPLOYMENT.md** for full instructions

## 📚 Documentation Files

- **README.md** - Complete code reference and "How it works" explanation
- **DEPLOYMENT.md** - GitHub Pages deployment guide
- **PROJECT-SUMMARY.md** - This quick start guide

## 🎓 For Your Presentation

The README.md includes a section called "How it works" that explains:
- `useState` hook
- Controlled components
- Conditional rendering

Perfect for your 2-3 minute university presentation!

---

**Status:** ✅ Project is running and ready to use!
**Server:** http://localhost:5173/
**Developer:** Housam Gammoudi
