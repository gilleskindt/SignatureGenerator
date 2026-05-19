# Highsail Signature Generator

A simple email signature builder for [Highsail](https://www.highsail.com/) team members. Fill in your details, preview the signature, and copy it into Gmail, Outlook, or Apple Mail.

## Publish on GitHub Pages (free)

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`.
5. Save. Your site will be live at `https://<username>.github.io/<repo>/`.

> **Logo in emails:** The branded signature references the logo from your published GitHub Pages URL. Deploy the site before sharing signatures so recipients see the logo.

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Form and preview layout |
| `css/style.css` | Dark UI styled with Highsail colors |
| `js/app.js` | Live preview, HTML generation, copy to clipboard |
| `assets/highsail-logo.svg` | Logo used in branded signatures |

## Signature styles

- **Highsail Branded** — Logo footer, divider, and LinkedIn icon
- **Classic** — Name, title, and contact details only (no logo row)
