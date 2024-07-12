import fs from 'node:fs/promises';

const create1 = await fs.open('testFile.txt', 'w');
console.log("testFile is created");

const write1 = await fs.writeFile('testFile.txt', "Hello world!");
console.log('Data has been replaced!');

const read1 = await fs.readFile('testFile.txt', 'utf8');
console.log(read1);

const create2 = await fs.open('testFile2.txt', 'w');
console.log("testFile2 is created");

const write2 = await fs.writeFile('testFile2.txt', read1);
console.log('2: Data has been replaced! 2');

const read2 = await fs.readFile('testFile2.txt', 'utf8');
console.log(read2);








// const write1 = () => {
//     fs.writeFile('testFile.txt', "Hello world!", (err) => {
//         if (err) throw err;
//         console.log('Data has been replaced!');
//     });
// }

// write1();



// let text1 = '';

// const read1 = () => {
//     fs.readFile('testFile.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log('data1: ' + data);
//         text1 = data;
//         return text1;

//     });

// }

// read1();

// console.log(text);


// const create2 = () => {
//     fs.open('testFile2.txt', 'w', (err) => {
//         if (err) throw err;
//         console.log('File2 created');
//     });
// }

// create2();

// const write2 = () => {
//     fs.writeFile('testFile2.txt', text1, (err) => {
//         if (err) throw err;

//         console.log('2: ' + text1);
//     });
// }

// write2();


// const read2 = () => {
//     fs.readFile('testFile2.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log('data2: ' + data);
//         // let text2 = data;
//         // return text;

//     });

// }

// read2();





