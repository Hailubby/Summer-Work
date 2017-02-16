/**
 * Created by User on 16/02/2017.
 */

/** Specific JQuery for the classes page. Mainly just animations **/

$(document).read(function () {
    
    //panel 1
    //panel 1 code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        $(".d1a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age").promise().done(function () {
                p1_c1_line3();
                $("#d1a-age-val").promise().done(function () {
                    p1_c1_line4();
                    $("#d1a-print-l4").promise().done(function () {
                        p1_c1_line5();
                        $("#d1a-rtnval-val").promise().done(function () {
                            p1_c1_line6();
                        });
                    });
                });
            });
        });
    });
});