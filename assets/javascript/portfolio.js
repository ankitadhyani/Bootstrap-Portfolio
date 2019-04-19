    
    //Bootcamp Projects object
    let bootcampProjects = [{
        projName: "VLTube",
        imgSrc: "../images/VLTubeMainPage.png",
        refLink: "https://dimple23.github.io/VLTUBE/"
    }, {
        projName: "Jersey Rail",
        imgSrc: "../images/JerseyRail.png",
        refLink: "https://ankitadhyani.github.io/TrainScheduler/"
    }, {
        projName: "Guess The Flags Quiz",
        imgSrc: "../images/GuessTheFlags.png",
        refLink: "https://ankitadhyani.github.io/CheckYourKnowledge/"
    }, {
        projName: "Wonders of The World Quiz",
        imgSrc: "../images/WondersOfTheWorld.png",
        refLink: "https://ankitadhyani.github.io/TriviaGame/"
    }, {
        projName: "Crystal Collector",
        imgSrc: "../images/CrystalCollector.png",
        refLink: "https://ankitadhyani.github.io/CrystalsCollectorGame/"
    }, {
        projName: "Word Guess Game",
        imgSrc: "../images/MakeAWord.png",
        refLink: "https://ankitadhyani.github.io/WordGuessGame/"
    }];


    /* *****************************************************************************
    * OnClick function that triggers when user clicks on Rutgers Bootcamp Projects
    * ******************************************************************************/

    $("#rutgersProjectOnGithub").on("click", function () {

        console.log("Inside #rutgersProjectOnGithub onClick function");

        for (let i = 0; i < bootcampProjects.length; i++) {

            let $projDiv = $("<div>")
                .addClass("col-2");

            $("<p>")
                .addClass("text-center pt-2")
                .append(`<strong>${bootcampProjects[i].projName}</strong>`)
                .css("color", "orangered")
                .appendTo($projDiv);

            let $proja = $("<a>")
                .addClass("nav-link")
                .attr("href", bootcampProjects[i].refLink)
                .attr("target", "_blank")
                .appendTo($projDiv);

            let $projBtn = $("<button>")
                .addClass("btn")
                .attr("type", "button")
                .css("position", "absolute")
                .css("bottom", "2px")
                .attr("width", "300px")
                .attr("height", "300px")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", bootcampProjects[i].projName+" Project")
                .appendTo($proja);

            let $projImg = $("<img>")
                .addClass("img-thumbnail")
                .attr("src", bootcampProjects[i].imgSrc)
                .attr("alt", bootcampProjects[i].projName)
                // .appendTo($proja);
                .appendTo($projBtn);



            $("#bootcampProjs")
                .append($projDiv)
                .css("border-radius", "10px")
                .css("border", "3px dotted orangered")
                .css("width", "100%")
                .css("height", "200px")
                .css("background-color", "rgba(255, 68, 0, 0.356)");

        }
    });

    /*************************************************************************************************
    * A custom script is used to activate tooltips
    *************************************************************************************************/

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });