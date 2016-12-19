/**
 * Created by User on 25/11/2016.
 */

$(document).ready(function(){
    $(".hide1").hide();
});

//Option 1
$("#start-button1").click(function () {
    $("#line-1-code1").animate({backgroundColor: '#ffff00'}, 1000);
    $("#variable-container-1").delay(500).animate({opacity: '1'}, 1000);
    $("#value-div-1").delay(1500).animate({opacity: '1'}, 1000);
    $("#vname-div-1").delay(2500).animate({opacity: '1'}, 1000);
    $("#variable1").delay(3500).animate({opacity: '1'}, 1500);
    $("#value1").delay(5000).animate({opacity: '1'}, 1500);
    $("#variable-container-1").delay(5700).animate({
        left: '380px',
        top: '305px'
    },2000)
});

//Option 2 line 1 animation
var b_line1 = function () {
    $("#line-1-code2").animate({backgroundColor: '#ffff00'}, 1000);
    $("#frame-container-1").delay(500).animate({opacity: '1'}, 1000);
    $("#local-var-container-1").delay(1500).animate({opacity: '1'}, 1000);
    $("#param-container-1").delay(1500).animate({opacity: '1'}, 1000);
    $("#rtn-addr-container-1").delay(1500).animate({opacity: '1'}, 1000);
    $("#rtn-val-container-1").delay(1500).animate({opacity: '1'}, 1000);
};

var b_line2 = function() {
    $("#line-1-code2").animate({backgroundColor: 'transparent'}, 1000);
    $("#line-2-code2").animate({backgroundColor: '#ffff00'}, 1000);
    $("#variable-container-2").delay(1000).animate({opacity: '1'}, 1000);
    $("#value-div-2").delay(2000).animate({opacity: '1'}, 1000);
    $("#vname-div-2").delay(3000).animate({opacity: '1'}, 1000);
    $("#variable2").delay(4000).animate({opacity: '1'}, 1000);
    $("#value2").delay(5000).animate({opacity: '1'}, 1000);
    $("#frame-container-1").delay(5300).animate({
        left: '365px',
        top: '334px'
    },2000)
}

$("#start-button2").click(function() {
    b_line1();
    $("#rtn-val-container-1").promise().done(function () {
        b_line2();
    });
});

//Option 3
$("#start-button3").click(function () {
    $(".hide1").hide();
    $("#line-5-code3").animate({backgroundColor: 'transparent'}, 0);
    c_line1()
    $("#td-rtnval").promise().done(function () {
        c_line2();
        $("#td-i-val").promise().done(function () {
            c_line3();
            $("#td-j-val").promise().done(function () {
                c_line4();
                $("#td-k-val").promise().done(function () {
                    c_line5();
                });
            });
        });
    });
});

//line 1 function
var c_line1 = function () {
    $("#line-1-code3").animate({backgroundColor: '#ffff00'}, 1000);
    $("#td-rtnval").delay(800).show(400);
}

var c_line2 = function () {
    $("#line-1-code3").animate({backgroundColor: 'transparent'}, 1000);
    $("#line-2-code3").animate({backgroundColor: '#ffff00'}, 1000);
    $("#td-i").delay(1000).show(400);
    $("#td-i-val").delay(1400).show(400);
}
var c_line3 = function () {
    $("#line-2-code3").animate({backgroundColor: 'transparent'}, 1000);
    $("#line-3-code3").animate({backgroundColor: '#ffff00'}, 1000);
    $("#td-j").delay(1000).show(400);
    $("#td-j-val").delay(1400).show(400);
}

var c_line4 = function () {
    $("#line-3-code3").animate({backgroundColor: 'transparent'}, 1000);
    $("#line-4-code3").animate({backgroundColor: '#ffff00'}, 1000);
    $("#td-k").delay(1000).show(400);
    $("#td-k-val").delay(1400).show(400);
}

var c_line5 = function () {
    $("#line-4-code3").animate({backgroundColor: 'transparent'}, 1000);
    $("#line-5-code3").animate({backgroundColor: '#ffff00'}, 1000);
    $("#td-rtnval-val").delay(1000).show(400);
}

//option 3 stepping
var currentLine;
$("#line-1-code3").click(function(){
    $("#step-button").removeClass("disabled");
    $(".hide1").hide();
    currentLine = 1;
});

$("#line-2-code3").click(function(){
    $("#step-button").removeClass("disabled");
    currentLine = 2;
});

$("#line-3-code3").click(function(){
    $("#step-button").removeClass("disabled");
    currentLine = 3;
});

$("#line-4-code3").click(function(){
    $("#step-button").removeClass("disabled");
    currentLine = 4;
});

$("#line-5-code3").click(function(){
    $("#step-button").removeClass("disabled");
    currentLine = 5;
});

$("#step-button").click(function () {
    if (currentLine == 1) {
        //do line 1 things here
        c_line1();
        currentLine = 2;
    }
    else if (currentLine == 2) {
        //do line 2 things here
        c_line2();
        currentLine = 3;
    }
    else if (currentLine == 3) {
        //do line 3 things here
        c_line3();
        currentLine = 4;
    }
    else if (currentLine == 4) {
        //do line 4 things here
        c_line4();
        currentLine = 5;
    }
    else if (currentLine == 5) {
        c_line5();
        $("#step-button").addClass("disabled");
        currentLine = 0;
    }

});