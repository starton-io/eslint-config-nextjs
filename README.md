# Starton - Code standard for TypeScript project

Library including the code standard for NextJS projects from Starton.

## Installing

1. Initialize your NextJS project ([https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started))

2. Install dependency with `npm` or `yarn`
```
npm install -D @starton/eslint-config-nextjs
```
or
```
yarn add -D @starton/eslint-config-nextjs
```

3. Modify the `.eslintrc` file in your project to include the following code:
```json
{
	"extends": [ "next/core-web-vitals", "@starton/eslint-config-nextjs" ]
}
```

4. Your NextJS project is ready to use the Starton code standard! Congratulations 🥳

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:
```js
	  // These are all my auto-save configs
	  "editor.formatOnSave": true,
	  // turn it off for JS and JSX, we will do this via eslint
	  "[javascript]": {
		"editor.formatOnSave": false
	  },
	  "[javascriptreact]": {
		"editor.formatOnSave": false
	  },
	  // show eslint icon at bottom toolbar
	  "eslint.alwaysShowStatus": true,
	  // tell the ESLint plugin to run on save
	  "editor.codeActionsOnSave": {
		"source.fixAll": true
	  }
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

If you have previously configured ESLint to run via a File Watcher, [turn that off.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

### If you choose Local / Per Project Install Above
1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
1. Select **Automatic ESLint Configuration**
1. Check **Run eslint --fix on save**

### Ensure the Prettier plugin is disabled if installed.

1. Open Prettier configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > Prettier (optionally just search settings for "prettier")
1. Uncheck both **On code reformat** and **On save**
1. *Optional BUT IMPORTANT:* If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already.
    1. Make sure the **Run for files** glob does not include `js,ts,jsx,tsx`.
    2. An example glob for styles, config, and markdown. `{**/*,*}.{yml,css,sass,md}`
