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

* TBD


```yaml
# add to your serverless.yml

plugins:
  - 'export-serverless'

custom:
  export-serverless:
    to: ./.sls.config.json
```
