const main = document.getElementById("row") 
let eventosInfo = data.events 

//console.log(eventosInfo)
//console.log(eventosInfo[0]["name"])

for (let eventoInfo of eventosInfo) { 

    let divContenedor = document.createElement("div")
     divContenedor.className = "card col-sm-12 col-md-4 col-lg-3 mb-1"                          
     divContenedor.innerHTML = `
            <img src="${eventoInfo.image}</h5>" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${eventoInfo.name}</h5></h5>
                <p class="card-text">${eventoInfo.description}</h5></p>
                <div class="card-body">
                <a href="./assets/detail.html" class="card-link">$${eventoInfo.price}</a>
                <a href="./assets/detail.html" class="card-link">${eventoInfo.category}</a>
                </div>
            </div>
        </div>
        `
     main.appendChild(divContenedor)
} 

//checkbox dinamicos
const checks = document.getElementById("checks")
let filterChecks = Array.from( new Set( eventosInfo.map( evento => evento.category) ) ) .filter( categ => categ )
//console.log(filterChecks)

for (let check of filterChecks) { 
    let divContainerCheck = document.createElement("div")
    divContainerCheck.className = "checks-js"                         
    divContainerCheck .innerHTML += `
     
        <label for="b">
            ${check}
            <input type="checkbox" name="yes" id="b" value="2">
        </label>
     
        `
     checks.appendChild(divContainerCheck)
} 





//search
//10 ejemplo evento submit
const formulario = document.getElementById("form"); //escucha al evento que pasa en el formulario
const contenedor = document.getElementById("result");

//console.log(formulario);

form.addEventListener("submit", (event) => {
  
  event.preventDefault(); 
  console.log(form[0].value)

  //let keywords = req.query.keywords.trim().toLowerCase()+
  //let result3 = products.filter(product => product.name.toLowerCase().includes(keywords))

  

  if(form[0].value.includes("K")){
    console.log("ok")
  }


  /* if(form[0].value === "Korean"){
    console.log("ok")
  } */
 
  /* if (form[0].value == eventosInfo.) {
    console.log();
  } */

  /* result.innerHTML += 
    `
      <div class="XXXX">
        ${form[0].value.includes(data.name)}
      <div/>
   `; */
   result.innerHTML += 
    `
      <div class="XXXX">
       
      <div/>
   `;
   //console.log(form[0].value)
});
// ${form[0].value.data.find( x => x.name.includes('Korean'))}