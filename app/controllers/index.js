function openWindow(e) {
	var currentTab = $.tabGroup.activeTab;
	var loginWin = Alloy.createController('/loginWin').getView();
	currentTab.open(loginWin);
}

$.tabGroup.open();
