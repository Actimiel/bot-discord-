//ici on précise qu'on aura besoin du module discord.js qui lui
appelle l'API de Discord
const Discord = require("discord.js");
//ici on appelle une fonction de l'objet créé au-dessus qui permet
de récupérer un objet utilisateur client qui représente le bot
const bot = new Discord.Client();
bot.on("ready", function () {
 //ici on affichera dans le terminal que le bot est bien
connecté
 console.log("Carapuce est dans les places !");
});
//la ligne suivante permet d'indiquer à l'objet Discord qui est un messa
notre bot afin qu'il puisse se connecter
bot.login("Nzc1NzgwNzg3NDc0OTIzNTIw.X6rUKQ.1i_c6VJFALX9JPt5yyTvjJV12HE");
//ici on regarde quand le bot est en ligne et qu'il voit passer un
message (peu importe le serveur)
bot.on("message", message => {
 //on regarde alors si le contenu du message est strictement
égale à "!ping"
 if (message.content === "!ping") {
 //si oui on arrive ici et on envoie, dans le channel d'où
provient le message, "Carapong !"
 message.channel.send("Carapong !"); 
 }
});
