const { BrowserWindow, screen, app } = require("electron")



const createWindow = () => {
    const { x, y, width, height } = screen.getPrimaryDisplay().bounds

    const overlay = new BrowserWindow({
        x,
        y,
        width,
        height,
        transparent: true,
        alwaysOnTop: true,
        focusable: false,
        hasShadow: false,
    });

    overlay.loadFile("index.html")
    overlay.setIgnoreMouseEvents(true, { forward: true });
    //overlay.webContents.openDevTools({ mode: "detach" });
}

app.whenReady().then(() => {
    createWindow();
});























//activate means on mac when a process is running but there are no active windows, and you click the icon in the dock.
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

