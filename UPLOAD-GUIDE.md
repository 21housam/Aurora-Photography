# GitHub Upload Guide for Aurora Photography

## 📁 Files to Upload to GitHub

Repository: https://github.com/21housam/Aurora-Photography

### Folder Structure to Upload:

```
Aurora-Photography/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── portfolio-thumb-1.jpg
│       ├── portfolio-thumb-2.jpg
│       ├── portfolio-thumb-3.jpg
│       ├── portfolio-thumb-4.jpg
│       ├── portfolio-thumb-5.jpg
│       ├── portfolio-thumb-6.jpg
│       ├── portfolio-thumb-7.jpg
│       ├── portfolio-thumb-8.jpg
│       ├── portfolio-thumb-9.jpg
│       ├── portfolio-thumb-10.jpg
│       ├── portfolio-thumb-11.jpg
│       ├── portfolio-thumb-12.jpg
│       └── photographer.jpg
├── src/
│   ├── components/
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
│   ├── data/
│   │   ├── events.js
│   │   └── products.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── DEPLOYMENT.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── REDESIGN-SUMMARY.md
├── tailwind.config.js
└── vite.config.js
```

## 📝 Step-by-Step Upload Instructions

### Option 1: Using GitHub Web Interface (Recommended)

1. **Go to your repository:**
   https://github.com/21housam/Aurora-Photography

2. **Click "uploading an existing file"**
   - You'll see this option on the repository page

3. **Drag and drop these folders:**
   - `public/` folder (entire folder with all images)
   - `src/` folder (entire folder with all components)
   - `.github/` folder (for GitHub Actions)

4. **Drag and drop these individual files:**
   - `.gitignore`
   - `DEPLOYMENT.md`
   - `index.html`
   - `package.json`
   - `package-lock.json`
   - `postcss.config.js`
   - `README.md`
   - `REDESIGN-SUMMARY.md`
   - `tailwind.config.js`
   - `vite.config.js`

5. **In the commit message box, type:**
   ```
   Initial commit: Aurora Photography portfolio
   ```

6. **Click "Commit changes"**

### Option 2: Using github.dev (Browser-based VS Code)

1. **Go to your repository:**
   https://github.com/21housam/Aurora-Photography

2. **Press the `.` (period) key**
   - This opens VS Code in your browser

3. **You can:**
   - Create folders and files directly
   - Copy-paste the code from your local files
   - Or drag and drop files from your computer

4. **When done:**
   - Click "Source Control" in the left sidebar
   - Type a commit message
   - Click "Commit"

## ⚠️ IMPORTANT: Update vite.config.js

After uploading, you MUST edit `vite.config.js` in GitHub:

1. Go to your repository on GitHub
2. Click `vite.config.js`
3. Click the pencil icon (edit)
4. Change line 9 from:
   ```javascript
   base: '/',
   ```
   To:
   ```javascript
   base: '/Aurora-Photography/',
   ```
5. Click "Commit changes"

This is crucial for GitHub Pages to work correctly!

## 🚀 Enable GitHub Pages

1. **Go to your repository**
   https://github.com/21housam/Aurora-Photography

2. **Click "Settings"** (top navigation)

3. **Click "Pages"** (left sidebar)

4. **Under "Build and deployment":**
   - Click "Source"
   - Select "GitHub Actions"
   - Wait for it to save

5. **Your site will automatically deploy!**
   - GitHub Actions will build and deploy on every push to main
   - Your site will be at: https://21housam.github.io/Aurora-Photography/

## 📊 What Happens After Upload

1. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

2. This takes 1-3 minutes
3. Check the "Actions" tab to see progress
4. When done, visit: https://21housam.github.io/Aurora-Photography/

## ✅ Your Project is Ready!

All files are in:
```
C:\Users\starinfo\Downloads\alena-free-version\html c
```

Just upload them to GitHub following the steps above!
