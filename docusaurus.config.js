// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Gudstjänstwebben Hjälpcenter',
    tagline: 'Manual och hjälp för att använda Equmeniakyrkans Gudstjänstwebb',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://hjalp.gudstjanst.se',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Equmeniakyrkan', // Usually your GitHub org/user name.
    projectName: 'gudstjanstwebben-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'sv',
        locales: ['sv'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                blog: {
                    showReadingTime: true,
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
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Gudstjänstwebben Hjälpcenter',
                logo: {
                    alt: 'Gudstjänstwebben Hjälpcenter logotyp',
                    src: 'img/equmeniakyrkan-kors.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Manual',
                    },
                    {
                        to: '/hjalp-support',
                        position: 'left',
                        label: 'Hjälp & support',
                    },
                    {
                        href: 'https://gudstjanst.se',
                        label: 'Till Gudstjänstwebben',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Hjälp',
                        items: [
                            {
                                label: 'Manual',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Hjälp & support',
                                to: '/hjalp-support',
                            }
                        ],
                    },
                    {
                        title: 'Gudstjänstwebben',
                        items: [
                            {
                                label: 'Till Gudstjänstwebben',
                                href: 'https://gudstjanst.se',
                            },
                            {
                                label: 'Om Gudstjänstwebben',
                                href: 'https://gudstjanst.se/om',
                            },
                            {
                                label: 'Materialbanken',
                                href: 'https://gudstjanst.se/material',
                            },
                            {
                                label: 'Om gudstjänsten',
                                href: 'https://gudstjanst.se/gudstjanst',
                            }
                        ],
                    },
                    {
                        title: 'Equmeniakyrkan',
                        items: [
                            {
                                label: 'Equmeniakyrkan',
                                href: 'https://equmeniakyrkan.se',
                            },
                            {
                                label: "Equmenia",
                                href: 'https://equmenia.se',
                            },
                            {
                                label: "Våra församlingar",
                                href: 'https://equmeniakyrkan.se/forsamlingar',
                            }
                        ],
                    },
                ]
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
