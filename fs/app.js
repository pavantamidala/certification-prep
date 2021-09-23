const fs = require('fs')
// creating a new file
// fs.open('test3.txt', 'w', (err, data) => {
//     if (err) console.log(err)
//     console.log('file created')
// })

// with different flags 

// fs.open('test2.txt', 'r', (err, n) => {
//     console.log(n)
// })


// appending data to already existing file 
// fs.appendFile('test2.txt', 'hello world', (err) => {
//     if (err) console.log(err)
//     console.log('data added')
// })


// adding data to existing file by removing previous data 
// fs.writeFile('test2.txt', 'removed', (err) => {
//     if (err) console.log(err)
//     console.log('data added and removed previous data')
// })


// read file with readFile
// fs.readFile('test2.txt', (err, data) => {
//     console.log(data.toString())
// })

// read file with createReadStream
// const readable = fs.createReadStream('test2.txt')
// readable.on('data', (chunk) => {
//     console.log(chunk)
// })

// writing to a file 
// const writable = fs.createWriteStream('test2.txt')
// let num = 0
// setInterval(() => {
//     if (num === 500) {
//         process.exit(1)
//     }
//     if (num !== 500) {
//         writable.write('hello world', (err) => {
//             console.log(err)
//         })
//     }
//     num = num + 1
// }, 100);


//renaming a file 
// fs.rename('test3.js', 'test3.txt', (err) => {
//     if (err) console.log(err)
// })


// deleting a file 
// fs.unlink('test3.txt', (err) => {
//     console.log(err)
// })