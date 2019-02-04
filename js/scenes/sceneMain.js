class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
    	this.load.image("road", "images/road.jpg");
    	this.load.image("line", "images/line.png");
        this.load.spritesheet("cars", "images/cars.png", {frameWidth: 60, frameHeight: 126});
        
    	this.load.image("pcar1", "images/pcar1.png");
    	this.load.image("pcar2", "images/pcar2.png");
    	this.load.image("cone", "images/cone.png");
        this.load.image("barrier", "images/barrier.png");
        
        this.load.image("toggleBack", "images/ui/toggles/1.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");

    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        //
        //
        this.sb = new ScoreBox({scene: this});
        this.sb.x = game.config.width - 60;
        this.sb.y = 50;

        model.score = 100;

        this.road = new Road({scene: this});
        this.road.x = game.config.width / 2;
        this.road.makeLines();

        this.alignGrid = new AlignGrid({scene: this, rows: 5, cols: 5});
        this.alignGrid.showNumber();
        this.alignGrid.placeAtIndex(4, this.sb);

        let soundButtons = new SoundButtons({scene: this});
    }
    update() {
        //constant running loop
        this.road.moveLines();
        this.road.moveObject();
    }
}