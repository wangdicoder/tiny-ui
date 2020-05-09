import React, { ChangeEvent, useContext, useState } from 'react';
import classNames from 'classnames';
import Input, { InputProps } from '../input/input';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  options?: (option: string) => string[];
  onSelect?: (item: string) => void;
}

function Autocomplete(props: AutoCompleteProps): React.ReactElement {
  const { prefixCls: customisedCls, value, className, style, children, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('autocomplete', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [inputVal, setInputVal] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  console.log(suggestions);
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    setInputVal(value);
    if (value && props.options) {
      const result = props.options(value);
      setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };

  const onSelect = (): void => {};

  return (
    <div className={cls} style={style}>
      <Input {...otherProps} onSelect={onSelect} value={inputVal} onChange={inputOnChange} />
      {children}
    </div>
  );
}

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
