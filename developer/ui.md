# UI Profiles & Stylesheets

UI Profiles allow you to create platform-wide themes (e.g., Dark Mode, Blue Sky) that users can switch between using the Leak Menu.

---

## **How to Create a UI Profile**

### **1. Create a CSS File**
Create a new stylesheet in the platform's `profiles/` directory (e.g., `src/sparx/maths/profiles/dark_mode.css`).

### **2. Define Your Styles**
Use `!important` where necessary to ensure your styles override the platform's default CSS.

```css
/* dark_mode.css */
body {
    background-color: #121212 !important;
    color: #ffffff !important;
}

/* Custom button styles */
button {
    border-color: #333 !important;
}
```

### **3. Register in `config.js`**
Add your new profile to the `profiles` array in the platform's `config.js` file.

```javascript
profiles: [
    {
        id: 'dark_mode',
        label: 'Night Mode',
        description: 'A beautiful dark theme for late-night studying.',
        stylesheets: ['sparx/maths/profiles/dark_mode.css']
    }
]
```

### **4. Update `manifest.json`**
All profile stylesheets must be declared in the `web_accessible_resources` section of `manifest.json` to allow the extension to inject them.

```json
"web_accessible_resources": [
  {
    "resources": [
      "sparx/maths/profiles/dark_mode.css"
    ],
    "matches": ["*://maths.sparx-learning.com/*"]
  }
]
```

