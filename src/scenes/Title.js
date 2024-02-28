class Title extends Phaser.Scene {
    constructor() {
        super("titleScene")
    }

    preload() {
        // load assets
        this.load.path = "./assets/"

        // load JSON (ie dialog text)
        this.load.json('dialog', 'json/dialog.json')

        // load images
        this.load.image('dialogbox', 'img/dialogbox.png')
        this.load.image('homer', 'img/homer.png')
        this.load.image('minerva', 'img/minerva.png')
        this.load.image('jove', 'img/jove.png')
        this.load.image('neptune', 'img/neptune.png')
        // adding character https://duckduckgo.com/?t=ffab&q=mimikyu&atb=v397-1&iax=images&ia=images&iaf=type%3Atransparent&iai=https%3A%2F%2Forig00.deviantart.net%2F387a%2Ff%2F2016%2F303%2Fe%2F4%2Fe4683ebd2fad137db98eb78fe0474361-damqp9q.png
        this.load.image('mimikyu', 'img/mimikyu.png')

        // load bitmap font
        this.load.bitmapFont('gem_font', 'font/gem.png', 'font/gem.xml')
        // font we made in class
        // font taken from https://www.dafont.com/lemon-milk-2.font
        this.load.bitmapFont('lemon-milk_font', 'font/LemonMilkEdited.png', 'font/LemonMilkEdited.xml')
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'lemon-milk_font', 'THE ODYSSEY', 64).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'lemon-milk_font', 'Press SPACE to start', 32).setOrigin(0.5)

        // create input
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("talkingScene")
        }
    }
}