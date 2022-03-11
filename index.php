
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Eliana">
    <meta name="keywords" content="Eliana, ElianaSphère, ElianaSphere, intra, ecole-89">
    <meta name="description" content="ElianaSphere CoLoRMiXeR">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShowRunner</title>
    <link rel="icon" type="image/png" href="res/icon.png"/>

    <link rel="stylesheet" href="style.css?id=347">

  </head>
  <body>
    <h1 id="title" class="textemulticolore" style="left: calc(50% - 100px); top: 10%;">ShowRunner</h1>

    <div class="box">

      <input id="textget" type="text" style="text-align:center;"/><br/>
      <button onclick="buttonClick()">Click</button>


    </div>


    <div class="box" id="screen" style="left: 80%;">
      

      
    </div>

    <div class="box" style="left: 50%; top: 20%;">
      <div class="scene">
	<div class="carousel">
	  <div id="CAS0" class="carousel__cell">1</div>
	  <div id="CAS1" class="carousel__cell">2</div>
	  <div id="CAS2" class="carousel__cell">3</div>
	  <div id="CAS3" class="carousel__cell">4</div>
	  <div id="CAS4" class="carousel__cell">5</div>
	</div>
      </div>
      <p style="text-align: center;">
	<button id="previous-button">Previous</button>
	<button type="button" onclick="setFav()">Favorite !</button>
	<button id="next-button">Next</button>
      </p>
    </div>
    <script src="./apiimp.js"></script>
  </body>
</html> 

