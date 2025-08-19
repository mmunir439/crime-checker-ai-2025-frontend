export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended", "next"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);