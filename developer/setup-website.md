# Setting up a website with Leak

Each platform (Sparx, Seneca, etc.) follows a standardized structure using `config.js` and `index.js`.

---

## **1. The `config.js` Template**

This file defines the platform's identity, UI profiles, and available tools.

```javascript
window.LeakConfig = {
    platform: 'My Platform Name',
    menuTitle: 'Leak MyPlatform Menu',
    profiles: [
        { 
            id: 'default', 
            label: 'Default', 
            description: 'The standard interface.', 
            stylesheets: [] 
        }
    ],
    tools: [
        { 
            id: 'chatbot', 
            label: 'AI Assistant', 
            category: 'AI', 
            config: { title: 'Assistant' } 
        },
        { 
            id: 'text_selector', 
            label: 'Text Selector', 
            category: 'Helpers', 
            config: {} 
        }
    ],
    injection: {
        selector: '.platform-menu', // Target element for button injection
        targetText: 'Help',         // Text content to look for
        label: 'Leak Menu'          // Label for the injected button
    }
};
```

---

## **2. The `index.js` Entry Point**

The `index.js` file is responsible for initializing the tools and applying platform-specific logic.

```javascript
(function() {
    if (window.Leak && window.LeakConfig) {
        // Initialize the universal menu
        window.Leak.enableTool('leak_menu', {
            title: window.LeakConfig.menuTitle
        });

        // Enable all tools listed in the config
        window.LeakConfig.tools.forEach(tool => {
            window.Leak.enableTool(tool.id, tool);
        });

        // Perform menu button injection if configured
        if (window.LeakConfig.injection) {
            window.Leak.registerMenuInjection({
                ...window.LeakConfig.injection,
                onClick: () => window.showLeakMenu()
            });
        }

        // Show branding in the console
        window.Leak.showLogo();
    }
})();
```
