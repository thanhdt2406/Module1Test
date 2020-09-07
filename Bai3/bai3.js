const NGUYEN_AM = ['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I'];

let inputString = prompt("Nhập chuỗi: ");
while (inputString.length === 0) {
    inputString = prompt("Chuỗi rỗng, mời nhập lại: ");
}

let result = findCharacter(inputString.split(''));
if (result) {
    document.write("Chuỗi vừa nhập có " + result + " kí tự nguyên âm!");
} else {
    document.write("Chuỗi vừa nhập không có kí tự nguyên âm!");
}

function findCharacter(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (NGUYEN_AM.indexOf(array[i]) !== -1) {
            count++;
        }
    }
    if (count === 0) {
        return false;
    }
    return count;
}