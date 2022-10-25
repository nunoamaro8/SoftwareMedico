function loadVentilacao(){
    let finalStr = "<ul>"
    for (let i=0; i<ventilacao.length; i++) {
        let boxID = "ventilacao" + i
        finalStr += ("<li>") 

        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
            finalStr += ("<div class='row align-items-start justify-content-start'>")

                finalStr += ("<div class='col-6'>")
                    finalStr += ("<div class='form-check form-switch'>")    
                    finalStr += ("<input class='changeColor form-check-input' type='checkbox' id='"+boxID+"'>")
                    finalStr += ("<label class='form-check-label' for='flexCheckDefault' id='labelcheck'>"+ventilacao[i].name+"</label>")
                    finalStr += ("</div>")
                finalStr += ("</div>")

                finalStr += ("<div class='col-6'>")
                    finalStr += ("<label class='' for='chooseTime'>Opção:</label>")
                    finalStr += ("<div class='chooseTime custom-select'  id='chooseTime' style='width:200px;'>")
                    let IdBuffer = ventilacao[i].name + "vent"
                        finalStr += (`<select class='bar_width' id='${IdBuffer}'>`)
                            for(let j=0; j<ventilacao[i].options.length; j++){
                                if(!ventilacao[i].options[j]) {finalStr +=(`<option value='${-1}'>${ventilacao[i].options[j]}</option>`)}
                                else {finalStr +=(`<option value='${j}'>${ventilacao[i].options[j]}</option>`)}
                            }
                        finalStr += ("</select>")
                finalStr += ("</div>")
            
                    
            finalStr += ("</div>")

        finalStr += ("</div>")

        finalStr += ("</li>")
    }


    

    finalStr += "</ul>"
    document.getElementById("dropdown3").innerHTML = finalStr

    for (let i=0; i<ventilacao.length; i++) {
        let boxID = "ventilacao" + i
        const elemh1 = document.getElementById("posologia"+boxID)
    }
}