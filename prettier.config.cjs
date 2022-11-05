module.exports = {
    semi: true,
    printWidth: 80,
    singleQuote: true,
    quoteProps: "as-needed",
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    proseWrap: "always",
    htmlWhitespaceSensitivity: "css",
    endOfLine: "lf",
    singleAttributePerLine: false,
    plugins: [require('prettier-plugin-tailwindcss')]
}
