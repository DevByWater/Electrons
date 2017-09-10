const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;

const TimerTray = require('./app/timer_tray');

let mainWindow;
let tray;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({height: 400, width: 260, frame: false, resizable: false, show: false});
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    let iconName = process.platform === 'win32' ? 'windows-icon.png': 'iconTemplate.png';
    let iconPath = path.join(__dirname, `./src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow);
});