const terminalLines = [
    '<span class="name">Name</span>',
    '[Eduardo Gomes]',
    '',
    '<span class="name">Location</span>',
    '[Braga, Portugal]',
    '',
    '<span class="name">Contact</span>',
    '[<a href="mailto:dugomes02@gmail.com">dugomes02@gmail.com</a>, <a href="https://www.linkedin.com/in/eduardogomes31/" target="_blank">LinkedIn</a>, <a href="https://github.com/GOMES31" target="_blank">GitHub</a>]',
    '',
    '<span class="name">Resume</span>',
    '[<a href="resume.pdf" target="_blank">resume.pdf</a>]',
    '',
    '<span class="name">Skills</span>',
    '[HTML, CSS, Javascript, PHP, C#, Java, SpringBoot, Thymeleaf, SQL Server, Postgres,]'
];

let currentLine = 0;
let currentChar = 0;
let currentText = '';
let isTag = false;
let tagBuffer = '';

const terminalOutput = document.getElementById("terminal-output");

function typeLine() {
    if (currentLine < terminalLines.length) {
        let line = terminalLines[currentLine];

        if (currentChar < line.length) {
            let char = line[currentChar];

            if (char === '<') {
                isTag = true;
                tagBuffer += char;
            } else if (char === '>') {
                isTag = false;
                tagBuffer += char;
                currentText += tagBuffer;
                terminalOutput.lastChild.innerHTML = currentText;
                tagBuffer = '';
            } else if (isTag) {
                tagBuffer += char;
            } else {
                currentText += char;
                terminalOutput.lastChild.innerHTML = currentText;
            }

            currentChar++;
            setTimeout(typeLine, 20);
        } else {
            terminalOutput.appendChild(document.createElement('p'));
            currentLine++;
            currentChar = 0;
            currentText = '';
            setTimeout(typeLine, 150);
        }
    }
}

window.onload = () => {
    terminalOutput.appendChild(document.createElement('p'));
    setTimeout(typeLine, 100);
};
