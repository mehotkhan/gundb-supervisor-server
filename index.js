(function () {
  var Gun = require("gun");
  var cluster = require("cluster");
  if (cluster.isMaster) {
    return (
      cluster.fork() &&
      cluster.on("exit", function () {
        cluster.fork();
        require("gun/lib/crashed");
      })
    );
  }

  var config = {
    port: 8765,
  };

  config.server = require("http").createServer(Gun.serve(__dirname));

  var gun = Gun({
    web: config.server.listen(config.port),
    peers: config.peers,
  });
  module.exports = gun;
})();
