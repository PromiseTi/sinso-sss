// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '星硕',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'sinso',
      logo: {
        alt: 'My Site Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          label: 'DOCS',
          position: 'right',
          to: 'docs/Docs/web2',
          // items: [
          //   {
          //     label: 'From WEB2.0to WEB3.0',
          //     to: 'docs/Docs/web2',
          //   },
          //   {
          //     label: 'Why is Filecoin important',
          //     to: 'docs/Docs/what',
          //   },
          //   {
          //     label: 'What is SINSO',
          //     to: 'docs/Docs/why',
          //   },
          // ],
        },
        {
          label: 'Infrastructure',
          position: 'right',
          to: 'docs/Docs/Infrastructure',
        },
        // {
        //   label: 'Getway',
        //   position: 'right',
        //   to: 'docs/content/getway',
        // },
        // {
        //   label: 'DAPP',
        //   position: 'right',
        //   to: 'docs/content/dapp',
        // },
        // {
        //   label: 'Donors Network',
        //   position: 'right',
        //   to: 'docs/content/donorsNetwork',
        // },
        // {
        //   label: 'DAC',
        //   position: 'right',
        //   to: 'docs/content/dac',
        // },
        // {
        //   label: '专属学习文档ggg',
        //   position: 'right',
        //   items: [
        //     {
        //       label: '教程1',
        //       to: 'docs/css/css-intro',
        //     },
        //     {
        //       label: '教程2',
        //       to: 'docs/react/react-intro',
        //     },
        //   ],
        // },
        {
          href: 'https://github.com/sinsoio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
}

module.exports = config
