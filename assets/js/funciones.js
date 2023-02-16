export function addCards(array, elementoH) {
    if(array.length === 0) {
        return  elementoH.innerHTML = `<h6> Oops! no econtramos lo que buscabas!<h6>`
    } 
    for (let evento of array) {
    elementoH.innerHTML += `
    <div class="card col-sm-12 col-md-4 col-lg-3 mb-1">
      <img src="${evento.image}</h5>" class="card-img-top" alt="${evento.name}">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5></h5>
        <p class="card-text">${evento.description}</h5></p>
        <div class="card-body">
      
          <a href="./assets/detail.html?id=${evento._id}&name=${evento.name}" class="card-link">Go!</a> 
        </div>
      </div>
    </div>`
    }
}

export function addCheck ( array , elementoH) { 
    let aux = "";
    array.forEach(element =>  {
        aux += `
         <label for="${element}">
            ${element}
            <input type="checkbox" name="" id="${element}" value="${element}" class="checks-js2">
        </label> `
    });
    elementoH.innerHTML = aux; 
}

export function filtroCheck (array) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked")].map((check) => check.value);  
    if (marcarCheck.length === 0) {
        return array;
    }
    return array.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
    } 

export function filtradoDeBuscador(array, inputUsuario){
    let resultadoBuscador = array.filter(inputUsu => inputUsu.name.toLowerCase().includes(inputUsuario));
    return resultadoBuscador;
}


export function addCardDetail(array, elementoH) {

    elementoH.innerHTML = `<img src="${array.image}" alt="">
    <div class="text-card">
      <h3>${array.name}</h3>
      <p>${array.description}</p>
      <p>Category:  ${array.category}</p>
      <p>Price:  ${array.price}</p>
      <p>Capacity:  ${array.capacity}</p>
    </div>` 

}
