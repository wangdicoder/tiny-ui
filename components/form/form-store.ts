import { deepCopy } from '../_utils/object';
import { validate } from './form-helper';
import { Rule } from './types';

export type FormValues = { [name: string]: any };
type FormListener = (name: string) => void;
type FormRules = { [name: string]: Rule[] };
type FormErrors = { [name: string]: string[] };

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

  setFieldValues(values: FormValues = {}): void {
    Object.keys(values).forEach(name => this.setFieldValue(name, values[name]));
  }

  getFieldError(name: string): string | undefined {
    return this.errors[name] && this.errors[name].length > 0 ? this.errors[name][0] : undefined;
  }

  setFieldError(name: string, errors: string[]): void {
    this.errors[name] = errors;
  }

  setFiledRules(name: string, rules: Rule[]): void {
    this.rules[name] = rules;
  }

  resetFields(): void {
    this.values = deepCopy(this.initValues);
  }

  validateField(name: string): void {
    const rules = this.rules[name];
    const value = this.values[name];
    if (rules) {
      const errMessages: string[] = [];
      rules.forEach(rule => {
        const res = validate(value, rule);
        if (res !== undefined) {
          errMessages.push(res);
        }
      });
      // update filed errors
      this.setFieldError(name, errMessages);
      this.notify(name);
    }
  }

  validateFields(): void {
    Object.keys(this.rules).forEach(name => this.validateField(name));
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
