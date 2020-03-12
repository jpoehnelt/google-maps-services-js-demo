const Client = require("@googlemaps/google-maps-services-js").Client;
const HttpsAgent = require("agentkeepalive").HttpsAgent

const version = 'test'
const defaultHttpsAgent = new HttpsAgent({ keepAlive: true });
const defaultTimeout = 10000;
const userAgent = `google-maps-services-node-${version}`;

const defaultConfig = {
  timeout: defaultTimeout,
  httpsAgent: defaultHttpsAgent,
  headers: { "User-Agent": userAgent }
};

const client = new Client({
  config: defaultConfig
})

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: process.env.GOOGLE_MAPS_API_KEY
    },
    timeout: 1000 // milliseconds
  })
  .then(r => {
    console.log(r.data.results[0].elevation);
  })
  .catch(e => {
    console.log(e);
  });
