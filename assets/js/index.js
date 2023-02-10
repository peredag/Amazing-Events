const eventosInfo = data.events 
const main = document.getElementById("row")  //cards
const checks = document.getElementById("checks-container") 
const filterChecks = Array.from( new Set( eventosInfo.map( evento => evento.category) ) )  
const search = document.getElementById("form");
const resultSearch = document.getElementById("result");


checkbox(filterChecks, checks)
addCard(eventosInfo)


function addCard(array){ //CARDS
  let template = '' 
  for( let event of array ){
   /*  if(event.date < data.currentDate){ */
      template +=
      `
      <div class="card col-sm-12 col-md-4 col-lg-3 mb-1">
        <img src="${event.image}</h5>" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5></h5>
            <p class="card-text">${event.description}</h5></p>
            <div class="card-body">
            
            <a href="./assets/detail.html?id=${event._id}&name=${event.name}" class="card-link">Go!</a> 
            </div>
        </div>
    
      </div>
      `

      {/* <a href="./assets/detail.html?id=${event._id}&name=${event.name}" class="card-link">DETAIL</a>  */}
   /*  } */                          //?id=${event._id}, con el signo ? le indico query params
                                     //parametro ubicado en la ruta

   
  }
  main.innerHTML = template
}


function checkbox(array){ 
  let template = '' 
  
  for( let event of array ){
   template +=
   `
    <label for="${event}">
      ${event}
      <input type="checkbox" name="" id="${event}" value="${event}">
    </label>
   `
  }
  checks.innerHTML = template
}


//checks
checks.addEventListener('change',(e)=>{
  let filter = filterBox(eventosInfo)
  addCard(filter)
})

function filterBox(array){
  let box = document.querySelectorAll('input[type="checkbox"]:checked')
  let boxChecked = [...box].map(x => x.value)
   if(boxChecked.length === 0){
     return (array) 
   }
  return array.filter( element => boxChecked.includes(element.category))
}



function filterSearch(buscar, eventosInfo){ 
    let buscadorFiltrado = eventosInfo.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if(buscadorFiltrado.length === 0){
        //console.log("no encontrado")
         result.innerHTML = `
            <div>
              <p>Oops! evento no encontrado </p>
            </div>
            
        `  
    }
    return buscadorFiltrado;
}

search.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let buscar = search[0].value.toLowerCase();
    let functionFilter = filterSearch(buscar, eventosInfo);
    let checkCardFiltro = filterBox(functionFilter);
    addCard(checkCardFiltro)
});