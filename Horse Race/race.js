let competitors = [];
let no = document.getElementById("No");
let which = document.getElementById("which");
let begin = document.getElementById('beginning');
let horse_container = document.getElementById('run');
let track = document.getElementById('track');
let reset = document.getElementById("reset");
let a = " ";

function init() { 
    let num_of_horses = document.getElementById('horses').value;
    begin.style.height = num_of_horses * 40 + 'px';
    begin.style.width = '10vh';
    for(let i = 0; i < num_of_horses; i++) {
        let new_horse = new Image();
        new_horse.src = "horse" + (i+1) + ".svg";
        new_horse.id = "horse" + (i+1);
        new_horse.alt = "error!";
        new_horse.style.marginLeft = '0vh';
        competitors.push(new_horse);
        horse_container.appendChild(new_horse);

        let new_text = "No." + (i+1);
        let new_p = document.createTextNode(new_text);
        let new_node = document.createElement('div');
        no.appendChild(new_node);
        new_node.appendChild(new_p);
    }

    document.getElementById('OK').onclick = '#';

    let end_line = document.createElement('div');
    end_line.id = "ending";
    end_line.style.height = num_of_horses * 40 + 'px';
    track.appendChild(end_line);
}

function start() {
    start1 = setInterval(move1, 1);
    start2 = setInterval(move2, 1);
    start3 = setInterval(move3, 1);
    start4 = setInterval(move4, 1);
    start5 = setInterval(move5, 1);
    start6 = setInterval(move6, 1);

    let start_race = document.getElementById("start_");
    start_race.onclick = '#';
}

reset.onclick =  function again() {
    if(which.children.length >= 1) {
        while(which.children.length >= 1) {
            which.removeChild(which.lastElementChild);
        }
    }
    start1 = setInterval(move1, 1);
    start2 = setInterval(move2, 1);
    start3 = setInterval(move3, 1);
    start4 = setInterval(move4, 1);
    start5 = setInterval(move5, 1);
    start6 = setInterval(move6, 1);
}

function move1() {
    let h1 = document.getElementById('horse1');
    h_1 = h1.style.marginLeft;
    h_1 = Number.parseInt(h_1.split('vh')[0]);
    h_1 += Math.round(Math.random()*0.9) + 1;
    h1.style.marginLeft = h_1 + 'vh';
    if(h_1 >= '128') {
        clearInterval(start1);
        alert('Horse 1 reaches the ending.');
        h1.style.marginLeft = '0vh';

        let status_of_horse1 = document.createElement('div');
        status_of_horse1.className = "horse_";
        let new_p1 = document.createTextNode("Horse 1");
        which.appendChild(status_of_horse1);
        status_of_horse1.appendChild(new_p1);
    }
}
function move2() {
    let h2 = document.getElementById('horse2');
    h_2 = h2.style.marginLeft;
    h_2 = Number.parseInt(h_2.split('vh')[0]);
    h_2 += Math.round(Math.random()*0.9) + 1;
    h2.style.marginLeft = h_2 + 'vh';
    if(h_2 >= '128') {
        clearInterval(start2);
        alert('Horse 2 reaches the ending.');
        h2.style.marginLeft = '0vh';

        let status_of_horse2 = document.createElement('div');
        status_of_horse2.className = "horse_";
        let new_p2 = document.createTextNode("Horse 2");
        which.appendChild(status_of_horse2);
        status_of_horse2.appendChild(new_p2);
    }
}
function move3() {
    let h3 = document.getElementById('horse3');
    h_3 = h3.style.marginLeft;
    h_3 = Number.parseInt(h_3.split('vh')[0]);
    h_3 += Math.round(Math.random()*0.9) + 1;
    h3.style.marginLeft = h_3 + 'vh';
    if(h_3 >= '128') {
        clearInterval(start3);
        alert('Horse 3 reaches the ending.');
        h3.style.marginLeft = '0vh';
        
        let status_of_horse3 = document.createElement('div');
        status_of_horse3.className = "horse_";
        let new_p3 = document.createTextNode("Horse 3");
        which.appendChild(status_of_horse3);
        status_of_horse3.appendChild(new_p3);
    }
}
function move4() {
    let h4 = document.getElementById('horse4');
    h_4 = h4.style.marginLeft;
    h_4 = Number.parseInt(h_4.split('vh')[0]);
    h_4 += Math.round(Math.random()*0.9) + 1;
    h4.style.marginLeft = h_4 + 'vh';
    if(h_4 >= '128') {
        clearInterval(start4);
        alert('Horse 4 reaches the ending.');
        h4.style.marginLeft = '0vh';
        
        let status_of_horse4 = document.createElement('div');
        status_of_horse4.className = "horse_";
        let new_p4 = document.createTextNode("Horse 4");
        which.appendChild(status_of_horse4);
        status_of_horse4.appendChild(new_p4);
    }
}
function move5() {
    let h5 = document.getElementById('horse5');
    h_5 = h5.style.marginLeft;
    h_5 = Number.parseInt(h_5.split('vh')[0]);
    h_5 += Math.round(Math.random()*0.9) + 1;
    h5.style.marginLeft = h_5 + 'vh';
    if(h_5 >= '128') {
        clearInterval(start5);
        alert('Horse 5 reaches the ending.');
        h5.style.marginLeft = '0vh';
        
        let status_of_horse5 = document.createElement('div');
        status_of_horse5.className = "horse_";
        let new_p5 = document.createTextNode("Horse 5");
        which.appendChild(status_of_horse5);
        status_of_horse5.appendChild(new_p5);
    }
}
function move6() {
    let h6 = document.getElementById('horse6');
    h_6 = h6.style.marginLeft;
    h_6 = Number.parseInt(h_6.split('vh')[0]);
    h_6 += Math.round(Math.random()*0.9) + 1;
    h6.style.marginLeft = h_6 + 'vh';
    if(h_6 >= '128') {
        clearInterval(start6);
        alert('Horse 6 reaches the ending.');
        h6.style.marginLeft = '0vh';
        
        let status_of_horse6 = document.createElement('div');
        status_of_horse6.className = "horse_";
        let new_p6 = document.createTextNode("Horse 6");
        which.appendChild(status_of_horse6);
        status_of_horse6.appendChild(new_p6);
    }
}
