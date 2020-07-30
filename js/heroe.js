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

        // ! Get health.
        const heroHealth = document.querySelector('.hero-health');
        const enemyHealth = document.querySelector('.enemy-health');

        // TODO Fix this. ---------------------------------------------->
        let pointsCounter = localStorage.getItem('points');
        console.log(pointsCounter);
        
        // ! Who attacks first.
        const actions = document.querySelector('.actions');
        let heroSpeed = hero.speed;
        let enemySpeed = enemy.speed;

        // TODO Modulrarize this function so that I can use it with both the Hero and the Enemy.
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

        // TODO Modulrarize this function so that I can use it with both the Hero and the Enemy.
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

        // TODO Maybe separate the attacks  from the defenses with a button.
        // TODO Also show the attack and defense stats somewhere.

        // ! Start attack.
        if (heroSpeed >= enemySpeed) {
            let heroAttackValues = heroAttack();
            let totalDamage = heroAttackValues[0] * heroAttackValues[1];
            enemy.health = Math.trunc(enemy.health - totalDamage); // TODO Parse it properly. -------------------------->
            alert("You hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

            if (enemy.health <= 0 && hero.health > enemy.health) {
                // ! Winner
                actions.innerHTML = '<p class="find">You win!!</p><p class="reload" onclick="GameManager.setFight()">Next enemy!</p><p class="reload" onclick="GameManager.reloadPage()">Play again!</p>';
                enemyHealth.innerHTML = 'Health: 0';
                heroHealth.innerHTML = 'Health: ' + hero.health;
                    
                pointsCounter++;
                console.log(pointsCounter);
                HeroMoves.storePoint(pointsCounter);
            } else {
                enemyHealth.innerHTML = 'Health: ' + enemy.health;

                // ! The enemy attacks.
                let enemyAttackValues = enemyAttack();
                
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                hero.health = Math.trunc(hero.health - totalDamage); // TODO Parse it properly. -------------------------->
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

                if (hero.health <= 0 && enemy.health > hero.health) {
                    // ! Winner
                    actions.innerHTML = '<p class="find">' + enemy.type + ' wins!!</p><p class="reload" onclick="GameManager.reloadPage()">Play again!</p>';
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                    heroHealth.innerHTML = 'Health: 0';
                    
                    pointsCounter++;
                    localStorage.setItem('points', pointsCounter);

                } else {
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                }
                
            }

        } else if (enemySpeed > heroSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            hero.health = Math.trunc(hero.health - totalDamage); // TODO Parse it properly. -------------------------->
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

            if (hero.health <= 0 && enemy.health > hero.health) {
                // ! Winner
                actions.innerHTML = '<p class="find">' + enemy.type + ' wins!!</p><p class="reload" onclick="GameManager.reloadPage()">Play again!</p>';
                heroHealth.innerHTML = 'Health: 0';
                enemyHealth.innerHTML = 'Health: ' + enemy.health;
                
            } else {
                heroHealth.innerHTML = 'Health: ' + hero.health;
                // ! The hero attacks.

                let heroAttackValues = heroAttack();
                
                let totalDamage = heroAttackValues[0] * heroAttackValues[1];
                enemy.health = Math.trunc(enemy.health - totalDamage); // TODO Parse it properly. -------------------------->
                alert("You hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

                if (enemy.health <= 0 && hero.health > enemy.health) {
                    // ! Winner
                    actions.innerHTML = '<p class="find">You win!!</p><p class="reload" onclick="GameManager.setFight()">Next enemy!</p><p class="reload" onclick="GameManager.reloadPage()">Play again!</p>';
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                    enemyHealth.innerHTML = 'Health: 0';

                    pointsCounter++;
                    localStorage.setItem('points', pointsCounter);

                } else {
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
                
            }

        }

    },

    storePoint: function(num) {
        localStorage.setItem('points', num);
    }
    
}