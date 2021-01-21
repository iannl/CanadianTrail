var waiting = false
var frameNum = 1
var done = 1
var moveTime = false
var playerlook = 'bd'
            var score = 0
            var family = []
            var randomnumber = ""
            var waystodie = ["Heart Disease", "Stroke", "Cholera", "Smallpox", "Dysentary", "Fever", "Cancer", "a Broken Bone", "Unknown Cause","Malnutrition", "Exhaustion", "Scurvy", "Bad Amusia", "Murder"]
            var distances = []
            var distancesA = []
            var placesarray = ["Toronto, Ontario", "Bracebridge, Ontario", "Greater Sudbury, Ontario", "RIVER CROSSING: Mississagi", "Sault Ste. Marie, Ontario", "Michipicoten, Ontario", "Jack Fish, Ontario", "Thunder Bay, Ontario", "Atikokan, Ontario", "Black Hawk, Ontario", "Kenora, Ontario","Whitemouth, Manitoba","RIVER CROSSING: Red River", "Winnipeg, Manitoba", "Portage la Prairie, Manitoba", "Brandon, Manitoba", "RIVER CROSSING: Assiniboine","Russell, Manitoba", "Yorkton, Saskatchewan", "Pile of Bones, Saskatchewan", "Moose Jaw, Saskatchewan", "Swift Current, Saskatchewan", "Maple Creek, Saskatchewan", "DECISION: Medicine Hat, Alberta","Brooks, Alberta", "Calgary, Alberta", "Canmore, Alberta", "Golden, British Columbia", "Revelstoke, British Columbia", "RIVER CROSSING: Columbia", "Salmon Arm, British Columbia", "RAFT?: Kamloops, British Columbia", "Hope, British Columbia", "Vancouver, British Columbia"]
            var placesarrayA = ["Lethbridge, Alberta", "Crowsnest Pass, Alberta", "Cranbrook, British Columbia", "RIVER CROSSING: Columbia", "Castlegar, British Columbia", "Osoyoos, British Columbia", "Princeton, British Columbia", "Hope, British Columbia", "Vancouver, British Columbia"]
            var weatherarray = ["Good", "Decent", "Okay", "Mediocre", "Poor", "Bad"]
            var money = 5000
            var food = 0
            var oxen = 0
            var bullets = 0
            var str = "&nbsp"
            var round = 1
            var loadtohtml='<p class="type" style="color: white;">Welcome to CanadianTrail!'+str.repeat(30)+'It is the year 1876, and you need to move to Canada.'+str.repeat(30)+'You can play with arrow keys.'+str.repeat(30)+'Have fun!</p>'
            async function load(){
                const urlParams = new URLSearchParams(window.location.search);
                const skipstart = urlParams.get('skip');
                if (urlParams.get('p') != null) {
                    playerlook = urlParams.get('p')
                }

                if (urlParams.get('test') == 't') {
                    moveTime = true
                    showPlayer('d', '1', playerlook)
                } else {
                    if (skipstart != 'true') {
                        await sleep(2000)
                        loadcanadiantrail()
                    } else {
                        entergame('t')
                    }
                }
            }

            async function loadcanadiantrail() {
                document.getElementById("game").innerHTML=loadtohtml
                await sleep(5000)
                document.getElementById("game").innerHTML='<p class="type" style="color: white;">What do you want your name to be?</p><form onsubmit="return false"><input id="name" type="text"><button onclick="moveon()">Okay</button></form>'
                var waiting = true
            }

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

function buy1() {
    //alert("You clicked on the 'Buy Something' button")
    money -= 10
    food += 10
    document.getElementById("money").innerHTML='<p class="type" id="money" style="color: white;">Money: $'+ money +'</p>'
    document.getElementById("food").innerHTML='<p class="type" id="food" style="color: white;">Food (pounds): '+ food +'</p>'
    //alert(food)
}

function buy2() {
    //alert("You clicked on the 'Buy Something else' button")
    money -= 100
    oxen += 1
    document.getElementById("money").innerHTML='<p class="type" id="money" style="color: white;">Money: $'+ money +'</p>'
    document.getElementById("oxen").innerHTML='<p class="type" id="oxen" style="color: white;">Oxen: '+ oxen +'</p>'

}

function buy3() {
    //alert("You clicked on the 'Buy another thing' button")
    money -= 1
    bullets += 10
    document.getElementById("money").innerHTML='<p class="type" id="money" style="color: white;">Money: $'+ money +'</p>'
    document.getElementById("bullets").innerHTML='<p class="type" id="bullets" style="color: white;">Bullets: '+ bullets +'</p>'
}

function entergame(t) {
    //Create random family
    if (t == null) {
        var name = document.getElementById("name2").innerText
    } else {
        var name = 'you'
    }
    var people = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christophe", "Nancy", "Daniel", "Lisa", "Matthew", "Margaret", "Carol", "Brian", "Amanda", "George", "Melissa", "Edward", "Deborah", "Ronald", "Stephanie", "Timothy", "Rebecca", "Jason", "Laura", "Jeffrey", "Sharon", "Ryan", "Cynthia", "Jacob", "Kathleen", "Gary", "Amy", "Nicholas", "Shirley", "Eric", "Angela", "Jonathan", "Helen", "Stephen", "Anna", "Larry", "Brenda", "Justin", "Pamela", "Scott", "Nicole"]
    family.push(name);
    family.push(people[Math.floor(Math.random() * people.length)]);
    family.push(people[Math.floor(Math.random() * people.length)]);
    family.push(people[Math.floor(Math.random() * people.length)]);
    family.push(people[Math.floor(Math.random() * people.length)]);
    //_____________________________
    document.getElementById("game").innerHTML='<p class="type" style="color: white;">Your family: '+ family.join(', ') +'</p><button onclick="start()">Start Game</button>'
}

function start() {
    var location = "Toronto, Ontario"
    var weather = "Good"
    document.getElementById("game").innerHTML='<p id="place" class="type" style="color: white;">Location: '+ location +'</p><p id="weather" class="type" style="color: white;">Weather: '+ weather +'</p><button onclick="continuegame()">Continue</button><button onclick="hunt()">Hunt</button>'
}

function continuegame() {
    //death(family[Math.floor(Math.random() * family.length)])
    console.log(round)
    makenewgame(round)
    if (placesarray.length > round) {
    round++
    var location = placesarray[round-1]
    var weather = weatherarray[Math.floor(Math.random() * weatherarray.length)]
    document.getElementById("game").innerHTML='<p id="place" class="type" style="color: white;">Location: '+ location +'</p><p id="weather" class="type" style="color: white;">Weather: '+ weather +'</p><button onclick="continuegame()">Continue</button><button onclick="hunt()">Hunt</button>'
    randomnumber = Math.floor(Math.random() * 50/(weatherarray.indexOf(weather)+1))
    //alert(randomnumber) 
    if (randomnumber == 1){
        death(family[Math.floor(Math.random() * family.length)])
    }

    } else {
        alert("Testing: Game Over. Reson: Win")
        alert("People left: " + family.length)
        alert("Money left: " + money)
        score = Math.floor(money*family.length/100)
        alert("Score: " + score)
        document.getElementById("game").innerHTML='<button onclick="location.reload()">Play Again!</button>'
    }
}

function hunt() {
    alert("You cannot hunt.")
}

function death(person) {
    if (family.length < 2) {
        alert("Testing: Game Over. Reson: Death")
        location.reload()
    }
    family = arrayRemove(family, person)
    //alert(family)
    alert(person + " died of "+ waystodie[Math.floor(Math.random() * waystodie.length)])
}


    
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

function makenewgame(level) {
    alert('Mini-games do not work yet. There would normaly be a game here. Congrats on passing level ' + level + '!')
    document.getElementById('game').innerHTML='<iframe>'
}

/* 
###################
### Player zone ###
###################
*/

function setVarUp() {
    console.log(frameNum)
    if (frameNum < 3) {
        frameNum++
    } else {
        frameNum = 1
    }
}

function showPlayer(dir, frame, looks) {
    console.log('Showing the player...')
    setImage('img')
    editPlayer('resources/images/minigame/players/players_min/player_' + looks + dir + frame +'-min.png', 'img')
}

function setImage(id) {
    console.log('Setting...')
    document.getElementById('game').innerHTML='<img src="resources/images/loading_HQ.gif" id="'+id+'">'
}

function editPlayer(image, id) {
    console.log('Changing...')
    document.getElementById(id).src=image
}

async function keyCode(event) {
    var x = event.keyCode;
    if (x == 38) {
        console.log("You pressed the up key!");
        for (let i = 1; i < 4; i++) {
            showPlayer('u', i, playerlook)
            await sleep(100);
            if (i === 3) {
                showPlayer('u', 1, playerlook)
            }
        }
        done = 1
        return;
    } else if (x == 40){
        console.log("You pressed the down key!");
        for (let i = 1; i < 4; i++) {
            showPlayer('d', i, playerlook)
            await sleep(100);
            if (i === 3) {
                showPlayer('d', 1, playerlook)
            }
        }
        done = 1
        return;
    } else if (x == 37){
        console.log("You pressed the left key!");
        for (let i = 1; i < 4; i++) {
            showPlayer('l', i, playerlook)
            await sleep(100);
            if (i === 3) {
                showPlayer('l', 1, playerlook)
            }
        }
        done = 1
        return;
    } else if (x == 39){
        console.log("You pressed the right key!");
        for (let i = 1; i < 4; i++) {
            showPlayer('r', i, playerlook)
            await sleep(100);
            if (i === 3) {
                showPlayer('r', 1, playerlook)
            }
        }
        done = 1
        return;
    }
}

function keyUp(event) {
    var y = event.keyCode;
    if (y == 38) {
        showPlayer('u', 1, playerlook)
    } else if (y == 40){
        showPlayer('d', 1, playerlook)
    } else if (y == 37){
        showPlayer('l', 1, playerlook)
    } else if (y == 39){
        showPlayer('r', 1, playerlook)
    }
}

async function call(event) {
    if (done == 1 && moveTime == true) {
    done = 0
    keyCode(event)
    keyUp(event)
    }
}
