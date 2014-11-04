// create a new Phaser game on an 800x600 screen


var main = {
    // load all the images and sounds
    preload: function() {
        game.stage.backgroundColor = '#71c5cf';	  	
        game.load.image('missionbit', "Goku_(PeePee).png");
                game.load.image('poop', "Virginia.png");
    },

    // set up the game
    create: function() {
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = game.add.sprite(50, 75 , 'missionbit');
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000;
        

        this.poops = game.add.group();
        this.poops.enableBody = true;
        this.poops.createMultiple(20, 'poop');
        
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.add(this.jump, this);
        
        game.time.events.loop(2000, this.addPoop, this);
        
    },
   
    // update the state of the game
    update: function() {
        if (this.player.inWorld == false)
            this.restartGame();


        game.physics.arcade.overlap(this.player,this.poops, this.restartGame);
    },
  
    // makes the player jump
    jump: function() {
  this.player.body.velocity.y = -400;
    },
  
    addPoop: function() { 
        var poop = this.poops.getFirstDead();
        
        poop.reset(800, 400);
        poop.body.velocity.x = -400;
        poop.checkWorldBounds = true;
        poop.outOfBoundsKill = true;

    },

    // resest the state of the game
    restartGame: function() {
        game.state.start('default');
    }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', main);
game.state.start('default')