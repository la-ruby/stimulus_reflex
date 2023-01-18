export default {
  title: "StimulusReflex",
  description: "Build reactive applications with the Rails tooling you already know and love.",
  ignoreDeadLinks: false,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "StimulusReflex",
    logo: "https://github.com/stimulusreflex/stimulus_reflex/blob/d773570eca0db7875e1e49d22bc03d31ccc2122e/assets/stimulus-reflex-logo.png?raw=true",
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/stimulusreflex/stimulus_reflex' },
      { icon: 'twitter', link: 'https://twitter.com/stimulusreflex' },
      { icon: 'discord', link: 'https://discord.gg/stimulus-reflex' }
    ],
    editLink: {
      pattern: 'https://github.com/stimulusreflex/stimulus_reflex/edit/v3.4-docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Changelog', link: 'https://github.com/stimulusreflex/stimulus_reflex/releases' },
      { text: 'CableReady', link: 'https://cableready.stimulusreflex.com' },
      {
        text: 'v3.4.1',
        items: [
          {
            items: [
              { text: 'v3.4.1', link: 'https://v3-4-docs--stimulusreflex.netlify.app' },
              { text: 'v3.5.0', link: 'https://v3-5-docs--stimulusreflex.netlify.app' },
            ]
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023'
    },
    sidebar: [
      {
        text: "Hello World",
        collapisble: true,
        items: [
          { text: "Welcome", link: "/" },
          { text: "Setup", link: "/hello-world/setup" },
          { text: "Quick Start", link: "/hello-world/quickstart" },
        ]
      },
      {
        text: "Guide",
        collapisble: true,
        items: [
          { text: "Calling Reflexes", link: "/guide/reflexes" },
          { text: "Reflex Classes", link: "/guide/reflex-classes" },
          { text: "Integrating CableReady", link: "/guide/cableready" },
          { text: "Life-cycle", link: "/guide/lifecycle" },
          { text: "Morphs", link: "/guide/morph-modes" },
          { text: "Authentication", link: "/guide/authentication" },
          { text: "Persistence", link: "/guide/persistence" },
          { text: "Useful Patterns", link: "/guide/patterns" },
          { text: "Forms", link: "/guide/working-with-forms" },
        ]
      },
      {
        text: "Appendices",
        collapisble: true,
        items: [
          { text: "Working with Events", link: "/appendices/events" },
          { text: "Testing \(WIP\)", link: "/appendices/testing" },
          { text: "Deployment", link: "/appendices/deployment" },
          { text: "Troubleshooting", link: "/appendices/troubleshooting" },
          { text: "Release History", link: "/appendices/release-history" },
          { text: "Glossary", link: "/appendices/glossary" },
          { text: "Core Team", link: "/appendices/team" },
        ]
      }
    ]
  }
}
