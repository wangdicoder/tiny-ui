<demo>

### Basic

Display the document sample.

```jsx live
() => {
  const { H1, H2, P, Text } = Typography;
  return (
    <>  
      <H1>Introduction</H1>
      <P>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.</P>
      <P>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to 
        <Text strong>
            uniform the user interface specs for internal background projects, lower the unnecessary
            cost of design differences and implementation and liberate the resources of design and
            front-end development
        </Text>.
      </P>

      <H2>Guidelines and Resources</H2>
      <P>
        We supply a series of design principles, practical patterns and high quality design resources
        (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
        prototypes beautifully and efficiently.
      </P>
    </>
  );
}
```

</demo>
