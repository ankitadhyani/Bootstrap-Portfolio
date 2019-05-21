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
    }, {
        projName: "Burger App",
        imgSrc: "../images/Sequelized-Burger.png",
        refLink: "https://ankita-sequelize-burger.herokuapp.com/"
    }, {
        projName: "Note Taker",
        imgSrc: "../images/NoteTaker_HomePage.png",
        refLink: "https://note-taker-ankita.herokuapp.com/notes"
    }, {
        projName: "Inspire - Job Portal",
        imgSrc: "../images/Inspire_JobPortal.png",
        refLink: "https://inspire-job.herokuapp.com/"
    }];


    /* *****************************************************************************
     * OnClick function that triggers when user clicks on Rutgers Bootcamp Projects
     * ******************************************************************************/

    $("#rutgersProjectOnGithub").on("click", function () {

        console.log("Inside #rutgersProjectOnGithub onClick function");

        $("#bootcampProjs").empty();

        for (let i = 0; i < bootcampProjects.length; i++) {

            let $projDivCol = $("<div>");
            $projDivCol
                .addClass("col-4 mt-5 mb-5");


            let $aTag = $("<a>")
                .addClass("nav-link")
                .attr("href", bootcampProjects[i].refLink)
                .attr("target", "_blank")
                .appendTo($projDivCol);


            let $projimg = $("<img>");
            $projimg
                .addClass("card-img-top")
                .attr("type", "button")
                .attr("src", bootcampProjects[i].imgSrc)
                .attr("alt", bootcampProjects[i].projName)
                .attr("width", "300px")
                .attr("height", "300px")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", bootcampProjects[i].projName+" Project")
                .appendTo($aTag);


            $("#bootcampProjs")
                .append($projDivCol)
                .css("border-radius", "10px")
                .css("border", "3px dotted orangered")
                .css("width", "100%")
                .css("background-color", "rgba(255, 68, 0, 0.356)");

        }
    });



    /*    $("#rutgersProjectOnGithub").on("click", function () {

            console.log("Inside #rutgersProjectOnGithub onClick function");

            let $projRow = $("<div>").addClass("row");

            for (let i = 0; i < bootcampProjects.length; i++) {

                let $projDiv = $("<div>")
                    .addClass("col-3 p-3")
                    .appendTo($projRow);

                $("<p>")
                    .addClass("text-center p-2 m-5")
                    .append(`<strong>${bootcampProjects[i].projName}</strong>`)
                    .css("color", "orangered")
                    .appendTo($projDiv);

                let $proja = $("<a>")
                    .addClass("nav-link mt-5")
                    .attr("href", bootcampProjects[i].refLink)
                    .attr("target", "_blank")
                    .appendTo($projDiv);

                let $projBtn = $("<button>")
                    .addClass("btn p-2")
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
                    .appendTo($projBtn);



                $("#bootcampProjs")
                    .append($projDiv)
                    .css("border-radius", "10px")
                    .css("border", "3px dotted orangered")
                    .css("width", "100%")
                    // .css("height", "200px")
                    .css("background-color", "rgba(255, 68, 0, 0.356)");

            }
        });
    */
    /*************************************************************************************************
     * A custom script is used to activate tooltips
     *************************************************************************************************/

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });