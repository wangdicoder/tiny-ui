# Use with Vite

[Vite](https://vite.dev/) is the recommended way to scaffold a new React project. This guide walks through setting up tiny-design in a Vite-based app.

## Create a project

```bash
$ npm create vite@latest my-app -- --template react-ts
$ cd my-app
$ npm install
```

Start the dev server to verify everything works:

```bash
$ npm run dev
```

Open http://localhost:5173/ in your browser.

## Install tiny-design

```bash
$ npm install tiny-design
```

Edit `src/App.tsx` to import a Button component from tiny-design:

```tsx
import { Button } from 'tiny-design';

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <Button btnType="primary">Button</Button>
    </div>
  );
};

export default App;
```

You should now see a primary button on the page. Styles are automatically imported alongside each component — no separate CSS import needed. Vite tree-shakes the ES module build automatically, so only the components you import (and their styles) end up in your bundle.
