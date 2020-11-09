"use strict"


/* profile page settings buttons */

function themeOn() {
    let activeTheme = document.getElementById("active");
    let notActiveTheme = document.getElementById("not_active");
    let activeThemeChanges = document.getElementById("profile_section");
    let activeThemeButton = document.getElementById("pas_button");
    let activeThemeProgress = document.getElementById("profile_progress");
    let activeThemeProgress1 = document.getElementById("profile_progress1");



    activeTheme.classList.add("active");
    notActiveTheme.classList.remove("active");
    notActiveTheme.classList.add("not_active");
    activeThemeChanges.classList.add("theme_active");
    activeThemeChanges.classList.remove("theme_not_active");
    activeThemeButton.classList.add("button_active");
    activeThemeButton.classList.remove("button_not_active");
    activeThemeProgress.classList.add("theme_active");
    activeThemeProgress.classList.remove("theme_not_active");
    activeThemeProgress1.classList.add("theme_active");
    activeThemeProgress1.classList.remove("theme_not_active");

}
themeOn();

function themeOff() {
    let notActive = document.getElementById("not_active");
    let active = document.getElementById("active");
    let notActiveThemeChanges = document.getElementById("profile_section");
    let activeThemeButton = document.getElementById("pas_button");
    let activeThemeProgress = document.getElementById("profile_progress");
    let activeThemeProgress1 = document.getElementById("profile_progress1");
    notActive.classList.remove("not_active");
    notActive.classList.add("active");
    active.classList.remove("active");
    notActive.classList.remove("not_active");
    notActiveThemeChanges.classList.add("theme_not_active");
    activeThemeButton.classList.add("button_not_active");
    activeThemeProgress.classList.add("theme_not_active");
    activeThemeProgress1.classList.add("theme_not_active");
}
themeOff();


function on() {
    let active = document.getElementById("on");
    let notActive = document.getElementById("off");
    active.classList.add("active");
    notActive.classList.remove("active");
    notActive.classList.add("not_active");
}

on();

function off() {
    let notActive = document.getElementById("off");
    let active = document.getElementById("on");
    notActive.classList.remove("not_active");
    notActive.classList.add("active");
    active.classList.remove("active");
    notActive.classList.remove("not_active");

}

off();

function eng() {
    let active = document.getElementById("eng");
    let notActive = document.getElementById("dkk");
    active.classList.add("active");
    notActive.classList.remove("active");
    notActive.classList.add("not_active");

}

eng();

function dkk() {
    let notActive = document.getElementById("dkk");
    let active = document.getElementById("eng");
    notActive.classList.remove("not_active");
    notActive.classList.add("active");
    active.classList.remove("active");
    notActive.classList.remove("not_active");
}
dkk();


function openText() {
    let openText = document.getElementById("mark");
    openText.classList.toggle("open_text");


}
openText();

function closeText() {
    let openText = document.getElementById("mark");
    openText.classList.add("open_text");

}
closeText();