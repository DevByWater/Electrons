const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;

const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

let mainWindow;
let tray;

app.on('ready', ()=>{
    app.dock.hide();
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
   
    let iconName = process.platform === 'win32' ? 'windows-icon.png': 'iconTemplate.png';
    let iconPath = path.join(__dirname, `./src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow);
});