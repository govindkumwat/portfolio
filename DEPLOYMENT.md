# Deployment Guide

Your portfolio is ready to deploy! Here's how to get it live on Vercel (free hosting for Next.js apps).

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `portfolio` or any name you prefer
   - Don't initialize with README (we already have code)
   - Click "Create repository"

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete
8. Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables
Currently, your portfolio doesn't require any environment variables. If you add features that need them later (like a contact form API), add them in:
- Vercel Dashboard → Project → Settings → Environment Variables

## Post-Deployment Checklist
- [ ] Verify all sections load correctly
- [ ] Test animations and interactions
- [ ] Check mobile responsiveness
- [ ] Test contact form (if applicable)
- [ ] Update LinkedIn/resume with portfolio link

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Animations Not Working
- Clear browser cache
- Check browser console for errors

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

## Your Portfolio URL
After deployment, your portfolio will be accessible at:
- **Vercel URL**: `https://[your-project-name].vercel.app`
- **Custom Domain**: Configure in Vercel settings

---

**Need Help?** 
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
