# SureDocs - Professional Document Services

## Netlify Deployment Setup

This project is configured for deployment on Netlify with comprehensive SEO optimization.

### Quick Deploy to Netlify

1. **Connect Repository**: Connect your Git repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: Add your Google Analytics ID:
   - `VITE_GA_MEASUREMENT_ID=G-Z7HVXERLP6`

### Build Configuration

The project includes:
- ✅ `netlify.toml` for build configuration
- ✅ `_redirects` for SPA routing
- ✅ Optimized sitemap.xml with Netlify URLs
- ✅ robots.txt with proper directives
- ✅ PWA manifest.json for mobile app experience
- ✅ Google Analytics 4 integration
- ✅ Core Web Vitals monitoring

### SEO Features

- **Google Analytics 4**: Real-time tracking and conversion monitoring
- **Core Web Vitals**: LCP, CLS, FID performance metrics
- **Local Business Schema**: Enhanced search engine visibility
- **PWA Support**: App-like experience with offline capabilities
- **Image Optimization**: Optimized Unsplash images with proper alt text
- **WhatsApp Integration**: Conversion tracking for lead generation

### File Structure

```
├── client/
│   ├── public/
│   │   ├── _redirects           # Netlify SPA routing
│   │   ├── sitemap.xml          # SEO sitemap
│   │   ├── robots.txt           # Search engine directives
│   │   └── manifest.json        # PWA configuration
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── lib/analytics.ts     # Google Analytics integration
│   │   └── hooks/               # Custom React hooks
├── netlify.toml                 # Netlify build configuration
└── README.md                    # This file
```

### Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Contact Information

- **WhatsApp**: +91 92052 53438
- **Service Area**: Delhi NCR
- **Services**: Government documents, Municipal services, Legal & Notary, Tax & Business

---

Built with React, TypeScript, Tailwind CSS, and Framer Motion for SureDocs Professional Document Services.