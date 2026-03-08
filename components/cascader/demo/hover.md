<demo>

### Hover Expand

Expand sub-menus on hover instead of click for faster navigation.

```jsx live
() => {
  const options = [
    {
      value: 'design',
      label: '🎨 Design',
      children: [
        { value: 'figma', label: 'Figma' },
        { value: 'sketch', label: 'Sketch' },
        { value: 'xd', label: 'Adobe XD' },
      ],
    },
    {
      value: 'development',
      label: '⚡ Development',
      children: [
        { value: 'vscode', label: 'VS Code' },
        { value: 'webstorm', label: 'WebStorm' },
        { value: 'vim', label: 'Neovim' },
      ],
    },
    {
      value: 'collaboration',
      label: '🤝 Collaboration',
      children: [
        { value: 'slack', label: 'Slack' },
        { value: 'notion', label: 'Notion' },
        { value: 'linear', label: 'Linear' },
      ],
    },
  ];

  return (
    <Cascader
      options={options}
      expandTrigger="hover"
      placeholder="Pick your toolset"
    />
  );
}
```

</demo>
