# Quick Start Guide - Wood Mark Interior Website

## Welcome! 👋

Your professional interior design website is ready! Follow these simple steps to launch it.

## Step 1: Update Your Logo (2 minutes)

**Location**: `index.html`, Line 60

Find this:
```html
<div class="logo-placeholder">[LOGO]</div>
```

Replace with your logo:
```html
<div class="logo-placeholder">
    <img src="assets/images/logo.png" alt="Wood Mark Logo" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

Or create a text logo:
```html
<div class="logo-placeholder" style="font-size: 1.2rem; color: white;">WM</div>
```

---

## Step 2: Add Your Images (10 minutes)

### Required Images:
1. **Logo** → `assets/images/logo.png`
2. **Hero/Home Image** → `assets/images/hero.jpg`
3. **About Image** → `assets/images/about.jpg`
4. **Portfolio Images (9)** → `assets/images/portfolio/1.jpg` to `9.jpg`

### Image Replacement in HTML:

**Hero Image** (index.html, around line 75):
```html
<!-- Replace -->
<div class="image-placeholder-large">Interior Design Image</div>

<!-- With -->
<img src="assets/images/hero.jpg" alt="Modern Interior Design" class="fade-in-right">
```

**About Image** (index.html, around line 115):
```html
<!-- Replace -->
<div class="image-placeholder-medium">Company Image</div>

<!-- With -->
<img src="assets/images/about.jpg" alt="Wood Mark Interior Team" class="fade-in-left">
```

**Portfolio Images** (index.html, around line 220):
```html
<!-- For each portfolio item, replace -->
<div class="image-placeholder-portfolio">Portfolio 1</div>

<!-- With -->
<img src="assets/images/portfolio/1.jpg" alt="Modern Living Room Design">
```

---

## Step 3: Update Contact Information (5 minutes)

**File**: `index.html`

### Find and Update:

**Phone Number** (Around line 280):
```html
<!-- Find -->
<a href="https://wa.me/919876543210?text=Hi%20Wood%20Mark%20Interior">

<!-- Update to your WhatsApp number -->
<a href="https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER?text=Hi%20Wood%20Mark%20Interior">
```

**Email** (Around line 272):
```html
<!-- Find -->
<a href="mailto:info@woodmarkinterior.com">info@woodmarkinterior.com</a>

<!-- Update to -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

**Address** (Already set to your specifications):
```html
#224, A' Hebbal Industrial Area, Mysore
```
(This is already correct! ✅)

---

## Step 4: Update Social Media Links (5 minutes)

**File**: `index.html`, Footer section (around line 336)

```html
<!-- Instagram -->
<a href="https://www.instagram.com/yourprofile" target="_blank">
    <i class="fab fa-instagram"></i>
</a>

<!-- Facebook -->
<a href="https://www.facebook.com/yourpage" target="_blank">
    <i class="fab fa-facebook"></i>
</a>

<!-- YouTube -->
<a href="https://www.youtube.com/@yourchannel" target="_blank">
    <i class="fab fa-youtube"></i>
</a>

<!-- Pinterest -->
<a href="https://www.pinterest.com/yourprofile" target="_blank">
    <i class="fab fa-pinterest"></i>
</a>
```

---

## Step 5: Test Everything Locally (10 minutes)

### Option A: Simple (No Installation)
1. Right-click `index.html`
2. Select "Open with" → Choose your browser
3. Test all links and buttons

### Option B: Using VS Code (Recommended)
1. Open the `wood` folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Website opens at `http://localhost:5500`

### What to Test:
- ✅ All navigation links work
- ✅ Images load correctly
- ✅ Animations are smooth
- ✅ Mobile responsive (resize browser)
- ✅ Contact form shows (button test)
- ✅ WhatsApp button works
- ✅ Social media links work

---

## Step 6: Deploy to Internet (15 minutes)

### EASIEST OPTION: Netlify (Recommended)

1. **Visit**: https://www.netlify.com

2. **Sign Up**: Click "Sign up" (use GitHub/Email)

3. **Deploy**:
   - Click "Add new site"
   - Drag & drop your entire `wood` folder
   - Wait a few seconds...
   - Your site is LIVE! 🎉

4. **Get Your URL**:
   - Netlify gives you a temporary URL like: `https://optimistic-fermat-abc123.netlify.app`
   - Share this with clients!

5. **Custom Domain** (Optional):
   - Click "Domain settings"
   - Add your own domain (costs $10-15/year)
   - Follow DNS setup steps

### Alternative Options:

**Vercel** (https://vercel.com)
- Similar to Netlify
- GitHub integration
- Free tier available

**GitHub Pages** (Free)
1. Create GitHub account
2. Create repository: `yourusername.github.io`
3. Upload your files
4. Site is live at: `https://yourusername.github.io`

---

## Step 7: Make Form Actually Send Emails (10 minutes) - Optional

Currently, the form shows a success message but doesn't send emails. To make it work:

### Option A: Formspree (Easiest)

1. **Visit**: https://formspree.io
2. **Sign up** with your email
3. **Create form**: Click "Create"
4. **Add your email** where you want notifications
5. **Copy the endpoint** from the form
6. **Edit `index.html`**, Find the contact form (around line 290):

```html
<!-- Change from -->
<form class="contact-form slide-in-right" id="contactForm">

<!-- To -->
<form class="contact-form slide-in-right" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with the ID from Formspree.

7. **Add name attribute to inputs**:
```html
<input type="text" placeholder="Your Name" name="name" required>
<input type="email" placeholder="Your Email" name="email" required>
<input type="tel" placeholder="Your Phone" name="phone">
<textarea placeholder="Your Message" name="message" rows="5" required></textarea>
```

### Option B: Netlify Forms (If hosted on Netlify)

Add `netlify` attribute to form:
```html
<form class="contact-form slide-in-right" netlify>
    <!-- inputs here -->
</form>
```

Netlify automatically collects submissions in your dashboard!

---

## Step 8: Add Google Analytics (Optional)

Want to track visitors?

1. **Visit**: https://analytics.google.com
2. **Sign in** with Google account
3. **Create property**: Enter your website URL
4. **Get tracking code**: Copy the entire script
5. **Paste** in `index.html` head section (before `</head>`):

```html
<head>
    <!-- ... existing meta tags and links ... -->
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
</head>
```

---

## Common Issues & Solutions

### Images Not Showing?
- ✅ Make sure image files are in: `assets/images/`
- ✅ Use correct file names in src paths
- ✅ Check file extensions match (jpg, png, etc.)

### Website Looks Different on Mobile?
- ✅ This is normal! It's responsive
- ✅ Test with browser's mobile view (F12, then phone icon)
- ✅ Everything should be readable and clickable

### Animations Not Working?
- ✅ Supported browsers: Chrome, Firefox, Safari, Edge
- ✅ Check browser console (F12) for errors
- ✅ Try a different browser

### Form Not Showing Success Message?
- ✅ Open browser console (F12)
- ✅ Look for JavaScript errors
- ✅ Make sure `js/main.js` is linked

---

## File Checklist

Before deploying, make sure you have:

```
wood/
├── ✅ index.html (main file)
├── ✅ css/styles.css (styling)
├── ✅ js/main.js (interactions)
├── ✅ assets/images/ (all your images)
├── ✅ README.md (documentation)
├── ✅ DEPLOYMENT.md (detailed guide)
└── ✅ .github/copilot-instructions.md (dev notes)
```

---

## Configuration Quick Reference

| Item | Location | Current Value |
|------|----------|----------------|
| Phone | index.html:270 | +91 9876543210 |
| Email | index.html:274 | info@woodmarkinterior.com |
| Address | index.html:263 | #224, A' Hebbal Industrial Area, Mysore |
| Logo | index.html:60 | [LOGO] placeholder |
| Hero Image | index.html:75 | Placeholder |
| About Image | index.html:115 | Placeholder |
| Portfolio Images | index.html:220+ | 9 Placeholders |
| Instagram | index.html:336 | https://www.instagram.com |
| Facebook | index.html:340 | https://www.facebook.com |
| YouTube | index.html:344 | https://www.youtube.com |
| Pinterest | index.html:348 | https://www.pinterest.com |

---

## Next Steps Timeline

| Time | Task | Duration |
|------|------|----------|
| Now | Update logo | 2 min |
| 5 min | Add images | 10 min |
| 15 min | Update contact info | 5 min |
| 20 min | Test locally | 10 min |
| 30 min | Deploy to web | 15 min |
| 45 min | Set up domain (optional) | 20 min |
| 65 min | Setup analytics (optional) | 15 min |

**Total Time: 45 minutes to live website! ⚡**

---

## Your Website Features ✨

✅ **Fully Responsive** - Works on all devices
✅ **Modern Animations** - Smooth transitions and reveals
✅ **SEO Optimized** - Better search visibility
✅ **Fast Loading** - No backend, instant load
✅ **Professional Design** - White & beige theme
✅ **Mobile Menu** - Touch-friendly navigation
✅ **6 Services** - Easy to customize
✅ **9 Portfolio Items** - Showcase your work
✅ **Contact Form** - Customer inquiries
✅ **WhatsApp Direct** - Instant communication
✅ **Social Links** - All platforms integrated
✅ **Back to Top** - Easy navigation

---

## Need Help?

- **Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Code Notes**: See `.github/copilot-instructions.md`
- **Configuration**: See `config.example.md`

---

## Final Checklist Before Launch

- [ ] Logo added
- [ ] All images added
- [ ] Phone number updated
- [ ] Email updated
- [ ] Social links updated
- [ ] Website tested locally
- [ ] Deployed to hosting
- [ ] Domain configured (if custom)
- [ ] Analytics setup (optional)
- [ ] Form tested (if integrated)

---

## Congratulations! 🎉

Your professional interior design website is ready to serve clients!

**Share your website URL with:**
- Clients
- Social media
- Business cards
- Email signatures
- Google My Business

---

**Questions?** Refer to the detailed guides or contact your hosting provider.

**Happy hosting!** 🚀

---

*Wood Mark Interior Website*
*Deployment Ready • No Backend • Modern Design • Professional*
*Created December 2025*
