// clase principal de Ninja 
class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza =3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`Ninja name: ${ this.nombre }`);
    }
    showStats() {
        console.log(`name: ${ this.nombre }, hp: ${this.salud}, speed: ${this.velocidad}, strength: ${this.fuerza}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

//  Clase Sensei
class Sensei extends Ninja {
    constructor(nombre, sabiduria = 10) {
        super(nombre, 200, 10, 10);
        this.sabiduria = sabiduria;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
    showStats(){
        super.showStats();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"