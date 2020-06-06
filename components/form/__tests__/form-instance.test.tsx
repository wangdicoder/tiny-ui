import FormInstance from '../form-instance';

describe('FormInstance', () => {
  it('set', () => {
    const store = new FormInstance();

    store.setFieldValue('key', 'value');
    expect(store.getFieldValue('key')).toBe('value');

    store.setFieldValues({ a: 1, b: 2 });
    expect(store.getFieldValue('a')).toBe(1);
    expect(store.getFieldValue('b')).toBe(2);

    store.setFieldValue('this.is.a.deep.key', 'value');
    expect(store.getFieldValue('this.is.a.deep.key')).toBe('value');
  });
});
