let carta1;
let mazo = document.getElementById ('botonMazo');
let pozo = document.querySelector ('.pozoDescarte');
let borrar = document.getElementById('borrarHistorial');
let regla = document.getElementById ('daRules');
const cementerioCartas = document.getElementById("poolCartas");
let mostrarCarta = document.getElementById("descarte");
let cartaSacada = [];


//generar cartas
function cartaRandom(){

    class Cartas {
    constructor (valor){
        this.valor = valor;

    }
    generarCarta(){

        //genera un numero aleatorio
        this.valor = parseInt(Math.random()*12)+1;
        let carta = this.valor;

        fetch('/imagenCartas.json')
        .then((img) => img.json())
        .then(imagenCarta => {

        //comparo el valor que se genera automaticamente y lo comparo con el valor de las imagenes del json
        if (this.valor == imagenCarta[0].numero){   pozo.innerHTML = " ";
        //recupera la imagen del valor de la carta
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[0].foto}" alt="${imagenCarta[0].numero}">`)
            //Imprime la regla que va con el valor de la carta
            regla.innerHTML = `Tomas  ${this.valor} tragos`;           
            
        }else if(this.valor == imagenCarta[1].numero){ pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[1].foto}" alt="${imagenCarta[1].numero}">`)
            regla.innerHTML = `Toma ${this.valor} tragos`;

        }else if(this.valor == imagenCarta[2].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[2].foto}" alt="${imagenCarta[2].numero}">`)
            regla.innerHTML = `Toma ${this.valor} tragos`;

        }else if (this.valor == imagenCarta[3].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[3].foto}" alt="${imagenCarta[3].numero}">`)
            regla.innerHTML = `Reparti  ${this.valor} tragos`;

        }else if(this.valor == imagenCarta[4].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[4].foto}" alt="${imagenCarta[4].numero}">`)
            regla.innerHTML = `Reparti  ${this.valor} tragos`;

        }else if(this.valor == imagenCarta[5].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[5].foto}" alt="${imagenCarta[5].numero}">`)
            regla.innerHTML = `Reparti  ${this.valor} tragos`;

        }else if (this.valor == imagenCarta[6].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[6].foto}" alt="${imagenCarta[6].numero}">`)
            regla.innerHTML = `Podes rebotar tragos (cuando te los repartan)`;

        }else if(this.valor == imagenCarta[7].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[7].foto}" alt="${imagenCarta[7].numero}">`)
            regla.innerHTML = `Hace una accion y el ultimo que la repita toma`;
    
        }else if(this.valor == imagenCarta[8].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[8].foto}" alt="${imagenCarta[8].numero}">`)
            regla.innerHTML = `Hace una accion y el ultimo que la repita toma`;
    
        }else if(this.valor == imagenCarta[9].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[9].foto}" alt="${imagenCarta[9].numero}">`)
            regla.innerHTML = `Crea una regla que dure por el resto del juego`;

        }else if (this.valor == imagenCarta[10].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[10].foto}" alt="${imagenCarta[10].numero}">`)
            regla.innerHTML = `Podes rebotar tragos (cuando te los repartan)`;

        }else if (this.valor == imagenCarta[11].numero){pozo.innerHTML = " ";
            pozo.insertAdjacentHTML("afterbegin",`<img src="${imagenCarta[11].foto}" alt="${imagenCarta[11].numero}">`)
            regla.innerHTML = `Sos Barney, Antes que alguien saque una carta tiene que decir toma Barney y tomas 1 trago`

        }
     
        })
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
                cementerioCartas.innerHTML = ' ';
                pozo.innerHTML = " ";
                regla.innerHTML = ' ';
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