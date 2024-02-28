import {Householddice} from './die.js';
import {HHd6} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["h"] = Householddice;
	CONFIG.Dice.terms["d"] = HHd6;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"householdDice",name:"Household Dice"},"preferred");
    dice3d.addDicePreset({
      type:"dh",
      labels:[
        'modules/household-csb-es/assets/CaraCorazon.webp', 
        'modules/household-csb-es/assets/CaraDiamante.webp', 
        'modules/household-csb-es/assets/CaraTrebol.webp', 
        'modules/household-csb-es/assets/CaraPica.webp',
        'modules/household-csb-es/assets/CaraV.webp', 
        'modules/household-csb-es/assets/CaraHousehold.webp'
      ],
      bumpMaps:[
        'modules/household-csb-es/assets/CaraCorazon_Bump.webp', 
        'modules/household-csb-es/assets/CaraDiamante_Bump.webp', 
        'modules/household-csb-es/assets/CaraTrebol_Bump.webp', 
        'modules/household-csb-es/assets/CaraPica_Bump.webp',
        'modules/household-csb-es/assets/CaraV_Bump.webp', 
        'modules/household-csb-es/assets/CaraHousehold_Bump.webp'
      ],
	  colorset:"whiteHousehold",
      system: "householdDice"
    });
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/household-csb-es/assets/CaraCorazon.webp', 
        'modules/household-csb-es/assets/CaraDiamante.webp', 
        'modules/household-csb-es/assets/CaraTrebol.webp', 
        'modules/household-csb-es/assets/CaraPica.webp',
        'modules/household-csb-es/assets/CaraV.webp', 
        'modules/household-csb-es/assets/CaraHousehold.webp'
      ],
      bumpMaps:[
        'modules/household-csb-es/assets/CaraCorazon_Bump.webp', 
        'modules/household-csb-es/assets/CaraDiamante_Bump.webp', 
        'modules/household-csb-es/assets/CaraTrebol_Bump.webp', 
        'modules/household-csb-es/assets/CaraPica_Bump.webp',
        'modules/household-csb-es/assets/CaraV_Bump.webp', 
        'modules/household-csb-es/assets/CaraHousehold_Bump.webp'
      ],
	  colorset:"whiteHousehold",
      system: "householdDice"
    });
	dice3d.addColorset({
    name: 'whiteHousehold',
    description: 'White',
    category: 'Household Dice',
    foreground: '#FFFFFF',
    background: '#FFFFFF',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
});