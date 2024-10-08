const terminalLines = [
    '<span class="name">Eduardo.currentLocation</span>',
    '"Braga, Portugal"',
    '',
    '<span class="name">Eduardo.contactInfo</span>',
    '["dugomes02@gmail.com", "LinkedIn", "GitHub"]',
    '',
    '<span class="name">Eduardo.resume</span>',
    '"resume.pdf"',
    '',
    '<span class="name">Eduardo.skills</span>',
    '["HTML", "CSS", "Java", "SpringBoot", "Thymeleaf"]'
];

let currentLine = 0;

const terminalOutput = document.getElementById("terminal-output");

function typeLine() {
    if (currentLine < terminalLines.length) {
        let line = terminalLines[currentLine];

        if (line.length > 0) {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = line;
            terminalOutput.appendChild(paragraph);
            currentLine++;
            setTimeout(typeLine, 250);
        } else {
            terminalOutput.innerHTML += "<p></p>";
            currentLine++;
            setTimeout(typeLine, 250);
        }
    }
}

window.onload = () => {
    setTimeout(typeLine, 100);
};
