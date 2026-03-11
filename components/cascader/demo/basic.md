<Demo>

### Basic

Select a location from a country → state/province → city hierarchy.

```jsx live
() => {
  const options = [
    {
      value: 'us',
      label: '🇺🇸 United States',
      children: [
        {
          value: 'california',
          label: 'California',
          children: [
            { value: 'la', label: 'Los Angeles' },
            { value: 'sf', label: 'San Francisco' },
            { value: 'sd', label: 'San Diego' },
          ],
        },
        {
          value: 'newyork',
          label: 'New York',
          children: [
            { value: 'nyc', label: 'New York City' },
            { value: 'buffalo', label: 'Buffalo' },
          ],
        },
        {
          value: 'texas',
          label: 'Texas',
          children: [
            { value: 'houston', label: 'Houston' },
            { value: 'austin', label: 'Austin' },
            { value: 'dallas', label: 'Dallas' },
          ],
        },
      ],
    },
    {
      value: 'jp',
      label: '🇯🇵 Japan',
      children: [
        {
          value: 'kanto',
          label: 'Kantō',
          children: [
            { value: 'tokyo', label: 'Tokyo' },
            { value: 'yokohama', label: 'Yokohama' },
          ],
        },
        {
          value: 'kansai',
          label: 'Kansai',
          children: [
            { value: 'osaka', label: 'Osaka' },
            { value: 'kyoto', label: 'Kyoto' },
            { value: 'kobe', label: 'Kobe' },
          ],
        },
      ],
    },
    {
      value: 'uk',
      label: '🇬🇧 United Kingdom',
      children: [
        {
          value: 'england',
          label: 'England',
          children: [
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
            { value: 'birmingham', label: 'Birmingham' },
          ],
        },
        {
          value: 'scotland',
          label: 'Scotland',
          children: [
            { value: 'edinburgh', label: 'Edinburgh' },
            { value: 'glasgow', label: 'Glasgow' },
          ],
        },
      ],
    },
    {
      value: 'br',
      label: '🇧🇷 Brazil',
      children: [
        {
          value: 'sp',
          label: 'São Paulo',
          children: [
            { value: 'saopaulo', label: 'São Paulo' },
            { value: 'campinas', label: 'Campinas' },
          ],
        },
        {
          value: 'rj',
          label: 'Rio de Janeiro',
          children: [
            { value: 'rio', label: 'Rio de Janeiro' },
            { value: 'niteroi', label: 'Niterói' },
          ],
        },
      ],
    },
    {
      value: 'au',
      label: '🇦🇺 Australia',
      children: [
        {
          value: 'nsw',
          label: 'New South Wales',
          children: [
            { value: 'sydney', label: 'Sydney' },
            { value: 'newcastle', label: 'Newcastle' },
          ],
        },
        {
          value: 'vic',
          label: 'Victoria',
          children: [
            { value: 'melbourne', label: 'Melbourne' },
            { value: 'geelong', label: 'Geelong' },
          ],
        },
        {
          value: 'qld',
          label: 'Queensland',
          children: [
            { value: 'brisbane', label: 'Brisbane' },
            { value: 'goldcoast', label: 'Gold Coast' },
          ],
        },
      ],
    },
    {
      value: 'fr',
      label: '🇫🇷 France',
      children: [
        {
          value: 'idf',
          label: 'Île-de-France',
          children: [
            { value: 'paris', label: 'Paris' },
            { value: 'versailles', label: 'Versailles' },
          ],
        },
        {
          value: 'aura',
          label: 'Auvergne-Rhône-Alpes',
          children: [
            { value: 'lyon', label: 'Lyon' },
            { value: 'grenoble', label: 'Grenoble' },
          ],
        },
        {
          value: 'paca',
          label: 'Provence-Alpes-Côte d\'Azur',
          children: [
            { value: 'marseille', label: 'Marseille' },
            { value: 'nice', label: 'Nice' },
          ],
        },
      ],
    },
  ];

  return (
    <Cascader
      options={options}
      placeholder="Select a country, state, and city"
      onChange={(value, opts) => console.log(value, opts)}
    />
  );
}
```

</Demo>
