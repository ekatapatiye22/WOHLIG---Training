const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);
// sync...blocking operation
// fs.writeFileSync('./test.txt' , 'This is a test file');

//async...non-blocking operation
// fs.writeFile('./test.txt' , 'This is a test file Async' , (err) => {})

// const result = fs.readFileSync('./contacts.txt' , 'utf-8')
// console.log(result);

// fs.readFile('./contacts.txt' , 'utf-8' , (err, result) => {
//     if(err){
//         console.log('Error', err);
//     }else{
//         console.log(result);
//     }
// }
// 

// fs.appendFileSync('./test.txt' , `${Date.now()} Hey there, I am appended text \n`);
// fs.cpSync('./test.txt' , './copy.txt');
// fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));

//blocking
// console.log('1');
// const result = fs.readFileSync('./contacts.txt' , 'utf-8')
// console.log(result);
// console.log('2');


//non-blocking
// console.log('1');
// const result = fs.readFile('./contacts.txt' , 'utf-8', (err, result) => {
//         console.log(result);
// }
// )
// console.log('2');

// //default Thread Pool size is 4
//we can change it by below code
// process.env.UV_THREADPOOL_SIZE = 5;