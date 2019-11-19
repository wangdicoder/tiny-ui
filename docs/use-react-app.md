# Use in create-react-app

[create-react-app](https://github.com/facebook/create-react-app) can help build a react project quickly, and this wizard will explain how to use tiny-ui in conjunction with create-react-app.

## Install and Initialization

Before all start, you may need install `npm`.

```bash
$ npx create-react-app test-app
```

After execution, the tool will automatically generate a react development scaffold and install all dependencies necessary to develop react. Execute after Setup completes

```bash
$ npm start
```

Open the browser at http://localhost:3000/. It renders a header saying "Welcome to React" on the page.

## Install tiny-ui

```bash
$ npm install tiny-ui --save
```

Modify `src/App.js`, import Button component from `tiny-ui`.

```jsx
import React, { Component } from 'react';
import Button from 'tiny-ui/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="primary">Button</Button>
      </div>
    );
  }
}

export default App;
```

Add `tiny-ui/dist/styles/index.css` at the top of `src/App.css`.

```css
@import '~tiny-ui/dist/styles/index.css';

.App {
  text-align: center;
}

...
```

Then you'll see an accent button and now you can go ahead and develop.
If you encounter other problems, you can check create-react-app's [official documentation](https://facebook.github.io/create-react-app/).

## Advanced Guides

We are successfully running tiny-ui components now but in the real world, there are still lots of problems about the demo. For instance, we actually import all styles of components in the project which may be a network performance issue.

Now we need to customize the default webpack config. We can achieve that by using [react-app-rewired](https://github.com/timarney/react-app-rewired) which is one of create-react-app's custom config solutions.

Import react-app-rewired and modify the scripts field in package.json. Due to new [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) issue, you shall need [customize-cra](https://github.com/arackaf/customize-cra) along with react-app-rewired.

```bash
$ npm install react-app-rewired customize-cra --save-dev
```

Then update `package.json` file.

```diff
/* package.json */

"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

Then create a `config-overrides.js` at root directory of your project for further overriding.

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### Use babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin for importing components on demand. We are now trying to install it.

```bash
$ npm install babel-plugin-import --save-dev
```

Then modify `config-overrides.js`.

```diff
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'tiny-ui',
+     style: 'css',
+   }),
+ );
```

Remove the `@import '~tiny-ui/dist/index.css';` statement added before because `babel-plugin-import` will import styles and import components like below:

```diff
// src/App.js

  import React, { Component } from 'react';
- import Button from 'tiny-ui/lib/button';
+ import { Button } from 'tiny-ui';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button color="primary">Button</Button>
        </div>
      );
    }
  }

  export default App;
```

After that, reboot with `npm start` and visit the demo page,
