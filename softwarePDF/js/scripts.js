

class ListTopics{
    constructor(name, posologia){
        this.name = name
        this.posologia = posologia
    }
    
}

class Inalador {
    constructor(classBelong, name, posologia, bio, numOfInal, cam, options){
        this.classBelong = classBelong
        this.name = name
        this.posologia = posologia
        this.bio = bio
        this.numOfInal = numOfInal
        this.cam = cam
        this.dayTime = "";
        this.options = options
    }

    get getdaytime(){
        return this.dayTime
    }

    setdayTime(newName) {
        this.dayTime = newName;
    }
}

class Farmaco {
    constructor(name, bio, options){
        this.name = name
        this.bio = bio
        this.dayTime = "";
        this.options = options
    }

    get getdaytime(){
        return this.dayTime
    }

    setdayTime(newName) {
        this.dayTime = newName;
    }
}

class Ventilador {
    constructor(name, options){
        this.name = name
        this.options = options
    }
}


var nameOfOptions = ["Inalador", "Fármaco", "Oxigénio", "Ventilador", "Cuidados", "Atitudes"]
var inalador_




var inaladores = []
var farmacos = []
var oxigenio = []
var ventilacao = []
var cuidadosGerais = []
var atitudes = []
//Fim de Lista

//Variáveis para guardar o selecionado
var allselected = []
var selectedInal = []
var selectedFarm = []
var selectedOx = []
var selectedVent = []
var selectedCuid = []
var selectedAti = []
var selectedAtiText = []




function onHover(id){
    const elem = document.getElementById("posologia"+id.id);
    elem.style.display="block"
}

function onOut(id){
   
    const elem = document.getElementById("posologia"+id.id);
    elem.style.display="none"
}



function insertText(id, textTitle){
    let selectedBuffer = ("<div id='selectedDisplay"+id+"'></div>")

    finalStr = ("<div class='container' id='atitudes'>")
    
    finalStr += ("<div class='row'>")
        finalStr += ("<label for='atitudes' >"+textTitle+"</label>")
    finalStr += ("</div>")
    finalStr += ("<div class='row'>")
        finalStr += ("<div class='col-sm'>")
            if (textTitle == 'Outros tratamentos') {
                finalStr += ("<input type='text' placeholder='Outros tratamentos' class='form-control' id='"+id+"_text' rows='3'  onkeydown=search(this,'"+id+"')></input>")
            }
            else if (textTitle == 'Atitudes em Exacerbação'){
                finalStr += ("<input type='text' placeholder='Atitudes em Exacerbação' class='form-control' id='"+id+"_text' rows='3'  onkeydown=search(this,'"+id+"')></input>")
            }
            else { 
                finalStr += ("<input type='text' placeholder='Outros cuidados' class='form-control' id='"+id+"_text' rows='3'  onkeydown=search(this,'"+id+"')></input>")
            }
            
        finalStr += ("<div class='col-sm'>")
            finalStr += (`<button onclick=add('${id}') class="button_plus">&#43;</button>`)
        finalStr += ("</div>")
    finalStr += ("</div>")
    finalStr += ("</div>")

    finalStr += selectedBuffer

    return finalStr
}

function add(id){
    
    if(id == "Cuidados") selectedthing = selectedCuid
    if(id == "farmacos") selectedthing = selectedFarm
    if(id == "oxi") selectedthing = selectedOx
    if(id == "atitudes") selectedthing = selectedAti
    if(id == "vents") selectedthing = selectedVent



    selectedthing.push(document.getElementById(id+"_text").value)
    document.getElementById(id+"_text").value = ""
    let auxStr = "<table class='table AtiTable'>"
    for (let i=0; i<selectedthing.length; i++) {
        auxStr += ("<tr>" + "<td class='atText'>" + selectedthing[i] + "</td>"  + "<td><button class='button-24' style='right:0px' onclick=remove("+i+",'"+id+"')><span style='font-size:100%'>&#10006;</span></button></td></tr>")
    }
    auxStr += "</table>"
    document.getElementById("selectedDisplay"+id).innerHTML = auxStr 
}

function remove(index, id){

    if(id == "Cuidados") selectedthing = selectedCuid
    if(id == "farmacos") selectedthing = selectedFarm
    if(id == "oxi") selectedthing = selectedOx
    if(id == "atitudes") selectedthing = selectedAti



    selectedthing.splice(index, 1)
    document.getElementById(id+"_text").value = ""
    let auxStr = "<table class='table AtiTable'>"
    for (let i=0; i<selectedthing.length; i++) {
        auxStr += ("<tr >" + "<td class='atText'>" + selectedthing[i] + "</td>"  + "<td><button class='button-24' onclick=remove("+i+",'"+id+"')><span style='font-size:100%'>&#10006;</span></button></td></tr>")
    }
    auxStr += "</table>"
    document.getElementById("selectedDisplay"+id).innerHTML = auxStr 

    

}

function search(ele, id) {
    if(event.key === 'Enter') {
        add(id)       
    }
}


