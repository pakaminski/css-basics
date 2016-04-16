$('pre').click(function (event) {
    zoom.to({
        element: this
    });
    event.preventDefault();
});
$('.zoomable').click(function (event) {
    zoom.to({
        element: this
    });
    event.preventDefault();
});
$.each($('code[data-trim=""]'),function(k,v){
    $(v).html($.trim($(v).html()));
});
$('.exercise').on('impress:stepenter', function(){
    console.log("Entering iframe with iframe");


    var that = this, iframe = $(this).find('.jsbin'),
        iframeSrc = iframe.data("src");

    iframe.attr("src",iframeSrc);


    window.setTimeout(function(){
        console.log("Loading result iframe");

        var resultIframe = $(that).find('.jsbinresult'),
            resultIframeSrc = resultIframe.data("src");
        resultIframe.attr("src",resultIframeSrc);

    }, 2000);

});

