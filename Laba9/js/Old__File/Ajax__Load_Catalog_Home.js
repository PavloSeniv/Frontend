(function (global) {

    var ns = {}; //new site

    var homeHtml = "snippets/Main__Home.html"; //Посилання на сніпет
    var allCategoriesUrl = "db/Catalog.json";
    var categoriesTitleHtml = "snippets/Category__Title.html";
    var categoryHTML = "snippets/Category__Item.html";

    // Convenience function for inserting innerHTML fot 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'
    var showLoading = function (selector) {
        var html = "<div class='text-center loader__position'>";
        html += "<img src='img/Ajax__Loading.gif' alt='loading' ></div";
        insertHtml(selector, html);
    };

    // Return substitude of '{{propName}}'
    // with propValue in given 'string'
    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }


    //On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

        //On first load, show home view
        showLoading("#Main__Home");
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#Main__Home").innerHTML = responseText;
        }, false); //Інформація береться із сервера якщо false

    });

    // Load the menu categories view
    ns.loadCatalogCategories = function () {
        showLoading("#Main__Home");
        $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };

    //Завантаження головної сторінки
    ns.loadHome = function () {
        showLoading("#Main__Home"); //Підтягування гіфки завантажувача
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#Main__Home").innerHTML = responseText;
        }, false); //Інформація береться із сервера якщо false
    };

    // Builds HTML for the categories page based on the data
    // from  the server
    function buildAndShowCategoriesHTML(categories) {
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(categoriesTitleHtml, function (categoriesTitleHtml) {
            // Retrieve single category snippet
            $ajaxUtils.sendGetRequest(categoryHTML, function (categoryHTML) {
                var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHTML);
                insertHtml("#Main__Home", categoriesViewHtml); // Буде вставлено сніпет категорій замість головної сторінки
            }, false);
        }, false);
    }

    //Using categories data and snippets html
    // build categories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {

        var finalHTML = categoriesTitleHtml;
        finalHTML += "<div class='container p-0'>"; //Додаємо контейнер до сторінки
        finalHTML += "<section class='row'>";

        // Loop over categories
        for (var i = 0; i < categories.length; i++) {
            // Insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHTML += html;
        }

        finalHTML += "</section>";
        finalHTML += "</div>";
        return finalHTML;
    }

    global.$ns = ns;

})(window);