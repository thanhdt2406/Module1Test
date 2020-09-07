let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
document.write(objAnimal1.convertToString()+"<br>");

let objAnimal2 = new Animal("Cat",2);
document.write(objAnimal2.convertToString()+"<br>");
objAnimal2.setName("Mouse");
document.write(objAnimal2.convertToString());
