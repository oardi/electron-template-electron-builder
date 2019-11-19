const { app, BrowserWindow } = require("electron");

let win = null;

app.on("ready", function () {
	win = new BrowserWindow({ width: 1200, height: 720 });

	win.loadURL('file://' + __dirname + '/index.html');
	// win.webContents.openDevTools();
	win.on('closed', function () {
		win = null;
	});
});

app.on('activate', function () {
	if (win == null) {
		createWindow();
	}
});

app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit();
	}
});
