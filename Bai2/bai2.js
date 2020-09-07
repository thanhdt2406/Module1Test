let arr = [1, 2, 6, 5, 7, 10, 16, 25, 60];

let inputNumber = parseInt(prompt("Enter element:"));
while (isNaN(inputNumber)) {
    inputNumber = parseInt(prompt("Error, try again:"));
}

let index = searchArrayElement(inputNumber, arr);
if (index === -1) {
    document.write("Not found element in array");
} else {
    document.write("Found element " + inputNumber + " at index " + index);
}

function searchArrayElement(element, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}



