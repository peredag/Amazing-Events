//ids tablas
const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')

//API
async function jsonEvents(){
    try{
    var events = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    events = await events.json()
    }catch(error){
    console.log(error)
    }

    let todosLosEventos = events.events
    let pastEvents = events.events.filter(event => event.assistance)
    let upcomingEvents = events.events.filter(event => event.estimate)

    todosLosEventos.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity//total de asistencia
        event.ingresos = event.price * event.assistance// total recaudado por evento
    })

    pastEvents.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity //t.a
        event.ingresos = parseInt(event.price) * parseInt (event.assistance)//t.r
    })

    upcomingEvents.map(event => {
        event.porcentajeAsistencia = 100 * event.estimate / event.capacity//t.a
        event.ingresos = parseInt(event.price) * parseInt (event.estimate)//t.r
    })


    let capacidadEventos = [...todosLosEventos].sort((a,b) => a.capacity - b.capacity) //ordeno eventos de menor a mayor
    
    let eventoMaxCapadidad = capacidadEventos[capacidadEventos.length-1]//capturo el evento de mayor capacidad
    let porcentajeAsistenciaEvento = [...pastEvents].sort((a,b) => a.porcentajeAsistencia - b.porcentajeAsistencia)//ordeno eventos de menor a mayor
    let minPorcentajeAsistencia = porcentajeAsistenciaEvento[0]
    let maxPorcentajeAsistencia = porcentajeAsistenciaEvento[porcentajeAsistenciaEvento.length-1]//capturo el de mayor asistencia

    table1.innerHTML += `
    <tr>
        <td>${maxPorcentajeAsistencia.name}: ${Math.round(maxPorcentajeAsistencia.porcentajeAsistencia)}%</td>
        <td>${minPorcentajeAsistencia.name}: ${minPorcentajeAsistencia.porcentajeAsistencia}%</td>
        <td>${eventoMaxCapadidad.name}: ${parseInt(eventoMaxCapadidad.capacity)}</td>
    </tr>`

    let filtroCategoria = new Set(pastEvents.map(event => event.category))
    filtroCategoria = [...filtroCategoria]


    
    let datoCategoria = [...new Set (todosLosEventos.map(event => event.category))]

    datoCategoria.forEach(element => {
        let capacity = 0
        let assistance = 0
        let revenues = 0
        pastEvents.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                assistance += event.assistance
                revenues +=event.ingresos
            }
        })
        table3.innerHTML += `
            <tr>
                <td>${element}</td>
                <td>${revenues}</td>
                <td>${Math.round(assistance * 100 / capacity)}%</td>
           </tr>`
    });


    let upcomingCategory = [...new Set (upcomingEvents.map(event => event.category))]

    upcomingCategory.forEach(element => {
        let capacity = 0
        let estimate = 0
        let revenues = 0
        upcomingEvents.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                estimate += event.estimate
                revenues +=event.ingresos
            }
        })
        table2.innerHTML += `
        <tr>
            <td>${element}</td>
            <td>${revenues}</td>
            <td>${Math.round(estimate * 100 / capacity)}%</td>
        </tr>
        `
    });   
}

jsonEvents()


