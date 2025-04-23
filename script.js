// Imports
import { addBreak, dBreak, randomNumber } from './utils.js';

// Functions
function focusTextareaToBottom() {
    textOutput.scrollTop = textOutput.scrollHeight;
}

function clearTextarea() {
    textOutput.value = '';
}

// const items = ['basil', 'leek', 'potato', 'gold'];

//Variables
const name = prompt("Profession Simulator! Please enter your character's name: ");
let level = '1';
let profession = 'Gatherer';

let basilCount = 0;
let leekCount = 0;
let potatoCount = 0;
let soupCount = 0;
let gold = 0;

let outputHistory = [];

// Title/Loading heading
const title = document.getElementById("title");
title.innerText = "Profession Simulator v1.0";

// Character Pane
const nameLabel = document.createElement("label");
if (name != null) {
    nameLabel.innerText = `Name: ${name}`;
    document.body.appendChild(nameLabel);
    }
else {
    nameLabel.innerText = `Name: Player 1`;
    document.body.appendChild(nameLabel);
}

const levelLabel = document.createElement("label");
levelLabel.innerText = `Level: ${level}`;
document.body.appendChild(levelLabel);

const professionLabel = document.createElement("label");
professionLabel.innerText = `Profession: ${profession}`;
document.body.appendChild(professionLabel);

dBreak();

// Output Textarea
const textOutput = document.createElement("textarea");
document.body.appendChild(textOutput);

dBreak();

// Button Row

// Search Button
const searchButton = document.createElement("button");
searchButton.innerText = "Search";
searchButton.addEventListener('click', () => {
    let rollValue = randomNumber();
    if (rollValue == 0) {
        while (rollValue == 0) {
            rollValue = randomNumber();
        }
    }

    const events = [
        {
            range: [1, 20],
            action: () => {
                textOutput.value += "You find a basil leaf.\n";
                basilCount += 1;
                textOutput.value += `Basil Count: ${basilCount}\n\n`;
                focusTextareaToBottom();
            }
        },
        {
            range: [21, 40],
            action: () => {
                textOutput.value += "You find a leek.\n";
                leekCount += 1;
                textOutput.value += `Leek Count:  ${leekCount}\n\n`;
                focusTextareaToBottom();
            }
        },
        {
            range: [41, 60],
            action: () => {
                textOutput.value += "You find a potato.\n";
                potatoCount += 1;
                textOutput.value += `Potato Count:  ${potatoCount}\n\n`;
                focusTextareaToBottom();
            }
        },
        {
            range: [61, 80],
            action: () => {
                textOutput.value += "You find some gold.\n";
                gold += 5;
                textOutput.value += `Gold Count: ${gold}\n\n`;
                focusTextareaToBottom();
            }
        },
        {
            range: [81, 100],
            action: () => {
                textOutput.value += "You find nothing.\n\n";
                focusTextareaToBottom();
            }
        }
    ];

    let eventTriggered = false;
    for (const event of events) {
        const [min, max] = event.range;
        if (rollValue >= min && rollValue <= max) {
            event.action(); // Execute the action function
            eventTriggered = true;
            break;
        }
    }

    if (!eventTriggered) {
        textOutput.value += `${rollValue}: Error during roll. Event not found!\n\n`;
        focusTextareaToBottom();
    }
});
document.body.appendChild(searchButton);

// Craft Button
const craftButton = document.createElement("button");
craftButton.innerText = "Craft";
craftButton.addEventListener('click', () => {
    if (basilCount >= 1 && leekCount >= 1 && potatoCount >= 1) {
        textOutput.value += "You craft a bowl of soup.\n";
        soupCount += 1;
        basilCount -= 1;
        leekCount -= 1;
        potatoCount -=1;
        textOutput.value += `Soup Count: ${soupCount}\n\n`;
        focusTextareaToBottom();
    } else {
        textOutput.value += "You don't have enough ingredients!\n\n";
        focusTextareaToBottom();
    }
});
document.body.appendChild(craftButton);

// Clear History Button
const clearHistoryButton = document.createElement("button");
clearHistoryButton.innerText = 'Clear History';
clearHistoryButton.addEventListener('click', () => {
    outputHistory = [];
    textOutput.value = '';
    textOutput.value += "History has been succesfully cleared.\n\n";
    focusTextareaToBottom();
});
document.body.appendChild(clearHistoryButton);
