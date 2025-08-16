import { describe, it, expect } from "vitest";
import {
  capitalize, titleCase, toKebabCase,
  toSnakeCase, toCamelCase, toPascalCase
} from "../src/index";

describe("string-utils-lite", () => {
  it("capitalize", () => {
    expect(capitalize("hELLo")).toBe("Hello");
    expect(capitalize("")).toBe("");
  });

  it("titleCase", () => {
    expect(titleCase("hELLO   woRLD")).toBe("Hello   World");
  });

  it("toKebabCase", () => {
    expect(toKebabCase("HelloWorld  foo_bar")).toBe("hello-world-foo-bar");
  });

  it("toSnakeCase", () => {
    expect(toSnakeCase("Hello-World  fooBar")).toBe("hello_world_foo_bar");
  });

  it("toCamelCase", () => {
    expect(toCamelCase("Hello world-foo_bar")).toBe("helloWorldFooBar");
  });

  it("toPascalCase", () => {
    expect(toPascalCase("Hello world-foo_bar")).toBe("HelloWorldFooBar");
  });
});
