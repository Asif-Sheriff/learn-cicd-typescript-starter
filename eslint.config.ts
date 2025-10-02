import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"]
  },
  
  // TypeScript files (included in tsconfig)
  {
    files: ["**/*.ts"],
    ignores: ["**/*.config.ts"], // Exclude config files from TypeScript rules
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  },
  
  // Config files (excluded from TypeScript project rules)
  {
    files: ["**/*.config.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021
      },
      parser: tseslint.parser,
      // No project option for config files
    }
  },
  
  ...tseslint.configs.recommended,
];