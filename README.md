# string-utils-lite

[![npm version](https://img.shields.io/npm/v/string-utils-lite?color=blue)](https://www.npmjs.com/package/string-utils-lite)
[![npm downloads](https://img.shields.io/npm/dm/string-utils-lite.svg)](https://www.npmjs.com/package/string-utils-lite)
[![CI](https://img.shields.io/github/actions/workflow/status/jahirultusar/JavaScript-string-utils-lite/ci.yml?branch=main)](https://github.com/jahirultusar/JavaScript-string-utils-lite/actions/workflows/ci.yml)
[![Release](https://github.com/jahirultusar/JavaScript-string-utils-lite/actions/workflows/release.yml/badge.svg)](https://github.com/jahirultusar/JavaScript-string-utils-lite/actions/workflows/release.yml)
[![license](https://img.shields.io/github/license/jahirultusar/JavaScript-string-utils-lite)](./LICENSE)


## What is `string-utils-lite`?

`string-utils-lite` is a **tiny, dependency-free JavaScript library** that makes common string transformations effortless and consistent across projects.  

It provides simple helper functions for everyday string formatting needs:

- `capitalize` → Uppercases the first character, lowercases the rest  
- `titleCase` → Capitalises the first character of every word  
- `toKebabCase` → Converts text into `kebab-case`  
- `toSnakeCase` → Converts text into `snake_case`  
- `toCamelCase` → Converts text into `camelCase`  
- `toPascalCase` → Converts text into `PascalCase`  

---

## 💡 Why use this library?

JavaScript lacks built-in utilities for string case transformations (unlike Python’s `.title()` or `.capitalize()`).  
While you could write ad-hoc functions, `string-utils-lite` saves time by offering:

- ✅ **Consistency** — same results across all projects  
- ✅ **Zero dependencies** — lightweight, no bloat  
- ✅ **Dual support** — works with both **ESM** and **CommonJS**  
- ✅ **Tree-shakable** — import only what you need  

Whether you’re cleaning up user input, formatting identifiers, or ensuring consistency in APIs, this library provides a clear and minimal solution.

## 📦 Installation

    ```bash
    npm install string-utils-lite


## 🚀 Usage

You can use `string-utils-lite` in both **ES Modules** and **CommonJS** environments.

ES Modules
    import { capitalize, titleCase, toKebabCase } from 'string-utils-lite';

    console.log(capitalize('hELLo'));        // "Hello"
    console.log(titleCase('hELLO   woRLD')); // "Hello   World"
    console.log(toKebabCase('Hello World')); // "hello-world"

CommonJS
    const { capitalize, titleCase } = require('string-utils-lite');

    console.log(capitalize('hELLo')); // "Hello"
    console.log(titleCase('foo bar')); // "Foo Bar"

## 📚 API Reference

    | Function          | Description                                      | Example Input   | Example Output  |
    |-------------------|--------------------------------------------------|-----------------|-----------------|
    | `capitalize(str)` | Uppercases the first letter, lowercases the rest | `"hELLo"`       | `"Hello"`       |
    | `titleCase(str)`  | Capitalises the first letter of each word        | `"hELLO woRLD"` | `"Hello World"` |
    | `toKebabCase(str)`| Converts string to kebab-case                    | `"Hello World"` | `"hello-world"` |
    | `toSnakeCase(str)`| Converts string to snake_case                    | `"Hello World"` | `"hello_world"` |
    | `toCamelCase(str)`| Converts string to camelCase                     | `"Hello World"` | `"helloWorld"`  |
    | `toPascalCase(str)`| Converts string to PascalCase                   | `"Hello World"` | `"HelloWorld"`  |

> ℹ️ All functions are **pure**: they return a new string without mutating the input.


## 🧪 Running Tests

    This project uses Vitest

    npm test

## 🛠 Development

    Clone the repo and install dependencies:

    git clone https://github.com/jahirultusar/JavaScript-string-utils-lite.git
    cd string-utils-lite
    npm install


    Build the package:

    npm run build

## 🤝 Contributing

    Contributions are welcome! 🎉

    Fork the repository

    Create a feature branch (git checkout -b feature/my-feature)

    Commit your changes (git commit -m 'feat: add new feature')

    Push to the branch (git push origin feature/my-feature)

    Open a Pull Request

    Please follow Conventional Commits for commit messages.

📄 License

    MIT © 2025 Jahirul Tusar 