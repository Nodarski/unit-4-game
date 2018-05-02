//start game
//player selects character, 4 options
var mainChar;
var currEnemy;
var luke = {
    health:100,
    attkPower:8,
    counterPower:5
}
var obiWan = {
    health:120,
    attkPower:8,
    counterPower:10
}
var theSenate = {
    health:150,
    attkPower:8,
    counterPower:20
}
var maul = {
    health:180,
    attkPower:8,
    counterPower:45
}

    $(".charSelect").on("click",".luke", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".obiWan").appendTo(".chooseEnemy");
        $(".theSenate").appendTo(".chooseEnemy");
        $(".dMaul").appendTo(".chooseEnemy");
        mainChar = luke;
        console.log(mainChar);
    });

    $(".charSelect").on("click",".obiWan", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".luke").appendTo(".chooseEnemy");
        $(".theSenate").appendTo(".chooseEnemy");
        $(".dMaul").appendTo(".chooseEnemy");
        mainChar = obiWan;
        console.log(mainChar);
    });

    $(".charSelect").on("click",".theSenate", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".obiWan").appendTo(".chooseEnemy");
        $(".luke").appendTo(".chooseEnemy");
        $(".dMaul").appendTo(".chooseEnemy");
        mainChar = theSenate;
        console.log(mainChar);
    });

    $(".charSelect").on("click",".dMaul", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".obiWan").appendTo(".chooseEnemy");
        $(".theSenate").appendTo(".chooseEnemy");
        $(".luke").appendTo(".chooseEnemy");
        mainChar = maul;
        console.log(mainChar);
    });

    
       
    
    $(".chooseEnemy").on("click",".luke", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".luke").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = luke;
        }
    });
    $(".chooseEnemy").on("click",".obiWan", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".obiWan").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = obiWan;
        }
    });
    $(".chooseEnemy").on("click",".theSenate", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".theSenate").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = theSenate;
        }
    });
    $(".chooseEnemy").on("click",".dMaul", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".dMaul").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = maul;
        }
    });






//selected character becomes main character
//remaining three become enemies

//each character has 3 attributes:health, attack power and counter attck power

//main character stays in original spot

//enemies move to new section "enemies available to attack"
//player can choose from the three enemies, which he would like to attack first
//selected enemy moves to defender posision
//after enemy is defeated, remove the character
//player chooses new enemy
//repeat until no more enemies left = game has been won 



//character mehanics
//characters health ranges from 100-180
//counter attack power between 5 and 45
//characters counter attack power does not change
//attack power starts at 8. for every chracter
//attacking causes attack power ++8

