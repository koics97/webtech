const mezok = document.getElementsByTagName('input');
const mezonev = document.getElementsByTagName('label');

function katt(){
    for(var i = 0; i <= 5; i++){
        if(mezok[i].value == ""){
            alert(mezonev[i].innerHTML + " must be filled!!");
            return false;
        }
    }

    if(!mezok[6].checked){
        alert("You must accept the terms and service!");
        return false;
    }
}

var a = 1;
$(document).ready(function(){
    $("#hidebt").click(clicktohide);
    $("#mainwelcome").click(function(){
        if (a % 2 == 0){
            $(this).animate({
                fontSize: "24pt"
            });
        }
        else{
            $(this).animate({
                fontSize: "35pt",
            });
        }
        a++;
    });
    $("#hell_logo").animate({
        left: "0%"       
    })
});


var i = 1;
function clicktohide(){
    if (i % 2 == 0){
        $("#fill").show();
        $("#hidebt").val("Hide");
   }
    else{
        $("#fill").hide();
        $("#hidebt").val("Show");
    }
    i++;

}
