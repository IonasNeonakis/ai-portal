Role:
You are a senior frontend developer expert in Next.js (App Router) and Tailwind CSS.

Goal:
Create a simple one-page portal application in Next.js that displays a list of apps as cards.
Each card contains:

App logo

App name

Short description

Link to the app (opens in new tab)

The page should act as a hub / portal for multiple projects.

🛠 Technical Requirements

Framework: Next.js (latest version, App Router)

Styling: Tailwind CSS

Single page only (no routing needed)

Responsive grid layout (mobile + desktop)

Clean, modern UI

Cards should be clickable

Use semantic HTML and accessible components

Store app data in a structured array (JSON or TypeScript object)

Logos can be placeholders (or generated with initials if missing)

📄 Data to Display

Use this exact list of applications:

GitLab MR Review Quizz
Description: Chrome Web extension that launches a quiz when someone clicks on approve
Link: (zip project, no public URL — leave link disabled or placeholder)

One Tera
Description: A website with 1 button that downloads 1TB
Link: https://one-tera.neonakis.com/

FormPolice
Description: PWA that checks that you're doing pushups and squats right
Link: https://form-police.neonakis.com/

Mister Good Kebab
Description: App that shows all the kebabs in an area with a price range
Link: https://kebab.pierrelouisbertrand.com

CTM
Description: App that shows you how much your poo costs to your employer
Link: https://ctm.olivierabdelnour.dev

Aiclicker
Description: Clicker game for developers
Link: https://aiclicker.olivierabdelnour.dev

Developers Escape
Description: Escape game for developers
Link: https://escapegale.olivierabdelnour.dev

HN Digest
Description: A website that digests all dev news
Link: https://veille.pierrelouisbertrand.com

🎨 UI Requirements

Title at top: "Dev Apps Portal"

Each app displayed as a card with:

Logo placeholder (circle or square)

Name (bold)

Description (small text)

Visit button or clickable card

Hover animation (scale or shadow)

Grid layout (2–4 columns depending on screen size)

🚫 Constraints

Do not add authentication

Do not add multiple pages

Do not invent extra apps

Do not use external UI libraries (only Tailwind)

Keep it simple and production-ready