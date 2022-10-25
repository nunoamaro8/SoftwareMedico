var camBio = "inspirar e expirar, pela boca, através da câmara cinco a 10 vezes, por cada ativação do inalador"
var aux
function printDiv(divId,title) {
  
  
    let mywindow = window.open('DPOC.PT', 'PRINT', 'height=650,width=900');
  
    mywindow.document.write(`<html><head>`);
    mywindow.document.write( "<link rel='stylesheet' href='styles.css' type='text/css\' media='print'>");
    
    mywindow.document.write("</head><body>");
    mywindow.document.write(document.getElementById(divId).innerHTML);
  
  
    if (selectedInal.length != 0) { 
    mywindow.document.write("<h4>INALADORES:</h4>")
    mywindow.document.write("<table style='border: dotted 1px black; width: 100%; border-collapse: collapse;'>")
    for (let i=0; i<selectedInal.length; i++){
      
      mywindow.document.write("<tr>")
      
      if(selectedInal[i].options.length!=0){
        let IdBuffer1 = selectedInal[i].name + "opt"
        if (selectedInal[i].cam == true){
          if(document.getElementById("cam"+selectedInal[i].name).checked){
            aux = camBio
          }
          else{
            aux = selectedInal[i].options[document.getElementById(IdBuffer1).value].optionBio
          }
        }
        else{
          aux = selectedInal[i].options[document.getElementById(IdBuffer1).value].optionBio
        }
        mywindow.document.write(`<th style='border: dotted 1px black;' >-${selectedInal[i].name}: <br>${aux}</th>`);
        mywindow.document.write(`<td style='border: dotted 1px black;'>${selectedInal[i].options[document.getElementById(IdBuffer1).value].name} ${selectedInal[i].options[document.getElementById(IdBuffer1).value].numOfInal} inal, ${selectedInal[i].posologia} vez/vezes dia</td>`);

      } else {
        if (selectedInal[i].cam == true){
          if(document.getElementById("cam"+selectedInal[i].name).checked){
            aux = camBio
          }
          else{
            aux = selectedInal[i].bio
          }
        }
        else{
          aux = selectedInal[i].bio
        }
        mywindow.document.write(`<th style='border: dotted 1px black;' >-${selectedInal[i].name}: <br>${aux}</th>`);      
        mywindow.document.write(`<td style='border: dotted 1px black;'>${selectedInal[i].numOfInal} inal, ${selectedInal[i].posologia} vez/vezes dia</td>`);
    }
      if(selectedInal[i].posologia == 1){
        mywindow.document.write(`<td style='border: dotted 1px black;' >Tomar de ${selectedInal[i].dayTime} </td>`);
      }
      if(selectedInal[i].cam == true){
        if(document.getElementById("cam"+selectedInal[i].name).checked){
          mywindow.document.write(`<td style='border: dotted 1px black;' >Câmara espansora: SIM</td>`);
        } else {
          mywindow.document.write(`<td style='border: dotted 1px black;' >Câmara espansora: NÃO</td>`);
        }
      }
      

      mywindow.document.write("</tr>")
  
    }
  
    
    
    mywindow.document.write("</table>")
  }
  
    if(selectedFarm.length != 0){
    let farmStr = "<ul><b>OUTROS TRATAMENTOS:</b>"
    for (let i=0; i<selectedFarm.length; i++) {
      console.log(selectedFarm)
      if(typeof selectedFarm[i] == "string"){
        farmStr += ("<li style='margin-left: 35px;' >"+selectedFarm[i]+"</li>")
      }else{
      let IdBuffer = selectedFarm[i].name + "farmaco"

      
        if(document.getElementById(selectedFarm[i].name + "special").style.display = "block") 
        {
          farmStr += ('<li style="margin-left: 35px;">' + selectedFarm[i].name + ": " + selectedFarm[i].options[parseInt(document.getElementById(IdBuffer).value)][0] + ":" + selectedFarm[i].dayTime + ", " + document.getElementById(selectedFarm[i].name + "special").value +"</li>")

        }else farmStr += ('<li style="margin-left: 35px;" >' + selectedFarm[i].name + ": " + selectedFarm[i].options[parseInt(document.getElementById(IdBuffer).value)][0] + ": " + selectedFarm[i].dayTime + "</li>")
      

    }
    }
    farmStr += "</ul>"
    mywindow.document.write(farmStr)}
  
  
    let ox = ""

    if (document.getElementById("oxDCheck").checked){
      selectedOx.push(document.getElementById("OxD").value)
    }

    if(selectedOx.length != 0 && document.getElementById("OxD").value.length != 0){
      ox += "<ul><b>OXIGÉNIO DE DEAMBULAÇÃO</b>"
      for (let i=0; i<selectedOx.length; i++) {
        ox += ("<li style='margin-left: 35px;'>"+selectedOx[i]+"</li>")
      }
      ox += "</ul>"
    }

    if(document.getElementById("OxiLong").checked && document.getElementById("oxi_text1").value.length != 0){
      ox += "<ul><b>OXIGÉNIO DE LONGA DURAÇÃO</b>"
        ox += ("<li style='margin-left: 35px;'>O2 a "+document.getElementById("oxi_text1").value+" até perfazer "+document.getElementById("oxi_text2").value+"</li>")
      ox += "</ul>"
    }


    if(document.getElementById("lastOx").checked && document.getElementById("oxi_text3").value.length != 0 && document.getElementById("oxi_text4").value.length != 0){
      ox += "<ul><b>OXIGÉNIO FIXO + APOIO VENTILATÓRIO:</b>"
        ox += ("<li style='margin-left: 35px;' >O2 de noite a "+document.getElementById("oxi_text3").value+" com o ventilador, e durante o dia a "+document.getElementById("oxi_text4").value+" até perfazer "+document.getElementById("oxi_text5").value+"</li>")
      ox += "</ul>"
    }

    mywindow.document.write(ox)
  
    if (selectedVent.length != 0) { 

    let vent = "<ul><b>VENTILADORES:</b>"
    for (let i=0; i<selectedVent.length; i++) {
      let IdBuffer = selectedVent[i].name + "vent"
      vent += ('<li style="margin-left: 35px;" >' + selectedVent[i].name + ": " + selectedVent[i].options[parseInt(document.getElementById(IdBuffer).value)] + "</li>")
    }
    vent += "</ul>"
    mywindow.document.write(vent)
  }
  
    if (selectedCuid.length != 0) { 

    let cuid = "<ul><b>CUIDADOS:</b>"
    for (let i=0; i<selectedCuid.length; i++) {
      
      cuid += ("<li style='margin-left: 35px;' >" + selectedCuid[i] + "</li>")
    }
    cuid += "</ul>"
    mywindow.document.write(cuid)
  }
  
    if (selectedAti.length != 0) { 

    let aux2 = "<ul><b>ATITUDES EM EXACERBAÇÃO</b>"
  

    for (let i=0; i<selectedAti.length; i++){
      aux2 += ("<li style='margin-left: 35px;'>" + selectedAti[i] + "</li>")
    }
  
    aux2+= "</ul>"
    
    if(selectedAti.length != 0){
      mywindow.document.write(aux2)
    }
  }
    
  
  
    if(document.getElementById("fname").value.length != 0) {
      mywindow.document.write("<ul style='list-style: none;' ><b>OBSERVAÇÕES:</b>" + "<li>"+document.getElementById("fname").value+"</li>" + "</ul>")
    } 
    let signature = "<div style='bottom: 0; right: 20%; position: fixed; text-align: center;'><hr style='width: 190px' /><br>Médico</div>"
   
    mywindow.document.write(signature)
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    mywindow.close();
  
    selectedInal = []
    selectedFarm = []
    selectedOx = []
    selectedVent = []
    selectedCuid = []
    selectedAti = []
      
    
  
    return true;
  }
  
  function closemodal(){
      
      const modal = document.getElementById("submitModal")
      const otherModal = document.getElementById("modal")
      const dropdowns = document.getElementById("labelNoo")
      
      
      modal.style.display="none";
      var elems = document.querySelectorAll("body > div:not(.submit_final)");
      var index = 0, length = elems.length;
      for ( ; index < length; index++) {
          elems[index].style.filter = "blur(0px)"; 
          elems[index].style.visibility = "visible";
          
      }
      
      window.location.reload();
  }