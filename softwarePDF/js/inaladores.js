function loadInaladores(){
    let finalStr = "<ul>"
    var test = ""
    for (let i=0; i<inaladores.length; i++){

        if(inaladores[i].classBelong[0] != test){
            finalStr += ("<li>")
            finalStr += ("<div id='labelForL'><b>"+inaladores[i].classBelong+"</b></div>")
            finalStr += ("</li>")
        }

        test = inaladores[i].classBelong[0]




        let boxID = "inalador" + i
        finalStr += ("<li id='inalContdiv'>")
        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
        finalStr += ("<div class='row align-items-start justify-content-start'>")
            finalStr += ("<div class='col-3'>")
                finalStr += ("<div class='form-check form-switch'>")    
                finalStr += ("<input class='changeColor form-check-input' type='checkbox' onclick='ShowHideDiv(this)' id='"+boxID+"'>")
                finalStr += ("<label class='form-check-label' for='flexCheckDefault' id='labelcheck'>"+inaladores[i].name+"</label>")
                finalStr += ("<button class='btn btn-link shadow-none' onmouseover='onHover("+boxID+")' onmouseout='onOut("+boxID+")'>")
                finalStr += ("<i class='fa fa-angle-down'></i></button></div>")
            finalStr += ("</div>")

            finalStr += ("<div class='col-3'>")
            if (inaladores[i].options.length != 0) { 
                if(inaladores[i].options[0].name.length == 0) finalStr += ("<label class='' for='chooseTime'>Número de Inalações: </label>")
                else finalStr += ("<label class='' for='chooseTime'>Nome/Num Inalações: </label>")
                finalStr += ("<div class='chooseTime custom-select'  id='chooseTime' style='width:200px;'>")
                    let IdBuffer1 = inaladores[i].name + "opt"
                    finalStr += (`<select id='${IdBuffer1}'>`)
                        for(let temp = 0; temp <inaladores[i].options.length; temp++){
                        finalStr +=(`<option value='${temp}'>${inaladores[i].options[temp].name} ${inaladores[i].options[temp].numOfInal}inal</option>`)
                    }
                    finalStr += ("</select>")
                finalStr += ("</div>")
            }
            finalStr += ("</div>")

            finalStr += ("<div class='col-3'>")
                if(inaladores[i].cam == true){
                    finalStr += ("<div class='form-check'>")    
                    finalStr += ("<input class='changeColor form-check-input' type='checkbox'  id='cam"+inaladores[i].name+"'>")
                    finalStr += ("<label class='form-check-label' for='flexCheckDefault' id='labelcheck'>Câmara espansora</label>")
                    finalStr += ("</div>")
                }
            finalStr += ("</div>")

            finalStr += ("<div class='col-3'>")
            if (inaladores[i].posologia == 1) { 
                finalStr += ("<label class='' for='chooseTime'>Altura do dia:</label>")
                finalStr += ("<div class='chooseTime custom-select'  id='chooseTime' style='width:200px;'>")
                    let IdBuffer = inaladores[i].name + "Time"
                    finalStr += (`<select id='${IdBuffer}'>`)
                        finalStr +=("<option value='Manhã'>Manhã</option>")
                        finalStr +=("<option value='Almoço'>Almoço</option>")
                        finalStr +=("<option value='Noite'>Noite</option>")
                    finalStr += ("</select>")
                finalStr += ("</div>")
            }
            finalStr += ("</div>")
            finalStr += ("<div class='row'>")
            finalStr += ("<div display='none' id='posologia"+boxID+"'>" + "Posologia: " + inaladores[i].posologia + " vez/vezes por dia" + "</div>")
            finalStr += ("</div>")
        finalStr += ("</div>")
        finalStr += ("</div>")
        finalStr += ("</li>")
       
        
        
        finalStr += ("")
    }
    finalStr+="</ul>"
    document.getElementById("dropdown0").innerHTML = finalStr

    for (let i=0; i<inaladores.length; i++) {
        let boxID = "inalador" + i
        const elemh1 = document.getElementById("posologia"+boxID)
        
        elemh1.style.display = "none"
    }
}


function checkInal(){
    for (let i=0; i<inaladores.length; i++){
        let id = "inalador" + i
        let IdBuffer = inaladores[i].name + "Time"
        
        if (document.getElementById(id).checked){
            if(inaladores[i].posologia == 1) inaladores[i].setdayTime(document.getElementById(IdBuffer).value)
            
            allselected.push(inaladores[i])
            selectedInal.push(inaladores[i])
        }
    }
}
