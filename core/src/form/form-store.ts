import set from 'lodash/set';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Define a form listener
 */
export type FormListener = { name: string, fn: () => void };

/**
 * Define a validator
 */
export type FormValidator = (value: any) => string | boolean;

/**
 * Field rules. eg, {password: (val) => val.length >= 6}
 */
export type FormRules = { [key: string]: FormValidator };

/**
 * Identify field errors. eg, {password: 'the length is less than 6'}
 */
export type FormErrors = { [key: string]: string | boolean };

export default class FormStore {
    private readonly defaultFieldsValue = {};
    private listeners: FormListener[] = [];
    private fieldsValue: {};
    private rules: FormRules;
    private errors: FormErrors = {};

    constructor(values = {}, rules: FormRules = {}) {
        this.defaultFieldsValue = values;
        this.fieldsValue = cloneDeep(values);
        this.rules = rules;
    }

    /**
     * Get single field value
     * @param name
     */
    public getFieldValue(name: string) {
        return get(this.fieldsValue, name);
    }

    /**
     * Set single field value
     * @param name
     * @param value
     */
    public setFieldValue(name: string, value: any) {
        set(this.fieldsValue, name, value);
        this.notify(name);
    }

    /**
     * Get multiple fields value
     * @param names
     */
    public getFieldsValue(names?: object): {} {
        if (names) {
            return Object.keys(names).map((name) => get(this.fieldsValue, name));
        } else {
            return this.fieldsValue;
        }
    }

    /**
     * Set multiple fields value
     * @param fields
     */
    public setFieldsValue(fields: { [key: string]: any } = {}): void {
        Object.keys(fields).forEach((key) => this.setFieldValue(key, fields[key]));
    }

    /**
     * Reset fields' value to the default value
     */
    public resetFields(): void {
        this.errors = {};
        this.fieldsValue = cloneDeep(this.defaultFieldsValue);
        this.notify();
    }

    /**
     * Validate field
     * @param name
     */
    public validateField(name: string): void {
        const validator = this.rules[name];
        const value = this.getFieldValue(name);
        this.errors[name] = validator ? validator(value) : true;
    }

    /**
     * Validate all fields
     */
    public validateFields(): void {
        Object.keys(this.fieldsValue).forEach((name) => {
            this.validateField(name);
        });
        this.notify();
    }

    /**
     * Set and merge fields rules
     * @param rules
     */
    public setFieldsRules(rules: FormRules): void {
        this.rules = { ...this.rules, ...rules };
    }

    /**
     * Configure a validator for a field
     * @param name
     * @param validator
     */
    public setFieldValidator(name: string, validator: FormValidator): void {
        this.rules[name] = validator;
    }

    /**
     * Get all field error info
     */
    public getFieldErrors(): FormErrors {
        return this.errors;
    }

    /**
     * Get a field error info
     * @param name
     */
    public getFieldError(name: string): string | boolean {
        return this.errors[name];
    }

    public subscribe(name: string, fn: () => void) {
        this.listeners.push({ name, fn });

        // provide an unmount function
        return () => {
            const idx = this.listeners.findIndex(listener => listener.name === name);
            (idx > -1) && this.listeners.splice(idx, 1);
        };
    }

    public notify(name?: string) {
        if (name) {
            const idx = this.listeners.findIndex(listener => listener.name === name);
            (idx > -1) && this.listeners[idx].fn();
        } else {
            this.listeners.forEach((listener) => {
                listener.fn();
            });
        }
    }
}
