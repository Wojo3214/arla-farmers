"use strict"


$("#pro-form input").keyup(function () {

    let numValid = 0;
    $("#pro-form input[required]").each(function () {
        if (this.validity.valid) {
            numValid++;
        }
    });

    let progress = $("#progress"),
        progressMessage = $("#progress-message");

    if (numValid == 0) {
        progress.attr("value", "0");

    }
    if (numValid == 1) {
        progress.attr("value", "20");

    }
    if (numValid == 2) {
        progress.attr("value", "40");

    }
    if (numValid == 3) {
        progress.attr("value", "60");

    }
    if (numValid == 4) {
        progress.attr("value", "80");

    }
    if (numValid == 5) {
        progress.attr("value", "100");

    }

    let x = document.getElementById("question_input");

    console.log("loop");
    if (x.value > 8) {
        progressMessage.text("Great! Amazing job!");
        progressMessage.css("color", "var(--main-green)");
    }

    if (x.value < 8) {
        progressMessage.text("Last year it was 8");
        progressMessage.css("color", "orange");
    }

    if (x.value == 0) {
        progressMessage.text("");
        progressMessage.css("color", "orange");
    }

});


function changeCows() {
    document.querySelector(".changeCows").style.backgroundColor = "white";
    document.querySelector(".changeMilk").style.backgroundColor = "transparent";
    document.querySelector(".changeTractor").style.backgroundColor = "transparent";
    document.querySelector(".changePollution").style.backgroundColor = "transparent";
    document.querySelector(".cows_section_questions").style.display = "block";
    document.querySelector(".milk_section_questions").style.display = "none";
    document.querySelector(".tractor_section_questions").style.display = "none";
    document.querySelector(".pollution_section_questions").style.display = "none";
    document.querySelector(".cow_question_icon").style.fill = "var(--main-green)";
    document.querySelector(".milk_question_icon").style.fill = "white";
    document.querySelector(".tractor_question_icon").style.fill = "white";
    document.querySelector(".pollution_question_icon").style.fill = "white";
}

function changeMilk() {
    document.querySelector(".changeMilk").style.backgroundColor = "white";
    document.querySelector(".changeCows").style.backgroundColor = "transparent";
    document.querySelector(".changeTractor").style.backgroundColor = "transparent";
    document.querySelector(".changePollution").style.backgroundColor = "transparent";
    document.querySelector(".cows_section_questions").style.display = "none";
    document.querySelector(".milk_section_questions").style.display = "block";
    document.querySelector(".tractor_section_questions").style.display = "none";
    document.querySelector(".pollution_section_questions").style.display = "none";
    document.querySelector(".cow_question_icon").style.fill = "white";
    document.querySelector(".milk_question_icon").style.fill = "var(--main-green)";
    document.querySelector(".tractor_question_icon").style.fill = "white";
    document.querySelector(".pollution_question_icon").style.fill = "white";
}

function changeTractor() {
    document.querySelector(".changeMilk").style.backgroundColor = "transparent";
    document.querySelector(".changeCows").style.backgroundColor = "transparent";
    document.querySelector(".changeTractor").style.backgroundColor = "white";
    document.querySelector(".changePollution").style.backgroundColor = "transparent";
    document.querySelector(".cows_section_questions").style.display = "none";
    document.querySelector(".milk_section_questions").style.display = "none";
    document.querySelector(".tractor_section_questions").style.display = "block";
    document.querySelector(".pollution_section_questions").style.display = "none";
    document.querySelector(".cow_question_icon").style.fill = "white";
    document.querySelector(".milk_question_icon").style.fill = "white";
    document.querySelector(".tractor_question_icon").style.fill = "var(--main-green)";
    document.querySelector(".pollution_question_icon").style.fill = "white";
}

function changePollution() {
    document.querySelector(".changeMilk").style.backgroundColor = "transparent";
    document.querySelector(".changeCows").style.backgroundColor = "transparent";
    document.querySelector(".changeTractor").style.backgroundColor = "transparent";
    document.querySelector(".changePollution").style.backgroundColor = "white";
    document.querySelector(".cows_section_questions").style.display = "none";
    document.querySelector(".milk_section_questions").style.display = "none";
    document.querySelector(".tractor_section_questions").style.display = "none";
    document.querySelector(".pollution_section_questions").style.display = "block";
    document.querySelector(".cow_question_icon").style.fill = "white";
    document.querySelector(".milk_question_icon").style.fill = "white";
    document.querySelector(".tractor_question_icon").style.fill = "white";
    document.querySelector(".pollution_question_icon").style.fill = "var(--main-green)";
}
