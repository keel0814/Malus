// Discord.jsモジュールを読み込む
const Discord = require('discord.js');

const sonfig = require('./config.json');

// 新しいDiscordクライアントを作成
const client = new Discord.Client();

// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します
client.once('ready', () => {
	console.log('準備完了！');
});
client.on('message',message => {
    if(message.content === '!ping'){
        message.channel.send('pong.');
    };
});
// トークンを使ってDiscordにログイン
client.login('ODcwMjE4MDQ1MDY1NDA0NTA2.YQJjtQ.BPvpqL3TVosxUMdSz3dG_oMPBgE');