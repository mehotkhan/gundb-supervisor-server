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

  var gun = Gun({
    web: require("http").createServer(Gun.serve(__dirname)).listen(8765),
  });
  module.exports = gun;
})();
