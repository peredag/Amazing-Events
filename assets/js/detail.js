const container = document.getElementById('container-card')
//console.log(window.location)
const params = new URLSearchParams(location.search) /* (location.search) */
const id = params.get( "id" ) 
const eventosInfo = data.events 
const evento = eventosInfo.find( evento => evento._id == id) 

addCard(evento)

function addCard(array){
  let template = '' 
   template +=
   `
      <img src="${evento.image}" alt="">
      <div class="text-card">
        <h3>${evento.name}</h3>
        <p>${evento.description}</p>
        <p>${evento.category}</p>
        <p>${evento.price}</p>
        <p>${evento.capacity}</p>
      </div>
   `
  container.innerHTML = template
}



    