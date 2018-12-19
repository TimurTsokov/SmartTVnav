import deviceService from './DeviceService';

const DeviceService = new deviceService,
    device = DeviceService.device;

let docsDir,
    storedLang = null;

class LanguageService {
    static findLangFile = (files) => {
        for (let i = 0, length = files.length; i < length; i++) {
            if (files[i].name === 'settings.txt') {
                files[i].readAsText(function (str) {
                    storedLang = JSON.parse(str).locale;
                });
            }
        }
    };

    getLang() {
        return storedLang
    };

    initLang() {
        switch (device.sub_type) {
            case 'DST_SAMSUNG':
                try {
                    // tizen.filesystem.resolve('documents', function (dir) {
                    //     docsDir = dir;
                    //     dir.listFiles(LanguageService.findLangFile)
                    // }, function (e) {
                    //     console.log('Error' + e.message);
                    // }, 'rw');
                } catch (e) {
                }
                break;
            default:
                if (localStorage.getItem('locale') !== null) {
                    this.storedLang = localStorage.getItem('locale');
                }
        }
    }

    setLang(locale) {
        this.storedLang = locale;
        const obj = JSON.stringify({locale: locale});

        function writeToFile() {
            const langFile = docsDir.createFile('settings.txt');
            langFile.openStream('w', function (fs) {
                fs.write(obj);
                fs.close();
            }, function (e) {
                console.log('Error ' + e.message);
            }, 'UTF-8');
        }

        function onSuccess(files) {
            let deleteFile = false;
            for (let i = 0, length = files.length; i < length; i++) {
                if (files[i].isDirectory === false && files[i].name === 'settings.txt') {
                    //delete file
                    deleteFile = true;
                    docsDir.deleteFile(files[i].fullPath, function () {
                        writeToFile();
                    });
                }
            }
            if (!deleteFile) {
                writeToFile();
            }
        }

        function onError(error) {
            console.log('The error ' + error.message + ' occurred when listing the files in the selected folder');
        }

        switch (device.sub_type) {
            case 'DST_SAMSUNG':
                try {
                    // tizen.filesystem.resolve('documents', function (dir) {
                    //     docsDir = dir;
                    //     dir.listFiles(onSuccess, onError);
                    // }, function (e) {
                    //     console.log('Error' + e.message);
                    // }, 'rw');
                } catch (e) {
                }
                break;
            default:
                storedLang = locale;
                localStorage.setItem('locale', locale);
        }
    }
}

export default LanguageService;