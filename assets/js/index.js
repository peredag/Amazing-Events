const eventosInfo = data.events 


//checkbox dinamicos

//4°CAPTURO DONDE VOY A CREAR 
const checks = document.getElementById("checks")
let filterChecks = Array.from( new Set( eventosInfo.map( evento => evento.category) ) ) .filter( categ => categ )


//5°CREO ELEMENTO HTML CHECKBOXS--crea un NODO
addCheckInner(filterChecks, checks)

//5
function addCheckInner(array, element){
  let template = ''
  for( let check of array ){
    template += createCheck(check)
  }
  element.innerHTML += template// le asigno al elemento con inner html el contenido(concatenado) FINAL del bucle
}

//5
function createCheck(check){
  return `
  <label for="b">
    ${check}
    <input type="checkbox" name="yes" id="b" value="2">
  </label>
  `
}

//CREANDO CARDS
const main = document.getElementById("row") 

addCard(eventosInfo, main)

//11° ESTA FORMA CON INNER HTML PARA EVITAR EL REFLOW
function addCard(array, element){
  //elemento.innerHTML = ''
  let template = '' //este string se va a modificar en cada vuelta del bucle, y se va concatenando lo que manda el bucle

  for( let event of array ){

    if(event.date < data.currentDate){
      template += createCard(event)
    } 

  }

  element.innerHTML += template// le asigno al elemento con inner html el contenido(concatenado) FINAL del bucle
}


function createCard(event){
  return `
  <div class="card col-sm-12 col-md-4 col-lg-3 mb-1">
    <img src="${event.image}</h5>" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5></h5>
        <p class="card-text">${event.description}</h5></p>
        <div class="card-body">
        <a href="./assets/detail.html" class="card-link">$${event.price}</a>
        <a href="./assets/detail.html" class="card-link">${event.category}</a>
        </div>
    </div>

  </div>
  `
}

