module.exports = {
    env: process.env.NODE_ENV,
    
    server: {
        host: process.env.HOST || "0.0.0.0",
        port: process.env.PORT || 3003,        
        poweredBy: false,
        removePolicyHeaders: true,
        compress: {
            enabled: true,
            options: {
                level: 6 
            }
        },
        cors: true,
        helmet: {
            enabled: false
        }
    },

    view: {
        extractInlineScript: false,
        minifyHTML: false,
        vue3: true
    },

    head: {
        title: "Odds Trail",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: 'utf-8' },
            { "http-equiv": "content-type", content: "text/html; charset=UTF-8" },
        ],
        link: [
            { rel: 'icon', href: '/assets/favicon/favicon.ico' },
            { rel: 'shortcut', href: '/assets/favicon/favicon-32x32.png' },
            { rel: 'apple-touch-icon', href: '/assets/favicon/favicon-32x32.png' }                       
        ]
    },

    scripts: [
        { 
            type: "text/javascript", 
            src: "/assets/bundle.min.js", 
            defer: "defer" 
        }
    ]
};