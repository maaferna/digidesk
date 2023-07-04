fetch('https://digimon-api.vercel.app/api/digimon' , {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    });

var contenido = document.getElementById("contenido");


function tabla(datos) {
    for (let temp of datos) {
        `
        <div class="col col-sm-4 col-md-3">
            <div class="card text-center" style="height: 55vh; overflow:auto;">
                <img src=${temp.img} class="card-img-top" alt=${temp.name}>
                <div class="card-body">
                    <h2 class="card-title">${temp.name}</h2>
                    <h6 class="card-subtitle mb-2 text-muted">${temp.level}</h6>
                    <a href=${temp.name} class="card-link">Image link</a>
                    <a class="btn btn-primary" href="/detalle.html?name=${temp.name}">Go to Digimon</a>
                    <button data-id="${temp.name}" class="sync btn btn-secondary dblock mt-3">Sincronizar with Database</button>
                </div>
            </div>
        </div>
        `
        }
    $(".sync").click(function () {
        var $this = $(this);
        alert($this.data("id"));
        var $id = $this.data("id");
        console.log($id);
        let digi = datos.find(item => item.name === $id );
        console.log(digi);
        $.post("/digidesk/digisave/", {
              "name": digi.name,
              "level": digi.level,
              "image": digi.img
            }, function(digi) {
              // Ingresa a esta funcion
              window.location.reload();
            });
        });
 }

fetch('https://digimon-api.vercel.app/api/digimon/' , {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(datos => {
        tabla2(datos);
    });


var contenidoName = document.getElementById("contenido-by-name");


function tabla2(datos) {
    content = "";
    content +=  `
    <select class="form-select" onchange="val()" aria-label="Digimon Name" id="name">
        <option selected>Open this select menu</option>
        `;

    for (let temp of datos) {
        content +=
        `
          <li><button class="dropdown-item" type="button">${temp.name}</button></li>
          <option value=${temp.name}>${temp.name}</option>

    `
    }
    content +=  `
    </select>
    `;
    contenidoName.innerHTML = content;
}


function val() {
    d = document.getElementById("name").value;

    fetch('https://digimon-api.vercel.app/api/digimon/name/' + d , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            },
        })
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        tabla3(datos);
    });
}

var detailName = document.getElementById("digimon_detail");

function tabla3(datos) {
    for (let temp of datos) {
        detailName.innerHTML =
        `
            <img src=${temp.img} class="card-img-top" alt=${temp.name}>
            <div class="card-body">
                <h2 class="card-title">${temp.name}</h2>
          <h6 class="card-subtitle mb-2 text-muted">${temp.level}</h6>
                <a href=${temp.img} class="card-link">Image link</a>
            </div>
             <button data-id="${temp.name}" class="sync btn btn-secondary dblock mt-3">Sincronizar with Database</button>
        `;
    }
        $(".sync").click(function () {
        var $this = $(this);
        alert($this.data("id"));
        var $id = $this.data("id");
        console.log($id);
        let digi = datos.find(item => item.name === $id );
        console.log(digi);
        $.post("/digidesk/digisave/", {
              "name": digi.name,
              "level": digi.level,
              "image": digi.img
            }, function(digi) {
              // Ingresa a esta funcion
              window.location.reload();
            });
        });
}