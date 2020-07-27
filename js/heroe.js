class Hero {
    constructor(type, health, mana, strength, agility, speed) {
        this.type = type;
        this.health = health;
        this.strength = strength;
        this.mana = mana;
        this.agility = agility;
        this.speed = speed;
    }
}

let HeroMoves = {

    calcAttack: function() {

        // ! Who attacks first.
        let heroSpeed = hero.speed;
        let enemySpeed = enemy.speed;

        let heroAttack = function() {
            let calcBaseDamage;
    
            if (hero.mana > 0) {
                calcBaseDamage = hero.strength * hero.mana / 1000;
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
    
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
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

        // ! Get health.
        const heroHealth = document.querySelector('.hero-health');
        const enemyHealth = document.querySelector('.enemy-health');

        // ! Start attack.

        if (heroSpeed >= enemySpeed) {
            let heroAttackValues = heroAttack();
            let totalDamage = heroAttackValues[0] * heroAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

            if (enemy.health <= 0) {
                alert("You won!"); // ! Add functionality.
                enemyHealth.innerHTML = 'Health: 0';
                heroHealth.innerHTML = 'Health: ' + hero.health;
            } else {
                enemyHealth.innerHTML = 'Health: ' + enemy.health;
                // ! The enemy attacks.

                let enemyAttackValues = enemyAttack();
                
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                hero.health = hero.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +     " times.");

                if (hero.health <= 0) {
                    alert("You loose!"); // ! Add functionality.
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                    heroHealth.innerHTML = 'Health: 0';
                } else {
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                }
                
            }

        } else if (enemySpeed >= heroSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            hero.health = hero.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

            if (hero.health <= 0) {
                alert("You loose!"); // ! Add functionality.
                heroHealth.innerHTML = 'Health: 0';
                enemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                heroHealth.innerHTML = 'Health: ' + hero.health;
                // ! The hero attacks.

                let heroAttackValues = heroAttack();
                
                let totalDamage = heroAttackValues[0] * heroAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

                if (enemy.health <= 0) {
                    alert("You win!"); // ! Add functionality.
                    heroHealth.innerHTML = 'Health: ' + hero.health;
                    enemyHealth.innerHTML = 'Health: 0';
                } else {
                    enemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
                
            }

        }

    }
    
}