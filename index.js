const path = require('path');
const util = require('util');
const fs = require('fs');
const { deepStrictEqual } = require('assert');


//const readdir = util.promisify(fs.readdir); //читаем содержимое папки . переделали api на промис

fs.readdir(process.argv[2], (err, data) =>{
    if(err){
        console.log(err);
    }

    let arFiles = data.toString().split(',');

    let folderName = [];

    arFiles.map(f =>{
        folderName.push(f[0]);
    })

    folderName.forEach(folder => {
        //folder = folder.path(__dirname, 'example', folder);
        console.log(fs.existsSync(folder));
            if(fs.existsSync(folder.toUpperCase())) {
                fs.mkdirSync(folder.toUpperCase());
            }
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
