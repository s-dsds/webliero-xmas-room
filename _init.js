var admins = new Set(CONFIG.admins);

let auth = new Map();

var commands;

console.log("Running Server...");
var room = WLInit({
	token: window.WLTOKEN,
	roomName: "🎁 XMAS PARTY ROOM 🎄",
	maxPlayers: 30,	
	public: CONFIG.public
});

room.setSettings({
	scoreLimit: 10,
	timeLimit: 10,
	gameMode: "dm",
	levelPool: "arenasBest",
	respawnDelay: 3,
	bonusDrops: "health",
	teamsLocked: false,
});
window.WLROOM = room;

room.onRoomLink = (link) => console.log(link);
room.onCaptcha = () => console.log("Invalid token");