
const { SdkGen } = require('@voxgig/sdkgen')

const config = {
  root: __dirname+'/../dist/Root.js',
  folder: __dirname+'/../..',
  meta: {
    name: 'cartoons'
  },
  model: {
    folder: __dirname+'/../model',
  },
  existing: { txt: { merge: true } },
}

module.exports = SdkGen.makeBuild(config)
