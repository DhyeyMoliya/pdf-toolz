const { splitPDF, combinePDF, PDFCombineError } = require('../SplitCombine');
const fs = require('mz/fs');
const fileType = require('file-type');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

function atest() { return new Promise((resolve, reject) => { setTimeout(() => { resolve() }, 10000) }) }

(async function () {
    const pdf1 = await readFile('./test/portrait-singlepage.pdf');
    const pdf2 = await readFile('./test/portrait-multipage.pdf');
    const result = await combinePDF([pdf1, pdf2]);
    await atest();
}())