$(document).ready(function() {
    $("select").imagepicker();

    $("#go").click(function() {
        var e = document.getElementById("selector");
        var strUser = e.options[e.selectedIndex].text;

        if (e.selectedIndex == 2) {

            window.location = "43923.html";
        } else {

            window.location = "59432wrong.html";
        }
        console.log(e.selectedIndex);
    });
});