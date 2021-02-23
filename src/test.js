const prettier = require("./index")
const markdown = require("./language-markdown")
const core = require("./main/core")
const AstPath = require("./common/ast-path");

const parser = markdown.parsers.remark
const printer = markdown.printers.mdast
 const doc_printer = require('./document/doc-printer')
const content = `
\ \\ \\\ \\\\ \\\\\
`;


const opts = {
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    parser: "markdown",
    printer: printer,
    originalText:content
}

const ast = parser.parse(content)
const ast_to_doc = require('./main/ast-to-doc')
const doc = ast_to_doc(ast, opts, 0)
const string = doc_printer.printDocToString(doc,opts)
console.log(string)
