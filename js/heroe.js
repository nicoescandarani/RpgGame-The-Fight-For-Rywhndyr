class Hero {
    constructor(type, race, health, magic, strength, agility, speed) {
        this.race = race;
        this.type = type;
        this.health = health;
        this.strength = strength;
        this.magic = magic;
        this.agility = agility;
        this.speed = speed;
    }
}

let HeroMoves = {

    calcAttack: function() {

        console.log(localStorage.getItem('countEnemies'));

        // ! Get health.
        const ENEMIES_COUNT = 4;
        const SHOW_TIME = 1500;
        const slashEnemy = document.querySelector('.slashEnemy');
        const slashHero = document.querySelector('.slashHero');
        const heroStats = document.querySelector('.characterStatsOnGameHero');
        const enemyStats = document.querySelector('.characterStatsOnGameEnemy');
        const heroHealth = document.querySelector('.hero-health');
        const enemyHealth = document.querySelector('.enemy-health');
        
        // ! Who attacks first.
        const actions = document.querySelector('.actions');
        let heroSpeed = hero.speed;
        let enemySpeed = enemy.speed;
        
        let heroAttack = function() {
            let calcBaseDamage;
    
            if (hero.magic > 0) {
                calcBaseDamage = hero.strength * hero.magic / 1000;
            } else {
                calcBaseDamage = hero.strength * hero.agility / 1000;
            }
    
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
    
            // ! Number of attacks.
            let numberOfHits = Math.floor(Math.random() * Math.floor(hero.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        
        let enemyAttack = function() {
            let calcBaseDamage;
    
            if (enemy.magic > 0) {
                calcBaseDamage = enemy.strength * enemy.magic / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
    
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
    
            // ! Number of attacks.
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        
        // ! Start attack.
        if (heroSpeed >= enemySpeed) {
            let heroAttackValues = heroAttack();
            let totalDamage = heroAttackValues[0] * heroAttackValues[1];
            enemy.health = parseInt(enemy.health - totalDamage);

            // ! Show health lost.
            enemyStats.style.backgroundColor = 'black';
            enemyStats.style.opacity = '0.5';
            enemyStats.innerHTML = '-' + parseInt(totalDamage);
            slashEnemy.style.display = 'block';

            setTimeout(() => {
                enemyStats.style.backgroundColor = 'transparent';
                enemyStats.innerHTML = '';
            }, SHOW_TIME);

            setTimeout(() => {
                slashEnemy.style.display = 'none';
            }, 300);

            if (enemy.health <= 0 && hero.health > enemy.health) {
                // ! Winner

                if (localStorage.getItem('countEnemies').length == ENEMIES_COUNT - 1) {
                    
                    // ! Save in Local Storage.
                    localStorage.setItem('enemyWin', localStorage.getItem('enemyWin') + '/' + enemy.type);
                    localStorage.setItem('countEnemies', localStorage.getItem('countEnemies') + 'x');
                    console.log(localStorage.getItem('enemyWin'));
                    console.log(localStorage.getItem('countEnemies'));
                    
                    actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">You win!!</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">Claim kingdom!</button><div class="pilar"></div></div>';
                    enemyHealth.innerHTML = 'Health: 0';
                    heroHealth.innerHTML = 'Health: ' + hero.health;


                } else {
                    
                    // ! Save in Local Storage.
                    localStorage.setItem('enemyWin', localStorage.getItem('enemyWin') + '/' + enemy.type);
                    localStorage.setItem('countEnemies', localStorage.getItem('countEnemies') + 'x');
                    console.log(localStorage.getItem('enemyWin'));
                    console.log(localStorage.getItem('countEnemies'));
                    
                    actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">You win!!</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">New enemy!</button><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.reloadPage()" class="btn">Play again!</button><div class="pilar"></div></div>';
                    enemyHealth.innerHTML = 'Health: 0';
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                    
                }
                
            } else {
                enemyHealth.innerHTML = 'Health: ' + enemy.health;

                // ! The enemy attacks.
                let enemyAttackValues = enemyAttack();
                
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                hero.health = parseInt(hero.health - totalDamage);

                // ! Show health lost.
                heroStats.style.backgroundColor = 'black';
                heroStats.style.opacity = '0.5';
                heroStats.innerHTML = '-' + parseInt(totalDamage);
                slashHero.style.display = 'block';
    
                setTimeout(() => {
                    heroStats.style.backgroundColor = 'transparent';
                    heroStats.innerHTML = '';
                }, SHOW_TIME);

                setTimeout(() => {
                    slashHero.style.display = 'none';
                }, 300);

                if (hero.health <= 0 && enemy.health > hero.health) {
                    // ! Winner
                    actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">' + enemy.type + ' wins</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.reloadPage()" class="btn">Play again!</button><div class="pilar"></div></div>';
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                    heroHealth.innerHTML = 'Health: 0';
                    

                } else {
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                }
                
            }

        } else if (enemySpeed > heroSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            hero.health = parseInt(hero.health - totalDamage);

            // ! Show health lost.
                heroStats.style.backgroundColor = 'black';
                heroStats.style.opacity = '0.5';
                heroStats.innerHTML = '-' + parseInt(totalDamage);
                slashHero.style.display = 'block';
    
                setTimeout(() => {
                    heroStats.style.backgroundColor = 'transparent';
                    heroStats.innerHTML = '';
                }, SHOW_TIME);

                setTimeout(() => {
                    slashHero.style.display = 'none';
                }, 300);

            if (hero.health <= 0 && enemy.health > hero.health) {
                // ! Winner
                actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">' + enemy.type + ' wins</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.reloadPage()" class="btn">Play again!</button><div class="pilar"></div></div>';
                heroHealth.innerHTML = 'Health: 0';
                enemyHealth.innerHTML = 'Health: ' + enemy.health;
                
            } else {
                heroHealth.innerHTML = 'Health: ' + hero.health;
                // ! The hero attacks.

                let heroAttackValues = heroAttack();
                
                let totalDamage = heroAttackValues[0] * heroAttackValues[1];
                enemy.health = parseInt(enemy.health - totalDamage);
                // ! Show health lost.
                enemyStats.style.backgroundColor = 'black';
                enemyStats.style.opacity = '0.5';
                enemyStats.innerHTML = '-' + parseInt(totalDamage);
                slashEnemy.style.display = 'block';

                setTimeout(() => {
                    enemyStats.style.backgroundColor = 'transparent';
                    enemyStats.innerHTML = '';
                }, SHOW_TIME);

                setTimeout(() => {
                    slashEnemy.style.display = 'none';
                }, 300);

                if (enemy.health <= 0 && hero.health > enemy.health) {
                    // ! Winner

                if (localStorage.getItem('countEnemies').length == ENEMIES_COUNT - 1) {
                    
                    // ! Save in Local Storage.
                    localStorage.setItem('enemyWin', localStorage.getItem('enemyWin') + '/' + enemy.type);
                    localStorage.setItem('countEnemies', localStorage.getItem('countEnemies') + 'x');
                    console.log(localStorage.getItem('enemyWin'));
                    console.log(localStorage.getItem('countEnemies'));
                    
                    actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">You win!!</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">Claim kingdom!</button><div class="pilar"></div></div>';
                    enemyHealth.innerHTML = 'Health: 0';
                    heroHealth.innerHTML = 'Health: ' + hero.health;


                } else {
                    
                    // ! Save in Local Storage.
                    localStorage.setItem('enemyWin', localStorage.getItem('enemyWin') + '/' + enemy.type);
                    localStorage.setItem('countEnemies', localStorage.getItem('countEnemies') + 'x');
                    console.log(localStorage.getItem('enemyWin'));
                    console.log(localStorage.getItem('countEnemies'));
                    
                    actions.innerHTML = '<div class="btn-wrapper msg"><div class="pilar"></div><p class="btn message">You win!!</p><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.setFight()" class="btn">New enemy!</button><div class="pilar"></div></div><div class="btn-wrapper"><div class="pilar"></div><button onClick="GameManager.reloadPage()" class="btn">Play again!</button><div class="pilar"></div></div>';
                    enemyHealth.innerHTML = 'Health: 0';
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                    
                }
                
                } else {
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
                
            }

        }

    }
    
}