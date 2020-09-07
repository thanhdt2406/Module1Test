function solveEquation(num1, num2) {
    if (num1 === 0) {
        if (num2 === 0) {
            return "co vo so nghiem";
        } else {
            return "vo nghiem";
        }
    }
    return "Phuong trinh co nghiem x = " + num2 / num1;
}

document.write(solveEquation(5, 8));