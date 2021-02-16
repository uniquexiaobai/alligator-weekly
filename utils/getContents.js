const axios = require('axios');

const getContents = async () => {
  console.log('start fetching headlines');
  try {
    const { data } = await axios.get(
      'https://top-api.lokibai.vercel.app/?target=alligator'
    );
    console.log('data', data);
    const contents = data.list
      .map(({ title, desc, url }, i) => {
        return `${i + 1}. [**${title}**](${url}) ${desc}`;
      })
      .join('\n\r');
    console.log('contents', contents);
    return contents;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

module.exports = getContents;

getContents(new Date());
