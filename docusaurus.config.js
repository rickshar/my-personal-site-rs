// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Richard (Rick) Sharon',
  tagline: 'Technical Writing and Documentation',
  favicon: 'img/creative-writing.png',

  customFields: {
    taglineDescription: 'I write technical documentation for User and Administration Guides, Onboarding Guides, Product Overviews, White Papers, Online Web Help, API User Guides, Installation, Operation, and Maintenance Guides, Integration and deployment Guides, Troubleshooting Guides, Release Notes.',
    future: {
      v4: true,
    },
  },

  // FIXED: Removed the extra 'o' from .io
  url: 'https://rickshar.github.io', 
  baseUrl: '/my-personal-site-rs/',

  // FIXED: Update these to your own info for better deployment
  organizationName: 'rickshar', 
  projectName: 'my-personal-site-rs', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/rickshar/my-personal-site-rs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/creative-writing.png',
        },
        items: [
          {
            to: '/docs/about-me/intro',
            label: 'About Me',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          /*{
            href: 'https://github.com/rickshar/my-personal-site-rs',
            label: 'GitHub',
            position: 'right',
          },*/
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/about-me/intro',
              },
            ],
          },
          {
            title: 'Feedback',
            items: [
              {
                label: 'Email-richardsharonthfc@gmail.com',
                href: 'mailto:richardsharonthf@gmail.com',
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
                href: 'https://github.com/rickshar/my-personal-site-rs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RickShar, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
