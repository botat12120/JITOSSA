import axios from 'axios';

const akiraEndpoint = 'https://raw.githubusercontent.com/KazukoGans/database/main/anime/akira.json';

let handler = async (m, { conn }) => {
  try {
    // Fetch the JSON file containing Akira images
    const response = await axios.get(akiraEndpoint);
    const akiraImages = response.data;

    // Pick a random image URL
    const randomIndex = Math.floor(Math.random() * akiraImages.length);
    const randomImageUrl = akiraImages[randomIndex];

    // Send the random Akira image
    conn.sendFile(m.chat, randomImageUrl, 'Jitossa.jpg', 'لما لاتتابعني فى إنستجرامي 😌.. \n instgram.com/ovmar_1');
  } catch (e) {
    console.error(e);
    m.reply('حدث خطأ');
  }
};

handler.help = ['akira'];
handler.tags = ['anime'];
handler.command = ['اكيرا'];

export default handler;
