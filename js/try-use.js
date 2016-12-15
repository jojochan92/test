/**
 * Created by Administrator on 2016/12/10.
 */

/*
function my(){
    document.getElementById("all").style.position="absolute";
    document.getElementById("appling").style.position="none";
    document.getElementById("try-useing").style.position="none";
    document.getElementById("overed").style.position="none";
}

function my1(){
    document.getElementById("appling").style.position="absolute";
    document.getElementById("appling").style.marginTop="-1049px";
    document.getElementById("try-useing").style.position="none";
    document.getElementById("overed").style.position="none";
    document.getElementById("all").style.position="none";

}
function my2(){
    document.getElementById("try-useing").style.position="absolute";
    document.getElementById("try-useing").style.marginTop="-1049px";
    document.getElementById("appling").style.position="none";
    document.getElementById("overed").style.position="none";
    document.getElementById("all").style.position="none";


}
function my3(){
    document.getElementById("overed").style.position="absolute";
    document.getElementById("overed").style.marginTop="-1049px";
    document.getElementById("try-useing").style.position="none";
    document.getElementById("appling").style.position="none";
    document.getElementById("all").style.position="none";



}
function my111(){
    document.getElementById("all2").style.position="absolute";
    document.getElementById("appling2").style.position="none";
    document.getElementById("try-useing2").style.position="none";
    document.getElementById("overed2").style.position="none";
}

function my11(){
    document.getElementById("appling2").style.position="absolute";
    document.getElementById("appling2").style.marginTop="-1049px";

    document.getElementById("try-useing2").style.position="none";
    document.getElementById("overed2").style.position="none";
    document.getElementById("all2").style.position="none";

}
function my22(){
    document.getElementById("try-useing2").style.position="absolute";
    document.getElementById("try-useing2").style.marginTop="-1049px";
    document.getElementById("appling2").style.position="none";
    document.getElementById("overed2").style.position="none";
    document.getElementById("all2").style.position="none";


}
function my33(){
    document.getElementById("overed2").style.position="absolute";
    document.getElementById("overed2").style.marginTop="-1049px";
    document.getElementById("try-useing2").style.position="none";
    document.getElementById("appling2").style.position="none";
    document.getElementById("all2").style.position="none";
}
*/


/*

 $(document).ready(function(){
 $("#all-click").click(function(){
 $("#all").siblings().css("position",null);
 $("#all").css({"position":"absolute"});
 });
 });
 $(document).ready(function(){
 $("#appling-click").click(function(){
 $("#appling").siblings().css("position",null);
 $("#appling").css({"position":"absolute","marginTop":"-1049px"});
 });
 });
 $(document).ready(function(){
 $("#try-useing-click").click(function(){
 $("#try-useing").siblings().css("position",null);
 $("#try-useing").css({"position":"absolute","marginTop":"-1049px"});
 });
 });
 $(document).ready(function(){
 $("#overed-click").click(function(){
 $("#overed").siblings().css("position",null);
 $("#overed").css({"position":"absolute","marginTop":"-1049px"});
 });
 });


 $(document).ready(function(){
 $("#all2-click").click(function(){
 $("#all2").siblings().css("position",null);
 $("#all2").css({"position":"absolute"});
 });
 });
 $(document).ready(function(){
 $("#appling2-click").click(function(){
 $("#appling2").siblings().css("position",null);
 $("#appling2").css({"position":"absolute","marginTop":"-1049px"});
 });
 });
 $(document).ready(function(){
 $("#try-useing2-click").click(function(){
 $("#try-useing2").siblings().css("position",null);
 $("#try-useing2").css({"position":"absolute","marginTop":"-1049px"});
 });
 });
 $(document).ready(function(){
 $("#overed2-click").click(function(){
 $("#overed2").siblings().css("position",null);
 $("#overed2").css({"position":"absolute","marginTop":"-1049px"});
 });
 });*/
/*页面加载显示“全部”页面，隐藏其他的*/
$(document).ready(function(){
        $("#appling").hide();
        $("#try-useing").hide();
        $("#overed").hide();
        $("#all").show();
});

/*点击申请按钮显示“全部”，隐藏其他的三个*/
$(document).ready(function(){
    $("#all-click").click(function(){
        $("#appling").hide();
        $("#try-useing").hide();
        $("#overed").hide();
        $("#all").show();
    });
});
/*点击申请按钮显示“申请中”，隐藏其他的三个*/
$(document).ready(function(){
    $("#appling-click").click(function(){
        $("#all").hide();
        $("#try-useing").hide();
        $("#overed").hide();

        $("#appling").show();
    });
});
/*点击申请按钮显示“试用中”，隐藏其他的三个*/
$(document).ready(function(){
    $("#try-useing-click").click(function(){
        $("#appling").hide();
        $("#all").hide();
        $("#overed").hide();

        $("#try-useing").show();
    });
});

/*点击申请按钮显示“已结束”，隐藏其他的三个*/
$(document).ready(function(){
    $("#overed-click").click(function(){
        $("#appling").hide();
        $("#all").hide();
        $("#try-useing").hide();

        $("#overed").show();
    });
});

$(document).ready(function(){
        $("#appling2").hide();
        $("#try-useing2").hide();
        $("#overed2").hide();
        $("#all2").show();
});

$(document).ready(function(){
    $("#all2-click").click(function(){
        $("#appling2").hide();
        $("#try-useing2").hide();
        $("#overed2").hide();
        $("#all2").show();
    });
});
$(document).ready(function(){
    $("#appling2-click").click(function(){
        $("#all2").hide();
        $("#try-useing2").hide();
        $("#overed2").hide();

        $("#appling2").show();
    });
});
$(document).ready(function(){
    $("#try-useing2-click").click(function(){
        $("#appling2").hide();
        $("#all2").hide();
        $("#overed2").hide();

        $("#try-useing2").show();
    });
});
$(document).ready(function(){
    $("#overed2-click").click(function(){
        $("#appling2").hide();
        $("#all2").hide();
        $("#try-useing2").hide();

        $("#overed2").show();
    });
});


