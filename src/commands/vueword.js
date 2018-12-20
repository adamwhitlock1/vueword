module.exports = {
  name: 'vueword',
  run: async toolbox => {
    const { system, print, filesystem, strings, prompt } = toolbox

    print.info('🗂️  Welcome to VueWord 🗂️')
    print.warning(
      'This CLI utility will provide a basic build tool for creating\na Wordpress plugin that includes a Frontend app, Backend admin app,\nand is built using webpack, vue, vuex, vue-router, and more!'
    )

    print.success(`${print.checkmark} Fortius`)

    const askPluginName = {
      type: 'input',
      name: 'text',
      message: 'Enter a name for your Wordpress Plugin 📇 > '
    }
    const pluginName = await toolbox.prompt.ask(askPluginName)

    print.info(`Your plugin will be called: ${pluginName.text}`)

    const spinner = toolbox.print.spin('Doing some heavy lifting...')
    // setTimeout(function() {
    //   spinner.succeed('woot!')
    // }, 3000)
    setTimeout(function() {
      spinner.stopAndPersist({
        symbol: '💪',
        text: 'BOOOOOM We lifted all the things'
      })
    }, 3000)
  }
}
