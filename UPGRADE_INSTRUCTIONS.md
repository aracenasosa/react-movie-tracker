# Upgrade Instructions

## Steps to upgrade dependencies for Node.js 18+ compatibility

1. **Delete old dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   ```

2. **Install updated dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Commit and push changes**
   ```bash
   git add .
   git commit -m "upgrade: update to React 18 and React Router v6 for Node.js 18+ compatibility"
   git push
   ```

## Changes Made

### Dependencies Updated:
- React: 16.13.1 → 18.2.0
- React DOM: 16.13.1 → 18.2.0
- React Router DOM: 5.2.0 → 6.8.0
- React Scripts: 3.4.3 → 5.0.1
- Testing libraries updated to compatible versions

### Code Changes:
- **src/index.js**: Updated to React 18 createRoot API
- **src/App.js**: Updated from Switch to Routes, component prop to element prop
- **All route components**: Updated from match props to useParams hook
  - Details.jsx
  - CastCrew.jsx
  - Comment.jsx
  - KnowFor.jsx
  - People.jsx
  - Recommendation.jsx

### Node.js Version:
- Set to 18.x in package.json engines field
- Compatible with Vercel's requirements

## Troubleshooting

If you encounter any issues:

1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules and package-lock.json
3. Run `npm install` again
4. If build fails, check console for specific errors
