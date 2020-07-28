let GameManager = {

    start: function() {
        const valName = document.getElementById('valName');
        const valImg = document.getElementById('valImg');
        const valRace = document.getElementById('valRace');
        const valDesc = document.getElementById('valDesc');
        
        const kiarName = document.getElementById('kiarName');
        const KiarImg = document.getElementById('KiarImg');
        const kiarRace = document.getElementById('kiarRace');
        const kiarDesc = document.getElementById('kiarDesc');

        const ortName = document.getElementById('ortName');
        const ortImg = document.getElementById('ortImg');
        const ortRace = document.getElementById('ortRace');
        const ortDesc = document.getElementById('ortDesc');
        
        const rovName = document.getElementById('rovName');
        const rovImg = document.getElementById('rovImg');
        const rovRace = document.getElementById('rovRace');
        const rovDesc = document.getElementById('rovDesc');
        
        const teraName = document.getElementById('teraName');
        const teraImg = document.getElementById('teraImg');
        const teraRace = document.getElementById('teraRace');
        const teraDesc = document.getElementById('teraDesc');
        
        const tilName = document.getElementById('tilName');
        const tilImg = document.getElementById('tilImg');
        const tilRace = document.getElementById('tilRace');
        const tilDesc = document.getElementById('tilDesc');

        // ! Create Heros.
        
        const VALDIMIR_DESCRIPTION = 'Valdimir description.';
        const KIARST_DESCRIPTION = 'Kiarst description.';
        const ORTANNA_DESCRIPTION = 'Ortanna description.';
        const ROVAST_DESCRIPTION = 'Rovast description.';
        const TERASTOR_DESCRIPTION = 'Terastor description.';
        const TILYAR_DESCRIPTION = 'Tilyar description.';
        const valdimir = new Hero('Valdimir', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        const kiarst = new Hero('Kiarst', 'Elf', 200, 50, 200, 80, 150, KIARST_DESCRIPTION);
        const ortanna = new Hero('Ortanna', 'Human', 90, 0, 120, 120, 100, ORTANNA_DESCRIPTION);
        const rovast = new Hero('Rovast', 'Orc', 100, 0, 90, 200, 180, ROVAST_DESCRIPTION);
        const terastor = new Hero('Terastor', 'Human', 200, 0, 140, 90, 80, TERASTOR_DESCRIPTION);
        const tilyar = new Hero('Tilyar', 'Skin Shifter', 90, 150, 100, 180, 100, TILYAR_DESCRIPTION);
    
        // ! Create the array.
        
        const herosList = [valdimir, kiarst, ortanna, rovast, terastor, tilyar];
        
        // ! Create Enemies.
        
        const Vulur_DESCRIPTION = 'Vulur description.';
        const Wndorf_DESCRIPTION = 'Wndorf description.';
        const Dulkar_DESCRIPTION = 'Dulkar description.';
        const Osgrwd_DESCRIPTION = 'Osgrwd description.';
        const vulur = new Enemy('Vulur', 'Orc', 100, 0, 50, 100, 100, 'Forest', Vulur_DESCRIPTION);
        const wndorf = new Enemy('Wndorf', 'Goblin', 200, 0, 150, 80, 150, 'CityRuins', Wndorf_DESCRIPTION);
        const dulkar = new Enemy('Dulkar', 'Dulkar', 200, 0, 150, 80, 150, 'Village', Dulkar_DESCRIPTION);
        const osgrwd = new Enemy('Osgrwd', 'Skin Shifter', 200, 0, 150, 80, 150, 'City', Osgrwd_DESCRIPTION);
        
         // ! Create the array.
        
        const enemiesList = [vulur, wndorf, dulkar, osgrwd];

        // ! Fill cards.

        // Valdimir.
        
        valName.innerHTML = valdimir.type;
        valImg.innerHTML = '<img src= "../Assets/' + valdimir.type + '.png" alt="' + valdimir.type + '"class="avatar">';
        valRace.innerHTML = valdimir.race;
        valDesc.innerHTML = valdimir.description;

        // Kiarst.

        kiarName.innerHTML = kiarst.type;
        KiarImg.innerHTML = '<img src= "../Assets/' + kiarst.type + '.png" alt="' + kiarst.type + '"class="avatar">';
        kiarRace.innerHTML = kiarst.type;
        kiarDesc.innerHTML = kiarst.description;

        // Ortanna.
        ortName.innerHTML = ortanna.type;
        ortImg.innerHTML = '<img src= "../Assets/' + ortanna.type + '.png" alt="' + ortanna.type + '"class="avatar">';
        ortRace.innerHTML = ortanna.type;
        ortDesc.innerHTML = ortanna.description;

        // Rovast.
        rovName.innerHTML = rovast.type;
        rovImg.innerHTML = '<img src= "../Assets/' + rovast.type + '.png" alt="' + rovast.type + '"class="avatar">';
        rovRace.innerHTML = rovast.type;
        rovDesc.innerHTML = rovast.description;

        // Terastor.
        teraName.innerHTML = terastor.type;
        teraImg.innerHTML = '<img src= "../Assets/' + terastor.type + '.png" alt="' + terastor.type + '"class="avatar">';
        teraRace.innerHTML = terastor.type;
        teraDesc.innerHTML = terastor.description;

        // Tilyar.
        tilName.innerHTML = tilyar.type;
        tilImg.innerHTML = '<img src= "../Assets/' + tilyar.type + '.png" alt="' + tilyar.type + '"class="avatar">';
        tilRace.innerHTML = tilyar.type;
        tilDesc.innerHTML = tilyar.description;

    },

    startGame: function(type) {
        
        // const VALDIMIR_DESCRIPTION = 'Valdimir description.';
        // const KIARST_DESCRIPTION = 'Kiarst description.';
        // const ORTANNA_DESCRIPTION = 'Ortanna description.';
        // const ROVAST_DESCRIPTION = 'Rovast description.';
        // const TERASTOR_DESCRIPTION = 'Terastor description.';
        // const TILYAR_DESCRIPTION = 'Tilyar description.';

        // switch (type) {
        //     case 'Valdimir':
        //         const heros = new Hero('Valdimir', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        //     case 'Kiarst':
        //         const heros = new Hero('Kiarst', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        //     case 'Ortanna':
        //         const heros = new Hero('Ortanna', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        //     case 'Rovast':
        //         const heros = new Hero('Rovast', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        //     case 'Terastor':
        //         const heros = new Hero('Terastor', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        //     case 'Tilyar':
        //         const heros = new Hero('Tilyar', 'Wizard', 100, 200, 100, 50, 40, VALDIMIR_DESCRIPTION);
        //         break;
        // }

    }

}