# export-serverless

A [serverless](http://www.serverless.com) plugin that interpolates serverless config so that you can use it more flexibly. 

Home page - https://github.com/anonflux/export-serverless

**:zap: Pros**

- TBD

## Before you begin
* Install the serverless framework
```bash
npm install -g serverless
```

## Getting started
**First**, Install and configure

#### Installation

```bash
npm install --save-dev export-serverless
```

#### Configuration

In real world scenarios, there is more to ensuring quality than simply deploying the application.
In applications using the serverless framework, this often presents a problem, as configuration is only available
within the context of serverless commands.

Not anymore. This plugin will export serverless.yml configuration, interpolations, variables, etc to a file of your choosing.

```yaml
# add to your serverless.yml

plugins:
  - export-serverless

custom:
  export:
    toFile: './.service.config.json'    # relative to process.cwd() file name/path config will be written to
    config:                             # the output of the config file will be json objects that match this object
      service:
        name: 'service'                 # value corresponds to the 'service' property in serverless.yml
      stackName: 'provider.stackName'   # value corresponds to the 'provider.stackName' property in serverless.yml
      envKey: 'custom.env-key'          # value corresponds to the 'custom.env-key' property in serverless.yml
```

For example, if `serverless.yml` looked like this:
```yaml
# add to your serverless.yml
service: exporty-sport-port
provider:
  stage: ${opt:stage, 'local'}
  stackName: ${self:provider.stage}-${self:service}
custom:
  env-key: ${self:provider.stage}
  export:
    toFile: './.service.config.json'
    config:
      service:
        name: 'service'
      stackName: 'provider.stackName'
      envKey: 'custom.env-key'  
plugins:
  - export-serverless
```

When running `npx sls export`, the `./service.config.json` file would look like this:
```json
{
    "service": {
        "name": "exporty-sport-port"
    },
    "stackName": "local-exporty-sport-port",
    "envKey": "local"
}
```

#### To run
  - `npx sls export`
  - `npx sls export --stage={stagehere}`