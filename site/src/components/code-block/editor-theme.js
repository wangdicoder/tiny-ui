const colors = {
  char: '#484848',
  comment: '#999999',
  keyword: '#d73a49',
  attrName: '#6f42c1',
  primitive: '#5a9bcf',
  string: '#008dff',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#999',
  tag: '#22863a',
  function: '#032f62',
  className: '#d73a49',
  method: '#6699CC',
  operator: '#24292e',
};

const theme /*: PrismTheme */ = {
  plain: {
    color: '#484848',
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: colors.attrName,
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: colors.string,
      },
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.comment,
      },
    },
    {
      types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ['tag'],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ['string'],
      style: {
        color: colors.string,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.punctuation,
      },
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: colors.char,
      },
    },
    {
      types: ['function'],
      style: {
        color: colors.function,
      },
    },
    {
      types: ['entity', 'url', 'variable'],
      style: {
        color: colors.function,
      },
    },
    {
      types: ['keyword', 'operator'],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: colors.className,
      },
    },
    {
      types: ['important'],
      style: {
        fontWeight: '400',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};

export default theme;
