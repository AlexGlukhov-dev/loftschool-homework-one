const path = require('path');
const util = require('util');
const fs = require('fs');




const exampleFolder = path.join(__dirname, process.argv[2]); //переменная пути к исходной папке

fs.readdir(exampleFolder, (err, data) =>{
    if(err){
        console.log(err);
        return;
    }

    const arFiles = data.toString().split(','); // создаем маccив имени файлов

    let folderNames = []; //инициализируем пустой массив в котором будут храниться имена папок которые нужно создать

    arFiles.map(f =>{
        folderNames.push(f[0]);
    })

    let i = 0;

    folderNames.forEach(folder => {
        let upperFold = folder.toUpperCase(); //переводим имя папки в большой регистр
            newFolder = path.join(__dirname,'result',upperFold); // создаем путь до конечных папок
            file = path.join(__dirname, process.argv[2], arFiles[i]); // создаем путь до файла

        if(!fs.existsSync(newFolder)) { //проверяем наличие папки
            fs.mkdirSync(path.join(newFolder), { recursive: true }); // создаем папку если ее нет
        }

        if(folder === arFiles[i][0]){ // делаем проверку какая картинка должна оказаться в какой папке
            (async () => {
                await fs.rename(file, `${newFolder}/${arFiles[i]}`, err => {
                    if(err){
                        console.log(err);
                    }
                });
            })();
        }
        i++;
    })
    fs.rmdir(exampleFolder, err => {
        if(err){
            console.log(err);
        }
    })    
});
