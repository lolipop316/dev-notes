# UI Stub Update — Info Card Component

## Issue
Current stub breaks layout on small screens (not responsive).

## Plan
Add hover transition and responsive Flexbox layout for mobile.

## Implementation Steps
1. Convert container to `display: flex; flex-wrap: wrap;`
2. Add media query `@media (max-width: 600px)` to stack cards vertically.
3. Add hover transition:
   ```css
   .info-card:hover {
       transform: scale(1.02);
       box-shadow: 0 4px 10px rgba(0,0,0,0.15);
       transition: all 0.3s ease-in-out;
   }
Test on mobile viewport in browser dev tools.

Result
- Layout now adapts properly to screen size.
- Hover transition improves int
