import { addCardDetail} from './funciones.js'
const container = document.getElementById('container-card')
let events;

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then( data => data.json())
    .then( res => {
    events = res.events
    const params = new URLSearchParams(location.search)
    const id = params.get( "id" )
    const evento = res.events.find( evento => evento._id == id) 
    addCardDetail(evento, container)
    
    })
    
    .catch ( err => console.log(err))


    