const path = require('path');
const _ = require('lodash');

class ServerlessFullstackPlugin {
    constructor(serverless, cliOptions) {

      this.error = serverless.classes.Error;
      this.serverless = serverless;
      this.options = serverless.service.custom['export-sls'];
      this.cliOptions = cliOptions || {};

      this.hooks = {
      };

      this.commands = {
        export: {
          usage: 'Exports interpolated serverless configuration',
          lifecycleEvents: ['run'],
          options: {
            to: {
              usage: 'Specify the file name you want to export to (e.g. "--to ./.sls.config.json")',
              shortcut: 't',
              required: true,
              type: 'string',
            },
          },
        }
      };
    }

    setClientEnv() {
        this.serverless.cli.log(`Setting the environment variables...`);
        const serverlessEnv = this.serverless.service.provider.environment;

        if (!serverlessEnv) {
          return this.serverless.cli.log(
            `No environment variables detected. Skipping step...`
          );
        }

        return Object.assign({}, process.env, serverlessEnv);
    }

    getConfig(field, defaultValue) {
        return _.get(this.serverless, `service.custom.export.${field}`, defaultValue)
    }

    getStage() {
        // find the correct stage name
        var stage = this.serverless.service.provider.stage;
        if (this.cliOptions && this.cliOptions.stage) {
            stage = this.cliOptions.stage;
        }
        return stage;
    }
}

module.exports = ServerlessFullstackPlugin;
