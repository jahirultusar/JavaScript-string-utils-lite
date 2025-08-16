/**
 * Capitalise only the first letter; rest lowercase.
 * "hELLo" -> "Hello"
 */
export function capitalize(str: string = ""): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Title case: capitalise first letter of each word.
 * Preserves spacing by splitting on whitespace tokens.
 */
export function titleCase(str: string = ""): string {
  return str
    .toLowerCase()
    .split(/(\s+)/) // keep whitespace tokens
    .map(t => (t.trim() === "" ? t : t.charAt(0).toUpperCase() + t.slice(1)))
    .join("");
}

/** Convert to kebab-case. */
export function toKebabCase(str: string = ""): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}

/** Convert to snake_case. */
export function toSnakeCase(str: string = ""): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase()
    .replace(/^_+|_+$/g, "");
}

/** Convert to camelCase. */
export function toCamelCase(str: string = ""): string {
  return str
    .toLowerCase()
    .split(/[\s-_]+/)
    .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join("");
}

/** Convert to PascalCase. */
export function toPascalCase(str: string = ""): string {
  return str
    .toLowerCase()
    .split(/[\s-_]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}
