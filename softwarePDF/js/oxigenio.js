function loadOxigenio(){
    let finalStr = "<ul>"


    finalStr += ("<li>") 
        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
            finalStr += ("<div class='row align-items-start justify-content-start'>")
                finalStr += ("<div class='container-fluid'>")
                    
                        finalStr += ("<div class='form-check form-switch'>")    
                            finalStr += ("<input class='changeColor form-check-input' type='checkbox' onclick='oxiDeambText()' id='oxDCheck'>")
                            finalStr += ("<label for='flexCheckDefault'>Oxigénio de deambulação</label>")
                        finalStr += ("</div>")
                    
                finalStr += ("</div>")
                    finalStr += ("<div class='container-fluid'>")
                        finalStr += ("<input class='form-control padd' type='text' id='OxD' style='display: none;'>")
                    finalStr += ("</div>")
            finalStr += ("</div>")
        finalStr += ("</div>")
    finalStr += ("</li>") 


    finalStr += ("<li>")
    finalStr += ("<div class='container-fluid' id='inalContdiv'>")
        finalStr += ("<div class='row align-items-start justify-content-start'>")
        finalStr += ("<div class='container'>")
            finalStr += ("<div class='form-check form-switch'>") 
                finalStr += ("<input class='changeColor form-check-input' type='checkbox' onclick='oxiLongText()' id='OxiLong'>")
                finalStr += ("<label for='atitudes'>Oxigénio de longa duração</label>")
            finalStr += ("</div>")
            finalStr += ("<div class='container-fluid padd' id='longDiv' style='display: none;'>") ///////////////////
                finalStr += ("O2 a")
                finalStr += ("<input type='text' placeholder='inserir' class='form-control' id='oxi_text1' rows='3' '></input>")
                finalStr += ("até perfazer")
                finalStr += (`<select id='oxi_text2'>`)
                    finalStr +=("<option value='16 horas'>16 horas</option>")
                    finalStr +=("<option value='24 horas'>24 horas</option>")
                finalStr += ("</select>")
            finalStr += ("</div>")
            
        finalStr += ("</div>")
        finalStr += ("</div>")
    finalStr += ("</div>")    
    finalStr += ("</li>") 
    finalStr += ("<li>")
        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
        finalStr += ("<div class='row align-items-start justify-content-start'>")


            finalStr += ("<div class='container-fluid'>")
            

                finalStr += ("<div class='form-check form-switch'>")    
                    finalStr += ("<input class='changeColor form-check-input' type='checkbox' onclick='showLast()' id='lastOx'>")
                    finalStr += ("<label for='atitudes'>Oxigénio fixo + apoio ventilatório</label>")
                finalStr += ("</div>")

                    
                
                    finalStr += ("<div class='container-fluid padd' id='lastShow' style='display: none;' >")
                        finalStr += ("O2 de noite a ")
                        finalStr += ("<input type='text' placeholder='inserir' class='form-control' id='oxi_text3' rows='3''></input>")
                        finalStr += ("com o ventilador, e durante o dia a")
                        finalStr += ("<input type='text' placeholder='inserir' class='form-control' id='oxi_text4' rows='3' '></input>")
                        finalStr += ("até perfazer")
                            finalStr += (`<select id='oxi_text5'>`)
                                finalStr +=("<option value='16 horas'>16 horas</option>")
                                finalStr +=("<option value='24 horas'>24 horas</option>")
                            finalStr += ("</select>")
                finalStr += ("</div>")
                finalStr += ("</div>")  
        finalStr += ("</div>")  
        finalStr += ("</div>")
    
    finalStr += ("</li>") 




finalStr += ("</div>")

    finalStr += "</ul>"
    document.getElementById("dropdown2").innerHTML = finalStr 
}


function oxiDeambText(){
    if (document.getElementById("oxDCheck").checked) {
        document.getElementById("OxD").style.display = 'block'
    }
    else{
        document.getElementById("OxD").value = ''
        document.getElementById("OxD").style.display = 'none'
    } 
}

function oxiLongText(){
    if (document.getElementById("OxiLong").checked) {
        document.getElementById("longDiv").style.display = "block"
    }
    else {
        document.getElementById("longDiv").style.display = "none"
        document.getElementById("oxi_text1").value = ''
    }
}

function showLast(){
    if (document.getElementById("lastOx").checked){
        document.getElementById("lastShow").style.display = "block"
    }
    else {
        document.getElementById("lastShow").style.display = "none"
        document.getElementById("oxi_text3").value = ''
        document.getElementById("oxi_text4").value = ''
    }

}






