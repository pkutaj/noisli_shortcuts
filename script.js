function main() {
    const randomButton = document.getElementById('random-button-out');

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 77: // 'm'
                muted ? unmuteSound() : muteSound();
                console.log('mute toggled');
                break;
            case 82: // 'r'
                randomButton.click();
                console.log('random toggled');
                break;
        }
    }
}

// dope https://stackoverflow.com/a/2303228
var script = document.createElement('script');
script.appendChild(document.createTextNode(`(${main})();`));
(document.body || document.head || document.documentElement).appendChild(script);
