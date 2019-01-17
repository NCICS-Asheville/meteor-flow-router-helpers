Package.describe({
  git: 'https://github.com/arillo/meteor-flow-router-helpers.git',
  name: 'arillo:flow-router-helpers',
  summary: 'Template helpers for flow-router',
  version: '0.5.3'
});

Package.onUse(function(api) {

  api.use([
    'check',
    'coffeescript@1.0.9||2.0.0',
    'templating',
    'underscore'
  ]);

  api.use([
    'zimme:active-route@2.3.0'
  ], ['client', 'server']);
  
  api.use([
    'kadira:flow-router@2.0.0',
    'meteorhacks:flow-router@1.19.0'
  ], ['client', 'server'], {weak: true});

  api.imply('zimme:active-route', ['client', 'server']);

  api.addFiles([
    'client/helpers.html'
  ], ['client']);

  api.addFiles([
    'client/helpers.coffee'
  ], ['client', 'server']);

  api.export('FlowRouterHelpers', 'server');
});
