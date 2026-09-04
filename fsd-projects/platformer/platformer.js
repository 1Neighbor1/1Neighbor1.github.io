$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500,620,20,200);
    createPlatform(400,500,20,20);
    createPlatform(960,500,20,20);
    createPlatform(300,500,20,20);
    createPlatform(980,420,5,600);
     createPlatform(600,480,5,200);
    createPlatform(600,620,800,200, "blue");
    createPlatform(1200,300,100,50,"red");
    createFakePlatform(980,420,100,10)
     createFakePlatform(510,620,90,20)




    // TODO 3 - Create Collectables
       createCollectable("steve", 1200, 11, 1,1);
       createCollectable("steve", 1240, 11, 1,1);
       createCollectable("steve", 1280, 11, 1,1);
        createCollectable("steve", 300, 11, 1,1);


    
    // TODO 4 - Create Cannons
      createCannon("left", 500, 700);
      createCannon("left", 650, 3000);
       createCannon("left", 600, 3000);
        createCannon("left", 550, 3000);
       createCannon("right", 500, 1200);
       createCannon("top", 100, 3020);
       createCannon("top", 150, 3040);
       createCannon("top", 200, 3060);
       createCannon("top", 250, 3080);
       createCannon("top", 300, 3100);
       createCannon("top", 350, 3120);
       createCannon("top", 400, 3140);
       createCannon("top", 450, 3160);
       createCannon("top", 500, 3180);
       createCannon("top", 1200, 910);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
