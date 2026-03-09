import { isOneOf, camelCaseToDash, convertHexToRGBA, getPrefixCls } from '../general';

describe('isOneOf', () => {
  it('should return true when target is in array', () => {
    expect(isOneOf('a', ['a', 'b', 'c'])).toBe(true);
  });

  it('should return false when target is not in array', () => {
    expect(isOneOf('d', ['a', 'b', 'c'])).toBe(false);
  });

  it('should handle string comparison', () => {
    expect(isOneOf('hello', 'hello')).toBe(true);
    expect(isOneOf('hello', 'world')).toBe(false);
  });

  it('should handle empty array', () => {
    expect(isOneOf('a', [])).toBe(false);
  });
});

describe('camelCaseToDash', () => {
  it('should convert camelCase to dash-case', () => {
    expect(camelCaseToDash('backgroundColor')).toBe('background-color');
  });

  it('should convert multiple uppercase letters', () => {
    expect(camelCaseToDash('borderTopWidth')).toBe('border-top-width');
  });

  it('should leave lowercase strings unchanged', () => {
    expect(camelCaseToDash('color')).toBe('color');
  });

  it('should handle empty string', () => {
    expect(camelCaseToDash('')).toBe('');
  });
});

describe('convertHexToRGBA', () => {
  it('should convert 6-digit hex to rgba', () => {
    expect(convertHexToRGBA('#FF0000')).toBe('rgba(255,0,0,1)');
  });

  it('should convert with custom opacity', () => {
    expect(convertHexToRGBA('#00FF00', 0.5)).toBe('rgba(0,255,0,0.5)');
  });

  it('should handle lowercase hex', () => {
    expect(convertHexToRGBA('#0000ff')).toBe('rgba(0,0,255,1)');
  });

  it('should return original string for invalid hex', () => {
    expect(convertHexToRGBA('red')).toBe('red');
    expect(convertHexToRGBA('#FFF')).toBe('#FFF');
    expect(convertHexToRGBA('not-a-color')).toBe('not-a-color');
  });
});

describe('getPrefixCls', () => {
  it('should return default prefix with ty-', () => {
    expect(getPrefixCls('button')).toBe('ty-button');
  });

  it('should use context prefix when provided', () => {
    expect(getPrefixCls('button', 'ant')).toBe('ant-button');
  });

  it('should return customised class when provided', () => {
    expect(getPrefixCls('button', undefined, 'my-btn')).toBe('my-btn');
  });

  it('should prefer customised class over context prefix', () => {
    expect(getPrefixCls('button', 'ant', 'my-btn')).toBe('my-btn');
  });
});
