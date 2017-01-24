/**
 * Created by User on 24/01/2017.
 */

/** Specific JQuery for the heap page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age-val").promise().done(function () {
                p1_c1_line3();
                $("#d1a-heap-age-val").promise().done(function () {
                    p1_c1_line4();
                });
            });
        });
    });

    //p1 c1 line 1 function
    var p1_c1_line1 = function () {
        $("#code1a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1a-link").removeClass("yellow");
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c1 line 2 function
    var p1_c1_line2 = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age").delay(1000).show(400);
        $(".table .d1a-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1a-pointer-addr").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1a-age-val").delay(1600).show(400);
    };

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-heap-age-val").delay(1000).show(400);
    };

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p1_c1_unhighlight = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p1_c1_showBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c1_hideBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code1a-line-1").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-1").addClass("yellow");

        $(".d1a-hide-all").hide();
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        p1_c1_hideBorders();
        p1_c1_unhighlight();

        p1_c1_line1();
        currentLine1a = 2;
    });

    $("#code1a-line-2").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-2").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2();
        currentLine1a = 3;
    });

    $("#code1a-line-3").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-3").addClass("yellow");

        p1_c1_showBorders();
        $(".table .d1a-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 4;
    });

    $("#code1a-line-4").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-4").addClass("yellow");

        p1_c1_showBorders();
        $(".table .d1a-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line4();
        currentLine1a = 1;
    });


    $("#step-button-1a").click(function () {
        if (currentLine1a == 1) {
            //do line 1 things here
            $(".d1a-link").removeClass("yellow");
            $("#code1a-line-1").addClass("yellow");

            $(".d1a-hide-all").hide();
            $("#d1a-pointer-addr").animate({color: '#777'}, 0);
            p1_c1_hideBorders();
            p1_c1_unhighlight();

            p1_c1_line1();
            currentLine1a = 2;
        }
        else if (currentLine1a == 2) {
            //do line 2 things here
            p1_c1_line2();
            currentLine1a = 3;
        }
        else if (currentLine1a == 3) {
            //do line 3 things here
            p1_c1_line3();
            currentLine1a = 4;
        }
        else if (currentLine1a == 4) {
            //do line 4 things here
            p1_c1_line4();
            currentLine1a = 1;
        }
    });


    //code 2
    var currentLine1b = 1;
    $("#code1b-line-1").addClass("yellow");

    $("#start-button-1b").click(function () {
        currentLine1b = 1;
        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-heap-age-val").promise().done(function () {
                p1_c2_line3();
                $("#d1b-heap-age-val").promise().done(function () {
                    p1_c2_line4();
                });
            });
        });
    });

    //p1 c2 line 1 function
    var p1_c2_line1 = function () {
        $("#code1b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1b-link").removeClass("yellow");
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1b-rtnval").delay(1200).show(400);
        $("#d1b-rtn-addr").delay(1200).show(400);
        $("#d1b-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c2 line 2 function
    var p1_c2_line2 = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $("#d1b-age").delay(1000).show(400);
        $(".table .d1b-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1b-pointer-addr").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1b-age-val").delay(1600).show(400);
        $("#d1b-heap-age-val").html('23');
        $("#d1b-heap-age-val").delay(2000).show(400);
    };

    //p1 c1 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        setTimeout(function(){
            $("#d1b-heap-age-val").html('24');
        }, 1000);
        $("#d1b-heap-age-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    };

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $("#d1b-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p1_c2_unhighlight = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p1_c2_showBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c2_hideBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code1b-line-1").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-1").addClass("yellow");

        $(".d1b-hide-all").hide();
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_hideBorders();
        p1_c2_unhighlight();

        p1_c2_line1();
        currentLine1b = 2;
    });

    $("#code1b-line-2").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-2").addClass("yellow");

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2();
        currentLine1b = 3;
    });

    $("#code1b-line-3").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-3").addClass("yellow");

        p1_c2_showBorders();
        $(".table .d1b-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d1b-heap-age-val").html('23');
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 4;
    });

    $("#code1b-line-4").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-4").addClass("yellow");

        p1_c2_showBorders();
        $(".table .d1b-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d1b-heap-age-val").html('24');
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line4();
        currentLine1b = 1;
    });


    $("#step-button-1b").click(function () {
        if (currentLine1b == 1) {
            //do line 1 things here
            $(".d1b-link").removeClass("yellow");
            $("#code1b-line-1").addClass("yellow");

            $(".d1b-hide-all").hide();
            $("#d1b-pointer-addr").animate({color: '#777'}, 0);
            p1_c2_hideBorders();
            p1_c2_unhighlight();

            p1_c2_line1();
            currentLine1b = 2;
        }
        else if (currentLine1b == 2) {
            //do line 2 things here
            p1_c2_line2();
            currentLine1b = 3;
        }
        else if (currentLine1b == 3) {
            //do line 3 things here
            p1_c2_line3();
            currentLine1b = 4;
        }
        else if (currentLine1b == 4) {
            //do line 4 things here
            p1_c2_line4();
            currentLine1b = 1;
        }
    });

    //code 3
    var currentLine1c = 1;
    $("#code1c-line-1").addClass("yellow");

    $("#start-button-1c").click(function () {
        currentLine1c = 1;
        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
        p1_c3_line1();
        $("#d1c-rtn-addr-val").promise().done(function () {
            p1_c3_line2();
            $("#d1c-heap-age-val").promise().done(function () {
                p1_c3_line3();
                $("#d1c-heap-drivingAge-val").promise().done(function () {
                    p1_c3_line4();
                });
            });
        });
    });

    //p1 c3 line 1 function
    var p1_c3_line1 = function () {
        $("#code1c-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1c-link").removeClass("yellow");
        $(".table .stack-heap-1c").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1c-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1c-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1c-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1c-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1c-rtnval").delay(1200).show(400);
        $("#d1c-rtn-addr").delay(1200).show(400);
        $("#d1c-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c3 line 2 function
    var p1_c3_line2 = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $("#d1c-age").delay(1000).show(400);
        $(".table .d1c-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1c-pointer-addr1").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1c-age-val").delay(1600).show(400);
        $("#d1c-heap-age-val").delay(2000).show(400);
    };

    //p1 c3 line 3 function
    var p1_c3_line3 = function () {
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $("#d1c-drivingAge").delay(1000).show(400);
        $(".table .d1c-heap2").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1c-pointer-addr2").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1c-drivingAge-val").delay(1600).show(400);
        $("#d1c-heap-drivingAge-val").delay(2000).show(400);
    };

    //p1 c3 line 4 function
    var p1_c3_line4 = function () {
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $("#d1c-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p1_c3_unhighlight = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p1_c3_showBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1c").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c3_hideBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1c").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code1c-line-1").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-1").addClass("yellow");

        $(".d1c-hide-all").hide();
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
        p1_c3_hideBorders();
        p1_c3_unhighlight();

        p1_c3_line1();
        currentLine1c = 2;
    });

    $("#code1c-line-2").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-2").addClass("yellow");

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
        $(".d1c-show1").show();
        p1_c3_unhighlight();

        p1_c3_line2();
        currentLine1c = 3;
    });

    $("#code1c-line-3").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-3").addClass("yellow");

        p1_c3_showBorders();
        $(".table .d1c-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        p1_c3_unhighlight();

        p1_c3_line3();
        currentLine1c = 4;
    });

    $("#code1c-line-4").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-4").addClass("yellow");

        p1_c3_showBorders();
        $(".table .d1c-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#532A78'}, 0);
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        $(".d1c-show3").show();
        p1_c3_unhighlight();

        p1_c3_line4();
        currentLine1c = 1;
    });


    $("#step-button-1c").click(function () {
        if (currentLine1c == 1) {
            //do line 1 things here
            $(".d1c-link").removeClass("yellow");
            $("#code1c-line-1").addClass("yellow");

            $(".d1c-hide-all").hide();
            $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
            $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
            p1_c3_hideBorders();
            p1_c3_unhighlight();

            p1_c3_line1();
            currentLine1c = 2;
        }
        else if (currentLine1c == 2) {
            //do line 2 things here
            p1_c3_line2();
            currentLine1c = 3;
        }
        else if (currentLine1c == 3) {
            //do line 3 things here
            p1_c3_line3();
            currentLine1c = 4;
        }
        else if (currentLine1c == 4) {
            //do line 4 things here
            p1_c3_line4();
            currentLine1c = 1;
        }
    });
});