
var grupy = [
   [{pl: "Proste układy", en: "Trivial patterns"},
    [["Pin Fu", "平和",
      {pl: "Cztery Chi", en: "Four Chi"}, 5]],
    [["Menzen", "門前清",
      {pl: "Zamknięty regularny układ", en: "Concealed regular hand"}, 5]],
    [["Tan Yao", "断么九",
      {pl: "Bez kamieni skrajnych i specjalnych",
       en: "No terminals or honors"}, 5]]
      ],

   [{pl: "Kamienie z jednej rodziny",
     en: "One-suit patterns"},
    [["Hon Itsu", "混一",
      {pl: "Kamienie z jednej rodziny i specjalne",
       en: "Tiles in one suit + honor tiles"}, 40],
     ["Chin Itsu", "清一",
      {pl: "Kamienie wyłącznie z jednej rodziny",
       en: "Tiles in one suit"}, 80]],

    [[{pl: "Chuuren Poutou /%Dziewięć Bram",
       en: "Chuuren Poutou /%Nine Gates"},
      "九蓮寶燈",
      {pl: "1112345678999 z jednej rodziny na ręce i wygrana na powtórce",
       en: "1112345678999 in one suit in hand + win on one of these"}, 480]
      ]],

   [{pl: "Kamienie specjalne", en: "Honor tiles"},
    [["Fan Pai", "番牌",
      {pl: "Pon smoków lub wiatru gracza",
       en: "Pon of dragons or player's wind"}, 10]],

    [[{pl: "Shou San Gen%(małe trzy smoki)",
       en: "Shou San Gen%(small three dragons)"}, "小三元",
      {pl: "Dwa Pon smoków i para smoków",
       en: "Two Pon of dragons + pair of dragons"}, 40],
     [{pl: "Dai San Gen%(wielkie trzy smoki)",
       en: "Dai San Gen%(great three dragons)"}, "大三元",
      {pl: "Trzy Pon smoków",
       en: "Three Pon of dragons"}, 130]],

    [[{pl: "Shou San Shii%(małe trzy wiatry)",
       en: "Shou San Shii%(small three winds)"}, "小三喜",
      {pl: "Dwa Pon wiatrów i para wiatrów",
       en: "Two Pon of winds + pair of winds"}, 30],
     [{pl: "Dai San Shii%(wielkie trzy wiatry)",
       en: "Dai San Shii%(great three winds)"}, "大三喜",
      {pl: "Trzy Pon wiatrów",
       en: "Three Pon of winds"}, 120],
     [{pl: "Shou Suu Shii%(małe cztery wiatry)",
       en: "Shou Suu Shii%(small fo!ur winds)"}, "小四喜",
      {pl: "Trzy Pon wiatrów i para wiatrów",
       en: "Three Pon of winds + pair of winds"}, 320],
     [{pl: "Dai Suu Shii%(wielkie cztery wiatry)",
       en: "Dai Suu Shii%(great fo!ur winds)"}, "大四喜",
      {pl: "Cztery Pon wiatrów",
       en: "Four Pon of winds"}, 400]],

    [["Tsuu Ii Sou", "字一色",
      {pl: "Same kamienie specjalne", en: "All honors"}, 320]
    ]],

   ["Pon/Kan",
    [["Toi Toi Hou", "対々和", {pl: "Cztery Pon", en: "Four Pon"}, 30]],

    [["Ryan An Kou", "二暗刻", {pl: "Dwa zamknięte Pon",
                                en: "Two concealed Pon"}, 5],
     ["San An Kou", "三暗刻", {pl: "Trzy zamknięte Pon",
                               en: "Three concealed Pon"}, 30],
     ["Suu An Kou", "四暗刻", {pl: "Cztery zamknięte Pon",
                               en: "Four concealed Pon"}, 125]],

    [["Ii Kantsu", "一槓子", {pl: "Jeden Kan",
                              en: "One Kan"}, 5],
     ["Ryan Kantsu", "二槓子", {pl: "Dwa Kan",
                                en: "Two Kan"}, 20],
     ["San Kantsu", "三槓子", {pl: "Trzy Kan",
                               en: "Three Kan"}, 120],
     ["Suu Kantsu", "四槓子", {pl: "Cztery Kan",
                               en: "Four Kan"}, 480]]
      ],

    [{pl: "Identyczne grupy",
      en: "Identical sets"},
     [["Ii Pei Kou", "一盃口", 
	   {pl: "Jedna para identycznych Chi",
        en: "Pair of identical Chi"}, 10],
      ["Ryan Pei Kou", "二盃口", 
	   {pl: "Dwie pary identycznych Chi",
        en: "Two pairs of identical Chi"}, 60],
      ["Isshoku San Doujun", "一色三同順", 
	   {pl: "Trzy identyczne Chi",
        en: "Three identical Chi"}, 120],
      ["Isshoku Suu Doujun", "一色四同順", 
	   {pl: "Cztery identyczne Chi",
        en: "Four identical Chi"}, 480]]
    ],

   [{pl: "Podobne grupy",
     en: "Similar sets"},
    [["Sanshoku Doujun", "三色同順",
      {pl: "Takie same Chi w każdej rodzinie",
       en: "Same Chi in every suit"}, 35]],

    [["Sanshoku Shou Doukou", "三色小同刻",
      {pl: "Dwa takie same Pon i para",
       en: "Two Pon and a pair of the same number"}, 30],
     ["Sanshoku Doukou", "三色同刻",
      {pl: "Takie same Pon w każdej rodzinie",
       en: "Three Pon of the same number"}, 120]]
      ],

   [{pl: "Kolejne grupy",
     en: "Consecutive sets"},
    [["Ikki Tsuukan", "一気通貫",
      {pl: "Grupy 123, 456, 789 w jednej rodzinie",
       en: "123, 456, 789 sets in one suit"}, 40]],

    [["San Ren Kou", "三連刻",
      {pl: "Trzy kolejne Pon w jednej rodzinie",
       en: "Three consecutive Pon in one suit"}, 100],
     ["Suu Ren Kou", "四連刻",
      {pl: "Cztery kolejne Pon w jednej rodzinie",
       en: "Four consecutive Pon in one suit"}, 200]
       ]],

    [{pl: "Kamienie skrajne",
      en: "Terminals"},
    [["Chanta", "全帯么",
      {pl: "Wszystkie grupy zawierają 1, 9 lub kamień specjalny",
       en: "Every group includes 1, 9 or an honor tile"}, 40],
     ["Jun Chan", "純全帯么",
      {pl: "Wszystkie grupy zawierają 1 lub 9",
       en: "Every group includes 1 or 9"}, 50],
     ["Honroutou", "混老頭",
      {pl: "Wszystkie grupy składają się z 1, 9 i kamieni specjalnych",
       en: "Hand consists entirely of 1, 9 and honors"}, 100],
     ["Chinroutou", "清老頭",
      {pl: "Wszystkie grupy składają się z 1 lub 9",
       en: "Hand consists entirely of 1 and 9"}, 400]
       ]],

    [{pl: "Nieregularne układy",
      en: "Irregular hands"},
    [["Chii Toitsu /%Niko Niko", "七対子",
      {pl: "Siedem par (mogą się powtarzać)",
       en: "Seven pairs (four identical tiles count as two pairs)"}, 30]],
     [[{pl: "Kokushi Musou /%Trzynaście Sierot",
        en: "Kokushi Musou /%Thirteen Orphans"}, "国士無双",
       {pl: "Wszystkie możliwe kamienie skrajne i specjalne + powtórka",
        en: "All possible terminals and honors + a duplicate"}, 160]
       ]],

    [{pl: "Bonusy",
      en: "Incidental bonuses"},
    [[{pl: "Haitei (dno morza) /%Houtei (dno rzeki)",
       en: "Haitei (seabed) /%Houtei (riverbed)"}, "海底撈月 /%河底撈魚",
      {pl: "Wygrana na ostatnim dobranym / wyrzuconym kamieniu",
       en: "Win on a final draw / final discard"}, 10]],
    [["Rinshan Kaihou", "嶺上開花",
      {pl: "Wygrana na kamieniu dobranym z martwego muru przy Kan",
       en: "Win on a dead wall draw (after declaring a Kan)"}, 10]],
    [["Chan Kan", "搶槓",
      {pl: "Wygrana, gdy inny gracz ulepsza Pon do Kan",
       en: "Win on a tile used to upgrade Pon to Kan"}, 10]],

    [["Tenhou", "天和",
      {pl: "Wygrana Wschodu po rozdaniu kamieni",
       en: "East winning with his initial hand"}, 155],       
     /*["Chiihou", "地和",
      {pl: "Wygrana nie-Wschodu przez dobranie kamienia w pierwszej kolejce",
       en: "Non-East winning on a draw in the first turn"}, 155]*/
     ["Chiihou", "地和", /* 人和 */
      {pl: "Wygrana przez Ron na pierwszym kamieniu wyrzuconym przez Wschód",
       en: "Non-East winning on East's first discard"}, 155]
       ]],

    [{pl: "Inne wartości",
      en: "Other values"},
    [["", "",
      {pl: "Początkowa ilość punktów dla każdego gracza",
       en: "Initial points per player"}, 1000]],
    [["", "",
      {pl: "Wartość, do której ogranicza się sumę punktów za układ",
       en: "Hand value limit"}, 320]],
    [["", "",
      {pl: "Wartość, powyżej której wrzucający płaci za Ron",
       en: "Ron limit (the responsible player pays for Ron above this value)"}, 25]]
    ]
   ];

var use_jp = true;
var use_hepburn = true;
var mnoznik = 1;
var lang = "pl";

function hepburn(s) {
   return s.replace(/ou/g, "ō")
      .replace(/uu/g, "ū");
}

function localize(s) {
   if (typeof s == "string")
      return s;
   else
      return s[lang];
}


function generate() {
   var output = "";

   output += "<h1>Zung Jung</h1>";

   output += "<p>";
   if (mnoznik != 1)
      output += localize({pl: "Oryginalne wartości pomnożone przez "+mnoznik+". ",
                          en: "Original values multiplied by "+mnoznik+". "});
   output += localize({pl: "Pogrupowane układy (np. Hon Itsu i Chin Itsu) wykluczają się nawzajem.",
                       en: "Patterns in the same group (e.g. Hon Itsu and Chin Itsu) are mutually exclusive."});
   output += "</p>\n\n";

   output += "<table>\n";
   /*output += "<tr class='title'>"+
      "<td colspan=2>"+localize({pl:"Nazwa", en: "Name"})+"</td>"+
      "<td>"+localize({pl:"Opis", en: "Description"})+"</td>"+
      "<td class='punkty'>"+localize({pl:"Wartość", en: "Value"})+"</td>"+
      "</tr>\n";*/
   for (var i = 0; i < grupy.length; ++i)
   {
      var g = grupy[i];
      var tytul = (i+1) + ". " + localize(g[0]);
      output += "<tr class='subtitle'>" +
         "<td colspan=5>"+
         tytul+"</td>"+
         "</tr>\n";

      for (var j = 1; j < g.length; ++j)
      {
         var c = g[j];
         for (var k = 0; k < c.length; ++k)
         {
            var o = c[k];
            var nazwa = localize(o[0]);
            var nazwa_jp = localize(o[1]);
            var opis = localize(o[2]);
            var punkty = o[3];

            nazwa = nazwa.replace(/%/g, "<br>");
            nazwa_jp = nazwa_jp.replace(/%/g, "<br>");
            if (use_hepburn)
               nazwa = hepburn(nazwa);
            nazwa = nazwa.replace(/\!/g, "");
            punkty *= mnoznik;

            output += "<tr"+(k == 0 ? " class='first'" : "")+">"+
               (use_jp ?
                ("<td>"+nazwa+"</td>"+
                 "<td>"+nazwa_jp+"</td>") :
                ("<td colspan=2>"+nazwa+"</td>"))+
               "<td class='opis'>"+opis+"</td>"+
               "<td class='punkty'>"+punkty+"</td>"+
               "</tr>\n";
         }
      }
   }

   output += "</table>";
   return output;
}

function redraw() {
   lang = document.getElementById("lang").value;
   use_jp = document.getElementById("use_jp").checked;
   use_hepburn = document.getElementById("use_hepburn").checked;
   mnoznik = parseFloat(document.getElementById("multiplier").value);
   document.getElementById("content").innerHTML = generate();
}

window.onload = function() {
   //document.getElementById("redraw").onclick = redraw;
   redraw();
}
