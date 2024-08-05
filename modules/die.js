export class Householddice extends Die {
    constructor(termData) {
        super(termData);
    }

    /* -------------------------------------------- */

     /** @override */
    getResultLabel(result) {
     if(this.faces==6) {
        return {
			"1": '<img src="modules/household-csb-es/assets/CaraCorazon_inCHAT.webp" />',
            "2": '<img src="modules/household-csb-es/assets/CaraDiamante_inCHAT.webp" />',
            "3": '<img src="modules/household-csb-es/assets/CaraTrebol_inCHAT.webp" />',
            "4": '<img src="modules/household-csb-es/assets/CaraPica_inCHAT.webp" />',
			"5": '<img src="modules/household-csb-es/assets/CaraV_inCHAT.webp" />',			
            "6": '<img src="modules/household-csb-es/assets/CaraHousehold_inCHAT.webp" />'
        }[result.result];
        } else {
        return String(result.result);
        }
    }
}