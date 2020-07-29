// TODO ----> Hability to search another enemy.
// TODO ----> Count points.
// TODO ----> Parse all properties.


let GameManager = {
    
    startGame: function(type) {
        const gameContainer = document.querySelector('.container');
        const gameInterface = document.querySelector('.interface');
        gameContainer.style.display = 'flex';
        gameInterface.classList.add('game-on');
        
        this.restetPlayer(type);
        this.preFight();
    },

    restetPlayer: function(type, race) {
        
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
        interface.innerHTML = '<div class= "characterCard play"> <h3 class="characterName">' + hero.type + '</h3> <div class="img-wrapper"><img src= "../Assets/' + type + '.png" alt="' + type + '"class="avatar"> </div><div> <p class="stats hero-health">Health: ' + hero.health + '</p><p class="stats">Magic: ' + hero.magic + '</p><p class="stats">Strength: ' + hero.strength + '</p><p class="stats">Agility: ' + hero.agility + '</p><p class="stats">Speed: ' + hero.speed + '</p> </div> </div>';
        
    },

    preFight: function() {
        
        const actions = document.querySelector('.actions');
        const arena = document.querySelector('.arena');
        
        // ! Actions.
        actions.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">Find an enemy!</button><div class="pilar"></div></div>';

        

        
        
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
        const enemy0 = new Enemy('Vulur', ORC, 100, 0, 50, 60, 90, 'Forest', Vulur_DESCRIPTION);
        const enemy1 = new Enemy('Wndorf', GOBLIN, 80, 10, 120, 80, 100, 'City', Wndorf_DESCRIPTION);
        const enemy2 = new Enemy('Dulkar', HUMAN, 60, 0, 200, 40, 100, 'Village', Dulkar_DESCRIPTION);
        const enemy3 = new Enemy('Osgrwd', SKIN_SHIFTER, 160, 70, 150, 80, 150, 'CityRuins', Osgrwd_DESCRIPTION);
        
        enemies.push(enemy0, enemy1, enemy2, enemy3);
        
        const gameBtn = document.querySelector('.find');
        // gameBtn.classList.add('game-on');
        const enemyInterface = document.querySelector('.enemy');
        enemyInterface.classList.add('game-on');
        
        const actions = document.querySelector('.actions');
        const arena = document.querySelector('.arena');
        const enemySection = document.querySelector('.enemy');
        
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

        actions.innerHTML = '<div class="btn-wrapper"><div class="pilar"></div><button onClick="HeroMoves.calcAttack()" class="btn">Attack!</button><div class="pilar"></div></div>';

        

        // ! Generate Enemy card.
        enemySection.innerHTML = '<div class="characterCard play"><h3 class="characterName">' + enemy.type + '</h3> <div class="img-wrapper"><img src= "../Assets/' + enemy.type + '.png" alt="' + enemy.type + '"class="avatar"> </div><div>  <p class="stats enemy-health">Health: ' + enemy.health + '</p><p class="stats">Magic: ' + enemy.magic + '</p><p class="stats">Strength: ' + enemy.strength + '</p><p class="stats">Agility: ' + enemy.agility + '</p><p class="stats">Speed: ' + enemy.speed + '</p> </div> </div>';

        document.body.style.backgroundImage = 'URL("../Assets/' + enemy.scenario + '.png")'; // Change the scenario.
        document.querySelector('.ashes-overlay').style.display = 'none'; // Hide the snow/ashes.

    },

    reloadPage: function() {
        window.location.reload();
    }
}