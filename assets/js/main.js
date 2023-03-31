const inital = document.querySelector(".inital")
fetch("https://api.tvmaze.com/shows")
  .then(data => data.json())
  .then(json => {
    inital.innerHTML = `
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img-s3.onedio.com/id-64117ddf31b19b67f5361cb5/rev-0/w-620/f-jpg/s-f77e2d1431485a80ef49c6fe5e9d869b1e1cb2ba.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/56dfd905cbbf34586055e509.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.cumhuriyet.com.tr/Archive/2023/3/25/2064721/kapak_113305.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`
  })

const cod = document.querySelector(".cod")
fetch("https://api.tvmaze.com/shows")
  .then(data => data.json())
  .then(json => {
    if (json.length > 15) {
      for (let i = 0; i < 15; i++) {
        cod.innerHTML += `
         <div class="col-2 card" style=" width: 14rem;">
          <img src="${json[i].image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title"><a href="details.html?id=${json[i].id}">Name:${json[i].name}</a></h5>
            <span class="card-text">Language:${json[i].language},</span>
            <span class="card-text">Language:${json[i].type}</span>
            <p class="card-text">Imdb:${json[i].externals.imdb}</p> `
      }
    }
    else {
      for (let i = 0; i < 15; i++) {
        cod.innerHTML += `
         <div class="col-3 card" style=" width: 10rem;">
          <img src="${json[i].image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title"><a href="details.html?id=${json[i].id}">Name:${json[i].name}</a></h5>
            <span class="card-text">Language:${json[i].language},</span>
            <span class="card-text">Language:${json[i].type}</span>
            <p class="card-text">Imdb:${json[i].externals.imdb}</p> `
      }
    }
  })



const waiting = document.querySelector(".waiting")
waiting.addEventListener("click", function (e) {


  fetch("https://api.tvmaze.com/shows")
    .then(data => data.json())
    .then(json => {

      for (let i = 15; i < json.length; i++) {
        cod.innerHTML += `
          <div class="col-3 card" style=" width: 14rem;">
           <img src="${json[i].image.medium}" class="card-img-top" alt="...">
           <div class="card-body">
           <h5 class="card-title"><a href="details.html?id=${json[i].id}">Name:${json[i].name}</a></h5>
             <span class="card-text">Language:${json[i].language},</span>
             <span class="card-text">Language:${json[i].type}</span>
             <p class="card-text">Imdb:${json[i].externals.imdb}</p> `
      }
    })
  e.preventDefault()
})