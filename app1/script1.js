
// Naslovi stavi na site strani
//od "kontakt" i "za nas" koa idam na lista na apteki ne mi dava nisto

$(window).ready(function() {
  
let apteki;
let searchMedicine;

let container = document.querySelector('.hide');
let searchRes = document.querySelector('.search-res');
let dropContainer = document.querySelector('#drop-container');
let aptekiContainer = document.querySelector('#apteki');
let dropresults = document.querySelector('#drop-res');

fetch("https://raw.githubusercontent.com/SanjaNaskova/jsonDataa/master/data.json")
.then (res => res.json())
.then (data => {
     container.style.display = "block";
     searchRes.style.display = "none";
    
     apteki = data;
     
})


  $("#btn-m").click(function() {
    container.style.display="none";
    searchRes.style.display="block";
               
     searchMedicine = $("#medicine").val();
     
    showResult();
      
})


$("#test").on("click",function(){

    container.style.display="none";   
    searchRes.style.display="none";

            makeCards(apteki);
          
         $("#drop-container").html(`<div class="dropdown">
         <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Населба
         </button>
         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a class="dropdown-item" id="dropCentar" href="#">Центар</a>
           <a class="dropdown-item" id="dropNovoLisiche" href="#">Ново Лисиче</a>
           <a class="dropdown-item" id="dropAerodrom" href="#">Аеродром</a>
           <a class="dropdown-item" id="dropKarposh" href="#">Карпош 3</a>
         </div>
       </div>`);

       $("#dropCentar").click(function(){

        dropresults.style.display = "block";
        dropContainer.style.display = "block"
        container.style.display="none";
        searchRes.style.display="none";
        aptekiContainer.style.display = "none";
        showFromCentar();
        })

        $("#dropAerodrom").click(function(){

            dropresults.style.display = "block";
            dropContainer.style.display = "block"
            container.style.display="none";
            searchRes.style.display="none";
            aptekiContainer.style.display = "none";
            showFromAerodrom();
            })
      
            $("#dropNovoLisiche").click(function(){

                dropresults.style.display = "block";
                dropContainer.style.display = "block"
                container.style.display="none";
                searchRes.style.display="none";
                aptekiContainer.style.display = "none";
                showFromNovoLisiche();
                })    

                $("#dropKarposh").click(function(){

                    dropresults.style.display = "block";
                    dropContainer.style.display = "block"
                    container.style.display="none";
                    searchRes.style.display="none";
                    aptekiContainer.style.display = "none";
                    showFromKarposh();
                    })

})


function showFromCentar(){
    console.log("Show from Centar ");

 let centar =  apteki.pharmacies.filter(pharm => pharm.location.naselba === "Центар");

 pharmaciesCount = 0;
 let pharmaciesString = "";

 centar.forEach(pharm => {



if(pharmaciesCount % 2 == 0 && pharmaciesCount != centar.length - 1){
   console.log(1);
   pharmaciesString += `
   <div class="row">
   <div class="col-md-2"></div>
   <div class="col-md-4">
   <div class="card">
   <img src="${pharm.location.slika}"   class="card-img-top" alt="">
   <h5 class="card-title">${pharm.name}</h5>
   <p id="card-text">
   ${pharm.location.address}<br>
   <h6> Населба: ${pharm.location.naselba} </h6><br>
   </p>
   <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
   </div>
   </div>
   `  }
   else if(pharmaciesCount % 2 != 0){
       console.log(2);
       pharmaciesString += `
       
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    } 

   else if(pharmaciesCount == centar.length - 1){
       console.log(3);
       pharmaciesString += `
       <div class="row">
       <div class="col-md-2"></div>
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    }

   pharmaciesCount++;

});

$("#drop-res").html(pharmaciesString);

}

function showFromNovoLisiche(){
    console.log("Show from novo lisice ");

 let nl =  apteki.pharmacies.filter(pharm => pharm.location.naselba === "Ново Лисиче");

 pharmaciesCount = 0;
 let pharmaciesString = "";

 nl.forEach(pharm => {

if(pharmaciesCount % 2 == 0 && pharmaciesCount != nl.length - 1){
   console.log(1);
   pharmaciesString += `
   <div class="row">
   <div class="col-md-2"></div>
   <div class="col-md-4">
   <div class="card">
   <img src="${pharm.location.slika}"   class="card-img-top" alt="">
   <h5 class="card-title">${pharm.name}</h5>
   <p id="card-text">
   ${pharm.location.address}<br>
   <h6> Населба: ${pharm.location.naselba} </h6><br>
   </p>
   <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
   <a href="#" class="btn btn-primary">Vidi na mapa</a>
   </div>
   </div>
   `  }
   else if(pharmaciesCount % 2 != 0){
       console.log(2);
       pharmaciesString += `
       
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    } 

   else if(pharmaciesCount == nl.length - 1){
       console.log(3);
       pharmaciesString += `
       <div class="row">
       <div class="col-md-2"></div>
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       </p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    }

   pharmaciesCount++;

});

$("#drop-res").html(pharmaciesString);

}

function showFromAerodrom(){
    console.log("Show from Centar ");

 let aerodrom =  apteki.pharmacies.filter(pharm => pharm.location.naselba === "Аеродром");

 pharmaciesCount = 0;
 let pharmaciesString = "";

 aerodrom.forEach(pharm => {



if(pharmaciesCount % 2 == 0 && pharmaciesCount != aerodrom.length - 1){
   console.log(1);
   pharmaciesString += `
   <div class="row">
   <div class="col-md-2"></div>
   <div class="col-md-4">
   <div class="card">
   <img src="${pharm.location.slika}"   class="card-img-top" alt="">
   <h5 class="card-title">${pharm.name}</h5>
   <p id="card-text">
   ${pharm.location.address}<br>
   <h6> Населба: ${pharm.location.naselba} </h6><br>
   </p>
   <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
   <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
   </div>
   `  }
   else if(pharmaciesCount % 2 != 0){
       console.log(2);
       pharmaciesString += `
       
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    } 

   else if(pharmaciesCount == aerodrom.length - 1){
       console.log(3);
       pharmaciesString += `
       <div class="row">
       <div class="col-md-2"></div>
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    }

   pharmaciesCount++;

});

$("#drop-res").html(pharmaciesString);

}

function showFromKarposh(){
    console.log("Show from Centar ");

 let karposh =  apteki.pharmacies.filter(pharm => pharm.location.naselba === "Карпош 3");

 pharmaciesCount = 0;
 let pharmaciesString = "";

 karposh.forEach(pharm => {



if(pharmaciesCount % 2 == 0 && pharmaciesCount != karposh.length - 1){
   console.log(1);
   pharmaciesString += `
   <div class="row">
   <div class="col-md-2"></div>
   <div class="col-md-4">
   <div class="card">
   <img src="${pharm.location.slika}"   class="card-img-top" alt="">
   <h5 class="card-title">${pharm.name}</h5>
   <p id="card-text">
   ${pharm.location.address}<br>
   <h6> Населба: ${pharm.location.naselba} </h6><br>
   </p>
   <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
   <a href="#" class="btn btn-primary">Vidi na mapa</a>
   </div>
   </div>
   `  }
   else if(pharmaciesCount % 2 != 0){
       console.log(2);
       pharmaciesString += `
       
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    } 

   else if(pharmaciesCount == karposh.length - 1){
       console.log(3);
       pharmaciesString += `
       <div class="row">
       <div class="col-md-2"></div>
       <div class="col-md-4">
       <div class="card">
       <img src="${pharm.location.slika}"  class="card-img-top" alt="">
       <h5 class="card-title">${pharm.name}</h5>
       <p id="card-text">
       ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
       </p>
       <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       </div>
       </div>
   `    }

   pharmaciesCount++;

});

$("#drop-res").html(pharmaciesString);

}


function showResult(){

    pharmaciesCount = 0;
    pharmaciesString = "";
    let medExsists = false;
  
  apteki.pharmacies.forEach(pharm => {
      
      pharm.items.forEach(med => {
         
          if (med.name.toLowerCase() === searchMedicine.toLowerCase()) {
                medExsists =true;
              if (med.stock === 0) {
                 //just skip
              }
              else{
                  
                if(pharmaciesCount % 2 == 0 && pharmaciesCount != apteki.pharmacies.length - 1){
                     console.log(1);
                     pharmaciesString += `
                     
                     <div class="row">
                     <div class="col-md-3">
                     <div class="card">
                     <div class="pharm-img" style="background-image: url('${pharm.location.slika}');"></div>
                     <h5 class="card-title">${pharm.name}</h5>
                     <p id="card-text">
                     ${pharm.location.address}<br>
                     <h6> Населба: ${pharm.location.naselba} </h6><br>
                     <h6> Тип на лекот: ${med.type} </h6><br>
                     <h6> Во залиха: ${med.stock} парчиња</h6><br>
                     <h6> Цена: ${med.price} денари</h6><br>
                     </p>
                     <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                     </div>
                     `  }
                     else if(pharmaciesCount % 2 != 0){
                        console.log(2);
                        pharmaciesString += `
                        
                        <div class="col-md-3">
                        <div class="card">
                        <div class="pharm-img" style="background-image: url('${pharm.location.slika}');"></div>
                        <h5 class="card-title">${pharm.name}</h5>
                        <p id="card-text">
                        ${pharm.location.address}<br>
                        <h6> Населба: ${pharm.location.naselba} </h6>
                        <h6> Тип на лекот: ${med.type} </h6><br>
                        <h6> Во залиха: ${med.stock} парчиња</h6><br>
                        <h6> Цена: ${med.price} денари</h6><br>
                        </p>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>
                    `    } 
                
                    else if(pharmaciesCount == data.pharmacies.length - 1){
                        console.log(3);
                        pharmaciesString += `
                        <div class="row">
                        <div class="col-md-3">
                        <div class="card">
                        <div class="pharm-img" style="background-image: url('${pharm.location.slika}');"></div>
                        <h5 class="card-title">${pharm.name}</h5>
                        <p id="card-text">
                        ${pharm.location.address}<br>
                        <h6> Населба: ${pharm.location.naselba} </h6>
                        <h6> Тип на лекот: ${med.type} </h6><br>
                        <h6> Во залиха: ${med.stock} парчиња</h6><br>
                        <h6> Цена: ${med.price} денари</h6><br>
                        </p>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>
                    `    }
               
                    pharmaciesCount++;
              }
          }                      
      });
  
  });

  //sto da printa
  
  if(medExsists){

    $('#res').html(`<div class="alert alert-success">
    <div class="container">
        <div class="alert-icon">
         
        <h2><b>${searchMedicine.toUpperCase()}</b> е достапен на следниве локации:<br><br><br>
    </div></div>
    </div>` + pharmaciesString);


    // $("#res").html(`<h2 id="lek-naslov"> ${searchMedicine.toUpperCase()}  е достапен на следниве локации:</h2><br><br><br> ` + pharmaciesString);

  }
   else if(!medExsists)
   {
    $("#res").html(`
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-4">
    <div class="card">
    <img src="img/empty.png" alt="Smiley face" height="200px" width="200px">
    <h5 class="card-title"> Лекот '${searchMedicine}' не постои </h5>
    <p id="card-text">
    </p>
    <a href="index.html" class="btn btn-primary">Обиди се повторно</a>
    </div>
    </div>
    </div>
`)
  }
 }


function makeCards(data){
    console.log("makecards")
let pharmaciesCount = 0;
let pharmaciesString = "";
data.pharmacies.forEach(pharm => {
    if(pharmaciesCount % 2 == 0 && pharmaciesCount != data.pharmacies.length - 1){
        console.log(1);
        pharmaciesString += `
        <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
        <div class="card">
        <img src="${pharm.location.slika}"   width="100px" height="100px" class="card-img-top" alt="">
        <h5 class="card-title">${pharm.name}</h5>
        <p id="card-text">
        ${pharm.location.address}<br>
       <h6> Населба: ${pharm.location.naselba} </h6>
        </p>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `  } 

    else if(pharmaciesCount % 2 != 0){
        console.log(2);
        pharmaciesString += `
        <div class="col-md-4">
        <div class="card">
        <img src="${pharm.location.slika}"   width="100px" height="100px" class="card-img-top" alt="">
        <h5 class="card-title">${pharm.name}</h5>
        <p id="card-text">
        ${pharm.location.address}<br>
        <h6> Населба: ${pharm.location.naselba} </h6>
        </p>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    `    } 

    else if(pharmaciesCount == data.pharmacies.length - 1){
        console.log(3);
        pharmaciesString += `
        <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
        <div class="card">
        <img src="${pharm.location.slika}" width="100px" height="100px" class="card-img-top" alt="">
        <h5 class="card-title">${pharm.name}</h5>
        <p id="card-text">
        ${pharm.location.address}<br>
        <h6> Населба: ${pharm.location.naselba} </h6>
        </p>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="${pharm.map}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    `    }
    pharmaciesCount++;

});
       //res
      $("#apteki").html(pharmaciesString);
     
}










































});
