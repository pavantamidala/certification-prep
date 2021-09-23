// every writable stream will have the write method
// const fs = require('fs')
// const { Transform } = require('stream')
// const readable = fs.createReadStream('test.txt')
// writing to std out from test.txt with pipe
// readable.pipe(process.stdout)

// writing to std out from test.txt without pipe

// readable.on('data', (chnunk) => {
//     process.stdout.write(chnunk)
// })

// readable.on('data', (chunk) => {
//     console.log(chunk.toString().toUpperCase())
// })

// const writable = fs.createWriteStream('test.txt')

// writable.write('hello')

// const myTransform = new Transform({
//     transform: function (chunk, encoding, callback) {
//         callback(null, chunk.toString().toUpperCase())
//     }
// })

// myTransform.write('hello world')
// myTransform.on('data', (chunk) => {
//     console.log(chunk.toString())
// })

// const parse = require('node-html-parser')

// const data = []
// process.stdin.on('data', (chunk) => {
//     data.push(chunk.toString())
// })
// process.stdin.on('end', () => {
//     // console.log(data)
//     let d = parse.parse(data[0])
//     console.log(parse.HTMLElement(d.querySelector('.loud'))
//     )
// })
// console.log(parse)

// process.stdin.pipe(process.stdout)
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent.toUpperCase()); //
// // console.log(dom.window.document)
// const dom2 = new JSDOM(dom)
// console.log(dom2.window.document)\
// const format = require('html-format');
// const data = []
// process.stdin.on('data', (chunk) => {
//     data.push(chunk)
// })
// process.stdin.on('end', () => {
//     // console.log(data.length)
//     // console.log(data[0].toString())
//     const dom = new JSDOM(data[0].toString());
//     let text = dom.window.document.querySelector(".loud").textContent.toUpperCase()
//     // console.log(text)
//     dom.window.document.querySelector(".loud").textContent = text
//     dom.serialize()
//     // console.log(dom.window.document.documentElement.outerHTML)
//     process.stdout.write(format(dom.window.document.documentElement.outerHTML, ' '.repeat(4)))
// })

// dom.serialize() === "<!DOCTYPE html><html><head></head><body>hello</body></html>";

// Contrast with:
// dom.window.document.documentElement.outerHTML === "<html><head></head><body>hello</body></html>";




// const Stream = require('stream')

// const readableStream = new Stream.Readable({
//   read() {}
// })
// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')
