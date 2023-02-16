import { addCards, addCheck, filtroCheck, filtradoDeBuscador } from './funciones.js'
const containerCards = document.getElementById("row")  
const checks = document.getElementById("checks-container")
const search = document.getElementById("form");

let date;
let events;

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then( data => data.json())
    .then( response => {     
    const events = response.events.filter( eventos => eventos.date > response.currentDate); 
    addCards(events, containerCards)
    const filtrarCategorias = [ ... new Set ( events.map( categoria => categoria.category)) ];
    addCheck(filtrarCategorias, checks);

    checks.addEventListener( "change" ,  () => {
      containerCards.innerHTML = "";
      let buscar = search[0].value.toLowerCase();
      let checkCardFiltro = filtradoDeBuscador(events, buscar)
      let aux = filtroCheck(checkCardFiltro);
      console.log(aux)
      addCards(aux, containerCards);
    });
    
    search.addEventListener('keyup', (e)=>{
      containerCards.innerHTML = "";
      let buscar = search[0].value.toLowerCase();
      let checkCardFiltro = filtradoDeBuscador(events, buscar);
      let aux = filtroCheck(checkCardFiltro);
      console.log(aux);
      addCards(aux, containerCards);
        
    });
})
    
.catch ( err => console.log("Este es el error"), err);