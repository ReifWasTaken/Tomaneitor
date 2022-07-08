let carta1;
let mazo = document.getElementById ('botonMazo');
let pozo = document.querySelector ('.pozoDescarte');
let borrar = document.getElementById('borrarHistorial');
const cementerioCartas = document.getElementById("poolCartas");
let cartaSacada = [];


//generar cartas
function cartaRandom(){

    class Cartas {
    constructor (valor){
        this.valor = valor;

    }
    generarCarta(){

        this.valor = parseInt(Math.random()*12)+1;
        let carta = this.valor;
        
        if (this.valor == 1){
            pozo.innerHTML = `sacaste un ${this.valor} toma  ${this.valor} tragos`;
    
        }else if(this.valor == 2){
            pozo.innerHTML = `sacaste un ${this.valor} toma ${this.valor} tragos`;
    
        }else if(this.valor == 3){
            pozo.innerHTML = `sacaste un ${this.valor} toma ${this.valor} tragos`;
    
        }else if (this.valor == 4){
            pozo.innerHTML = `sacaste un ${this.valor} reparti  ${this.valor} tragos`;
           
        }else if(this.valor == 5){
            pozo.innerHTML = `sacaste un ${this.valor} reparti ${this.valor} tragos`;
    
        }else if(this.valor == 6){
            pozo.innerHTML = `sacaste un ${this.valor} reparti ${this.valor} tragos`;
    
        }else if (this.valor == 7){
            pozo.innerHTML = `sacaste un ${this.valor} podes rebotar tragos`;
         
        }else if(this.valor == 8){
            pozo.innerHTML = `sacaste un ${this.valor} Hace una accion y el ultimo que la haga toma`;
    
        }else if(this.valor == 9 ){
            pozo.innerHTML = `sacaste un ${this.valor} Hace una accion y el ultimo que la haga toma`;
    
        }else if(this.valor == 10 ){
            pozo.innerHTML = `sacaste un ${this.valor} Crea una regla que dure por el resto del juego`;
        }else if (this.valor == 11){
            pozo.innerHTML = `sacaste un ${this.valor} podes rebotar tragos`;
        }else {
            pozo.innerHTML = `sacaste un ${this.valor} Sos Barney, Antes que alguien saque una carta tiene que decir toma Barney`
        }
    
        return carta;
    }
 }
 carta1 = new Cartas ()
 

}


//Generador de cartas aleatorias
function sacarCartas(){
    let mazoCartas = []

    cartaRandom()
    mazoCartas.push(carta1.generarCarta())  

    sessionStorage.setItem('pozo', JSON.stringify(carta1))
    
    cartaSacada.push(carta1);

    console.log(cartaSacada)

    //Muestra las cartas que van saliendo
     const listaCartas = document.createElement("li");

     listaCartas.textContent = mazoCartas;

     cementerioCartas.appendChild(listaCartas);

     // borrar historia de cartas
    borrar.addEventListener("click", () =>{

        swal({
            title: "¿Estas seguro?",
            text: "Borrar el historial puede llevar a discuciones con amigos y probablemente esten borrachos",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                sessionStorage.clear(carta1);
               cartaSacada.splice(cartaSacada.length);
                cementerioCartas.innerHTML = '';
            swal("Adios historial!", {
                icon: "success",
            });
            } else {
            swal("Okay, Sepan cuando dejar de tomar");
            }
        });
    })
}

mazo.addEventListener("click", sacarCartas)