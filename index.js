const path = require('path');
const fs = require('fs').promises;

const outputPath = process.argv[2];
const exampleFolder = path.join(__dirname, outputPath); //переменная пути к исходной папке

(async () => {
    try{
        const data = await fs.readdir(exampleFolder);

        const arFiles = data.toString().split(','); // создаем маccив имени файлов

        let folderNames = []; //инициализируем пустой массив в котором будут храниться имена папок которые нужно создать

        arFiles.map(f => {
            folderNames.push(f[0]);
        })

        let i = 0;

        for (const folder of folderNames) {
            let upperFold = folder.toUpperCase(); //переводим имя папки в большой регистр
            let newFolder = path.join(__dirname, 'result', upperFold); // создаем путь до конечных папок
            let file = path.join(__dirname, outputPath, arFiles[i]); // создаем путь до файла

            await fs.mkdir(path.join(newFolder), {recursive: true}); // создаем папку если ее нет


            if (folder === arFiles[i][0]) { // делаем проверку какая картинка должна оказаться в какой папке
                await fs.rename(file, `${newFolder}/${arFiles[i]}`);
            }
            i++;
        }
        await fs.rmdir(exampleFolder);
    }catch (e){
        console.log(e);
    }
})();
