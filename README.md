# robopixelstudio.com

The RoboPixel Studio website. It's a plain static site (HTML, CSS and a little JavaScript), with no build step, so GitHub Pages can serve it as-is.

```
index.html        the page
styles.css        all styling
main.js           mobile menu + contact form
404.html          "page not found" page
favicon.svg       browser-tab icon
assets/           screenshot + social-share image
CNAME             tells GitHub Pages to use robopixelstudio.com
.nojekyll         tells GitHub Pages not to process the files
robots.txt, sitemap.xml
```

To preview locally, open `index.html` in a browser.

## 1. Put it on GitHub

**Privacy tip:** a public repo shows the account that owns it. To keep the site from being linked to you personally, create a GitHub **organization** (free) called something like `robopixelstudio` and put the repo there. Also turn on "Keep my email addresses private" in GitHub's email settings so commits don't show your personal email.

1. Create a new **public** repository (for example `robopixelstudio/website`).
2. Upload everything in this folder, including the hidden `.nojekyll` file. The easiest way is "Add file → Upload files" on GitHub, or with git:
   ```
   git init
   git add .
   git commit -m "RoboPixel Studio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-ORG/website.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under "Build and deployment", pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. Still on that page, **Custom domain** should already show `robopixelstudio.com` (from the CNAME file). If not, type it in and Save.

## 2. Point the domain at GitHub (Spaceship)

In Spaceship, open robopixelstudio.com → **DNS records**. Delete any existing parking/forwarding records for `@` and `www`, then add:

| Type  | Host | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| AAAA  | @    | 2606:50c0:8000::153 |
| AAAA  | @    | 2606:50c0:8001::153 |
| AAAA  | @    | 2606:50c0:8002::153 |
| AAAA  | @    | 2606:50c0:8003::153 |
| CNAME | www  | YOUR-ORG.github.io |

Replace `YOUR-ORG` with the GitHub organization or username that owns the repo. Leave any **MX** records (email) alone.

DNS can take from a few minutes up to a day. When GitHub's Pages settings say the domain is verified, tick **Enforce HTTPS**.

Also recommended: in GitHub, verify the domain under **Settings → Pages → Verified domains** (on the organization or account), so nobody else can claim it on GitHub.

## 3. Turn on the contact form

GitHub Pages can't send email by itself, so the form uses [Formspree](https://formspree.io) (free plan: 50 messages a month).

1. Sign up at formspree.io (use hello@robopixelstudio.com or whichever inbox you want messages sent to).
2. Create a new form. It gives you an ID like `xyzabcde`.
3. In `index.html`, find `https://formspree.io/f/YOUR_FORM_ID` and replace `YOUR_FORM_ID` with your ID.
4. Commit the change. Send yourself a test message.

Until step 3 is done, the form won't work, but the email link above it will.

## 4. Email address

The site lists **hello@robopixelstudio.com**. Set up email forwarding in Spaceship so messages to that address reach your existing inbox.

## Editing later

- Text: edit `index.html`.
- Colors: the variables at the top of `styles.css` (`--amber`, `--teal`, `--bg`, …).
- The site uses Google Fonts (Space Grotesk and JetBrains Mono) loaded from fonts.googleapis.com.
