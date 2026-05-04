import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leak Docs",
  description: "The documentation for LeakHW",
  base: '/docs/',

  head: [
    ['link', { rel: 'icon', href: 'https://rawcdn.githack.com/LeakHW/.github/refs/heads/main/assets/leakhw.png'}]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developer', link: '/developer/' },
      { text: 'User guide', link: '/user-guide/'}
    ],

    sidebar: {
      '/developer/': [
        {
          text: 'Developer',
          items: [
            { text: 'Making tools', link: '/developer/tools' },
            { text: 'UI Profiles', link: '/developer/ui' },
            { text: 'Adding a website', link: '/developer/add-website'},
            { text: 'Set up a website', link: '/developer/setup-website'},
            { text: 'AI Compatiability', link: '/developer/ai'},
            { text: 'Developer menu', link: '/developer/developer-tools'}
          ]
        }
      ],
      '/user-guide/': [
        {
          text: 'User Guide',
          items: [
            { text: 'The Menu', link: '/user-guide/the-menu' },
            { text: 'UI Profiles', link: '/user-guide/uiprofiles' },
            { text: 'Tools', link: '/user-guide/tools'},
            { text: 'AI Features', link: '/user-guide/ai'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LeakHW' }
    ]
  }
})