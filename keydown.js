function keydownHandler(e) {    
    if (e.keyCode == 13 && waiting == true) {  // 13 is the enter key
        moveon()
    }
}