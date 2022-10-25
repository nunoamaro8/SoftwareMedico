function loadOutrosFarmacos(){
    let finalStr = "<ul>"
    for (let i=0; i<farmacos.length; i++) {
        let boxID = "farmaco" + i
        finalStr += ("<li>") 

        finalStr += ("<div class='container-fluid' id='inalContdiv'>")
            finalStr += ("<div class='row align-items-start justify-content-start'>")

                finalStr += ("<div class='col-3'>")
                    finalStr += ("<div class='form-check form-switch'>")
                    finalStr += ("<input class='changeColor form-check-input' type='checkbox'  id='"+boxID+"'>")
                    finalStr += ("<label class='form-check-label' for='flexCheckDefault' id='labelcheck'>"+farmacos[i].name+"</label>")
                    finalStr += ("<button class='btn btn-link shadow-none' onmouseover='onHover("+boxID+")' onmouseout='onOut("+boxID+")'>")
                    finalStr += ("<i class='fa fa-angle-down'></i>")
                    finalStr += ("</button>")
                    finalStr += ("</div>")
                    finalStr += ("<div display='none' id='posologia"+boxID+"'>"+"</div>")
                finalStr += ("</div>")

                finalStr += ("<div class='col-3 img-responsive'>")
                    finalStr += ("<label class='' for='chooseTime'>Opção:</label>")
                    finalStr += ("<div class='chooseTime custom-select'  id='chooseTime' style='width:200px;'>")
                    let IdBuffer = farmacos[i].name + "farmaco"
                        
                        finalStr += (`<select class='bar_width' onchange="changeFunc(value, ${i});" id='${IdBuffer}'>`)
                            for(let j=0; j<farmacos[i].options.length; j++){
                                if(!farmacos[i].options[j][1]) {finalStr +=(`<option value='${1}'>${farmacos[i].options[j][0]}</option>`)}
                               
                                else if(farmacos[i].options[j][1] == "addFreeText") {
                                    finalStr +=(`<option value='${2}' >${farmacos[i].options[j][0]}</option>`)
                                    
                                }
                               
                                else {finalStr +=(`<option value='${j}'>${farmacos[i].options[j][0]}</option>`)}
                            }
                        finalStr += ("</select>")
                        
                        finalStr += ("</div>")

                        
                finalStr += ("</div>")

                finalStr += ("<div class='col-3 img-responsive'>")
                    finalStr += (`<input type="text" id="${farmacos[i].name + "special"}" placeholder='Dias da Semana..' style="display: none;">`)
                finalStr += ("</div>")

                finalStr += ("<div class='col-3'>")
                    finalStr += ("<label class='' for='chooseTime'>Opção:</label>")
                    finalStr += ("<div class='chooseTime custom-select'  id='chooseTime' style='width:200px;'>")
                    let IdBuffer1 = farmacos[i].name + "posologia"
                        finalStr += (`<select id='${IdBuffer1}'>`)
                            finalStr +=("<option value='Manhã'>Manhã</option>")
                            finalStr +=("<option value='Almoço'>Almoço</option>")
                            finalStr +=("<option value='Noite'>Noite</option>")
                        finalStr += ("</select>")
                        finalStr += ("</div>")
                finalStr += ("</div>")





            finalStr += ("</div>")
        finalStr += ("</div>")

        finalStr += ("</li>")


    }

    finalStr += insertText("farmacos", "Outros tratamentos")



    finalStr += "</ul>"
    document.getElementById("dropdown1").innerHTML = finalStr

    for (let i=0; i<farmacos.length; i++) {
        let boxID = "farmaco" + i
        const elemh1 = document.getElementById("posologia"+boxID)
        elemh1.style.display = "none"
    }
}


function changeFunc(val, index){

    if(val == -2){
        document.getElementById(farmacos[index].name + "special").style.display = "block"
    } else {
        document.getElementById(farmacos[index].name + "special").style.display = "none"
        document.getElementById(farmacos[index].name + "special").value = ""
    }

}

function checkFarm(){
    for (let i=0; i<farmacos.length; i++){
        let id = "farmaco" + i
        let IdBuffer1 = farmacos[i].name + "posologia"
        let IdBuffer = farmacos[i].name + "farmaco"

        if (document.getElementById(id).checked){
            if(document.getElementById(IdBuffer).value != -1){
                farmacos[i].setdayTime(document.getElementById(IdBuffer1).value)
            } else {
                farmacos[i].setdayTime("")

            }
            


            allselected.push(farmacos[i])
            selectedFarm.push(farmacos[i])
        }
    }
}