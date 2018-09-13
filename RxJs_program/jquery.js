$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $("h4").dblclick(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("you entered p1");
    });
});
$(document).ready(function(){
    $("#p2").mouseleave(function(){
        alert("you leave p2");
    });
});
$(document).ready(function(){
    $("#p3").mousedown(function(){
        alert("mouse down p3");
    });
});
$(document).ready(function(){
    $("#p4").mouseover(function(){
        alert("mouse over p4");
    });
});
$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
});