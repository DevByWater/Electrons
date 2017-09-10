const electron = require('electron');
const { BrowserWindow, Menu, app } = electron;

class MainWindow extends BrowserWindow{
    constructor(url){
        super({
            height: 400,
            width: 260,
            frame: false,
            resizable: false,
            show: false
        });
        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }
    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;