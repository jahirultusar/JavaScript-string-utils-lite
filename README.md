# string-utils-lite

[![npm version](https://img.shields.io/npm/v/string-utils-lite?color=blue)](https://www.npmjs.com/package/string-utils-lite)
[![npm downloads](https://img.shields.io/npm/dm/string-utils-lite.svg)](https://www.npmjs.com/package/string-utils-lite)
[![CI](https://github.com/yourname/string-utils-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/jahirultusar/JavaScript-string-utils-lite/actions)
[![license](https://img.shields.io/github/license/jahirultusar/string-utils-lite)](./LICENSE)

> ✨ A tiny, dependency-free JavaScript library for common string transformations:  
> `capitalize`, `titleCase`, `kebab-case`, `snake_case`, `camelCase`, `PascalCase`.

---

## 📦 Installation

    ```bash
    npm install string-utils-lite


## 🚀 Usage

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

    Function	Description	Example Input	Example Output
    capitalize(str)	Uppercases the first letter, lowercases the rest	"hELLo"	"Hello"
    titleCase(str)	Capitalises the first letter of each word	"hELLO woRLD"	"Hello World"
    toKebabCase(str)	Converts string to kebab-case	"Hello World"	"hello-world"
    toSnakeCase(str)	Converts string to snake_case	"Hello World"	"hello_world"
    toCamelCase(str)	Converts string to camelCase	"Hello World"	"helloWorld"
    toPascalCase(str)	Converts string to PascalCase	"Hello World"	"HelloWorld"

    All functions are pure and return new strings without mutating the input.


## 🧪 Running Tests

    This project uses Vitest.

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