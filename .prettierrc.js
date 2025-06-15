/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default prettierConfig
