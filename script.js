/* eslint-disable require-jsdoc */
function main() {
  const randomButton = document.getElementById('random-button-out');
  const tmrStart = document.getElementById('start-span');
  const tmr = document.getElementById('menu-timer'); // select the timer button
  const tE = document.querySelector('#menu-texteditor'); // select the text editor button

  document.onkeydown = function(e) {
    console.log(e);
    switch (e.keyCode) {
      case 77: // 'm'
        muted ? unmuteSound() : muteSound();
        console.log('mute toggled');
        break;
      case 82: // 'r'
        randomButton.click();
        console.log('random toggled');
        break;
      case 83: // 'r'
        tmrStart.click();
        console.log('timer toggled');
        break;
      case 84: // 't'
        tmr.click();
        console.log('timer opened');
        break;
    }
  };
}

// dope https://stackoverflow.com/a/2303228
const script = document.createElement('script');
script.appendChild(document.createTextNode(`(${main})();`));
(document.body || document.head || document.documentElement).appendChild(script);
