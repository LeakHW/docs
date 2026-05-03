# Universal Tools Guide

Universal tools are self-contained modules that can be enabled across any platform supported by Leak. This guide explains how to create, register, and manage them.

---

## **Tool Structure**

Every universal tool resides in `src/universal/tools/` and typically consists of:

- **`tool_id.js`**: The main logic and registration.
- **`tool_id.html`** (Optional): UI template.
- **`tool_id.css`** (Optional): Tool-specific styling.

---

## **How to Create a New Tool**

### **1. Logic & Registration**

Use `window.Leak.registerTool(id, callback)` to define your tool's behavior. The callback is triggered whenever the tool is toggled.

```javascript
// my_tool.js
(function () {
  if (window.Leak) {
    window.Leak.registerTool("my_tool", (isEnabled) => {
      if (isEnabled) {
        window.Leak.log("My Tool enabled!");
        // Initialize tool (inject UI, start observers, etc.)
      } else {
        window.Leak.log("My Tool disabled.");
        // Cleanup (remove UI, disconnect observers, etc.)
      }
    });
  }
})();
```

### **2. Loading UI Templates**

Tools can dynamically fetch their HTML templates from the extension.

```javascript
const response = await fetch(
  chrome.runtime.getURL("universal/tools/my_tool/my_tool.html"),
);
const html = await response.text();
```

---

## **Global Tool Manager API**

The `window.Leak` object provides several methods for interacting with the tool system:

- **`registerTool(id, toggleFn)`**: Registers a tool implementation.
- **`enableTool(id, config)`**: Makes a tool available on the current site.
- **`toggleTool(id, state)`**: Programmatically toggles a tool and saves state.
- **`log/warn/error/debug(msg, ...args)`**: Centralized, styled console logging.
- **`registerMenuInjection(options)`**: Injects a Leak button into a site's dynamic menu.

---

## **Available Universal Tools**

| Tool ID                 | Name           | Category   | Description                                                                       |
| :---------------------- | :------------- | :--------- | :-------------------------------------------------------------------------------- |
| `leak_menu`             | Leak Menu      | -          | The main control center.                                                          |
| `chatbot`               | AI Assistant   | AI         | Homework helper powered by Tye AI.                                                |
| `scientific_calculator` | Calculator     | Helpers    | A full scientific calculator.                                                     |
| `text_selector`         | Text Selector  | Helpers    | Bypasses selection/copy restrictions.                                             |
| `dev_info`              | DOM Info       | Debug      | Shows element metadata on hover.                                                  |
| `data_collector`        | Data Collector | Automation | Gathers question data for database. **(Requires site-specific selector editing)** |
