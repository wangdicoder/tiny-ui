### Custom linear gradient

A package of `linear-gradient`. Pass a color array to set the `strokeColor`.

> More linear gradient color presets, please visit [Awesome Gradient](https://wangdicoder.github.io/awesome-gradient/).

<!--start-code-->

```jsx
const { Bar } = Progress;

render(
  <div>
    <Bar percent={90} strokeColor={['#108ee9', '#87d068']} backgroundType="impulse"/>
    <Bar percent={90} strokeColor={['#FDBE2F', '#E64778', '#8927EA']}/>
  </div>
);
```

<!--end-code-->
