<demo>

### Text

HTML contains several elements for defining text with a special meaning. `Text` component provides a wrapper for them.

```jsx live
() => {
  const { Text } = Typography;
  return (
    <>  
      <Text>I am a text</Text>
      <br/>
      <Text underline>I am a text</Text>
      <br/>
      <Text del>I am a text</Text>
      <br/>
      <Text strong>I am a text</Text>
      <br/>
      <Text italic>I am a text</Text>
      <br/>
      <Text mark>I am a text</Text>
      <br/>
      <Text code>I am a text</Text>
      <br/>
      <Text>I am a Text<Text sup>sup</Text></Text>
      <br/>
      <Text>I am a Text<Text sub>sub</Text></Text>
    </>
  );
}
```

</demo>
