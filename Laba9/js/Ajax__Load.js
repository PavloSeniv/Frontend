(function (global) {

    var ns = {}; //new site

    var homeHtml = "snippets/Main__Home.html"; //Посилання на сніпет

    // Convenience function for inserting innerHTML fot 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    //Show loading icon inside element identified by 'selector'
    var showLoading = function (selector) {
        var html = "<div class='text-center loader__position'>";
        html += "<img src='img/Ajax__Loading.gif' alt='loading' ></div";
        insertHtml(selector, html);
    };

    //On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

        //On first load, show home view
        showLoading("#Main__Home");
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#Main__Home").innerHTML = responseText;
        }, false);

    });

    global.$ns = ns;

})(window);