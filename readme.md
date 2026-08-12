# 🐾 Happy Paws – Pet Adoption Website

A responsive, multi-page pet adoption website built with **pure HTML, CSS, and JavaScript** (no frameworks, no libraries). The site lets visitors browse adoptable dogs, cats, and birds, submit an adoption application, and list their own pet for adoption.

## 🔗 Live Demo
> Add your deployed link here (e.g. GitHub Pages / Netlify / Vercel).

## 📸 Screenshots
> Add 2–3 screenshots here (Home page, a listing page, and a form page) once you deploy or export images.

## ✨ Features

- **Multi-page site** with consistent navigation across Home, Dogs, Cats, Birds, List Your Pet, and Adopt pages
- **Responsive layout** — grid-based pet cards that reflow from 3 columns on desktop down to 1 column on mobile, with a dedicated breakpoint under 900px and 480px
- **Category listing pages** (Dogs / Cats / Birds) showing pet cards with photo, name, short description, and quick actions ("Adopt" / "More Info")
- **Two functional forms**:
  - **Adoption Application form** — for users wanting to adopt a pet
  - **List Your Pet form** — for owners wanting to give up a pet for adoption
- **Client-side form handling with JavaScript** — prevents default page reload on submit and shows a confirmation message to the user
- **Custom styling touches**: sticky gradient navbar, hero sections with page-specific background images, an SVG wave divider between sections, soft blurred "blob" background accents, and fade-in scroll animations on cards
- **Google Fonts (Poppins)** integration for consistent typography

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic tags: `nav`, `section`, `article`, `footer`) |
| Styling | CSS3 (Flexbox, CSS Grid, gradients, keyframe animations, media queries) |
| Interactivity | Vanilla JavaScript (DOM events, form handling) |
| Fonts | Google Fonts — Poppins |

No build tools, no frameworks, no dependencies — the entire site runs directly in the browser.

## 📁 Project Structure

```
happy-paws/
├── index.html            # Home page — hero, category cards, owner CTA, footer
├── dogs.html             # Dogs listing page
├── cats.html             # Cats listing page
├── birds.html            # Birds listing page
├── adoption-form.html    # Adoption application form
├── list-your-pet.html    # Form for owners listing a pet
├── project.css           # Single shared stylesheet for the whole site
├── script.js             # Shared JS — handles both forms' submit behavior
└── images/                # Pet photos and background images
```

## 🧩 How the Pages Connect

Every page shares the same `navbar`, links to the same `project.css`, and (on form pages) loads the same `script.js`. This keeps the styling and form behavior consistent site-wide without duplicating CSS/JS per page. The listing pages (Dogs/Cats/Birds) each use the same layout pattern — hero banner → wave divider → responsive card grid → footer — populated with category-specific content and background images.

## ▶️ Running Locally

1. Download or clone the project folder (keep `index.html`, `project.css`, `script.js`, and the `images/` folder together).
2. Open `index.html` directly in any modern browser — no server or installation required.
   - Optional: serve it with a local server (e.g. VS Code's "Live Server" extension) for the best experience with relative paths.

## 🚀 Possible Future Improvements

- Add real backend/database integration so adoption and listing forms actually store submissions
- Add client-side form validation (required fields, phone/email pattern checks) before submit
- Add a search/filter feature on listing pages (by breed, age, etc.)
- Make "More Info" links open a real pet detail page or modal instead of `#`
- Add accessible labels (`for`/`id` pairs) on all form inputs for screen-reader support

## 👤 Author

Harmandeep Kour
