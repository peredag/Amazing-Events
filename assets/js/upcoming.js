const main = document.getElementById("row")
let eventosInfo = data.events

for (let eventoInfo of eventosInfo) {
    
    if(eventoInfo.date > data.currentDate){

        let divContenedor = document.createElement("div") 

        divContenedor.className = "card col-sm-12 col-md-4 col-lg-3 mb-1"   

        divContenedor.innerHTML = 
     
            `<img src="${eventoInfo.image}</h5>" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${eventoInfo.name}</h5></h5>
                <p class="card-text">${eventoInfo.description}</h5></p>
                <div class="card-body">
                    <a href="./detail.html" class="card-link">$${eventoInfo.price}</a>
                    <a href="./detail.html" class="card-link">${eventoInfo.category}</a>
                </div>
            </div>`
        main.appendChild(divContenedor)
    } 
    
} 


const checks = document.getElementById("checks")
let filterChecks = Array.from( new Set( eventosInfo.map( evento => evento.category) ) ) .filter( categ => categ )
//console.log(filterChecks)

for (let check of filterChecks) { 
    let divContainerCheck = document.createElement("div")
    divContainerCheck.className = "checks-js"                         
    divContainerCheck .innerHTML = `
     
        <label for="b">
            ${check}
            <input type="checkbox" name="yes" id="b" value="2">
        </label>
     
        `
     checks.appendChild(divContainerCheck)
} 



