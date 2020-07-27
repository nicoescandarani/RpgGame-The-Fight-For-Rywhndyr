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
        
        switch (type) {
            case 'Valdimir':
                hero = new Hero(type, 100, 200, 100, 50, 40);
                break;
            case 'Kiarst':
                hero = new Hero(type, 200, 50, 200, 80, 150);
                break;
        
            case 'Ortanna':
                hero = new Hero(type, 90, 0, 120, 120, 100);
                break;
        
            case 'Rovast':
                hero = new Hero(type, 100, 0, 90, 200, 180);
                break;
        
            case 'Terastor':
                hero = new Hero(type, 200, 0, 140, 90, 80);
                break;
        
            case 'Tilyar':
                hero = new Hero(type, 90, 150, 100, 180, 100);
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
        const gameBtn = document.querySelector('.find');
        gameBtn.classList.add('game-on');
        const enemyInterface = document.querySelector('.enemy');
        enemyInterface.classList.add('game-on');
        
        const actions = document.querySelector('.actions');
        const arena = document.querySelector('.arena');
        const enemySection = document.querySelector('.enemy');
        
        // ! Create the enemy.

        const enemy0 = new Enemy('Vulur', 100, 0, 50, 100, 100);
        const enemy1 = new Enemy('Wndorf', 200, 0, 150, 80, 150);
        const enemy2 = new Enemy('Dulkar', 200, 0, 150, 80, 150);
        const enemy3 = new Enemy('Ösgrwd', 200, 0, 150, 80, 150);

        const chooseEnemy = Math.floor(Math.random() * Math.floor(4));
        
        switch (chooseEnemy) {
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
            case 2:
                enemy = enemy2;
                break;
            case 3:
                enemy = enemy3;
                break;
        }
        
        actions.innerHTML = '<a href="#" class="find" onClick="HeroMoves.calcAttack()">Attack!</a>';

        enemySection.innerHTML = '<div class="characterCard play"><h3 class="characterName">' + enemy.type + '</h3> <div class="img-wrapper"><img src= "../Assets/' + enemy.type + '.png" alt="' + enemy.type + '"class="avatar"> </div><div>  <p class="stats enemy-health">Health: ' + enemy.health + '</p><p class="stats">Magic: ' + hero.magic + '</p><p class="stats">Strength: ' + enemy.strength + '</p><p class="stats">Agility: ' + enemy.agility + '</p><p class="stats">Speed: ' + enemy.speed + '</p> </div> </div>';

    }
}