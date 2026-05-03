# Adding a website to Leak

Integrating a new platform into the Leak Extension is a simple 4-step process.

---

## **Step 1: Create the Directory**
Create a new folder in `src/` named after the platform (e.g., `src/mywebsite/`).

## **Step 2: Add Configuration & Logic**
Create the following files based on the [[Platform-Setup]] templates:
- `config.js`: Define the tools and UI profiles.
- `index.js`: The entry point for initialization.
- `index.css`: Any base styles needed for the platform.
- `universal.js` (Optional): For logic that applies across all subdomains of the platform.

## **Step 3: Update `manifest.json`**
Register your new scripts in the `content_scripts` array.

```json
{
  "matches": ["*://*.mywebsite.com/*"],
  "js": [
    "universal/tools.js",
    "mywebsite/config.js",
    "mywebsite/index.js"
  ],
  "css": ["mywebsite/index.css"],
  "run_at": "document_idle"
}
```

## **Step 4: Initialize the System**
Ensure you call `window.Leak.init()` at the top of your `index.js` or in a platform-wide `universal.js`. This starts the profile listener and storage synchronization.

```javascript
if (window.Leak) {
    window.Leak.init();
}
```

