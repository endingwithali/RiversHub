
const Tone = require('tone')
  //test 

const polySynth = new Tone.PolySynth(Tone.Synth).toDestination();
polySynth.autostart = true;
chordMapping = {}

var button = document.createElement('button')
button.innerHTML="▶️ Play"
var buttonClick = () => {
    delay = 0
    for (const [key, value] of Object.entries(chordMapping)){
        polySynth.triggerAttackRelease(value, 1, delay);
        delay++
    }
}
button.onclick = buttonClick

// document.addEventListener("DOMContentLoaded", function() {
// window.onload = () => {
var injection = (mutationList, observer) => {
    console.log("loading")
    dayMapping = {1:"A", 2:"B", 3:"C", 4:"D", 5: "E", 6: "F", 7:"G"}
    console.error("MEOW")

    let insertNote = (week, day, depth) => {
        if (!chordMapping[week]){
            chordMapping[week] = [day+String(parseInt(depth)+1)]
        } else {
            chordMapping[week].push(day+String(parseInt(depth)+1))
        }
    }

    console.log("We are here")


    console.log(document.querySelectorAll(".js-yearly-contributions"))
    
    
    if (document.querySelectorAll(".js-yearly-contributions").length>0) {
        console.log("in selector")
        document.documentElement.style.setProperty('--color-calendar-graph-day-L1-bg', '#229cd0');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L2-bg', '#1b7ca6');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L3-bg', '#145d7c');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L4-bg', '#0d3e53');


        calendarBody = document.getElementsByClassName("ContributionCalendar-grid")[0].children[2]
        var dayCounter = 1
        for (let child of calendarBody.children){
            for (let day of child.children){
                if (day.getAttribute("data-ix")!=null){
                    insertNote(day.getAttribute("data-ix"), dayMapping[dayCounter], day.getAttribute("data-level"))
                }
                console.log("in for loop")
            }
            dayCounter +=1
        }
        console.log(button)
        document.getElementsByClassName("js-calendar-graph")[0].appendChild(button);
        console.log("button appended")

        observer.disconnect()
    }
}



var observer = new MutationObserver(injection)
var targetNode = document.getElementById("user-profile-frame")
const config = { attributes: true, childList: true, subtree: true };

observer.observe(targetNode, config)
