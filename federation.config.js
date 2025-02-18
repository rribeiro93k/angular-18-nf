const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

const shareConfig = {
  singleton: true,
  strictVersion: true,
  requiredVersion: 'auto',
  includeSecondaries: true
};

module.exports = withNativeFederation({

  name: 'core',

  exposes: { },

  shared: {
    ...shareAll(shareConfig)
  }
});
