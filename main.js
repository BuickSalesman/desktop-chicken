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
}  
