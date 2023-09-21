
const Tone = require('tone')


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


window.onload = () => {
    dayMapping = {1:"A", 2:"B", 3:"C", 4:"D", 5: "E", 6: "F", 7:"G"}

    let insertNote = (week, day, depth) => {
        if (!chordMapping[week]){
            chordMapping[week] = [day+String(parseInt(depth)+1)]
        } else {
            chordMapping[week].push(day+String(parseInt(depth)+1))
        }
    }

        
    if (document.querySelectorAll(".js-yearly-contributions").length!=0) {
        document.documentElement.style.setProperty('--color-calendar-graph-day-L1-bg', '#229cd0');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L2-bg', '#1b7ca6');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L3-bg', '#145d7c');
        document.documentElement.style.setProperty('--color-calendar-graph-day-L4-bg', '#0d3e53');


        calendarBody = document.getElementsByClassName("ContributionCalendar-grid")[0].children[2]
        var dayCounter = 1
        console.log()
        for (let child of calendarBody.children){
            for (let day of child.children){
                if (day.getAttribute("data-ix")!=null){
                    insertNote(day.getAttribute("data-ix"), dayMapping[dayCounter], day.getAttribute("data-level"))
                }
            }
            dayCounter +=1
        }
        document.getElementsByClassName("js-calendar-graph")[0].appendChild(button);

    }
}
