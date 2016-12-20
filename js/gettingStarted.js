/**
 * Created by User on 14/12/2016.
 */

/** Specific JQuery for the getting started page. Mainly just animations **/

$(document).ready(function () {

    //page 1 code
    $("#start-button1").click(function () {
        $(".hide-all").hide();
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
        a_line1();
        $("#d1-rtn-addr-val").promise().done(function () {
            a_line2();
            $("#d1-name-val").promise().done(function () {
                a_line3();
                $("#d1-age-val").promise().done(function () {
                    a_line4();
                    $("#d1-phn-num-val").promise().done(function () {
                        a_line5();
                    });
                });
            });
        });
    });

    //line 1 function
    var a_line1 = function () {
        $("#code1-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".table .d1-stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},50);
        $(".table .d1-stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},50);
        $(".table .d1-stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},50);
        $(".table .d1-stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},50);
        $("#d1-rtnval").delay(1200).show(400);
        $("#d1-rtn-addr").delay(1200).show(400);
        $("#d1-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var a_line2 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1-name").delay(1000).show(400);
        $("#d1-name-val").delay(1400).show(400);
    }

    //line 3 function
    var a_line3 = function () {
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1-age").delay(1000).show(400);
        $("#d1-age-val").delay(1400).show(400);
    }

    //line 4 function
    var a_line4 = function () {
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1-phn-num").delay(1000).show(400);
        $("#d1-phn-num-val").delay(1400).show(400);
    }

    //line 5 function
    var a_line5 = function () {
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_1 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders1 = function () {
        $(".table .d1-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var hideBorders1 = function () {
        $(".table .d1-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code1-line-1").click(function(){
        $("#step-button1").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code1-line-1").addClass("yellow");

        $(".hide-all").hide();
        hideBorders1();
        unhighlight_1();
        currentLine = 1;
    });

    $("#code1-line-2").click(function(){
        $("#step-button1").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code1-line-2").addClass("yellow");

        showBorders1();
        $(".hide-all").hide();
        $(".d1-show1").show();
        unhighlight_1();
        currentLine = 2;
    });

    $("#code1-line-3").click(function(){
        $("#step-button1").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code1-line-3").addClass("yellow");

        showBorders1();
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        unhighlight_1();
        currentLine = 3;
    });

    $("#code1-line-4").click(function(){
        $("#step-button1").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code1-line-4").addClass("yellow");

        showBorders1();
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        $(".d1-show3").show();
        unhighlight_1();
        currentLine = 4;
    });

    $("#code1-line-5").click(function(){
        $("#step-button1").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code1-line-5").addClass("yellow");

        showBorders1();
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        $(".d1-show3").show();
        $(".d1-show4").show();
        unhighlight_1();
        currentLine = 5;
    });

    $("#step-button1").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            a_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            a_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            a_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            a_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            a_line5();
            $("#step-button1").addClass("disabled");
            currentLine = 0;
        }

    });


    //page 2 code
    $("#start-button2").click(function () {
        $(".hide-all").hide();
        $("#code2-line-6").animate({backgroundColor: 'transparent'}, 0);
        b_line1();
        $("#d2-rtn-addr-val").promise().done(function () {
            b_line2();
            $("#d2-name-val").promise().done(function () {
                b_line3();
                $("#d2-age-val").promise().done(function () {
                    b_line4();
                    $("#d2-name-alias").promise().done(function () {
                        b_line5();
                        $("#d2-age-alias").promise().done(function () {
                            b_line6();
                        });
                    });
                });
            });
        });
    });

    //line 1 function
    var b_line1 = function () {
        $("#code2-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".table .stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},100);
        $(".table .stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},100);
        $(".table .stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},100);
        $(".table .stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},100);
        $("#d2-rtnval").delay(1200).show(400);
        $("#d2-rtn-addr").delay(1200).show(400);
        $("#d2-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var b_line2 = function () {
        $("#code2-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-name").delay(1000).show(400);
        $("#d2-name-val").delay(1400).show(400);
    }

    //line 3 function
    var b_line3 = function () {
        $("#code2-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-age").delay(1000).show(400);
        $("#d2-age-val").delay(1400).show(400);
    }

    //line 4 function
    var b_line4 = function () {
        $("#code2-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-name-alias").delay(1000).show(400);
    }

    //line 5 function
    var b_line5 = function () {
        $("#code2-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-age-alias").delay(1000).show(400);
    }

    //line 6 function
    var b_line6 = function () {
        $("#code2-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_2 = function () {
        $("#code2-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-6").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders2 = function () {
        $(".table .d2-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var hideBorders2 = function () {
        $(".table .d2-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code2-line-1").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-1").addClass("yellow");

        $(".hide-all").hide();
        hideBorders2();
        unhighlight_2();
        currentLine = 1;
    });

    $("#code2-line-2").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-2").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        unhighlight_2();
        currentLine = 2;
    });

    $("#code2-line-3").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-3").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        unhighlight_2();
        currentLine = 3;
    });

    $("#code2-line-4").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-4").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        unhighlight_2();
        currentLine = 4;
    });

    $("#code2-line-5").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-5").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        $(".d2-show4").show();
        unhighlight_2();
        currentLine = 5;
    });

    $("#code2-line-6").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-6").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        $(".d2-show4").show();
        $(".d2-show5").show();
        unhighlight_2();
        currentLine = 6;
    });


    $("#step-button2").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            b_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            b_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            b_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            b_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            //do line 4 things here
            b_line5();
            currentLine = 6;
        }
        else if (currentLine == 6) {
            b_line6();
            $("#step-button2").addClass("disabled");
            currentLine = 0;
        }

    });


    //page 3 code
    $("#start-button3").click(function () {
        $(".hide-all").hide();
        $("#code3-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        c_line1();
        $("#d3-rtn-addr-val").promise().done(function () {
            c_line2();
            $("#d3-bob-HPhone-val").promise().done(function () {
                c_line3();
                $("#d3-bob-MPhone-val").promise().done(function () {
                    c_line4();
                    $("#d3-alice-HPhone-val").promise().done(function () {
                        c_line5();
                    });
                });
            });
        });
    });

    //line 1 function
    var c_line1 = function () {
        $("#code3-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".table .d3-stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},50);
        $(".table .d3-stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},50);
        $(".table .d3-stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},50);
        $(".table .d3-stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},50);
        $("#d3-rtnval").delay(1200).show(400);
        $("#d3-rtn-addr").delay(1200).show(400);
        $("#d3-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var c_line2 = function () {
        $("#code3-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-bob-HPhone").delay(1000).show(400);
        $("#d3-bob-HPhone-val").delay(1400).show(400);
    }

    //line 3 function
    var c_line3 = function () {
        $("#code3-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-bob-MPhone").delay(1000).show(400);
        $("#d3-bob-MPhone-val").delay(1400).show(400);
    }

    //line 4 function
    var c_line4 = function () {
        $("#code3-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-alice-HPhone").delay(1000).show(400);
        $("#d3-pointer-addr").delay(1400).animate({color: '#532A78'}, 150);
        $("#d3-alice-HPhone-val").delay(1400).show(400);
    }

    //line 5 function
    var c_line5 = function () {
        $("#code3-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_3 = function () {
        $("#code3-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders3 = function () {
        $(".table .d3-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var hideBorders3 = function () {
        $(".table .d3-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code3-line-1").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-1").addClass("yellow");

        $(".hide-all").hide();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        hideBorders3();
        unhighlight_3();
        currentLine = 1;
    });

    $("#code3-line-2").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-2").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 2;
    });

    $("#code3-line-3").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-3").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 3;
    });

    $("#code3-line-4").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-4").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $(".d3-show3").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 4;
    });

    $("#code3-line-5").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-5").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $(".d3-show3").show();
        $(".d3-show4").show();
        $("#d3-pointer-addr").animate({color: '#532A78'}, 0);
        unhighlight_3();
        currentLine = 5;
    });

    $("#step-button3").click(function () {
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
            $("#step-button3").addClass("disabled");
            currentLine = 0;
        }

    });
});

