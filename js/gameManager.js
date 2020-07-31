// TODO ----> Hability to search another enemy.
// TODO ----> Count points.

let GameManager = {
    
    startGame: function(type, race) {
        const gameContainer = document.querySelector('.container');
        const gameInterface = document.querySelector('.interface');
        gameContainer.style.display = 'flex';
        gameInterface.classList.add('game-on');
        
        this.resetPlayer(type, race);
        this.preFight();
    },

    resetPlayer: function(type, race) {

        switch (type) {
            case 'Astrandir':
                hero = new Hero(type, race, 100, 200, 100, 50, 40);
                break;
            case 'Kiarst':
                hero = new Hero(type, race, 150, 150, 200, 80, 150);
                break;
        
            case 'Ortanna':
                hero = new Hero(type, race, 90, 0, 120, 120, 100);
                break;
        
            case 'Rovast':
                hero = new Hero(type, race, 100, 10, 90, 200, 180);
                break;
        
            case 'Terastor':
                hero = new Hero(type, race, 200, 0, 140, 90, 80);
                break;
        
            case 'Tilyar':
                hero = new Hero(type, race, 90, 20, 100, 180, 100);
                break;
        }
        
        let interface = document.querySelector('.interface');
        
        // ! Generate Hero card.
        interface.innerHTML = '<div class= "characterCard play"> <div class="cardLeft"><h3 class="characterName">' + hero.type + '</h3> <div class="img-wrapper"><img src="Assets/Slash5.gif" alt="" class="slashHero"><p class="characterStatsOnGameHero"></p><img src= "../Assets/' + type + '.png" alt="' + type + '"class="avatar"> </div></div><div class="cardRight"> <p class="stats hero-health">Health: ' + hero.health + '</p><p class="stats">Magic: ' + hero.magic + '</p><p class="stats">Strength: ' + hero.strength + '</p><p class="stats">Agility: ' + hero.agility + '</p><p class="stats statsLast">Speed: ' + hero.speed + '</p> </div> </div>';
        
    },

    preFight: function() {
        let width = window.innerWidth;
        
        const actions = document.querySelector('.actions');
        const actionsResp = document.querySelector('.actionsResp');
        const arena = document.querySelector('.arena');
        
        // ! Actions.

        if (width < 1162 && width > 768) {
            
            actionsResp.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">Find an enemy!</button><div class="pilar"></div></div>';

        } else {

            actions.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">Find an enemy!</button><div class="pilar"></div></div>';

        }
        
    },

    setFight: function() {
        // ! Create the enemy.
        const enemies = [];
        const WIZARD = 'Wizard';
        const ELF = 'Elf';
        const HUMAN = 'Human';
        const ORC = 'Orc';
        const SKIN_SHIFTER = 'Skin Shifter';
        const GOBLIN = 'Goblin';
        const Vulur_DESCRIPTION = 'Vulur description.';
        const Wndorf_DESCRIPTION = 'Wndorf description.';
        const Dulkar_DESCRIPTION = 'Dulkar description.';
        const Osgrwd_DESCRIPTION = 'Osgrwd description.';
        const VULUR_STORY = 'You encountered Vulur the Orc. He was born as the king of the misty forest, land of true giants. His brother double crossed him to get the throne, though he defended himself and lost his sight. With his incredible hearing he attacked a murdered his brother and his hole kingdom with him. Now he lives there, alone, bind and with eternal rage and sadness.';
        const WNDORF_STORY = 'You encountered Wndorf the Goblin. Son of Vlundvorst the smith. Only child, his mother died in labor and his father threw him away with only minutes of life. His strength let him survirve, but at what cost? Having no-one and nothing, hi survived aeting fish in a river. When he was 5 years old he joined the City army. Years later, at the age of only 15 he became the greatest general the the city ever saw. If you desire to conquer all of the kingdoms you´ll have to defeat him.';
        const DULKAR_STORY = 'You encountered Dulkar. A human drowned in corruption an politics. By himself, he is not strong at all, but with his connections he can buy out any mercenary in all the lands. Hi is a misterious man, born and raised as a lord of Scrutastyr villages. His power drove him crazy and started executing every one that didn´t like him. Now he is known as the tirant of the villages. Kill him and of the Scrutastyr lands will be yours.';
        const OSGRWD_STORY = 'You encountered Osgrwd. A skin-shifter from the kingdom of Tryhsdvys. Born in the shape of a normal human. He was a very stable man. He built a clothing empire from srcatch. At age of 24 he married Asgrytd. One year later he, as the locals tell the story, just snapped. Maybe it was the preassure of maintaining his buissnes. He turned red and grew three horns in his head. One in his left side and, two in the right. That was the first time his shifted. With one movement of his right arm he turned ten houses on fire and reduced them to ashes. With the other burned half of the kingdom. And with both he finished it off. When he saw his wife turned into bare bone he ripped his thrid horn out and run. Now he wonders outside the kingdom in solitud, sadness adn darkness. You will have to kill him to ensure that his power won put at risk your reign.';
        const enemy0 = new Enemy('Vulur', ORC, 100, 0, 50, 60, 90, 'Forest', VULUR_STORY);
        const enemy1 = new Enemy('Wndorf', GOBLIN, 80, 10, 120, 80, 100, 'City', WNDORF_STORY);
        const enemy2 = new Enemy('Dulkar', HUMAN, 60, 0, 200, 40, 100, 'Village', DULKAR_STORY);
        const enemy3 = new Enemy('Osgrwd', SKIN_SHIFTER, 160, 70, 150, 80, 150, 'CityRuins', OSGRWD_STORY);
        const gameBtn = document.querySelector('.find');
        const enemyInterface = document.querySelector('.enemy');
        const actions = document.querySelector('.actions');
        const actionsResp = document.querySelector('.actionsResp');
        const arena = document.querySelector('.arena');
        const enemySection = document.querySelector('.enemy');
        const currentStory = document.querySelector('.currentStory');
        let width = window.innerWidth;
        
        enemies.push(enemy0, enemy1, enemy2, enemy3);
        
        enemyInterface.classList.add('game-on');
        
        const chooseEnemy = Math.floor(Math.random() * Math.floor(enemies.length));
        
        switch (chooseEnemy) {
            case 0:
                enemy = enemies[0];
                break;
            case 1:
                enemy = enemies[1];
                break;
            case 2:
                enemy = enemies[2];
                break;
            case 3:
                enemy = enemies[3];
                break;
        }

        // ! Set the scenario.

        currentStory.style.display = 'block';
        currentStory.innerHTML = enemy.description;
        document.body.style.backgroundImage = 'URL("../Assets/' + enemy.scenario + '.png")'; // Change the scenario.
        document.querySelector('.ashes-overlay').style.display = 'none'; // Hide the snow/ashes.

        // ! Actions.

        if (width < 1162 && width > 768) {

            actionsResp.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="HeroMoves.calcAttack()" class="btn">Attack!</button><div class="pilar"></div></div>';
            

        } else {

            actions.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="HeroMoves.calcAttack()" class="btn">Attack!</button><div class="pilar"></div></div>';
            

        }
        // ! Generate Enemy card.
        enemySection.innerHTML = '<div class= "characterCard play"> <div class="cardLeft"><h3 class="characterName">' + enemy.type + '</h3> <div class="img-wrapper"><img src="Assets/Slash5.gif" alt="" class="slashEnemy"><p class="characterStatsOnGameEnemy"></p><img src= "../Assets/' + enemy.type + '.png" alt="' + enemy.type + '"class="avatar"> </div></div><div class="cardRight"> <p class="stats enemy-health">Health: ' + enemy.health + '</p><p class="stats">Magic: ' + enemy.magic + '</p><p class="stats">Strength: ' + enemy.strength + '</p><p class="stats">Agility: ' + enemy.agility + '</p><p class="stats statsLast">Speed: ' + enemy.speed + '</p> </div> </div>';

    },

    reloadPage: function() {
        window.location.reload();
    }

}