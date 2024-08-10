let human = {
    name : "Riccardo",
    surname : "Giordanella",
    age : 27,
    saluto : function(){
        console.log(`Ciao a tutti io sono ${this.name}, ${this.surname}`);

    }

}

human.saluto()