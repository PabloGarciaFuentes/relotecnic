# AGENTIC OPERATIONS & CODE STANDARDS (relotecnic)

Welcome, developer-agents! This repository uses Next.js and TypeScript with strict coding and style standards. Follow this guide for all automated contributions.

---

## 1. Project Management Commands

### Development & Build
* **Start dev server:**
  ```bash
  npm run dev
  # or yarn dev / pnpm dev / bun dev
  ```
* **Build for production:**
  ```bash
  npm run build
  ```
* **Start production server:**
  ```bash
  npm start
  ```

### Linting
* **Run lint (ESLint):**
  ```bash
  npm run lint
  ```
  - Uses next/core-web-vitals and next/typescript rules.
  - Ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

### Testing
* _No test scripts or test files currently present._
* **To add and run a single test:**
  - Create `.test.ts(x)` files using [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/).
  - Add a `test` script in `package.json`, e.g.:
    ```json
    "test": "jest"
    ```
  - Run a single test:
    ```bash
    npm test -- path/to/file.test.tsx
    ```
  - **Agents:** If tests are introduced, update this file accordingly.

---

## 2. Code Style Guidelines

### Imports
* Prefer _named_ imports over `import * as X`.
* Use absolute imports via the path alias `@/` for items under `src/` (as configured in `tsconfig.json`):
  ```ts
  import Button from '@/components/Button'
  ```
* Place third-party imports first, then project-relative imports.
* Group and order imports by: builtins, external, internal.

### Type Annotations
* Always use **TypeScript strict mode** (see `tsconfig.json`).
* Prefer explicit types for function arguments, props, state, and return types (except for obvious React FCs):
  ```ts
  function greet(name: string): string {
    return `Hello, ${name}`;
  }
  ```
* Use type aliases and interfaces for props/objects:
  ```ts
  interface UserProps {
    name: string;
  }
  ```
* Use `unknown`, not `any` for unchecked values.

### Naming Conventions
* **Components:** PascalCase (`MyComponent`)
* **Variables/functions:** camelCase (`myVariable`)
* **Constants:** UPPER_SNAKE_CASE (`MAX_ATTEMPTS`)
* **Files:** kebab-case or camelCase (`user-profile.tsx`)
* **Hooks:** use the `useX` prefix for custom React hooks (`useModal`)
* **Props:** Prefer clear, descriptive names (e.g., `isActive`, `onClick`)

### Formatting
* Indent with 2 spaces, no tabs.
* Use [Prettier](https://prettier.io/) default conventions (no custom `.prettierrc`).
* Keep line lengths under 100 characters when possible.
* Always end files with a newline.
* Use double quotes in JSON and single quotes in TypeScript/JSX where possible.
* Always use trailing commas where valid.

### React & Next.js Conventions
* Use [function components](https://react.dev/reference/react/FunctionComponent) for all UI.
* Prefer **arrow functions** for inline event handlers and lambdas.
* Always set the `key` prop when rendering lists.
* File-based routing: place pages in `src/app/[page].tsx`.
* Use [Tailwind CSS](https://tailwindcss.com/) utility classes for layout and style.

### Error Handling
* Always handle possible errors, even in UI code.
* On unhandled exceptions, log clearly:
  ```ts
  console.error('Something went wrong:', error);
  ```
* Validate & sanitize user input.
* Return React error boundaries or fallback UI as needed.
* Never ignore Promise rejections.

### ESLint Rules & Conventions
* Rules extend core-web-vitals and next/typescript presets.
* [No unused variables](https://eslint.org/docs/rules/no-unused-vars): Remove all dead code.
* [No explicit any](https://typescript-eslint.io/rules/no-explicit-any/): Use `unknown` or properly typed values.
* [Consistent return](https://eslint.org/docs/rules/consistent-return): Always return or always not, per function.
* [No extraneous dependencies](https://eslint.org/docs/rules/import/no-extraneous-dependencies):
  Only import dependencies that are in `package.json`.

### Comments & Documentation
* Use inline comments to explain intent for tricky/complex code only.
* For components, use JSDoc/TSDoc for exported types, props, and functions.
* Remove all commented-out code unless explicitly being refactored.

---

## 3. Agent Usage & Good Practices

- **Always run lint** before committing.
- **Check formatting**; if unsure, run `npx prettier --write .`.
- **Keep PRs atomic:** make one logical change per PR. If automating, split unrelated changes.
- **Document config or pattern changes in this file!**

## 4. Additional Notes
- No Copilot or Cursor custom rules present as of this writing.
- See `tsconfig.json` for path aliases, strict mode options.
- If in doubt, default to [Next.js](https://nextjs.org/docs) and [TypeScript](https://www.typescriptlang.org/docs/) official guidelines.

---

This file is auto-generated for agentic developer workflow efficiency. When in doubt, prefer explicitness, clarity, and alignment with modern Next.js/TypeScript idioms.
