browser.pageAction.onClicked.addListener(() => browser.tabs.executeScript({code: `
    (function scrollToNextItchBuyButton() {
        let buttons = document.querySelectorAll('.buy_btn');
        if (buttons.length == 0) return;

        if (document.activeItchButton === undefined) document.activeItchButton = 0;
        else ++document.activeItchButton;
        if (document.activeItchButton === buttons.length) document.activeItchButton = 0;

        let button = buttons[document.activeItchButton];
        button.scrollIntoView();
        button.style.outline = '6px dashed red';
    })()
`}))
