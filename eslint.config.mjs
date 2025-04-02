// @ts-check
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    plugins: {
      "readable-tailwind": eslintPluginReadableTailwind,
    },
    rules: {
      ...eslintPluginReadableTailwind.configs.error.rules,
    },
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  },
]);
