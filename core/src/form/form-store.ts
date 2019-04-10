import set from 'lodash/set';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Define a form listener
 */
export type FormListener = { name: string, fn: (isOnChange: boolean) => void };

/**
 * Define a validator
 */
export type FormValidator = (value: any) => string | boolean;

/**
 * Field rules. eg, {password: (val) => val.length >= 6}
 */
export type FormRules = { [name: string]: FormValidator };

/**
 * Identify field errors. eg, {password: 'the length is less than 6'}
 */
export type FormErrors = { [name: string]: string | boolean };

export type FormValues = { [name: string]: any };

export default class FormStore {
    private readonly defaultFieldsValue: FormValues;
    private listeners: FormListener[] = [];
    private fieldValues: FormValues;
    private rules: FormRules;
    private errors: FormErrors = {};

    constructor(values = {}, rules: FormRules = {}) {
        this.defaultFieldsValue = values;
        this.fieldValues = cloneDeep(values);
        this.rules = rules;
    }

    /**
     * Get single field value
     * @param name
     */
    public getFieldValue(name: string) {
        return get(this.fieldValues, name);
    }

    /**
     * Get multiple fields value
     * @param names
     */
    public getFieldValues(names?: object): {} {
        if (names) {
            const values: { [key: string]: any } = {};
            Object.keys(names).forEach((name) => {
                values[name] = get(this.fieldValues, name);
            });
            return values;
        } else {
            return this.fieldValues;
        }
    }

    /**
     * Set single field value
     * @param name
     * @param value
     */
    public setFieldValue(name: string, value: any) {
        set(this.fieldValues, name, value);
        this.notify(name);
    }

    /**
     * Set multiple fields value
     * @param fields
     */
    public setFieldValues(fields: FormValues = {}): void {
        Object.keys(fields).forEach((name) => this.setFieldValue(name, fields[name]));
    }

    /**
     * Reset fields' value to the default value
     */
    public resetFields(): void {
        this.errors = {};
        this.fieldValues = cloneDeep(this.defaultFieldsValue);
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
     * @param fn: Pass errors and field value to the function
     */
    public validateFields(fn?: (err: FormErrors, values: FormValues) => void): void {
        Object.keys(this.fieldValues).forEach((name) => {
            this.validateField(name);
        });
        this.notify();
        fn && fn(this.errors, this.fieldValues);
    }

    /**
     * Set and merge fields rules
     * @param rules
     */
    public setFieldRules(rules: FormRules): void {
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
     * Get a field error info
     * @param name
     */
    public getFieldError(name: string): string | boolean {
        return this.errors[name];
    }

    /**
     * Get all field error info
     */
    public getFieldErrors(names?: object): FormErrors {
        if (names) {
            const errors: { [name: string]: string | boolean } = {};
            Object.keys(names).forEach((name) => {
                errors[name] = this.getFieldError(name);
            });
            return errors;
        } else {
            return this.errors;
        }
    }

    /**
     * Set a field error info
     * @param name
     * @param error
     */
    public setFieldError(name: string, error: string | boolean): void {
        this.errors[name] = error;
    }

    /**
     * Set multiple field error info
     * @param fields
     */
    public setFieldErrors(fields: FormValues = {}): void {
        Object.keys(fields).forEach((name) => this.setFieldError(name, fields[name]));
    }

    public subscribe(name: string, fn: (isOnChange: boolean) => void) {
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
            (idx > -1) && this.listeners[idx].fn(true);
        } else {
            this.listeners.forEach((listener) => {
                listener.fn(false);
            });
        }
    }
}
