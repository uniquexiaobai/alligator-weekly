const getContents = require('./utils/getContents');
const issue = require('./utils/issue');

// run every day at 00:01 UTC
const run = async date => {
  const contents = await getContents(date);
  const res = await issue.open({
    owner: 'uniquexiaobai',
    repo: 'alligator-weekly',
    title: `新趣集 @${new Date(date).toISOString().slice(0, 10)}`,
    body: contents,
  });

  const issueNumber = res.data.number;

  await issue.lock({
    owner: 'uniquexiaobai',
    repo: 'alligator-weekly',
    issueNumber,
  });
};

run(new Date()).catch(err => {
  throw err;
});
