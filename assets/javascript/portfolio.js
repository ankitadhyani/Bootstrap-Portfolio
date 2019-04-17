
/* *****************************************************************************
* OnClick function that triggers when user clicks on Rutgers Bootcamp Projects
* ******************************************************************************/

$("#rutgersProjectOnGithub").on("click", function(){

    var $projDiv = $(`<div>`);
//  <img class="btn img-thumbnail p-2" src="assets/RutgersBootcamp.png" alt="RutgersBootcamp" width="200px" height="200px" id="rutgersProjectOnGithub"/><h3>Full Time</h3>

    $("<img>")
        .addClass("btn img-thumbnail p-2")
        .attr("src", "../images/JerseyRail.png")
        .attr("alt", "JerseyRail")
        .attr("width", "200px")
        .attr("height", "200px")
        .appendTo($projDiv);

    $("<img>")
        .addClass("btn img-thumbnail p-2")
        .attr("src", "../images/GuessTheFlags.png")
        .attr("alt", "GuessTheFlags")
        .attr("width", "200px")
        .attr("height", "200px")
        .appendTo($projDiv);



    $("#bootcampProjs").append($projDiv);

    
});