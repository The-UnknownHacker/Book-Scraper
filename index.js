const { exec } = require('child_process');
const robot = require('robotjs');

let isRunning = false;
let screenshotCounter = 1;

function performScreenshot() {
    if (!isRunning) return;

    const screenshotFileName = `screenshot-${screenshotCounter}.png`;
    const command = `screencapture -R495,52,721,1059 ${screenshotFileName}`;

    exec(command, (error) => {
        if (error) {
            console.error(`Error taking screenshot: ${error}`);
            return;
        }
        console.log(`Screenshot taken: ${screenshotFileName}`);

        screenshotCounter++;

        setTimeout(() => {
            robot.keyTap('right');

            setTimeout(performScreenshot, 500);
        }, 500);
    });
}

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', (key) => {
    if (key.toString() === 'g') {
        isRunning = !isRunning;
        if (isRunning) {
            console.log('Started');
            performScreenshot();
        } else {
            console.log('Stopped');
        }
    }

    if (key.toString() === '\u0003') {
        process.exit();
    }
});
