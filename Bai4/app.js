let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
document.write("Object 1: " + objAnimal1.convertToString() + "<br>");

let objAnimal2 = new Animal("Cat", 2);
document.write("Object 2 (before change): " + objAnimal2.convertToString() + "<br>");
objAnimal2.setName("Mouse");
document.write("Object 2 (before change): " + objAnimal2.convertToString() + "<br>");