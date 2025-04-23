export function addBreak() {
    const b = document.createElement('br');
    document.body.appendChild(b);
}

export function dBreak() {
    const b1 = document.createElement('br');
    const b2 = document.createElement('br');
    document.body.appendChild(b1);
    document.body.appendChild(b2);
}

export function randomNumber() {
    let num;
    do {
        num = Math.floor(Math.random() * 100) + 1;
    } while (num === 0); // This condition is now redundant but kept for clarity.
    return num;
}