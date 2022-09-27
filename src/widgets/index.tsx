import { declareIndexPlugin, ReactRNPlugin } from '@remnote/plugin-sdk';

async function onActivate(plugin: ReactRNPlugin) {
  // For advanced themes you can offer settings to the user to
  // control certain styles, eg: 
  //
  // await plugin.settings.registerBooleanSetting({
  //   id: "change-theme",
  //   title: "Change the Theme",
  //   description: "Toggling this setting will change the theme by registering / unregistering some custom CSS.",
  //   defaultValue: false,
  // })

  // plugin.track(async (reactivePlugin) => {
  //   const shouldChangeTheme = await reactivePlugin.settings.getSetting("change-theme");
  //   if (shouldChangeTheme) {
  //     await plugin.app.registerCSS('css-id', `...`)
  //   }
  // })
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
