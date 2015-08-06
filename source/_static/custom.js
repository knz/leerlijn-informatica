$(document).ready(function() {

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
