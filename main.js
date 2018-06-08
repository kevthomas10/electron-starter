const {app, BrowserWindow} = require('electron')

function createWindow() {
    //Create Browser Window
    win = new BrowserWindow({width: 800, height: 600})

    // load index.html
    win.loadFile('index.html')

    //Open Devtools
    win.webContents.openDevTools({detach:true})

    //Emmitted when the window is closed
    win.on('closed', ()=> {
        win = null
    })
}

app.on('ready', createWindow)

//Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})