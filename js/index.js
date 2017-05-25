$(document).ready(function() {
  var bgArray = [
    "http://www.bombeiros.pt/wp-content/uploads/2015/01/Paraquedistas-III.jpg",
    "http://www.operacional.pt/wp-content/uploads/2009/05/7-etp-23-maio-2009-418-copy.jpg",
    "https://static.noticiasaominuto.com/stockimages/1370x587/naom_5582ba425efb8.jpg",
    "https://i1.wp.com/www.cavok.com.br/blog/wp-content/uploads/2016/06/i16622155300118222.jpg",
    "https://i.ytimg.com/vi/uDghzEihRis/maxresdefault.jpg",
    "https://i.ytimg.com/vi/00MMKyyg2Vg/hqdefault.jpg",
    "https://farm2.staticflickr.com/1529/24238168105_4da78bf3fd_b.jpg",
    "https://farm8.staticflickr.com/7358/12844056795_448afe8f73_b.jpg",
    "https://i.ytimg.com/vi/5JILcVaGeI8/hqdefault.jpg",
    "https://i.ytimg.com/vi/Tg0En-mTIZU/hqdefault.jpg",
    "https://i.ytimg.com/vi/VxPZPbAxcio/maxresdefault.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/08/91/07/0891074044119a5333b9b1a1ebf6a661.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/66/f1/65/66f165903560bf23daad9ed815f75820.jpg",
    "http://www.ffl.info/images/recruit2004/768.jpg",
    "http://www.legion-etrangere.com/images/fond_ecran/29_alios_marignane.jpg",
    "http://www.legion-etrangere.com/images/fond_ecran/01.jpg",
    "https://i.ytimg.com/vi/Sf4dGLkcZvo/maxresdefault.jpg"
  ];
  var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

  $("body").css("background", "url(" + bg + ")");

  var quotes = [
    "Only win who believes in victory.",
    "Sweat saves blood.",
    "Is faced with the obstacle, the man discovers himself.",
    "If it is possible it is done, if it is impossible it will be done.",
    "Audacity, prudence ... Path to success.",
    "All paratroopers are volunteers. Not all volunteers get the green beret.",
    "Hard instruction ... Easy combat.",
    "That never by losers be know.",
    "Let burn in you de flame of being Airfield Precursor.",
    "Insurance and confident. Always!",
    "We may not come back, but we go.",
    "What are we? ... Friends!  What do we want? ... Dawn!  What do we love? ... The danger!  What do we fear? ... Nothing! In position! ... Now!"
  ];

  var maxQuotes = quotes.length;

  function random() {
    var rnd = Math.floor(Math.random() * maxQuotes);
    $("#quote").text(quotes[rnd]);
    // document.getElementById("quote").innerHTML = quotes[rnd];
    $("a#tw").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        quotes[rnd]
    );
  }

  random();

  $("#btn-qt").click(function() {
    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    $("body").css({ "background-image": "url(" + bg + ")" });
    random();
  });
});
