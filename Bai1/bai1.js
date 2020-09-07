function solveEquation(num1, num2) {
    if (num1 === 0) {
        if (num2 === 0) {
            return "Phương trình có vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    }
    return "Phương trình có nghiệm x = " + num2 / num1;
}

document.write(solveEquation(5, 8));