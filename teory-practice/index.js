// $("h1").css("color", "red"); // properties css with first parameter is the method and the last parameter is the a propertie the paramete
// $("button"); // $ = document.querySelector

// console.log($("button", "green")); //this you can see the properties

$("h1").addClass("bit-title"); // big-title was created in the styles.css

// $("button").text("<em>Hey</em>"); // chANGE THE TEXT OF THE BUTTON

//Manipuling attributes with Jquery
$("a").attr("href", "https://www.github.com")

//Adding event listeners with Jquery
$("button").click(function() {
    $("h1").css("color", "purple");
    $(this).addClass("active"); // agrega la clase "active" al botón que se hizo clic
    $("button").not(this).removeClass("active"); // quita la clase "active" de todos los demás botones
});

$("button.active").click(function() {
    $("h1").css("color", ""); // restablece el color original del texto
    $("button").removeClass("active"); // quita la clase "active" de todos los botones
});
