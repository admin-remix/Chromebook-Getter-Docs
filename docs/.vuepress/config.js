module.exports = {
    title: 'Chromebook Getter',
    description: 'Help & Support For Chromebook Getter by AdminRemix',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Chromebook Actions', link: '/chromebook-actions/'},
            { text: 'Premium Account', link: 'premium-account/'},
            { text: 'Roadmap', link: '/product-roadmap/'},
        ],
        sidebar: {
            '/premium-account/': [
                '',
                'device-quick-search',
                'manage-organizational-units'
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
        ga: 'UA-126552154-5',
        serviceWorker: process.env.NODE_ENV = 'production',
    }
  }