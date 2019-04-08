import set from 'lodash/set';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

const deepGet = get;
const deepSet = set;

export type FormListener = (name: string) => void;
// export type FormValidator = (value: any, values: any) => boolean | string;
// export type FormRules = { [key: string]: FormValidator };
// export type FormErrors = { [key: string]: string | undefined };

export default class FormStore {
    private defaultValues: {} = {};
    private listeners: FormListener[] = [];
    private values: {};
    // private rules: FormRules;
    // private errors: FormErrors = {};

    constructor(values = {}) {
        this.values = cloneDeep(values) as any;
    }

    public get(name: string) {
        return deepGet(this.values, name);
    }

    public set(name: string, value: any) {
        deepSet(this.values, name, value);
        this.notify(name);
    }

    public getValues(): {} {
        return this.values;
    }

    public setValues(values = {}): void {
        this.values = { ...this.values, ...values };
        this.notify('*');
    }

    public setDefaultValues(name: string, value: any): void {
        deepSet(this.defaultValues, name, value);
    }

    public reset(): void {
        this.values = cloneDeep(this.defaultValues);
        this.notify('*');
    }

    public subscribe(listener: FormListener) {
        this.listeners.push(listener);

        // provide a unmount function
        return () => {
            const idx = this.listeners.indexOf(listener);
            if (idx !== -1) {
                this.listeners.splice(idx, 1);
            }
        };
    }

    public notify(name: string) {
        this.listeners.forEach(listener => listener(name));
    }
}
