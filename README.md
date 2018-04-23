<img src='./public/alteryxomnibus.jpg' height='64'>

[![Build Status](https://travis-ci.org/alteryx-vue/ayx-vue-starter.svg?branch=master)](https://travis-ci.org/alteryx-vue/ayx-vue-starter) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
> An Alteryx Vue starter template for developing HTML/JavaScript tools with Vue.js and Vuetify

### Requirements
- [NodeJS/npm](https://nodejs.org)

## Installation

#### Alteryx will typically install tools in one of the following locations...
``` bash
C:\Users\{user}\AppData\Roaming\Alteryx\Tools
C:\Program Files\Alteryx\bin\HtmlPlugins
C:\ProgramData\Alteryx\Tools
```

#### Choose a location, clone and cd to project
``` bash
# as of Designer 2018.1 this is the preferred global directory
cd C:\ProgramData\Alteryx\Tools

# clone 
git clone https://github.com/alteryx-vue/ayx-vue-starter

# or go ahead and start the re-tooling process
# git clone https://github.com/alteryx-vue/ayx-vue-starter your-project

# cd to project
cd ayx-vue-starter // or cd your-project
```

When re-tooling a new project, be sure to rename files and update metadata appropriately before building.

- rename ayx-vue-starterConfig.xml as your-projectConfig.xml
- rename component files (./src/components/AyxVueNav.vue => YourProject.Nav)
- edit component script export names
- edit template tags in App.vue, etc. (<ayx-vue-nav> => <your-project-nav>)
- edit meta info in index.html and package.json
- etc., etc.

## Build Setup & Testing

### install dependencies

`npm install`

### Dev Environment Testing

You can use `npm run dev` to serve the project with hot reload for testing in a browser.  
>limited functionality in browser - use for Vue component and/or state management debugging, etc.

__Note__: When using Chrome, be sure to make use of the [Vue.js Devtools Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

### Build Production

Webpack and such..

``` bash
# build & compile
npm run build
```

Webpack [vue-loader](http://vuejs.github.io/vue-loader) is used for compiling `.vue` files.
