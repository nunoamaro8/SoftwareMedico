var all_general



async function loadList(){
    

    const response = await fetch('./js/data.json')
    .then((response) => response.json())
    .then((json) => {
        all_general = json
    });
    
    var inalador_=all_general.inalador
    var farmaco_=all_general.outros_farmacos
    var ventilador_=all_general.ventiladores
    var cuidadosGerais_=all_general.cuidados[0]
    
    for(let i=0; i<inalador_.length; i++){
        inaladores.push(new Inalador(inalador_[i].tipo,inalador_[i].name, inalador_[i].numPerDay, inalador_[i].bio, inalador_[i].numOfInal, inalador_[i].cam, inalador_[i].moreOptions))
    }
    for(let i=0; i<farmaco_.length; i++){
        farmacos.push(new Farmaco(farmaco_[i].name, "exemplo de como se usa", farmaco_[i].moreOptions))
    }
    for(let i=0; i<ventilador_.length; i++){
        ventilacao.push(new Ventilador(ventilador_[i].name, ventilador_[i].moreOptions))
    } 
    for(let i=0; i<cuidadosGerais_.length; i++){
        cuidadosGerais.push(cuidadosGerais_[i])
    }

    

    loadMenu()
    loadInaladores()
    loadOutrosFarmacos()
    loadOxigenio()
    loadVentilacao()
    loadCuidados()
    loadAtitudes()


    myFunction(0,6)
}

var divide_inal = ["LABA","LAMA","LABA/LAMA","ICS","ICS/LABA","ICS/LAMA/LABA"]

function loadMenu(){

    finalStr = "<table class='table table-borderless table-responsive-xl' id='table_head' >"
    finalStrOut = "" 
    for(let i=0; i<nameOfOptions.length; i++){
        
        finalStr += "<th>"
        
        finalStr += "<div class='container-fluid' id='labelNoo' onclick='myFunction("+i+","+nameOfOptions.length+")' style='color: #4e8cae;'>"+nameOfOptions[i]+"<div>"
        finalStrOut += "<div class='container-fluid dropdown' id='dropdown"+i+"'></div>"
        finalStr += "</div>"
        
        finalStr += "</th>"
        finalStr += "<style>#dropdown"+i+"{text-align: left;width: 100%;display: none;background-color: WhiteSmoke;color: black;}</style>"
    }
    finalStr += "<th><div class='container-fluid' id='labelNoo_final' onclick='checkSelected()' id='SubmitBtn' style='color: #4e8cae;' >Submit</div></th></table>"
    document.getElementById("modal").innerHTML=finalStr;
    document.getElementById("showOpt").innerHTML = finalStrOut
}









var auxSelectedAt = []



function checkSelected(){

    


    //Inaladores    
    checkInal()

    //Outros Farmacos
    checkFarm()

    //Oxigénio
    for (let i=0; i<oxigenio.length; i++){
        let id = "oxigenio" + i
    }

    //Ventilação
    for (let i=0; i<ventilacao.length; i++){
        let id = "ventilacao" + i
        if (document.getElementById(id).checked){
            allselected.push(ventilacao[i])
            selectedVent.push(ventilacao[i])
        }
    }

    //Cuidados Gerais
    for (let i=0; i<cuidadosGerais.length; i++){
        let id = "cuidados" + i
        if (document.getElementById(id).checked){
            allselected.push(cuidadosGerais[i])
            selectedCuid.push(cuidadosGerais[i])
        }
    }

    //Atitudes Agudização
    for (let i=0; i<atitudes.length; i++){
        let id = "atitudes" + i
        
        let atitudes_de_Agunização = "atitudes_text"
       /* if(document.getElementById(atitudes_de_Agunização).value.length != 0){
            selectedAtiText.push(document.getElementById(atitudes_de_Agunização).value)
        }
        */
    }
    
    

    const modal = document.getElementById("submitModal")
    modal.style.display = "block"
    
    var elems = document.querySelectorAll("body > div:not(.submit_final)");
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.filter = "blur(500px)";
        elems[index].style.visibility = "hidden";
        elems[index].style.transition = "all 1s";
    }
} 


function ShowHideDiv(param){
    var res = param.id.replace(/\D/g, "");
    var type = inaladores[res].classBelong[0] //Vai buscar o inalador correspondente ao input desta função
    
    

    if(param.checked){
        for(let i=0; i<inaladores.length; i++){
            
            var temp = "inalador" + i
            if(inaladores[i].classBelong[0] != type){
            //    document.getElementById(temp).style.display = "none"
            } 
        }
    }else {
        for(let i=0; i<inaladores.length; i++){
            var temp = "inalador" + i
            if(inaladores[i].classBelong[0] == type && document.getElementById(temp).checked) return
        }
        for(let i=0; i<inaladores.length; i++){
            var temp = "inalador" + i
            if(inaladores[i].classBelong[0] != type){
                document.getElementById(temp).style.display = "block"
            }
        }
    }  
}