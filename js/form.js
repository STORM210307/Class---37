class Form{
    constructor() {

       this.input = createInput("Name")
       this.button = createButton("play");
       this.greeting = createElement("h3");
    }

hide() {

this.greeting.hide();
this.button.hide();
this.input.hide();

}
    
display() {

var title = createElement("h2");
title.html("Car Racing Game");
title.position(400,100);


this.input.position(430,250);
this.button.position(430,300);
this.button.mousePressed(()=> {

this.input.hide();
this.button.hide();

player.name = this.input.value();
playerCount += 1;
player.index = playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html("hello"  + name);
this.greeting.position(430,250);

})

}
}