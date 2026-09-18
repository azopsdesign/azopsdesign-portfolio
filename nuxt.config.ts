export default defineNuxtConfig({
    devtools: { enabled: true },

    // "forced" typescript checks | very strict mode
    typescript: {
        typeCheck: true,
    },

    modules: ['@nuxt/eslint'],

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
        },
    },

    compatibilityDate: '2026-09-16',
})
