// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            // I trust data coming from richtext by API
            'vue/no-v-html': 'off',
        },
    },

    // Prettier is the formatting authority.
    eslintConfigPrettier
)
