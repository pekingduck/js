var request = require('request');
var https = require('https');
var agentOptions;
var agent;

agentOptions = {
  host: 'yakdung.xyz',
  port: '3000',
  path: '/',
  rejectUnauthorized: false // For testing with a self signed certificate
};

agent = new https.Agent(agentOptions);

request({
  url: "https://yakdung.xyz/"
  , method: 'GET'
  , agent: agent
}, function (err, resp, body) {
  console.log(body);
});
