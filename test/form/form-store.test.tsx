import * as React from 'react';
import FormStore from '../../components/form/form-store';

describe('FormStore', () => {

    it('set', () => {
        const store = new FormStore();

        store.setFieldValue('key', 'value');
        expect(store.getFieldValue('key')).toBe('value');

        store.setFieldsValue({ a: 1, b: 2 });
        expect(store.getFieldValue('a')).toBe(1);
        expect(store.getFieldValue('b')).toBe(2);

        store.setFieldValue('this.is.a.deep.key', 'value');
        expect(store.getFieldValue('this.is.a.deep.key')).toBe('value');
    });
});
