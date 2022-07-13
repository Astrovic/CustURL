var wv = require('ti.webdialog');

wv.addEventListener('load', (e) => {
	console.log("webdialog load");
	try {
		console.log(e);
	} catch (error) {
		console.error(error);
	}
});
wv.addEventListener('redirect', (e) => {
	console.log("webdialog redirect");
	try {
		console.log(e);
	} catch (error) {
		console.error(error);
	}
});
wv.addEventListener('open', (e) => {
	console.log("webdialog open");
	try {
		console.log(e);
	} catch (error) {
		console.error(error);
	}
});
wv.addEventListener('close', (e) => {
	console.log("webdialog close");
	try {
		console.log(e);
	} catch (error) {
		console.error(error);
	}
});

function login(e) {
	console.log("login");
	wv.open({
		url: "https://astrovicapps.com/logintest.html"
	})
}

function resume(e) {
	console.log("resume intent data --->");
	console.log(Ti.Android.currentActivity.intent.data);
	console.log("<--- resume intent data");
	var data;
	if (OS_IOS) {
		data = Ti.App.arguments.url;
	} else {
		data = Ti.Android.currentActivity.intent.data;
	}
	$.lbl.text = data;
}

Ti.App.addEventListener("resume", resume);

function onOpen(e) {
	console.log("resume intent data --->");
	console.log(Ti.Android.currentActivity.intent.data);
	console.log("<--- resume intent data");	
	var data;
	if (OS_IOS) {
		data = Ti.App.arguments.url;
	} else {
		data = Ti.Android.currentActivity.intent.data;
	}
	$.lbl.text = data;
};

function onClose() {
	Ti.App.removeEventListener("resume", resume);
}