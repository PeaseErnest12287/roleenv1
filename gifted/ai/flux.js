const fetchJson = require('../utils/fetchJson'); // Import fetchJson utility

let Giftedd = async (m, { Gifted, text }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text, e.g., ${global.prefix}flux A Cute Cat` }, m);
        return;
    }

    Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VayK4ty7DAWr0jeCZx0i' }
        ]
    ];

    try {
        // Fetch AI-generated image from the API
        const giftedRes = await fetchJson(`${global.giftedApi}/ai/fluximg?apikey=${global.giftedKey}&prompt=${encodeURIComponent(text)}`);
        
        console.log('Gifted API Response:', giftedRes); // Log the response for debugging

        // Check if the response contains a valid image URL
        if (!giftedRes || !giftedRes.result) {
            Gifted.reply({ text: 'No image received from the API. Please try again later.' }, m);
            return;
        }

        // Send the AI-generated image
        Gifted.downloadAndSend(giftedRes.result, { caption: giftechMess.done, buttons: giftedButtons }, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply({ text: 'Flux is currently unavailable. Please try again later.' }, giftedButtons, m);
    }
};

// Command Metadata
Giftedd.command = ['flux', 'fluximg'];
Giftedd.desc = 'Flux AI Image Generator';
Giftedd.category = ['ai'];

module.exports = Giftedd;
