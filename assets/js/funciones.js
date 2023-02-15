export function crearCards(array) {
    const containerCards = document.getElementById ("row");
    let card = "";
    for (let evento of array) {
    card += `
      <div class="card col-sm-12 col-md-4 col-lg-3 mb-1">
        <img src="${evento.image}</h5>" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5></h5>
          <p class="card-text">${evento.description}</h5></p>
          <div class="card-body">
        
            <a href="./assets/detail.html?id=${evento._id}&name=${evento.name}" class="card-link">Go!</a> 
          </div>
        </div>
      </div>
    `
    }
    containerCards.innerHTML = card ;
}
  

export function crearCheck ( filtrarCategorias , elemento) { 
    let aux = "";
    filtrarCategorias.forEach(element =>  {
        aux += `
        <label for="${element}">
           ${element}
            <input type="checkbox" name="" id="${element}" value="${element}">
        </label>
        
        `
    });
    elemento.innerHTML = aux; 
}

export function filtroCheck (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked")].map((check) => check.value);  
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
}

export function filtradoDeBuscador(buscar, dataEventos){
    let buscadorFiltrado = dataEventos.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar));
    if(buscadorFiltrado.length === 0){
        alert('evento NO encontrado')
    }
    return buscadorFiltrado;
}


export function mensaje(dataEventos, cards) {
    if(dataEventos.length === 0) {
        cards.innerHTML = `<p class="not"> NOT FOUND </p>`
    } else {
        return crearCards(dataEventos, cards);
    }
}

//detail

export function addCardDetail( array, elemento){
    elemento.innerHTML = 
    `
        <img src="${array.image}" alt="">
        <div class="text-card">
          <h3>${array.name}</h3>
          <p>${array.description}</p>
          <p>Category:  ${array.category}</p>
          <p>Price:  ${array.price}</p>
          <p>Capacity:  ${array.capacity}</p>
        </div>
     `
}