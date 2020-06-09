// Imports
const { VuetifyPresetGenerator } = require('@vuetify/cli-plugin-utils');

// Updates the Vuetify object with provided preset
module.exports = api => {
	VuetifyPresetGenerator(api, 'responsive');
};
