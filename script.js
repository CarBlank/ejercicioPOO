//POO

/* Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona. */

class Person {
    constructor(name, age, genre) {
    this.name = name
    this.age = age
    this.genre = genre
    }
    
    obtDetails = () => {
        console.log(`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre}`)
    }
    }
    
    const person1 = new Person ('Marta', '30', 'Mujer')
    person1.obtDetails()
    
    //'Tu nombre es Marta tu edad es 30 y eres Mujer'
    

//Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por pantalla el resultado.

class Student extends Person {
    constructor (name,age,genre,course,group) {
    super (name,age,genre)
    this.course = course
    this.group = group

 }
    register = () => {
        console.log(`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre} tu curso es ${this.course} perteneces al grupo ${this.group} ` )
    }
}

const person2 = new Student ('Maria', '18','Mujer','8','3b')
person2.register()


//'Tu nombre es Maria tu edad es 18 y eres Mujer tu curso es 8 pertenecer al grupo 3b '

/* Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por pantalla el resultado. */

class Teacher extends Person {
    constructor (name,age,genre,course,group,subject,level) {
    super (name,age,genre,course,group)
    this.subject = subject
    this.level = level

 }
    asign = () => {
        console.log (`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre},Tu curso es ${this.course} perteneces al grupo ${this.group} tu asignatura es ${this.subject} y nivel ${this.level} `)

     }
}

const person3 = new Teacher ('Jaime', '40','Hombre','3','3b','Historia','avanzado')
person3.asign()


