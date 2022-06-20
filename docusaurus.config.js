// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logto Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'logto-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Logto',
        logo: {
          alt: 'Logto Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs/README',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'sdk/README',
            position: 'left',
            label: 'SDK',
          },
          {
            href: '/api',
            target: '_blank',
            position: 'left',
            label: 'API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/logto-io/logto',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Logto Logo',
          src: 'img/silverhand.svg',
        },
        style: 'dark',
        links: [
          {
            label: 'Docs',
            to: '/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/logto-io/logto',
          },
          {
            label: 'About Us',
            href: 'https://logto-io.github.io/website/about',
          },
          {
            label: 'Contact Us',
            href: 'mailto: contact@logto.io',
          },
        ],
        copyright: `Designed by Silverhand Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift', 'kotlin', 'groovy', 'java'],
      },
    }),
  plugins: [
    async function addAliasPlugin() {
      return {
        name: 'add-alias-plugin',
        configureWebpack: () => ({
          resolve: {
            alias: {
              '@components': path.resolve(__dirname, './src/components'),
              '@scss': path.resolve(__dirname, './src/scss'),
            },
          },
        }),
      };
    },
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
