//start game
//player selects character, 4 options
var mainChar;
var currEnemy;
var divOfEnemy;
var divOfChar;
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
        divOfChar = '.luke';
        console.log(mainChar);
    });

    $(".charSelect").on("click",".obiWan", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".luke").appendTo(".chooseEnemy");
        $(".theSenate").appendTo(".chooseEnemy");
        $(".dMaul").appendTo(".chooseEnemy");
        mainChar = obiWan;
        divOfChar = '.obiWan';
        console.log(mainChar);
    });

    $(".charSelect").on("click",".theSenate", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".obiWan").appendTo(".chooseEnemy");
        $(".luke").appendTo(".chooseEnemy");
        $(".dMaul").appendTo(".chooseEnemy");
        mainChar = theSenate;
        divOfChar = '.theSenate';
        console.log(mainChar);
    });

    $(".charSelect").on("click",".dMaul", function(){
        document.getElementById("pickChar").innerHTML = "Your Character!!";
        $(".obiWan").appendTo(".chooseEnemy");
        $(".theSenate").appendTo(".chooseEnemy");
        $(".luke").appendTo(".chooseEnemy");
        mainChar = maul;
        divOfChar = 'dMaul';
        console.log(mainChar);
    });

    
       
    
    $(".chooseEnemy").on("click",".luke", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".luke").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = luke;
        divOfEnemy = '.luke';
        console.log(currEnemy);
        }
    });
    $(".chooseEnemy").on("click",".obiWan", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".obiWan").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = obiWan;
        divOfEnemy = '.obiWan';
        console.log(currEnemy);
        }
    });
    $(".chooseEnemy").on("click",".theSenate", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".theSenate").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = theSenate;
        divOfEnemy = '.theSenate';
        console.log(currEnemy);
        }
    });
    $(".chooseEnemy").on("click",".dMaul", function(){
        if( !$.trim( $('.enemyChosen').html() ).length ) {
        $(".dMaul").appendTo(".enemyChosen");
        $(".defender").text("Defender!!");
        currEnemy = maul;
        divOfEnemy = '.dMaul'
        console.log(currEnemy);
        }
    });

    $(".attack").on("click", function(){
        if (!$.trim( $('.chooseEnemy').html() ).length && !$.trim( $('.enemyChosen').html() ).length) {
            alert("Pick you character, then choose who to fight! Try to beat all three!");
            alert("ididthislastminute, oops!");
        }
        if (!$.trim( $('.enemyChosen').html() ).length && $.trim( $('.chooseEnemy').html() ).length ) {
            alert('chose an enemy please');
        }
        if ( $.trim( $('.charSelect').html() ).length &&
                 $.trim( $('.enemyChosen').html() ).length && 
                     ($.trim( $('.chooseEnemy').html() ).length || !$.trim( $('.chooseEnemy').html() ).length) ) {
            
            currEnemy.health-=mainChar.attkPower;
                if (currEnemy.health <= 0){
                    $("div").remove(divOfEnemy);
                }
            mainChar.health-=currEnemy.counterPower;
                if(mainChar.health <= 0){
                    $("div").remove(divOfChar);
                    alert('you lost, please restart the page.ty');
                }
            mainChar.attkPower+=8;

            $(".textHERE").text("health: "+currEnemy.health+"  Attack"+currEnemy.counterPower);
            console.log(mainChar.attkPower);
          
          
        }

       

    })






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

