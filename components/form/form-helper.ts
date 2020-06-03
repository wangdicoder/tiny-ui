import React from 'react';
import { Rule } from './types';

export function getPropName(valueProp: string | ((type: any) => string), type: any) {
  return typeof valueProp === 'function' ? valueProp(type) : valueProp;
}

export function getValueFromEvent(...args: any[]): any {
  const e = args[0] as React.ChangeEvent<any>;
  return e && e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
}

export function validate(value: any, rule: Rule): string | undefined {
  const { required, max, min, message } = rule;
  if (required && !value) {
    return message || 'The value is required';
  }
  if (max) {
    if (typeof value === 'number' && value > max) {
      return message || 'The value is greater than the max';
    } else if ((typeof value === 'string' || Array.isArray(value)) && value.length > max) {
      return message || 'The length of value is greater than the max';
    }
  }
  if (min) {
    if (typeof value === 'number' && value < min) {
      return message || 'The value is less than the max';
    } else if ((typeof value === 'string' || Array.isArray(value)) && value.length < min) {
      return message || 'The length of value is less than the max';
    }
  }

  return undefined;
}

