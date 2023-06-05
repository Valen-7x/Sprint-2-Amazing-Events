let card = document.getElementById("box-cards")

function datos(event) {
return `<div class="cards-css1 card shadow" style="width: 15rem;">
<img src="${event.image}" class="card-img-top" alt="${event.name}">
<div class="card-body">
  <h5 class="card-title">${event.name}</h5>
  <p class="card-text">${event.description}</p>
  <div><a href="./pages/museum.html" class="btn btn-primary">Details</a><br><br>
  <p>Price ${event.price}</p></div>
</div>
</div>`;
  }
   
  function imprimirDatos(events) {
      const fechaActual = (data.currentDate);
      let template = "";
      for (let evento of events) {
        let fechaEvento = (evento.date); 
        if (fechaEvento > fechaActual) {
          template += datos(evento);
        }
      }
      console.log(template);
      card.innerHTML += template;
    }
    imprimirDatos(data.events);
 
