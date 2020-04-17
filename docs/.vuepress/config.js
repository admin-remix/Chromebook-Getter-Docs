module.exports = {
    plugins: [
        '@vuepress/blog',
        {
            directories: [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/'
                }
            ]
        },
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@static': '../../static'
            }
        }
    },
    title: 'Chromebook Getter',
    description: 'Help & Support For Chromebook Getter by AdminRemix',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Chromebook Actions', link: '/chromebook-actions/'},
            { text: 'Premium Actions', link: '/premium-account/'},
            { text: 'Roadmap', link: '/product-roadmap/'},
            { text: 'Pricing', link: '/pricing/' },
            { text: 'Advice & Guides', link: '/post/'}
        ],
        sidebar: {
            '/guide/': [
                '',
                '#how-it-works',
                '#how-to-install',
                '#features',
                '#tools-used',
                '#why-not'
            ],
            '/premium-account/': [
                '',
                'device-quick-search',
                'manage-organizational-units',
                'aue-report',
                'speed-uploader',
                'enrollment-date',
                'filters',
                'batch-retrieval',
                'action-history'
            ],
            '/chromebook-actions/': [
                '',
                'get-chromebooks',
                'set-chromebooks',
                'get-all-chromebooks'
            ]
        },
        lastUpdated: 'Last Updated',
        repo: 'admin-remix/Chromebook-Getter-Docs',
        editLinks: true,
        editLinkText: 'Edit on Github',
        serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
            // If set to true, the default text config will be: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        }
    },
    ga: 'UA-126552154-5',
    serviceWorker: process.env.NODE_ENV = 'production',
  }