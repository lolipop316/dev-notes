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

<!-- Info Card Stub Example -->
<div class="info-card">
  <h2>Security+ Study Log</h2>
  <p>Tracking daily progress, labs, and artifacts.</p>
</div>

<style>
  .info-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    max-width: 300px;
    margin: 10px;
    transition: all 0.3s ease-in-out;
  }

  .info-card:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 14px rgba(0,0,0,0.15);
  }

  /* Responsive layout */
  @media (max-width: 600px) {
    .info-card {
      max-width: 90%;
      margin: 10px auto;
    }
  }
</style>

- Result: Responsive info card + hover effect working.
