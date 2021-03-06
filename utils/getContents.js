const got = require('got');

const getContents = async () => {
  console.log('start fetching');
  try {
    const { body } = await got(
      'https://top-api.lokibai.vercel.app/?target=alligator',
      {
        responseType: 'json',
      }
    );
    console.log('response', body);

    const contents = body.list
      .map(({ title, url }, i) => {
        return `${i + 1}. [**${title}**](${url})`;
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
