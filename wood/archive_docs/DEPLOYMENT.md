# Deployment Guide - Wood Mark Interior Website

## Quick Start Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign Up**
   - Go to https://www.netlify.com
   - Click "Sign up"
   - Choose "GitHub" or "Email" signup

2. **Deploy Your Site**
   - Click "Add new site" > "Deploy manually"
   - Drag and drop your entire project folder
   - OR connect your Git repository

3. **Site is Live!**
   - Netlify generates a temporary URL
   - Your site is deployed in seconds

4. **Custom Domain**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow DNS configuration steps

### Option 2: Vercel (Alternative)

1. **Sign Up**: https://vercel.com/signup

2. **Deploy**
   - Click "Add New Project"
   - Import your Git repository or upload files
   - Click "Deploy"

3. **Custom Domain**: Configure in project settings

### Option 3: GitHub Pages (Free)

1. **Create Repository**
   ```
   Go to github.com/new
   Create new repository named: yourusername.github.io
   Upload all files
   ```

2. **Site is Live**
   ```
   Your site: https://yourusername.github.io
   ```

3. **Custom Domain**
   - In repository settings, go to "Pages"
   - Add custom domain
   - Update DNS records with your registrar

### Option 4: Traditional Web Hosting

#### cPanel Hosting (GoDaddy, Hostinger, etc.)

1. **Upload via FTP**
   ```
   1. Connect to FTP (credentials from hosting provider)
   2. Navigate to public_html folder
   3. Upload all files maintaining folder structure
   ```

2. **Set Index File**
   ```
   In cPanel File Manager:
   - Right-click index.html
   - Select "Make Primary Index File"
   ```

3. **Site Access**
   ```
   https://yourdomain.com
   ```

#### Linux Server (Apache/Nginx)

```bash
# SSH into your server
ssh user@yourdomain.com

# Navigate to web root
cd /var/www/html  # or /home/username/public_html

# Upload files (via SCP or FTP)
scp -r wood/* user@yourdomain.com:/var/www/html/

# Set proper permissions
chmod 755 /var/www/html
chmod 644 /var/www/html/*

# Restart web server
sudo systemctl restart apache2  # for Apache
# OR
sudo systemctl restart nginx    # for Nginx
```

## Pre-Deployment Checklist

- [ ] All placeholder images replaced with real images
- [ ] Logo updated
- [ ] Contact information verified
- [ ] WhatsApp phone number updated
- [ ] Email address updated
- [ ] Company address confirmed (#224, A' Hebbal Industrial Area, Mysore)
- [ ] Social media links updated
- [ ] Form submission set up (if needed)
- [ ] All links tested and working
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] SEO meta tags verified

## Post-Deployment Steps

### 1. Verify Website
- [ ] Visit your domain in browser
- [ ] Test all navigation links
- [ ] Test contact form (if connected)
- [ ] Test WhatsApp button
- [ ] Verify all images load
- [ ] Test animations on different devices
- [ ] Check mobile responsiveness
- [ ] Verify all social media links work

### 2. Add SSL Certificate
Most hosting providers auto-include SSL/HTTPS. Verify:
- Look for green lock icon in browser address bar
- All pages load with HTTPS protocol

### 3. Set Up Analytics (Google Analytics)

1. **Get Google Analytics Code**
   ```
   1. Go to https://analytics.google.com
   2. Sign in with Google account
   3. Click "Start measuring"
   4. Enter website information
   5. Copy the tracking code
   ```

2. **Add to Website**
   - Open `index.html`
   - Paste code before closing `</head>` tag
   - Save and re-deploy

### 4. Search Engine Submission

**Google Search Console**
```
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap (automatic or custom)
```

**Bing Webmaster Tools**
```
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap
```

### 5. Create Sitemap (Optional but Recommended)

If your hosting doesn't auto-generate, create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-12-12</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#about</loc>
    <lastmod>2025-12-12</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#services</loc>
    <lastmod>2025-12-12</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#portfolio</loc>
    <lastmod>2025-12-12</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#contact</loc>
    <lastmod>2025-12-12</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

Upload this file to your root directory.

### 6. Create robots.txt (Optional)

Create `robots.txt` in root:

```
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://yourdomain.com/sitemap.xml
```

## Performance Optimization

### Image Optimization
- Compress images before uploading
- Use modern formats (WebP)
- Recommended tools:
  - TinyPNG (tinypng.com)
  - ImageOptim
  - FileZilla for batch compression

### Caching Headers (for traditional hosting)

If using Apache, add to `.htaccess`:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Minification
- CSS and JS are already optimized
- No additional minification needed for production

## Domain Registration & Setup

### 1. Register Domain
- GoDaddy
- Namecheap
- Google Domains
- AWS Route 53

### 2. Update DNS Records

#### For Netlify:
```
Replace default nameservers with Netlify DNS:
- dns1.p01.nsone.net
- dns2.p01.nsone.net
- dns3.p01.nsone.net
- dns4.p01.nsone.net
```

#### For GitHub Pages:
```
A Records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

CNAME (www subdomain):
yourusername.github.io
```

#### For Traditional Hosting:
- Check hosting provider documentation
- Usually points to hosting provider's DNS servers

### 3. SSL/HTTPS Setup

**Netlify/Vercel**: Automatic (Let's Encrypt)

**Traditional Hosting**:
1. cPanel: Auto SSL (usually included)
2. Linux: Use Certbot:
   ```bash
   sudo apt-get install certbot python3-certbot-apache
   sudo certbot --apache -d yourdomain.com
   ```

## Monitoring & Maintenance

### Regular Checks
- Weekly: Check website loads correctly
- Monthly: Monitor analytics and performance
- Quarterly: Update content and portfolio
- Annually: Renew SSL cert and domain registration

### Tools to Use
- **Google Analytics**: Track visitors and behavior
- **Google Search Console**: Monitor search performance
- **GTmetrix**: Performance monitoring
- **Pingdom**: Uptime monitoring
- **BrokenLinkCheck**: Check for broken links

## Troubleshooting Deployment

### Issue: Files uploaded but website shows blank

**Solution:**
- Check that `index.html` is in root directory
- Verify folder structure is maintained
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Issue: 404 errors on some pages

**Solution:**
- Single page app uses # routing (should work on all hosts)
- Check all href links use # format (#about, #services, etc.)
- Verify no typos in section IDs

### Issue: Images not showing

**Solution:**
- Check image paths are relative: `assets/images/`
- Verify image files are uploaded
- Check file names match exactly (case-sensitive on Linux)
- Use absolute URLs if needed

### Issue: Styles/animations not working

**Solution:**
- Check CSS file is linked correctly
- Verify CSS file path: `css/styles.css`
- Check for CSS conflicts
- Clear browser cache
- Check browser console for 404 errors

### Issue: JavaScript not working

**Solution:**
- Check JS file is linked: `js/main.js`
- Open browser console (F12) to see errors
- Check for JavaScript conflicts
- Verify all required libraries are loaded

## Security Considerations

1. **Keep Software Updated**
   - Update hosting platform
   - Update all dependencies

2. **Use HTTPS** (Encrypted)
   - Essential for trust
   - Auto-enabled on Netlify/Vercel
   - Use Let's Encrypt for traditional hosting

3. **Regular Backups**
   - Download website files regularly
   - Keep local copy of all content
   - Test backup restoration

4. **Privacy Policy** (Add if needed)
   - Create privacy policy page
   - Add link in footer
   - Outline data usage

## Feedback & Analytics

### Key Metrics to Track
- Visitors per month
- Bounce rate
- Most visited pages
- Conversion rate (contact form submissions)
- Device breakdown (mobile vs desktop)
- Traffic sources

### Actions Based on Analytics
- Update poorly performing pages
- Promote high-performing pages
- Improve mobile experience if needed
- Create more content on popular topics

## Version Control (Optional)

Use Git to track changes:

```bash
# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial website deployment"

# Add remote (GitHub)
git remote add origin https://github.com/yourusername/wood-mark.git

# Push to GitHub
git push -u origin main
```

## Support Resources

- **Netlify Support**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **MDN Web Docs**: https://developer.mozilla.org
- **Google Analytics Help**: https://support.google.com/analytics

## Estimated Timeline

- **Preparation**: 1-2 hours
- **Deployment**: 15-30 minutes
- **Verification**: 30 minutes
- **Post-deployment setup**: 1-2 hours

**Total**: 3-5 hours for complete deployment

## Summary

Your Wood Mark Interior website is now ready for deployment! Follow these steps in order:

1. ✅ Prepare all content (images, text, links)
2. ✅ Choose hosting provider
3. ✅ Upload files
4. ✅ Verify website works
5. ✅ Set up domain name
6. ✅ Add analytics
7. ✅ Submit to search engines
8. ✅ Monitor performance

Your website will be live and accessible to customers!

---

**Need Help?** Refer to your hosting provider's documentation or contact their support team.

Good luck with your Wood Mark Interior website launch! 🎉
