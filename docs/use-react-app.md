# Use with Vite

[Vite](https://vite.dev/) is the recommended way to scaffold a new React project. This guide walks through setting up tiny-ui in a Vite-based app.

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

## Install tiny-ui

```bash
$ npm install tiny-ui
```

Edit `src/App.tsx` to import a Button component from tiny-ui:

```tsx
import { Button } from 'tiny-ui';
import 'tiny-ui/dist/styles/index.css';

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <Button btnType="primary">Button</Button>
    </div>
  );
};

export default App;
```

You should now see a primary button on the page. Vite tree-shakes the ES module build automatically, so only the components you import end up in your bundle.
