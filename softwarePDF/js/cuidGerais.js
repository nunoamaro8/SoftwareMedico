function loadCuidados(){
    let finalStr = "<ul>"
    for (let i=0; i<cuidadosGerais.length; i++) {
        let boxID = "cuidados" + i
        finalStr += ("<li>") 

        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
            finalStr += ("<div class='row align-items-start justify-content-start'>")

                finalStr += ("<div class='col-4'>")
                finalStr += ("<div class='form-check form-switch'>")    
                finalStr += ("<input class='changeColor form-check-input' type='checkbox' onclick='ShowHideDiv(this)' id='"+boxID+"'>")
                finalStr += ("<label class='form-check-label' for='flexCheckDefault' id='labelcheck'>"+cuidadosGerais[i]+"</label>")

                finalStr += ("</div>")

                finalStr += ("<div class='col-3'>")

                    
                finalStr += ("</div>")

            finalStr += ("</div>")
        finalStr += ("</div>")

        finalStr += ("</li>")
    }

    finalStr += insertText("Cuidados", "Cuidados Gerais")


    finalStr += "</ul>"
    
    document.getElementById("dropdown4").innerHTML = finalStr

    
}


