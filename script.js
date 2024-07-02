const writingText = "WELKINRIM TECHNOLOGIES";
const writingElement = document.getElementById("writing-text");

let index = 0;
const intervalId = setInterval(() => {
    if (index < writingText.length) {
        writingElement.textContent += writingText[index];
        index++;
    } else {
        clearInterval(intervalId);
    }
}, 80);
