var count = 1;
var refreshed=false;

setTimeout(function () {
    
    
    // This is used to Directly Skip to the Login Page
    
//This is used to change the nav bars from Verify
       // $(".a").removeClass("blue");
       // $("#a").removeClass("show");
       // $(".b").addClass("blue");
        //$("#b").addClass("show");
  //  setInterval($(".top").css("height", '99%'),5000);
//	$(".bot").css("height", 0);
    
    
//var aa=$(".tit").css("width");
//    alert(aa);
 //   var bb= .5-aa;
//$(".tit").css("left", bb);
    
}, 1000);


$(document).ready(function () {
    if (refreshed=false)
        {
            location.reload();
            refreshed=true;
        }

    var heights = $(".formbod").css("height");
    $(".bot").css("height", heights);

});
   

function kill(idelete){

    fill();
}
function very() {
    fill();
	count++;
}
function transformtoinput(){
    $(".form").removeClass("showopac");
    $(".tabledata").removeClass("showopac");
          $(".form").addClass("showopac");
    
    
    $("#a").removeClass("show");
    $("#b").removeClass("show");
          $("#a").addClass("show");
    
    $(".tit").removeClass("blue");
    $(".a").addClass("blue");

    $(".formbod").css("overflow","hidden").scrollLeft(0).css("width","50%").css("left","25%");
}
function transformtotable(){
        $(".form").removeClass("showopac");
    $(".tabledata").removeClass("showopac");
    $(".tabledata").addClass("showopac");
    
        $("#a").removeClass("show");
    $("#b").removeClass("show");
          $("#b").addClass("show");
    
    $(".tit").removeClass("blue");
    $(".b").addClass("blue");
    
    $(".formbod").css("overflow","scroll").css("width","100%").css("left","0%");
}
var special=1;
function quick(){
    $("input").attr('value',""+special+"");
    $("#login").attr('value',"Upload");
    special++;
}


function fill(){ 
}
        

    

function edit(elm,arr)
{
    var $tr= $(elm).closest('tr');
    for (var secondar=0; secondar<15; secondar++)
        {
            Array[arr][secondar]=$tr.find('input.'+secondar).val();
        }
        sessionStorage.setItem('myArray',JSON.stringify(Array));
    fill();
}