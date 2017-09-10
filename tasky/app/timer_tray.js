const { Tray } = require('electron');

class TimerTray extends Tray {
    constructor(iconPath, mainWindow){
        super(iconPath);

        this.mainWindow = mainWindow;

        this.setToolTip('Timer App');
        this.on('click', this.onClick.bind(this));
    }

    onClick(event, bounds){
        const { x, y } = bounds;
        //window heigth and width
        const { height, width } = this.mainWindow.getBounds();

        if(this.mainWindow.isVisible()){
            this.mainWindow.hide();
        } else {
            let yPosition = process.platform === 'darwin' ? y : y - height;
            this.mainWindow.setBounds({
                x: x - width/2 ,
                y,
                height ,
                width
            });
            this.mainWindow.show();
        }
    }
}

module.exports = TimerTray;