Hooks.once("init", function() {
    console.log("Incializando módulo Household")

    game.settings.register("household-csb-es", "firstTimeStart", {
        name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1 style= "line-height:80%; margin-bottom:15px;">Bienvenido a Household</h1>';
	let mensimpfirst='<p style= "font-size:20px;">Importa los compendios para poder empezar a usar el módulo</p><button id='+buttonId2+' style= "font-family:LHF_Encore;font-size: 20px;font-weight:700;line-height:80%;padding-bottom: 10px;">Importa los compendios</button>';
	let mensimpact='<p style= "font-size:20px;">Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' style= "font-family:LHF_Encore;font-size: 20px;font-weight:700;line-height:80%;padding-bottom: 10px;">Importa los compendios</button>'
	let mensrecordtut='<p style= "font-size:20px;">Recuerda: Puedes seleccionar un Campo distinto o añadir dados de bonificación o penalización, si pulsas la tecla Mayus al hacer click en la Habilidad.</p><button id='+buttonId+' style= "font-family:LHF_Encore;font-size: 20px;font-weight:700;line-height:80%;padding-bottom: 10px;">Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("household-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("household-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("household-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Herasmo J. Hemingway"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/household-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("household-csb-es.objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						let collectionTables = game.packs.get("household-csb-es.rolltables");
						console.log(collectionTables);
						console.log(button2);
						let folderidentTables=''
						if (game.folders.getName("Tablas")) {
							folderidentTables=game.folders.getName("Tablas").id;
						}
						let docsTablas = collectionTables.importAll({folderId: folderidentTables, folderName: "Tablas", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("household-csb-es.actores");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("household-csb-es.macros");
							let folderident3=''
							if (game.folders.getName("Macros Household")) {
								folderident3=game.folders.getName("Macros Household").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros Household", keepId: true});
						}, 500);
						game.user.setFlag("household-csb-es", "welcomeMessage", true);
						game.user.setFlag("household-csb-es", "lastVersion", game.modules.get("household-csb-es").version);
						setTimeout(() => {
							game.macros.getName('Roll - Reroll - All In (Integrado)').update({ownership:{default:2}});
						}, 5000);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 100);
			});
			game.settings.set("household-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("household-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Herasmo J. Hemingway"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/household-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("household-csb-es.objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						let collectionTables = game.packs.get("household-csb-es.rolltables");
						console.log(collectionTables);
						console.log(button2);
						let folderidentTables=''
						if (game.folders.getName("Tablas")) {
							folderidentTables=game.folders.getName("Tablas").id;
						}
						let docsTablas = collectionTables.importAll({folderId: folderidentTables, folderName: "Tablas", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("household-csb-es.actores");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("household-csb-es.macros");
							let folderident3=''
							if (game.folders.getName("Macros Household")) {
								folderident3=game.folders.getName("Macros Household").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros Household", keepId: true});
						}, 500);
						game.user.setFlag("household-csb-es", "lastVersion", game.modules.get("household-csb-es").version);
						setTimeout(() => {
							game.macros.getName('Roll - Reroll - All In (Integrado)').update({ownership:{default:2}});
						}, 5000);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("household-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Herasmo J. Hemingway"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/household-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("household-csb-es", "welcomeMessage", true);
		game.settings.set("household-csb-es", "firstTimeStart", false);
	}
})