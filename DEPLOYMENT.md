# Part 2: Git, GitHub Pages Deployment, and Checklist

## Git and GitHub Pages Deployment

### What is .gitignore and Why It Matters

The `.gitignore` file tells Git which files and folders to ignore when committing to a repository. This is crucial for public repos because:

- **Security:** Prevents committing sensitive data (API keys, credentials, environment variables)
- **Cleanliness:** Excludes generated files that shouldn't be in version control (node_modules, dist folder)
- **Efficiency:** Reduces repository size and speeds up operations

Without `.gitignore`, you might accidentally commit:
- `node_modules/` (huge folder with thousands of files)
- `.env` files with secrets
- `dist/` (built files that should be generated from source)
- Local IDE configuration files

### Step-by-Step: Upload to GitHub Using Only Web Interface

Since you want to use the GitHub web interface and github.dev (no local git workflow), here's exactly how to do it:

#### Method 1: Using GitHub Web Interface (Recommended for Beginners)

1. **Create a New Repository on GitHub**
   - Go to https://github.com and sign in
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Repository name: `aurora-photography` (or your preferred name)
   - Make it **Public** (GitHub Pages only works with public repos on free tier)
   - **DO NOT** initialize with README, .gitignore, or license (we'll upload our own)
   - Click "Create repository"

2. **Upload Your Project Files**
   - On the new repository page, click "uploading an existing file"
   - Drag and drop these files from your computer:
     - `src/` folder (entire folder)
     - `public/` folder (entire folder)
     - `.github/` folder (entire folder)
     - `index.html`
     - `package.json`
     - `package-lock.json`
     - `tailwind.config.js`
     - `postcss.config.js`
     - `vite.config.js`
     - `.gitignore`
     - `README.md`
   - In the commit message box, type: "Initial commit: Aurora Photography portfolio"
   - Click "Commit changes"

3. **Edit vite.config.js to Set Your Repo Name**
   - In your repository on GitHub, click `vite.config.js`
   - Click the pencil icon (edit)
   - Find this line:
     ```javascript
     base: '/YOUR-REPO-NAME/',
     ```
   - Change `YOUR-REPO-NAME` to your actual repository name
   - Example: If your repo is `username/aurora-photography`, change to:
     ```javascript
     base: '/aurora-photography/',
     ```
   - If your repo is just `aurora-photography` (no username), use:
     ```javascript
     base: '/aurora-photography/',
     ```
   - Scroll down and click "Commit changes"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click the "Settings" tab (top navigation)
   - In the left sidebar, click "Pages"
   - Under "Build and deployment", click "Source"
   - Select "GitHub Actions" (NOT "Deploy from a branch")
   - Wait a moment for the dropdown to save
   - GitHub will now use the workflow file in `.github/workflows/deploy.yml`

5. **Trigger the Deployment**
   - Go to the "Actions" tab in your repository
   - You should see the "Deploy static content to Pages" workflow
   - Click "Run workflow" if it hasn't started automatically
   - Wait for the workflow to complete (green checkmark)
   - This usually takes 1-3 minutes

6. **Find Your Live Site URL**
   - Go back to Settings > Pages
   - You'll see a URL like: `https://your-username.github.io/aurora-photography/`
   - Click it to visit your live site!

#### Method 2: Using github.dev (VS Code in Browser)

If you prefer to edit in a code editor:

1. **Open Your Repository in github.dev**
   - Go to your repository on GitHub
   - Press `.` (period) on your keyboard
   - This opens VS Code in your browser
   - You can edit files directly here

2. **Edit vite.config.js**
   - Navigate to `vite.config.js`
   - Edit the `base` line as described above
   - Press `Ctrl+S` to save
   - Click "Source Control" icon (left sidebar)
   - Type a commit message and click "Commit"

3. **The rest is the same** as Method 1 (enable GitHub Pages in Settings)

### GitHub Pages Configuration Explained

The `base` in `vite.config.js` is crucial because:

- GitHub Pages serves your site from a subdirectory: `username.github.io/repo-name/`
- Without setting `base`, your assets (images, CSS, JS) will try to load from the wrong path
- Setting `base: '/your-repo-name/'` tells Vite to prefix all asset paths correctly

**Example:**
- Without `base`: `/images/photo.jpg` → tries to load from `username.github.io/images/photo.jpg` (404 error)
- With `base: '/aurora-photography/'`: `/images/photo.jpg` → loads from `username.github.io/aurora-photography/images/photo.jpg` (works!)

### GitHub Actions Workflow Explained

The `.github/workflows/deploy.yml` file automatically:

1. Triggers on every push to `main` branch
2. Checks out your code
3. Installs Node.js and dependencies (`npm ci`)
4. Builds the project (`npm run build`)
5. Uploads the `dist/` folder to GitHub Pages
6. Deploys it to the web

This means you don't need to manually build and upload - just push code, and GitHub does the rest!

---

## Complete Requirements Checklist

### ✅ Section 1: Site Conversion
- [x] Keep same look: colors, fonts (Inter + Playfair Display), spacing, hover effects
- [x] Card lift and image zoom on hover
- [x] Same content and layout
- [x] Images in `public/images/` and referenced as `/images/...`
- [x] Design tokens as Tailwind theme values:
  - [x] background #111111
  - [x] surface #1c1c1c
  - [x] surface-hover #252525
  - [x] text #f2f2f2
  - [x] muted #9a9a9a
  - [x] accent #d4a373
  - [x] accent-hover #c4935f
  - [x] border #2a2a2a
- [x] Heading font: Playfair Display (serif)
- [x] Body font: Inter
- [x] Max container width 1200px (1320px on 1400px+ screens)

### ✅ Section 2: Tech Stack and Rules
- [x] Scaffolded with React + Vite
- [x] Local dev server with live reload (`npm run dev`)
- [x] Replaced ALL standard CSS with Tailwind CSS
- [x] Tailwind configured for Vite (current documentation method)
- [x] CSS file only for Tailwind import, theme tokens, font setup, smooth scrolling
- [x] Deleted old style.css (from original HTML folder)
- [x] JavaScript only (no TypeScript)
- [x] Used `const` and `let` (no `var`)
- [x] Used strict equality (`===`, `!==`) only
- [x] Used `className` instead of `class` in JSX
- [x] React basics only: functional components, `useState`, `useEffect` for persistence
- [x] No Redux or other heavy libraries
- [x] Used arrow functions
- [x] Used `.map()`, `.filter()`, `.reduce()` where appropriate
- [x] Used template literals (backticks) for string building

### ✅ Section 3: Componentization
- [x] `Header.jsx` - sticky nav with hamburger menu on mobile
- [x] `Hero.jsx` - hero section
- [x] `Gallery.jsx` - title, filter controls, grid
- [x] `ProductCard.jsx` - reusable gallery card
- [x] `About.jsx` - about section
- [x] `Contact.jsx` - contact form
- [x] `Footer.jsx` - footer
- [x] `Events.jsx` - events/booking section
- [x] `QuantityStepper.jsx` - reusable quantity stepper
- [x] `LikeButton.jsx` - like/favorite button
- [x] `App.jsx` - only composes components (no other logic)

### ✅ Section 4: Single Source of Truth for Data
- [x] `src/data/products.js` with array of 12 gallery items
- [x] Each product has: `id`, `title`, `description`, `image`, `alt`, `category`, `liked: false`
- [x] Categories used: Portrait, Landscape, Event, Commercial
- [x] Items categorized correctly:
  - Portrait: Ethereal Portraits, Urban Fashion, Lifestyle, Character Study, Artistic Vision
  - Landscape: Natural Beauty, Architecture, Nature, Travel
  - Event: Special Events
  - Commercial: Brand Stories, Studio
- [x] `src/data/events.js` with array of 3-4 upcoming events
- [x] Each event has: `id`, `title`, `date`, `location`, `price`, `spotsAvailable`, `description`
- [x] No data duplication in JSX
- [x] Everything rendered with `.map()` from data arrays
- [x] About and Footer text from original HTML

### ✅ Section 5: Required Interactivity (useState)
- [x] **Category filter:**
  - [x] Uses `.filter()` and state
  - [x] Desktop: buttons
  - [x] Mobile: native `<select>` dropdown with "Select a style"
  - [x] Mobile dropdown opens correctly (z-index and overflow handled)
  - [x] Options: All, Portrait, Landscape, Event, Commercial
- [x] **Controlled component (QuantityStepper):**
  - [x] Value lives in parent's state
  - [x] Passed as props: `value`, `onChange`, `min`, `max`
  - [x] Never goes below 1 (or 0) for event tickets
  - [x] Never exceeds remaining spots
  - [x] + button disabled at maximum
  - [x] - button disabled at minimum
- [x] **Like/favorite button:**
  - [x] On every gallery card
  - [x] "Saved only" toggle that combines with category filter
  - [x] Empty state message when nothing matches filters
- [x] **Events/booking section:**
  - [x] Between gallery and About
  - [x] Ticket stepper per event
  - [x] Total price calculated with `.reduce()`
  - [x] "Book" button reduces remaining spots and resets stepper
  - [x] Each event has independent quantity state (common bug avoided)
- [x] **Conditional rendering with ternary operator:**
  - [x] "Available" vs "Fully booked"
  - [x] Like button label (Saved / Save)
  - [x] Hamburger icon (open / closed)
- [x] **Controlled form:**
  - [x] Contact form fields are controlled inputs
  - [x] State for name, email, shoot type, message
  - [x] "Thank you" confirmation on submit
  - [x] Form resets after submission
  - [x] "Select Shoot Type" dropdown included
  - [x] Dropdown works on mobile

### ✅ Section 6: Persistence
- [x] Liked items survive page refresh
- [x] Event bookings (remaining spots) survive page refresh
- [x] Used `localStorage` through custom hook `useLocalStorage`
- [x] `useLocalStorage` uses `useState` initialized from localStorage
- [x] `useEffect` saves to localStorage on change
- [x] Comment explaining why this works without backend
- [x] Comment explaining that real backend would be needed for shared data

### ✅ Section 7: Extra Touches
- [x] Favicon added (SVG format)
- [x] SEO `<title>` from original HTML
- [x] Meta description from original HTML
- [x] Meta keywords from original HTML
- [ ] **Optional:** Separate pages per category with react-router-dom (not implemented - requires user choice)

### ✅ Section 8: Responsiveness and Quality
- [x] Fully responsive with Tailwind breakpoints
- [x] Used `sm:`, `md:`, `lg:`, plus 1400px for wider container
- [x] Gallery: 1 column mobile, 2 columns from 600px, 3 columns from 1024px
- [x] Hamburger menu works on mobile
- [x] Hamburger menu closes after link is clicked
- [x] Accessibility basics:
  - [x] Alt text on all images
  - [x] Labels for all form fields (visually-hidden labels)
  - [x] Aria labels on buttons
  - [x] Visible focus styles
  - [x] Readable contrast
- [x] Smooth scrolling enabled
- [x] Sticky header offset (`scroll-padding-top: 80px`)
- [x] Anchor links don't hide under header

### ✅ Section 9: Git and Deployment
- [x] Proper `.gitignore` added
- [x] Explanation of why .gitignore matters for public repos
- [x] GitHub Actions workflow created
- [x] Workflow builds and deploys to GitHub Pages on push to main
- [x] `base` in vite.config.js set with placeholder `YOUR-REPO-NAME`
- [x] Instructions on where to change the placeholder
- [x] Exact steps to upload using GitHub web interface
- [x] Exact steps to upload using github.dev
- [x] Instructions on how to enable GitHub Pages (Settings > Pages > Source: GitHub Actions)

### ✅ Section 10: Output Format
- [x] Commands to create and run the project
- [x] Final folder tree
- [x] Complete code of every file
- [x] "How it works" section on useState, controlled components, conditional rendering
- [x] Checklist confirming each requirement
- [x] List of anything needing user input

---

## Items That Need Your Input

### 1. GitHub Repository Name
**Action required:** Edit `vite.config.js` line 9:
```javascript
base: '/YOUR-REPO-NAME/',
```
Change `YOUR-REPO-NAME` to your actual repository name.

**Examples:**
- If your repo is `johnsmith/aurora-photography` → change to `/aurora-photography/`
- If your repo is `johnsmith/portfolio` → change to `/portfolio/`
- If your repo is just `aurora-photography` → change to `/aurora-photography/`

### 2. Images
**Status:** Already copied to `public/images/` from your original folder.
**Action:** No action needed - all 12 portfolio thumbnails and photographer.jpg are in place.

### 3. Social Media Links
**Current:** Links are placeholders (`#`)
**Action:** If you have real social media links, edit `src/components/Footer.jsx`:
```javascript
<a href="https://instagram.com/yourusername" aria-label="Follow on Instagram">
  Instagram
</a>
```

### 4. Event Details
**Current:** Sample events with dates in 2026
**Action:** Update `src/data/events.js` with your real events:
- Change dates to actual event dates
- Update locations
- Adjust prices
- Modify descriptions
- Change spotsAvailable

### 5. Contact Form
**Current:** Form shows "Thank you" message but doesn't actually send email
**Action:** For a real contact form, you would need:
- A backend service (like Formspree, Netlify Forms, or your own Node.js server)
- Update the `handleSubmit` function in `src/components/Contact.jsx` to send data to that service

For now, the form works for demonstration purposes - it logs to console and shows a confirmation message.

### 6. Optional: react-router-dom
**Not implemented** - this was marked as optional.
**If you want it:**
1. Install: `npm install react-router-dom`
2. Use `HashRouter` instead of `BrowserRouter` for GitHub Pages compatibility
3. Create separate page components for each category
4. Add routes in App.jsx
5. Update nav links to use `<Link>` instead of `<a>`

This would require significant changes, so I recommend it only if your lecturer specifically requires routing.

---

## Testing Your Site Locally

Before deploying to GitHub, test locally:

```bash
# Navigate to project
cd aurora-photography

# Start dev server
npm run dev

# Open the shown URL (usually http://localhost:5173)
# Test all features:
# - Mobile hamburger menu
# - Category filter (desktop buttons and mobile dropdown)
# - Like buttons and "Saved only" toggle
# - Event booking system
# - Contact form
# - Responsive design (resize browser window)
```

## Common Issues and Solutions

### Issue: Images not loading on GitHub Pages
**Solution:** Make sure `base` in `vite.config.js` matches your repo name exactly.

### Issue: Mobile dropdown hidden behind header
**Solution:** The dropdown has proper z-index in the CSS. If you still have issues, check that the mobile menu container has `z-index: 50` or higher.

### Issue: GitHub Actions deployment fails
**Solution:** 
- Check the Actions tab for error messages
- Make sure `vite.config.js` has the correct `base` value
- Ensure your repository is Public (GitHub Pages free tier requires public repos)

### Issue: LocalStorage not persisting
**Solution:** 
- Make sure you're not in private/incognito mode
- Check browser console for errors
- The `useLocalStorage` hook should work automatically

---

## Summary

Your Aurora Photography portfolio is now a modern React application with:
- ✅ All original styling preserved via Tailwind CSS
- ✅ Component-based architecture
- ✅ Interactive features (filtering, liking, booking)
- ✅ Responsive design
- ✅ Accessibility features
- ✅ LocalStorage persistence
- ✅ Ready for GitHub Pages deployment

The code is beginner-friendly with comments explaining key concepts, making it perfect for your university practicum presentation.
