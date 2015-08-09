$(document).ready(function() {

    $('#contents').after(
        "<div class='icontainer'><span class='head'>Bonus: definitie uit de <a href='http://www.catb.org/jargon/html/index.html'>Jargon File</a></span><br/>" +
        "<iframe id='fortune' src='//csa.science.uva.nl/fortune/fortune.cgi' /></div>" );

    ifr = $("#fortune")
    var sz = 0;
    var shown = false;
    ifr.load(function() {
        setInterval(function() {
            sz = $("#fortune").contents().height();
            if (shown) {
                $("#fortune").height(sz);
            } else {
                $("#fortune").height("3em");
            }
        }, 30);
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
