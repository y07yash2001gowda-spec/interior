# Wood Mark Interior - Professional Interior Design Website

## Project Overview

A modern, fully responsive website for **Wood Mark Interior**, a premium interior design company. Built with HTML5, CSS3, and vanilla JavaScript - no backend required, deployment-ready.

## Features

### 🎨 Design & Aesthetics
- **Modern Color Scheme**: White and beige theme with warm accent colors
- **Professional Typography**: Playfair Display for headings, Lato for body text
- **Responsive Layout**: Fully responsive on all devices (desktop, tablet, mobile)
- **Eye-Catching Animations**: Smooth scroll animations, text animations, transitions

### 📑 Pages & Sections

1. **Home Page**
   - Hero section with call-to-action button
   - Modern gradient backgrounds
   - Fade-in animations on page load

2. **About Us**
   - Company description
   - Single image placeholder (ready for your image)
   - Statistics section with counter animations
   - Professional team messaging

3. **Services**
   - 6 service categories with icons
   - Residential Design
   - Commercial Spaces
   - Luxury Interiors
   - Space Planning
   - Lighting Design
   - Color Consultation
   - Hover animations and transitions

4. **Portfolio**
   - 9 portfolio items in a responsive grid
   - Image overlays with project details
   - Smooth hover effects
   - Staggered animation on scroll

5. **Contact**
   - Direct contact information
   - Company address (#224, A' Hebbal Industrial Area, Mysore)
   - WhatsApp direct messaging button
   - Contact form
   - Social media icons (Instagram, Facebook, YouTube, Pinterest)

6. **Footer**
   - Quick links
   - Social media integration
   - Company information
   - Copyright and legal links

### 🎬 Animations & Effects

- **Scroll Animations**: Elements animate in as they come into view
- **Text Animations**: Fade-in and slide-in effects on text elements
- **Hover Effects**: All interactive elements have smooth transitions
- **Staggered Animations**: Grid items animate with slight delays
- **Parallax Effects**: Subtle depth effects on images
- **Shimmer Effect**: Placeholder images have shimmer animation
- **Back-to-Top Button**: Auto-appears when scrolling down

### 🔍 SEO Optimization

- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Proper heading hierarchy (H1, H2, H3)
- Semantic HTML structure
- Mobile-friendly design
- Fast loading performance
- Structured data ready (can add schema.org markup)

### 📱 Responsive Features

- Mobile hamburger menu
- Touch-friendly buttons
- Flexible grid layouts
- Optimized font sizes
- Proper viewport settings
- Mobile-first CSS design

## File Structure

```
wood/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css         # Complete styling with animations
├── js/
│   └── main.js            # JavaScript for interactivity and animations
├── assets/
│   └── images/            # Directory for your images
└── README.md              # This file
```

## Getting Started

### 1. Update Logo
Replace the "[LOGO]" placeholder in the navigation with your logo:
```html
<div class="logo-placeholder">[LOGO]</div>
```

### 2. Add Images
Place your images in the `assets/images/` folder and replace the placeholder divs:
- Home hero image
- About Us image
- Portfolio images (9 required)

Current placeholders:
- `.image-placeholder-large` - Home hero image
- `.image-placeholder-medium` - About Us image
- `.image-placeholder-portfolio` - Portfolio images (9 items)

### 3. Update Contact Information
In the contact section, update:
- Phone number (WhatsApp link)
- Email address
- Company address (already updated to your specifications)

### 4. Customize Colors (Optional)
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #f5f5f0;      /* Light background */
    --secondary-color: #e8d5c4;    /* Beige accent */
    --accent-color: #8b7355;       /* Brown accent */
    --dark-color: #2c2c2c;         /* Dark text */
    --light-color: #ffffff;        /* White */
}
```

### 5. Social Media Links
Update social media URLs in the footer:
- Instagram
- Facebook
- YouTube
- Pinterest

## Deployment

This website is ready for deployment on any static hosting service:

### Recommended Hosting Options:
- **Netlify** (recommended - free tier available)
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- **Traditional Web Hosting** (Apache, Nginx)

### Deployment Steps:

1. **Upload Files**: Upload all files to your hosting service
   - Maintain the folder structure (css/, js/, assets/, index.html)
   
2. **Set Index Page**: Ensure `index.html` is set as the default index

3. **SSL Certificate**: Ensure HTTPS is enabled

4. **Domain Setup**: Point your domain to the hosting service

### For Netlify:
```
1. Connect your Git repository (or drag & drop files)
2. Set build command: (leave empty - static site)
3. Set publish directory: . (root)
4. Deploy
```

## Performance Features

- **Minimal HTTP Requests**: All CSS and JS in files (can be inline if needed)
- **Optimized Images**: Use compressed images for best performance
- **Fast Loading**: No backend, only static files
- **Smooth Animations**: GPU-accelerated CSS animations
- **Lazy Loading**: Ready for image lazy loading (included in JS)

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips

### Change Accent Color
Update the `--accent-color` variable and all color-related values in CSS.

### Modify Animation Speed
Change `--transition-duration` in CSS (default: 0.6s):
```css
:root {
    --transition-duration: 0.8s; /* Slower animations */
}
```

### Add More Services/Portfolio Items
Copy and paste service card or portfolio item HTML and update content.

### Customize Fonts
Replace font imports in HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS font-family declarations.

## SEO Checklist

- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Proper heading hierarchy
- ✅ Alt text ready for images
- ✅ Social media integration
- ✅ Contact information
- ✅ Semantic HTML

### To Further Improve SEO:
1. Add alt text to all images: `<img alt="Modern living room design">`
2. Create XML sitemap
3. Add Google Analytics
4. Add Google Search Console
5. Create robots.txt
6. Implement schema.org structured data

## Contact Form

The contact form currently shows a success message. To make it functional:

1. **Using Formspree.io**:
   - Sign up at formspree.io
   - Update form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

2. **Using Netlify Forms**:
   - Add `netlify` attribute to form
   - Netlify handles submissions automatically

3. **Using Third-party Service**:
   - EmailJS
   - Basin
   - Form Submission

## Analytics & Tracking

Add Google Analytics to `<head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Maintenance

- **Regular Updates**: Update contact information as needed
- **Image Optimization**: Compress images before uploading
- **Content Updates**: Update portfolio and services regularly
- **Backup**: Keep regular backups of your files

## License & Credits

This website template is created specifically for Wood Mark Interior.

### Libraries Used:
- **Font Awesome** (Icon library)
- **Google Fonts** (Typography)

## Support & Troubleshooting

### Issue: Images not showing
- Ensure images are in `assets/images/` folder
- Check file names match in img src attributes
- Clear browser cache

### Issue: Animations not working
- Check browser supports CSS animations
- Ensure styles.css is linked correctly
- Check JavaScript console for errors

### Issue: Form not submitting
- Set up form handler (Formspree, Netlify, etc.)
- Check form action attribute
- Verify all input names are correct

## Next Steps

1. ✅ Add your logo
2. ✅ Add company images and portfolio images
3. ✅ Set up form submissions
4. ✅ Add Google Analytics
5. ✅ Deploy to hosting service
6. ✅ Set up domain name
7. ✅ Add SSL certificate
8. ✅ Monitor performance

## Version

- **Version**: 1.0
- **Created**: December 2025
- **Status**: Deployment Ready ✅

---

**Website Created For**: Wood Mark Interior
**Company Address**: #224, A' Hebbal Industrial Area, Mysore

For questions or customizations, refer to the documentation or contact your web developer.
