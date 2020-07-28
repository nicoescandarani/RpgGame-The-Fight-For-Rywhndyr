let GameManager = {
    
    startGame: function(type) {
        const gameContainer = document.querySelector('.container');
        const gameInterface = document.querySelector('.interface');
        gameContainer.style.display = 'flex';
        gameInterface.classList.add('game-on');
        
        this.restetPlayer(type);
        this.preFight();
    },

    restetPlayer: function(type) {
        const WIZARD = 'Wizard';
        const ELF = 'Elf';
        const HUMAN = 'Human';
        const ORC = 'Orc';
        const SKIN_SHIFTER = 'Skin Shifter';
        const GOBLIN = 'Goblin';
        
        switch (type) {
            case 'Valdimir':
                hero = new Hero(type, WIZARD, 100, 200, 100, 50, 40);
                break;
            case 'Kiarst':
                hero = new Hero(type, ELF, 200, 50, 200, 80, 150);
                break;
        
            case 'Ortanna':
                hero = new Hero(type, HUMAN, 90, 0, 120, 120, 100);
                break;
        
            case 'Rovast':
                hero = new Hero(type, ORC, 100, 0, 90, 200, 180);
                break;
        
            case 'Terastor':
                hero = new Hero(type, HUMAN, 200, 0, 140, 90, 80);
                break;
        
            case 'Tilyar':
                hero = new Hero(type, SKIN_SHIFTER, 90, 150, 100, 180, 100);
                break;
        }

        let interface = document.querySelector('.interface');

        interface.innerHTML = '<div class= "characterCard play"> <h3 class="characterName">' + hero.type + '</h3> <div class="img-wrapper"><img src= "../Assets/' + type + '.png" alt="' + type + '"class="avatar"> </div><div> <p class="stats hero-health">Health: ' + hero.health + '</p><p class="stats">Magic: ' + hero.magic + '</p><p class="stats">Strength: ' + hero.strength + '</p><p class="stats">Agility: ' + hero.agility + '</p><p class="stats">Speed: ' + hero.speed + '</p> </div> </div>';

    },

    preFight: function() {
        
        const actions = document.querySelector('.actions');
        const arena = document.querySelector('.arena');
        
        // ! Actions.
        actions.innerHTML = '<a href="#" onClick="GameManager.setFight()" class="find">Find an enemy!</a>';
        
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
        const enemy0 = new Enemy('Vulur', ORC, 100, 0, 50, 100, 100, 'Forest', Vulur_DESCRIPTION);
        const enemy1 = new Enemy('Wndorf', GOBLIN, 200, 0, 150, 80, 150, 'CityRuins', Wndorf_DESCRIPTION);
        const enemy2 = new Enemy('Dulkar', HUMAN, 200, 0, 150, 80, 150, 'Village', Dulkar_DESCRIPTION);
        const enemy3 = new Enemy('Osgrwd', SKIN_SHIFTER, 200, 0, 150, 80, 150, 'City', Osgrwd_DESCRIPTION);
        
        enemies.push(enemy0, enemy1, enemy2, enemy3);
        
        const gameBtn = document.querySelector('.find');
        gameBtn.classList.add('game-on');
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

        actions.innerHTML = '<a href="#" class="find" onClick="HeroMoves.calcAttack()">Attack!</a>';

        enemySection.innerHTML = '<div class="characterCard play"><h3 class="characterName">' + enemy.type + '</h3> <div class="img-wrapper"><img src= "../Assets/' + enemy.type + '.png" alt="' + enemy.type + '"class="avatar"> </div><div>  <p class="stats enemy-health">Health: ' + enemy.health + '</p><p class="stats">Magic: ' + hero.magic + '</p><p class="stats">Strength: ' + enemy.strength + '</p><p class="stats">Agility: ' + enemy.agility + '</p><p class="stats">Speed: ' + enemy.speed + '</p> </div> </div>';

        document.body.style.backgroundImage = 'URL("../Assets/' + enemy.scenario + '.png")';

    }
}