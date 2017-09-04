
//get form elements on submit
//pass them through a switch statement
//output relevant message
//get the div to display relevant message
var relevantmesso = document.getElementById("displaycontent");
var placeholder = document.getElementById("choose").value;
function checkcode(){
  var values = document.getElementById("countries").value;
  //check the default place holder value to avoid submitting it
  if(values === placeholder){
    return false;
  }
  //check if form is empty b4 submitting
  if(values === ""){
    alert("input country");
    return false;
  }else{
    switch (values) {
      case "Algeria":
      relevantmesso.textContent = "+213 ";
        break;
        case "Benin":
        relevantmesso.textContent = "+229";
          break;
          case "Cameroon":
          relevantmesso.textContent = "+237";
          break;
          case "Djibouti":
          relevantmesso.textContent = "+253";
          break;
          case "Egypt":
          relevantmesso.textContent = "+20";
          break;
          case "Gabon":
          relevantmesso.textContent = "+241";
          break;
          case "Kenya":
          relevantmesso.textContent = "+254";
          break;
          case "Lesotho":
          relevantmesso.textContent = "+266";
          break;
          case "Madagascar":
          relevantmesso.textContent = "+265";
          break;
          case "Namibia":
          relevantmesso.textContent = "+264";
          break;
          case "Rwanda":
          relevantmesso.textContent = "+250";
          break;
          case "South Africa":
          relevantmesso.textContent = "+27";
          break;
          case "Tanzania":
          relevantmesso.textContent = "+255";
          break;
          case "Uganda":
          relevantmesso.textContent = "+256";
          break;
          case "Zambia":
          relevantmesso.textContent = "+260";
          break;
          case "Greece":
          relevantmesso.textContent = "+30 ";
          break;
          case "Netherlands":
          relevantmesso.textContent = "+30 ";
          break;
          case "Belgium":
          relevantmesso.textContent = "+32";
          break;
          case "France":
          relevantmesso.textContent = "+33";
          break;
          case "Spain":
          relevantmesso.textContent = "+34";
          break;
          case "Portugal":
          relevantmesso.textContent = "+351";
          break;
          case "Ireland":
          relevantmesso.textContent = "+353";
          break;
          case "Italy":
          relevantmesso.textContent = "+39";
          break;
      default:
      relevantmesso.textContent = "Not a country";
    }
  }

}
