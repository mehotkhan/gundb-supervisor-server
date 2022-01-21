import relay from "@gun-vue/relay";

relay.init({
    host: "gundb.alizemani.ir", // A host name used by the server to publish it's state to the graph. Set your peer URL without a protocol, like  'relay.some-site.com'
    port: 4200, // Gun server port. You may use a more standard 8080.
    store: false, // Put true if you want to have Gun store data on disk.
  });