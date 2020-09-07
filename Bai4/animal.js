class Animal {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setWeight(weight){
        this.weight = weight;
    }

    getWeight(){
        return this.weight;
    }

    convertToString(){
        return "Name: "+this.name+" - Weight: "+this.weight;
    }
}