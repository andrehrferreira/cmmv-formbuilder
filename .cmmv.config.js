module.exports = {
    env: process.env.NODE_ENV,
    
    server: {
        host: process.env.HOST || "0.0.0.0",
        port: process.env.PORT || 3000,        
        poweredBy: false,
        removePolicyHeaders: true,
        vite: false,
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

    i18n: {
        localeFiles: './src/locale',
        default: 'en',
    },

    rpc: {
        enabled: true,
        preLoadContracts: true,
    },

    view: {
        extractInlineScript: false,
        minifyHTML: false,
        vue3: true,
        tailwind: true
    },

    repository: {
        type: 'sqlite',
        database: "./database.sqlite",
        synchronize: true,
        logging: false,
    },

    formBuilder: {
        schema: "default",
        output: "public/views",
        vue3: true
    },

    head: {
        title: "Form Builder",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: 'utf-8' },
            { "http-equiv": "content-type", content: "text/html; charset=UTF-8" },
        ],
        link: [
            { rel: 'icon', href: '/favicon.ico' }                    
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