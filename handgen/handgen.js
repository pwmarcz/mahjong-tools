var images = {};
var size = 1;

var canvas, ctx;

function ready() { drawHand(); }

function init() {
   size = document.getElementById("big").checked ? 2 : 1;
   
   var toLoad = 3+4+3*9;

   function add(name, file) {
      images[name] = new Image();      
      images[name].src = (size==2?"icons128/":"icons64/")+file+".png";
      images[name].onload = function() {
         if(--toLoad == 0)
            ready();
      }
   }

   add('haku', 'dragons/dragon-haku');
   add('hatsu', 'dragons/dragon-green');
   add('chun', 'dragons/dragon-chun');

   add('ton', 'winds/wind-east');
   add('nan', 'winds/wind-south');
   add('xia', 'winds/wind-west');
   add('pei', 'winds/wind-north');

   for (var i = 1; i <= 9; i++) {
      add(i+'m', 'man/man'+i);
      add(i+'p', 'pin/pin'+i);
      add(i+'s', 'bamboo/bamboo'+i);
   }

   canvas = document.getElementById("image");
   ctx = canvas.getContext("2d");
}

window.onload = init;

function drawHand() {
   var s = document.getElementById("descr").value;
   canvas.height = 64*size;
   canvas.width = 800*size;
   pos = -11*size;

   function addImage(name) {
      ctx.drawImage(images[name], pos, 0);
      pos += 41*size;
   }

   while (s != '') {
      while(s.length > 0 && s.charAt(0) == ' ')
         s = s.substr(1);
      if (s.length == 0)
         break;

      if (s.charAt(0) == ',') {
         pos += 15*size;
         s = s.substr(1);
         continue;
      }

      var m = /^(\d)([-/])(\d)([mps])/.exec(s);
      if (m) {
         var begin = parseInt(m[1]), end = parseInt(m[3]);
         for (var j = begin; j <= end; j++) {
            addImage(j+m[4]);
			if (m[2] == "/" && j < end)
				pos += 15*size;
		}
         s = s.substr(4);
         //console.log(s);
         continue;
      }

      var found = false;
      for (var name in images) {
         if (s.substr(0, name.length) == name) {
            s = s.substr(name.length);
            addImage(name);
            found = true;
            break;
         }
      }
      if (!found)
         s = s.substr(1);
   }

   // now resize
   var data = canvas.toDataURL();
   var img = new Image;
   img.src = data;
   img.onload = function() {
      canvas.width = pos+11*size;
      ctx.drawImage(img,0,0);
   }
}

