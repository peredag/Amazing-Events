import { crearCards, crearCheck, filtroCheck, filtradoDeBuscador, mensaje} from './funciones.js'
const containerCards = document.getElementById("row")  //cards
const checks = document.getElementById("checks-container") 
const search = document.getElementById("form");
//const resultSearch = document.getElementById("result");

let events;

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then( data => data.json())
    .then( res => {
    events = res.events
    const filterChecks = [ ... new Set ( events.map( categoria => categoria.category)) ]; 
    crearCards(events)
    crearCheck(filterChecks, checks)
    filtroCheck(events)
    filtradoDeBuscador(buscar, events)
    checks.addEventListener("change");
    search.addEventListener('keyup');
    
    })
    
    .catch ( err => console.log(err))





checks.addEventListener( "change" ,  () => {
  let aux = filtroCheck(events);
  let buscar = search[0].value.toLowerCase();
  let funcionFiltrado = filtradoDeBuscador(buscar, events);
  let checkCardFiltro = filtroCheck(funcionFiltrado);
  //crearCards(aux);
  crearCards(checkCardFiltro)
} );

search.addEventListener('keyup', (e)=>{
 
  let buscar = search[0].value.toLowerCase();
  let funcionFiltrado = filtradoDeBuscador(buscar, events);
  let checkCardFiltro = filtroCheck(funcionFiltrado);
  crearCards(checkCardFiltro);
  //mensaje(checkCardFiltro, cards);

});


