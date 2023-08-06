export function addCards(array, elementoH) {
    if(array.length === 0) {
        return  elementoH.innerHTML = `<h4> Oops! no econtramos lo que buscabas!<h4>`
    } 
    for (let evento of array) {
   
    elementoH.innerHTML += `
    <section class="card col-lg-2 col-12">
        <div class="card-img">
          <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        </div>
        <div class="card-body p-0 d-flex flex-column justify-content-center">
          <h5 class="card-title text-center m-0">${evento.name}</h5>
          <p class="text-center m-0">
            ${evento.description}
          </p>
          <div>
            <p class="m-0">Price: $${evento.price}</p>
            <a href="./assets/detail.html?id=${evento._id}" class="btn p-1">Details</a>
          </div>
        </div>
      </section>`
    }
}

/*
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
*/
export function addCheck ( array , elementoH) { 
  let aux = "";
  array.forEach(element =>  {
      aux += `
        <input type="checkbox" name="checkbox-option" class="hc" id="${element}" value="${element}">
        <label for="${element}">${element}</label>
       `
  });
  elementoH.innerHTML = aux; 
}

/* 
 <label for="${element}">
          ${element}
          <input type="checkbox" name="" id="${element}" value="${element}" class="hc">
  </label>
*/


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

    elementoH.innerHTML = `
    <img src="${array.image}" alt="">
    <div class="text-card">
      <h3>${array.name}</h3>
      <p>${array.description}</p>
      <p>${array.category}</p>
      <p>Price: $ ${array.price}</p>
      <p>Capacity:  ${array.capacity}</p>
    </div>
    ` 

}
