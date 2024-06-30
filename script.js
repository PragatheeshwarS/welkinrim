const writingText = "WELKINRIM TECHNOLOGIES";
const writingElement = document.getElementById("writing-text");

let index = writingText.length;
let isDeleting = true;

function writeText() {
    if (isDeleting) {
        if (index > 0) {
            writingElement.textContent = writingElement.textContent.slice(0, -1);
            index--;
        } else {
            isDeleting = false;
        }
    } else {
        if (index < writingText.length) {
            writingElement.textContent += writingText[index];
            index++;
        } else {
            isDeleting = true;
        }
    }
    setTimeout(writeText, 50); // adjust the delay to control the animation speed
}

writeText();