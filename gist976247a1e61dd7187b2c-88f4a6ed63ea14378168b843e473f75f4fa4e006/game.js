// create a new Phaser game on an 800x600 screen


var main = {
    // load all the images and sounds
    preload: function() {
        game.stage.backgroundColor = '#71c5cf';	  	
        game.load.image('missionbit', REPLACEME);
    },

    // set up the game
    create: function() {
        // create the player using the missionbit image and place it at (100, 245)
        this.player = game.add.sprite(100, 245, 'missionbit');
    },

    // update the state of the game
    update: function() {
  
    },
  
    // makes the player jump
    jump: function() {
  
    },
  
    addPipe: function() {  

    },

    // resest the state of the game
    restartGame: function() {
        game.state.start('default');    
    }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', main);