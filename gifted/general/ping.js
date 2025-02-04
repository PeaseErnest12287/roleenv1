let Giftedd = async (m, { Gifted }) => {
  const startTime = Date.now(); 

  let giftedButtons = [
    [
      { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VayK4ty7DAWr0jeCZx0i' }
    ]
  ];

  await new Promise(resolve => setTimeout(resolve, 100)); 

  const endTime = Date.now(); 
  const speed = endTime - startTime; 
  const giftedMess = `Pong: *${speed} ms*`;

  Gifted.reply({ text: giftedMess, parse_mode: 'Markdown' }, giftedButtons, m);
};

Giftedd.command = ['ping', 'speed'];
Giftedd.desc = 'Show Bot Speed';
Giftedd.category = ['general'];

module.exports = Giftedd;
