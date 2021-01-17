function configalert(ID) {
    var idcontents = document.getElementById(ID)
    if (idcontents != null) {
        try {
            document.getElementById(ID).innerHTML='<div id="alertzone" style="position:relative; opacity: 0.8;">config. complete!</div>'
        } catch (error) {
            alert("Please check alertext configalert ID. There was an error and the ID given could not be found. The error was: " + error)
        }
    } else {
        document.getElementsByTagName("html")[0].innerHTML+='<div id="alertzone" style="position:relative; opacity: 0.8;">config. complete!</div>'
    }
}

function alertext(text, lenth, button) {
    addstuff('<p style="width: 500px;height: 500px;text-align: center;background: linear-gradient(to top left, #ffffcc 0%, #003399 100%); color: white; padding: 5px; border-radius: 5px;" id="alertzone2">' + text + '</p>', lenth, button)
}

async function addstuff(stuff, time, button) {
    //document.getElementById("alertzone").style = "box-shadow: 10px 10px 5px grey;"; 
    document.getElementById("alertzone").animate([
        // keyframes
        { transform: 'scale(0)' },
        { transform: 'scale(1)' },
      ], {
        // timing options
        duration: 1000,
        iterations: 1
      }); 
    var wait = +time + +1000   
    if (button == false || button == "false") {
        //alert(button)
        document.getElementById("alertzone").innerHTML=stuff
        await sleep(wait);
        document.getElementById("alertzone").innerHTML=""
    } else {
        //alert(button)
        document.getElementById("alertzone").innerHTML=stuff
        //alert("Got here")
        document.getElementById("alertzone2").innerHTML+='<button onclick="leave()" style="bottom: 30px; position: absolute;">OK</button>'
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function leave() {
    document.getElementById("alertzone").innerHTML=""
}