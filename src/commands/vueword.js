module.exports = {
  name: 'vueword',
  run: async toolbox => {
    const { system, print, filesystem, strings, prompt } = toolbox

    print.info('Welcome to your CLI')

    // ...and be the CLI you wish to see in the world
    const awesome = strings.trim(system.run('whoami'))
    const moreAwesome = strings.kebabCase(`${awesome} and a keyboard`)
    const contents = `🚨 Warning! ${moreAwesome} coming thru! 🚨`
    const home = process.env['HOME']
    filesystem.write(`${home}/realtalk.json`, { contents })

    print.info(`${print.checkmark} Citius`)
    print.warning(`${print.checkmark} Altius`)
    print.success(`${print.checkmark} Fortius`)

    const isThe90s = await toolbox.prompt.confirm('Ya`ll ready for this?')
    print.info(`${isThe90s} : is the 90s`)

    const askPluginName = {
      type: 'input',
      name: 'text',
      message: 'Enter a name for your Wordpress Plugin > '
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
