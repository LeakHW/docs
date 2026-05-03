<p align="center">
  <img width="200" height="200" alt="leakhw" src="https://raw.githubusercontent.com/LeakHW/.github/refs/heads/main/assets/leakhw.png" />
  <h1 align="center">Leak Developer Wiki</h1>
  <p align="center">A comprehensive guide to building and integrating with the Leak Extension</p>
</p>

---

Welcome to the **Leak Developer Wiki**! This documentation is designed to help you understand the architecture of the extension and guide you through the process of adding new features or platforms.

---

### **Core Architecture**

Leak is built on a modular "Universal Tool" framework.

- **The Core Manager**: `src/universal/tools.js` is the heart of the extension. It manages tool registration, cross-tab synchronization, and the UI Profile system.
- **Universal Tools**: Located in `src/universal/tools/`, these are self-contained modules (like the `scientific_calculator` or `chatbot`) that can be enabled on any supported platform.
- **Platform Modules**: Folders like `src/sparx/` or `src/seneca/` contain the platform-specific logic and configurations that bridge the universal tools with the actual website.