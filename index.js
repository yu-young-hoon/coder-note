const { app , BrowserWindow } = require('electron')

let win

function createWindow () {
    // 브라우저 창을 생성합니다.
    win = new BrowserWindow({
        width: 1280,
        height: 600,
    })


    win.loadFile('index.html')

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})