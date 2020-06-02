import { deepCopy } from '../_utils/object';

// define a form listener
export type FormListener = (name: string) => void;

export type Rule = {
  type?: 'string' | 'number' | 'boolean' | 'url' | 'email';
  message?: string;
  max?: number;
  min?: number;
  required?: boolean;
};

export type FormValues = { [name: string]: any };
export type FormRules = { [name: string]: Rule[] };
export type FormErrors = { [name: string]: string[] };

export default class FormStore {
  private readonly initValues: FormValues;
  private values: FormValues;
  private rules: FormRules = {};
  private errors: FormErrors = {};
  private listeners: FormListener[] = [];

  constructor(initValues: FormValues = {}) {
    this.initValues = initValues;
    this.values = initValues;
  }

  getFieldValue(name: string): any {
    return this.values[name];
  }

  setFieldValue(name: string, val: any): void {
    this.values[name] = val;
    this.notify(name);
  }

  setFieldValues(fields: FormValues = {}): void {
    Object.keys(fields).forEach(name => this.setFieldValue(name, fields[name]));
  }

  getFieldError(name: string): string[] {
    return this.errors[name];
  }

  setFiledRules(name: string, rules: Rule[]): void {
    this.rules[name] = rules;
  }

  reset(): void {
    this.values = deepCopy(this.initValues);
  }

  subscribe(listener: FormListener): () => void {
    this.listeners.push(listener);

    return (): void => {
      const idx = this.listeners.indexOf(listener);
      idx > -1 && this.listeners.splice(idx, 1);
    };
  }

  notify(name: string): void {
    this.listeners.forEach((listener) => listener(name));
  }
}
