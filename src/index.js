const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

let alwaysOnTop = true;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titleBarStyle: "customButtonsOnHover",
    title: "Image Viewer",
    alwaysOnTop: true,
  });

  mainWindow.setAlwaysOnTop(true, "pop-up-menu");

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  const menuTemplate = [
    {
      label: "Options",
      submenu: [
        {
          label: "Always On Top",
          type: "checkbox",
          checked: alwaysOnTop,
          click() {
            mainWindow.setAlwaysOnTop(
              !alwaysOnTop,
              alwaysOnTop ? "normal" : "pop-up-menu"
            );
            alwaysOnTop = !alwaysOnTop;
          },
        },
        {
          label: "Quit",
          click() {
            mainWindow.close();
            app.exit(0);
          },
          role: "quit",
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
