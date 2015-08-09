$(document).ready(function() {

    $('.section > .section :first').before(
        "<div class='icontainer'><span class='head'>Bonus: definitie uit de <a href='http://www.catb.org/jargon/html/index.html'>Jargon File</a></span><br/>" +
        "<iframe id='fortune' src='//csa.science.uva.nl/fortune/fortune.cgi' /></div>" );

    ifr = $("#fortune")
    ifr.height("3em");
    var sz = 0;
    var shown = false;
    ifr.load(function() {
        setInterval(function() {
            sz = $("#fortune").contents().height();
            if (shown) {
                $("#fortune").animate({'height':sz},200);
            } else {
                $("#fortune").animate({'height':"3em"},200);
            }
        }, 1000);
    });
    $('.icontainer').click(function() {
        $(this).children(".head").toggleClass("open");
        shown = !shown;
    });

    $('.utitle').parent().addClass('utitle-parent');
    $('.dtitle').parent().addClass('dtitle-parent');
    $('.ttitle').parent().addClass('ttitle-parent');
    $('.wtitle').parent().addClass('wtitle-parent');
    $('.stitle').parent().addClass('stitle-parent');

    $(".toggle > *").hide();
    $(".toggle .admonition-title").show();
    $(".toggle .admonition-title").click(function() {
        $(this).parent().children().not(".admonition-title").toggle(400);
        $(this).parent().children(".admonition-title").toggleClass("open");
    })
});
