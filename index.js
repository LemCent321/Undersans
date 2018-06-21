const Discord = require('Discord.js');

const client = new Discord.Client();
var prefix = "-";
client.login("process.env.TOKEN");

client.on("ready", () => {
    console.log ("Je suis prêt !");
    client.user.setGame("Donner des descrps")
});

client.on('message', message => {
    
    if(message.content === "Bonjour"){
        message.reply("Salut.");
        console.log("Le bot dit salut");
    }
    if(message.content === "!Alphys"){
        message.reply("Dr. Alphys (/ˈæl.fiːz/ ou /ˈæl.fɪs/; AL-feez[1], AL-fiss) est une monstre femelle à l'apparence d'un reptile qui vit dans le Lab à l'ouest de Calciterre. Elle est la scientifique royale titulaire, une position qui lui a été attribuée par Asgore après la mort de son prédécesseur. Asgore avait embauché Alphys car celle-ci lui avait dit qu'elle avait réussi à créer une âme; en réalité, elle avait seulement crée un corps robotique pour un fantôme. Première apparition Lab Relations Undyne (intérêt amoureux) Mettaton (invention) Flowey (création) Asgore (patron) Musiques associées Alphys")
    }

    if(message.content === "!Sans"){
        message.reply("Sans est le grand frère de Papyrus et un personnage-clé d' Undertale. Il apparaît pour la première fois dans la forêt avant Couveneige. C'est un personnage principal que l'on retrouve dans toutes les zones sauf les Ruines, dans les routes Neutre et Vrai Pacifiste, ainsi que dans la route Génocide en tant que boss final et antagoniste héroïque. Musiques associées : sans., lt's Raining Somewhere Else (Il Pleut Ailleurs), Song That Might Play When You Fight Sans (La Musique Qui Devrait Être Jouée Lorsque Vous Combattez Sans), MEGALOVANIA (issue du mot  mégalomanie Aussi connu comme sans. Première apparition Snowdin Musiques associées sans. It's Raining Somewhere Else Song That Might Play When You Fight Sans MEGALOVANIA")
    }
    if(message.content === "!Asgore"){
        message.reply("Le Roi Asgore Dreemurr (/ˈæz.ɡɔɹ ˈdʒɹiː.məɹ/, Az-gore Dri-meur[1]) est le dirigeant de l'Outremonde et de ses habitants, les monstres. Il est l'ex-mari de Toriel, le père de Asriel Dreemurr, le père adoptif du Premier Humain et le second boss final de la Route Neutre. Bien qu'il ne soit pas le mal incarné, il est l'un des antagonistes principaux, visant à tuer sept humains et à utiliser leurs âmes pour briser la barrière qui enferme les monstres dans l'Outremonde. Aussi connu sous le nom de King Fluffybuns KING FLUFFYBOY Mr.Dreamy Premièreapparition Château (Nouvelle Maison) Relations Toriel (ex-femme) Asriel (fils) Le Premier Humain (enfant adoptif) Musiques associées Bergentrückung ASGORE Determination Small Shock Asriel (fils)")
    }
    if(message.content === "!Papyrus"){
        message.reply("Papyrus (/pə.ˈpaɪ.ɹəs/, pa-pi-rus), aussi connu comme COOLSKELETON95 sur UnderNet, est le jeune frère de Sans[1] et un personnage principal d'Undertale. Il veut capturer un humain pour devenir membre de la Garde Royale. Aussi connu comme Le Grand Papyrus Première apparition Couveneige Musiques associées Nyeh Heh Heh!,  Bonetrousle pour papyrus")
    }
        if(message.content === "!Toriel"){
            message.reply ("Toriel est le second personnage principal que l'on rencontre dans Undertale. Elle protège le protagoniste de Flowey et le guide à travers les Ruines. Elle est attentionnée avec nous Première apparition Ruines Relations Asgore (ex-mari) ")
    }
        if(message.content === "!Frisk"){
            message.reply("Frisk est le protagoniste et le personnage jouable dans Undertale, qui tente de s'évader de l'Outremonde après sa chute et de retourner à la Surface. Frisk est le dernier des huit humains à être tombé dans l'Outremonde après avoir escaladé le Mont Ebott. Aussi connu sous le nom de L'Humain Première apparition Ruines ")
        }
        if(message.content === "!Undyne"){
            message.reply("Undyne (Eun-daïne)[1] est une femme poisson, qui est à la tête de la Garde Royale. Vêtue de son armure, elle poursuit le protagoniste à travers toutes les Chutes, où elle est fréquemment gênée par le Petit Monstre Première apparition Waterfall Musiquesassociées Undyne, Run!, NGAHHH!!, Spear of Justice, Battle Against a True Hero, But the Earth Refused to Die, An Ending")
        }
        if(message.content === "!Asriel"){
            message.reply("Asriel Dreemurr (typiquement /ˈæz.ɹiː.əl ˈdʒɹiː.məɹ/) est l'enfant biologique de Toriel et Asgore, ainsi que le frère adoptif de l'humain(e) tombé(e). Il est le boss final de la Route Vrai Pacifiste, ainsi que le principal antagoniste caché d'Undertale. Relations Toriel (Mère)  Asgore (Père) Le Premier Humain (frère/sœur adoptif/ve) Flowey (Forme posthume) Musiques associée  Memory  Hopes and Dreams  Burn in Despair!  SAVE the World  His Theme")
       }
       if(message.content === "!Chara"){
           message.reply("Chara (/ˈkæ.ɹʌ/ ou /ˈtʃɑː.ɹʌ/), aussi connu(e) comme étant le Premier Humain ou encore l'humain tombé, est le premier humain à être tombé dans l'Outremonde. Il s'agit de l'humain que le joueur nomme au début du jeu, et non du personnage que l'on contrôle tout au long d'Undertale. Relations Toriel (mère adoptive)  Asgore (père adoptif) Asriel (frère adoptif)")
       }
})
