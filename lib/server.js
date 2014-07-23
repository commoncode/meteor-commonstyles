Meteor.startup(function () {
  var host = process.env.COMMONSTYLE_HOST;
  
  if (typeof(host) == 'undefined') {
    host = 'commonstyle.io';
  }
  
  __meteor_runtime_config__.COMMONSTYLE_HOST = host;
});