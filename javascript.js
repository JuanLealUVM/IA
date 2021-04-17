function grammysQuiz(){
  var grade = 0
  var question= prompt("Who is Ariana Grande´s designer? Giambattista Valli or Donatella Versace");
  if(question ==="Giambattista Valli"){
    grade = grade+1
    alert("Good Job! Giambattista Valli was indeed the designer that made Ariana Grande´s dress");
    }else{
    alert("Try Again! Giambattista Valli was the designer that that made Ariana Grande´s dress");
  }
  var question= prompt("What brand of crystals was Lizzo´s gown covered with? Cartier or Swarovski");
  if(question ==="Swarovski"){
    grade = grade+1
    alert("Very Good! Lizzo´s gown was covered in Swarovski crystals!");
    }else{
    alert("Actually, Lizzo´s gown was covered in Swarovski crystals");
  }
  var question= prompt("What color was Demi Lovato´s dress? White or Pearl");
  if(question ==="White"){
    grade = grade+1
    alert("Genius! Demi Lovato´s dress was white!");
    }else{
    alert("Sorry, but pearl is not the color of Demi Lovato´s dress");
  }
  var question= prompt("Who was the designer of Gwen Stefani's dress? Louis Vuitton or Dolce & Gabbana");
  if(question ==="Dolce & Gabbana"){
    grade = grade+1
    alert("Correct! Dolce & Gabbana was designer for Gwen Stefani´s dress");
    }else{
    alert("Incorrect!, Dolce & Gabbana was designer for Gwen Stefani´s dress");
  }
  var question= prompt("Who is the artist that has won the most Grammy´s in history? Michael Jackson or Georg Solti");
  if(question ==="Georg Solti"){
    grade = grade+1
    alert("Excellent! Georg Salti is the artist that was won the most Grammy´s in history");
    }else{
    alert("FYI!, Georg Salti is the artist that was won the most Grammy´s in history");
}
alert("You got "+grade+" correct answers ");
}

function newImage(){
  var image= document.getElementById("myImage");
  if (image.src.match("assets/arianagrande.png")){
    image.src="assets/arianadesign.jpg";
  }else{
    image.src="assets/arianagrande.png";
  }
  }
function mendes(){
    var image= document.getElementById("shawnMendes");
    if (image.src.match("assets/shawnmendes.png")){
      image.src="assets/shawndesign.jpg";
    }else{
      image.src="assets/shawnmendes.png";
    }
    }
function lovato(){
      var image= document.getElementById("demiLovato");
      if (image.src.match("assets/demilovato.png")){
        image.src="assets/demidesign.jpg";
      }else{
        image.src="assets/demilovato.png";
      }
      }
function stefani(){
        var image= document.getElementById("gwenStefani");
        if (image.src.match("assets/gwenstefani.png")){
          image.src="assets/gwendesign.jpg";
        }else{
          image.src="assets/gwenstefani.png";
        }
        }
function bebe(){
          var image= document.getElementById("bebeRexha");
          if (image.src.match("assets/beberexha.png")){
            image.src="assets/bebedesign.jpg";
          }else{
            image.src="assets/beberexha.png";
          }
          }
function lizzo(){
                      var image= document.getElementById("Lizzo");
                      if (image.src.match("assets/lizzo.png")){
                        image.src="assets/lizzodesign.jpg";
                      }else{
                        image.src="assets/lizzo.png";
                      }
                      }

function metgalaQuiz(){
var grade = 0
var question= prompt("How many times did Lady Gaga changed outfits? 5 times or 4 times");
if(question ==="4 times"){
  grade = grade+1
  alert("Good Job! Lady Gaga changed outfits 4 times in the Red Carpet");
  }else{
  alert("Oops! Lady Gaga changed outfits only 4 times");
}
var question= prompt("Can you mention who was co-host with Harry Styles at the Met Gala 2019? Jared Leto or Lady Gaga");
if(question ==="Lady Gaga"){
  grade = grade+1
  alert("Very Good! Lady Gaga was co-host along with Harry Styles!");
  }else{
  alert("Sorry, it was Lady Gaga who co-host along with Harry Styles!");
}
var question= prompt("What designer where the Jenner Sisters wearing? Versace or Vuitton");
if(question ==="Versace"){
  grade = grade+1
  alert("Genius! Donatella Versace was the designer.");
  }else{
  alert("Try Again! Donatella Versace was the designer. ");
}
var question= prompt("Who is no longer invited to attend the Met Gala? Zayn Malik or  Armie Hammer");
if(question ==="Zayn Malik"){
  grade = grade+1
  alert("Correct! After the 2016 Met Gala, Zayn made some negative comments about this event.");
  }else{
  alert("Incorrect!, Zayn Malik is the one who is no longer invited.");
}
var question= prompt("Where is the Met Gala always located ? New York or Los Angeles");
if(question ==="New York"){
  grade = grade+1
  alert("Excellent! The Met Gala is held in the Metropolitan Museum of Arts's Costume in New York");
  }else{
  alert("Wrong!, The Met Gala is held in the Metropolitan Museum of Arts's Costume in New York");
}
alert("You got "+grade+" correct answers ");
}

function styles(){
  var image= document.getElementById("harryStyles");
  if (image.src.match("assets/harrystyles.jpg")){
    image.src="assets/harrydesign.jpg";
  }else{
    image.src="assets/harrystyles.jpg";
  }
  }
function gaga(){
    var image= document.getElementById("ladyGaga");
    if (image.src.match("assets/ladygaga.jpg")){
      image.src="assets/gagadesign.jpg";
    }else{
      image.src="assets/ladygaga.jpg";
    }
    }
function depp(){
      var image= document.getElementById("roseDepp");
      if (image.src.match("assets/lilyrose.jpg")){
        image.src="assets/lilydesign.jpg";
      }else{
        image.src="assets/lilyrose.jpg";
      }
      }
function jenner(){
        var image= document.getElementById("jennerSisters");
        if (image.src.match("assets/jennersisters.png")){
          image.src="assets/jennersdesign.jpg";
        }else{
          image.src="assets/jennersisters.png";
        }
        }
function leto(){
          var image= document.getElementById("jaredLeto");
          if (image.src.match("assets/jaredleto.jpg")){
            image.src="assets/jareddesign.jpg";
          }else{
            image.src="assets/jaredleto.jpg";
          }
          }
function petsch(){
          var image= document.getElementById("madelainePetsch");
          if (image.src.match("assets/madelainepetsch.png")){
          image.src="assets/madelainedesign.jpg";
          }else{
          image.src="assets/madelainepetsch.png";
          }
          }
function ratajkowski(){
          var image= document.getElementById("emilyRatajkowski");
          if (image.src.match("assets/emilyratajkowski.png")){
          image.src="assets/emilydesign.jpg";
          }else{
          image.src="assets/emilyratajkowski.png";
          }
          }
function miller(){
          var image= document.getElementById("ezraMiller");
          if (image.src.match("assets/ezramiller.jpg")){
          image.src="assets/ezradesign.jpg";
          }else{
          image.src="assets/ezramiller.jpg";
          }
          }
function urie(){
          var image= document.getElementById("michaelUrie");
          if (image.src.match("assets/michaelurie.jpg")){
          image.src="assets/michaeldesign.jpg";
          }else{
          image.src="assets/michaelurie.jpg";
          }
          }

function oscarsQuiz(){
var grade = 0
var question= prompt("Where are the Academy Awards (Oscar´s) held? Manhattan or Beverly Hills");
if(question ==="Beverly Hills"){
  grade = grade+1
  alert("Very Good! The Oscar´s are held in Beverly Hills, California");
  }else{
  alert("Sorry, Manhattan is not the correct location for the Oscar´s");
}
var question= prompt("Can you name what designer was Saoirse Ronan wearing? Gucci or Coco Channel");
if(question ==="Gucci"){
  grade = grade+1
  alert("Good Job! Saoirse Ronan wore a black dress from Gucci!");
  }else{
  alert("Oops! it seems that Saoirse Ronan was wearing a Gucci dress");
}
var question= prompt("Who was the designer that dressed Brie Larson? Heidi Slimane or Alexander McQueen");
if(question ==="Heidi Slimane"){
  grade = grade+1
  alert("Genius! Heidi Slimane was the designer.");
  }else{
  alert("Try Again! Heidi Slimane was the designer. ");
}
var question= prompt("Who has been the actress that has won the most Oscar´s? Taylor Swift or Katherine Hepburn");
if(question ==="Katherine Hepburn"){
  grade = grade+1
  alert("Correct! Katherine Hepburn who has won 4 Oscar´s throughout her acting career.");
  }else{
  alert("Incorrect! Taylor Swift is a singer, she hasn´t been nominated for the Academy Awards.");
}
var question= prompt("What tone of blue/green color was Florence Pugh´s dress? Teal or Turquoise");
if(question ==="Turquoise"){
  grade = grade+1
  alert("Excellent! Florence Pugh´s dress was Turquoise");
  }else{
  alert("Wrong! Florence Pugh´s dress was Turquoise");
}
alert("You got "+grade+" correct answers ");
}

function pugh(){
  var image= document.getElementById("florencePugh");
  if (image.src.match("assets/florencepugh.jpg")){
    image.src="assets/florencedesign.jpg";
  }else{
    image.src="assets/florencepugh.jpg";
  }
  }
function johanson(){
    var image= document.getElementById("scarlettJohanson");
    if (image.src.match("assets/scarlettjohanson.jpg")){
      image.src="assets/scarlettdesign.jpg";
    }else{
      image.src="assets/scarlettjohanson.jpg";
    }
    }
function larson(){
      var image= document.getElementById("brieLarson");
      if (image.src.match("assets/brielarson.jpg")){
        image.src="assets/briedesign.jpg";
      }else{
        image.src="assets/brielarson.jpg";
      }
      }
function ronan(){
        var image= document.getElementById("soirseRonan");
        if (image.src.match("assets/saoirseronan.png")){
          image.src="assets/saoirsedesign.jpg";
        }else{
          image.src="assets/saoirseronan.png";
        }
        }
function davis(){
          var image= document.getElementById("geenaDavis");
          if (image.src.match("assets/geenadavis.jpg")){
            image.src="assets/geenadesign.jpg";
          }else{
            image.src="assets/geenadavis.jpg";
          }
          }
function portman(){
          var image= document.getElementById("nataliePortman");
          if (image.src.match("assets/natalieportman.jpg")){
          image.src="assets/nataliedesign.jpg";
          }else{
          image.src="assets/natalieportman.jpg";
          }
          }
function sims(){
          var image= document.getElementById("mollySims");
          if (image.src.match("assets/mollysims.jpg")){
          image.src="assets/mollydesign.jpg";
          }else{
          image.src="assets/mollysims.jpg";
          }
          }
