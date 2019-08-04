module.exports = {
    title: 'Chromebook Getter',
    description: 'Help & Support For Chromebook Getter by AdminRemix',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Chromebooks', link: '/get-chromebooks/'},
            { text: 'Set Chromebooks', link: '/set-chromebooks/'},
            { text: 'Get All Chromebooks', link: '/get-all-chromebooks/'},
            { text: 'Roadmap', link: '/product-roadmap/'}
        ],
        sidebar: {
            '/premium-account/': [
                '',
                'device-quick-search',
                'manage-organizational-units'
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