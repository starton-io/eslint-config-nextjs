![Starton Banner](https://github.com/starton-io/.github/blob/master/github-banner.jpg?raw=true)

# Starton - Code standard for TypeScript project

Library including the code standard for NextJS projects from Starton.

## Requirements

You will need :
- [NodeJS](https://nodejs.org/en) (we recommend the use of [nvm](https://github.com/nvm-sh/nvm))
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

## Installation

To install the project, first clone the repository and go inside project directory, then :

- With [yarn](https://yarnpkg.com/) :
    ```bash
    $ yarn install
    ```

- With [NPM](https://www.npmjs.com/) :
    ```bash
    $ npm install
    ```

Modify the `.eslintrc` or `.eslintrc.js` file in your project to include the following code:
```json
{
  "extends": [ "next/core-web-vitals", "@starton/eslint-config-nextjs" ]
}
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* `NODE_ENV` : is a system environment variable that Node exposes into running scripts
* `URL` : the URL of the documentation (example: https://docs.starton.com)
* `SEGMENT_KEY` : [Segment](https://segment.com/docs/) API key
* `GTM_KEY` : [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/web/datalayer) API Key


## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:
```
{
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


## Documentation

Find out more on how to use Starton in our [Documentation](https://docs.starton.com/)

## Contributing

Contributions are always welcome!

See [Contributing](/CONTRIBUTING.md) for ways to get started.

Please adhere to Starton's [Code of Conduct](/CODE_OF_CONDUCT.md).

## License

[Apache License 2.0](/LICENSE.md)

## Authors

- Starton [support@starton.com](mailto:support@starton.com)
- Calixte DE TOURRIS [calixte@starton.com](mailto:calixte@starton.com)
- Philippe DESPLATS [philippe@starton.com](mailto:philippe@starton.com)
