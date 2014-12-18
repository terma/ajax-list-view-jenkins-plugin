jQuery(document).ready(function () {

    function reloadJobs() {
        console.log("start load jobs data...");
        jQuery.ajax({
            url: "ajax",
            cache: false,
            dataType: "html"
        }).done(function (html) {
            jQuery("#projectstatus").remove();
            jQuery("#viewList").after(html);
            console.log("jobs loaded");
        });
    }

    window.setInterval(function () {
        reloadJobs();
    }, 5000);

    reloadJobs();
});