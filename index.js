/*Crear un objeto como una variable con información personal (nombre, edad, ocupación). esta información se obtendrá por medio de un prompt
Crear un método donde salude y diga su nombre y su ocupación en un alert siguiendo el siguiente texto 
`Hola me llamo Alberto, tengo 34 años, y soy Bombero`.

    let persona = {
        nombre: ‘’,
        edad: 0,
        ocupacion: ‘’
}*/

function Saludo() {
    let SaludoArray={
        nombre: prompt('Inserta tu nombre'),
        edad: prompt('Inserta tu edad'),
        ocupacion: prompt('Inserta tu ocupacion'),
        saludar: function(){
            alert(`Hola me llamo ${this.nombre}, tengo ${this.edad} años, y soy ${this.ocupacion}`);
            alert(`Hola me llamo ${SaludoArray.nombre}, tengo ${SaludoArray.edad} años, y soy ${SaludoArray.ocupacion}`);
        }
    }
}

/*Crear un método que permita agregar un nuevo valor a un objeto global y si ya existe esa propiedad, imprima un mensaje de que ya existe. Si no, que agregue la propiedad.
    let objeto = {
            “saludo”: “Hola!”,
            “despedida”: “Adiós!”
        }
agregarNuevoValor(“saludo”, “Qué tal!”) // “Ya existe esa propiedad”
    agregarNuevoValor('nombre', 'Saul')
    // {“saludo”: “Qué tal!”,“despedida”: “Adiós!”, “nombre”: “Saúl”}*/

let ObjSaludo={
    saludo:'Hola!',
    despedida:'Adios!'
}

function agregarNuevoValor(iproperty, ivalue){

    // let NewVAlue={iproperty: ivalue};
    if (ObjSaludo.hasOwnProperty(iproperty)){
        console.log('Ya existe esta propiedad');
    }else { 
        ObjSaludo[iproperty]=ivalue;
        console.log(ObjSaludo);
    }  
}


/*------------------------------------------
Crear una variable global que sea un array y crear dos funciones:
El primero debe agregar al array la información de un libro en forma de objeto.
El segundo debe imprimir el arreglo de objetos. 
De tal forma que se puedan mandar a llamar en la consola las funciones para agregar más información al arreglo o para imprimir todos los elementos del arreglo
let infoLibros =[]
agregarLibro(“El Quijote”, “Cervantes”);
imprimirLibros(); // [{nombre: “El Quijote”, autor: “Cervantes”}]
    agregarLibro(“Odisea”, “Homero”);
imprimirLibros(); 
// [
   {nombre: “El Quijote”, autor: “Cervantes”},
   {nombre: “Odisea”, autor: “Homero”}
]
------------------------------------------*/
let infoLibros=[];

function AddBook(NewBook){
    let Author=document.getElementById('Input1').value;
    let BookName=document.getElementById('Input2').value;
    let Book={
        nombre: BookName,
        autor: Author,
    }
    infoLibros.push(Book);
}

function showLibrary(){
    document.getElementById('TextArea1').innerHTML=JSON.stringify(infoLibros);
    console.log(infoLibros);
}




/*------------------------------------------
Dado un string con cualquier palabra, muestra cual es la letra que más se repite en la palabra y la cantidad que aparece en la misma
getletterRepeat('parangaracutirimicuario') // a: 5
getletterRepeat('bubbles') // b: 3*/

function getletterRepeat(StringInput){
    let newArry=StringInput.split('').sort().map(function(element){return element.toLowerCase();});
    let uvArry=[];
    let result=[];
    newArry.forEach(function(element){
        if (uvArry.indexOf(element)===-1){
            uvArry.push(element);
        }
    });
    uvArry.forEach(function (j) {
        let spareArry=newArry.filter(function(i){
            return i===j
        });
        let spareObj={};
        spareObj[j]=spareArry.length;
        result.push(spareArry);
    })
    let Lastresult=result.reduce(function(a,b){
        return a.length>b.length?a:b;
    })
    console.log(Lastresult[0],':',Lastresult.length);
    
}