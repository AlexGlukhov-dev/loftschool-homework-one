const path = require('path');
const util = require('util');
const fs = require('fs');
const { deepStrictEqual } = require('assert');



const exampleFolder = path.join(__dirname, process.argv[2]); //переменная пути к исходной папке

fs.readdir(exampleFolder, (err, data) =>{
    if(err){
        console.log(err);
    }

    const arFiles = data.toString().split(','); // создаем маccив имени файлов

    let folderNames = []; //инициализируем пустой массив в котором будут храниться имена папок которые нужно создать

    arFiles.map(f =>{
        folderNames.push(f[0]);
    })
    let i = 0;
    folderNames.forEach(folder => {
        let upperFold = folder.toUpperCase(); //переводим имя папки в большой регистр
        //newFolder = path.join(__dirname,'result',upperFold); // создаем путь до конечных папок

        if(!fs.existsSync(path.join(__dirname,'result',upperFold))) { //проверяем наличие папки
            fs.mkdirSync(path.join(__dirname,'result',upperFold)); // создаем папку если ее нет
        }
        if(arFiles[i][0] === folder){ // делаем проверку какая картинка должна оказаться в какой папке

        }

        i++;
    })

} );


// const config = {
//     typeDirs: [
//         {type: '.pdf', directory: 'documents'},
//         {type: '.png', directory: 'images'},
//         {type: '.mp3', directory: 'music'},
//     ]
// }
//
// const directory = process.argv[2];
//
// if(!directory){
//     console.log('Specify the target directory');
//     return;
// }
//
// [ ...config.typeDirs, {directory: 'other'}].map(d => {
//     const dirname = `${directory}/${d.directory}`
//     if(!fs.existsSync(directory)){
//         fs.mkdirSync(dirname);
//     }
// });
//
// (async () => {
//     const files = await readdir(directory);
//     files.forEach(file => {
//         const extname = path.extname(file);
//
//         if(!extname){
//             return;
//         }
//
//         const {directory: targetDir = 'other'} = config.typeDirs.find(dir => dir.type == extname)
//
//         const oldPath = path.join(__dirname, directory, file);
//         const newPath = path.join(__dirname, directory, targetDir, file)
//
//         fs.rename(oldPath, newPath, err => {
//             if(err){
//                 throw err;
//             }
//         })
//     })
// })();
