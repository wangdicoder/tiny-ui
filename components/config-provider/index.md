# ConfigProvider

This component provides a universal configuration for components.

## Usage

```jsx
import { ConfigProvider } from 'tiny-ui';

// ...

return (
  <ConfigProvider componentSize="lg" {...otherYourConfig}>
    <App />
  </ConfigProvider>
);
```

## API

| Property          | Description                               | Type                                  | Default   |
| ----------------- | ----------------------------------------- | ------------------------------------- | --------- |
| prefixCls         | set prefix class                          | string                                | ty        |
| componentSize     | component size                            | enum: `lg` &#124; `md` &#124; `sm`    | `md`      |
| shimmer           | display shimmer effect for `<Skeleton />` | boolean                               | false     |

> The `prefixCls` property is useful to solve the classname conflict with other libraries. Please note that this will lose default styles from `ty`. To solve that, also updating  the `prefix` variable in the `_variables.scss`. 
