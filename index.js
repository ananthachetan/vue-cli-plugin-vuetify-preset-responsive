// Imports
const { VuetifyPresetService } = require("@vuetify/cli-plugin-utils");

// Bootstraps Vue CLI with the target SASS variables
module.exports = (api) => VuetifyPresetService(api, "responsive");
