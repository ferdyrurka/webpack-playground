import Storage from './storage';
import {init, initHtml} from './app'

function run() {
    (new Storage()).save('hello', 'Hello webpack');

    init();
    initHtml();
}

run()
