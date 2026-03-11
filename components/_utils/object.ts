export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

export function deepGet(obj: any, path: string): any {
  const parts = path.split('.');
  const length = parts.length;

  for (let i = 0; i < length; i++) {
    if (!isObject(obj)) return undefined;
    obj = obj[parts[i]];
  }

  return obj;
}

export function deepSet(obj: any, path: string, value: any) {
  if (!isObject(obj)) return obj;

  const root = obj;
  const parts = path.split('.');
  const length = parts.length;

  for (let i = 0; i < length; i++) {
    const p = parts[i];

    if (i === length - 1) {
      obj[p] = value;
    } else if (!isObject(obj[p])) {
      obj[p] = {};
    }

    obj = obj[p];
  }

  return root;
}

export function deepCopy<T>(target: T): T {
  if (target === undefined || target === null) {
    return target;
  }

  const type = typeof target;

  if (type === 'boolean' || type === 'number' || type === 'string') {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime()) as any;
  }

  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags) as any;
  }

  if (target instanceof Map) {
    const map = new Map();
    target.forEach((val, key) => map.set(deepCopy(key), deepCopy(val)));
    return map as any;
  }

  if (target instanceof Set) {
    const set = new Set();
    target.forEach((val) => set.add(deepCopy(val)));
    return set as any;
  }

  if (Array.isArray(target)) {
    return target.map((o) => deepCopy(o)) as any;
  }

  if (typeof target === 'object') {
    const obj: any = {};

    for (const key in target) {
      obj[key] = deepCopy(target[key]);
    }

    return obj;
  }

  return target;
}
