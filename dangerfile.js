const { danger, warn } = require('danger')
const toolbox = require('danger-plugin-toolbox')

const checkDescription = ({ minLength = 10 } = {}) => {
  const { github } = danger

  if (github.pr.body && github.pr.body.length > minLength) return

  warn(':pencil2: Please add a description.')
}

void (async function main() {
  // thank new contributors
  toolbox.commonContribution({ msg: 'Thanks for contributing :tada:' })

  // are there any leftover console commands
  toolbox.jsConsoleCommands({ logType: 'fail' })

  // are new images minified
  toolbox.imageMinifiedJpg()
  toolbox.imageMinifiedPng()

  // are there skipped or focused tests
  toolbox.jsTestShortcuts({ logTypeSkipped: 'message', logTypeFocused: 'fail' })

  checkDescription()
})()
