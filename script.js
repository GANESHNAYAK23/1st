function colorchange() {
     var hex_num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "c", "D", "E", "F"];
     // try
     var hexcode = '';
     for (var i = 0; i < 6; i++) {
          var random = Math.floor(Math.random() * hex_num.length)
          hexcode += hex_num[random];

     }
     document.getElementById("hex-code").innerHTML = hexcode;
     document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}