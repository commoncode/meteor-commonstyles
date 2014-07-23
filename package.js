Package.describe({
  summary: "Load commonstyle.io stylesheet and js files."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  
  api.add_files('lib/client.js', 'client');
  api.add_files('lib/server.js', 'server');
  
  api.export('CommonStyle', 'client');
});