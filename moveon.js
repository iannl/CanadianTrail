function moveon() {
    //alert("doing this")
    var name = document.getElementById("name").value
    document.getElementById("game").innerHTML='<name id="name2">'+name+'</name>'
    document.getElementById("game").innerHTML+='<p class="type" style="color: white;">What do you want to buy, '+name+'?</p><button onclick="buy1()">Buy Food</button><button onclick="buy2()">Buy Oxen</button><button onclick="buy3()">Buy Bullets</button><p class="type" id="money" style="color: white;">Money: $'+ money +'</p><p class="type" id="food" style="color: white;">Food (pounds): '+ food +'</p><p class="type" id="oxen" style="color: white;">Oxen: '+ oxen +'</p><p class="type" id="bullets" style="color: white;">Bullets: '+ bullets +'</p><button onclick="entergame()">Okay</button>'
}