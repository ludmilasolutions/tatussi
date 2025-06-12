fetch('tatuadores.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('tatuadores-container');
    data.tatuadores.forEach(tatuador => {
      const card = document.createElement('div');
      card.className = 'tatuador-card';
      card.innerHTML = `
        <img src="${tatuador.foto}" alt="${tatuador.nombre}">
        <h2>${tatuador.nombre}</h2>
        <p><strong>Estilo:</strong> ${tatuador.estilo}</p>
        <p><strong>Ubicación:</strong> ${tatuador.ubicacion}</p>
        <p><strong>Precio:</strong> $${tatuador.precio}</p>
        <button onclick="window.open('https://wa.me/${tatuador.whatsapp}?text=Hola%20${tatuador.nombre},%20quiero%20reservar%20un%20turno')">Reservar</button>
      `;
      container.appendChild(card);
    });
  });
