import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ColorPickerProps, Color, ColorFormat } from './types';
import { parseColor, formatColor, hsbToHex } from './utils';

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>((props, ref) => {
  const {
    defaultValue = '#6e41bf',
    presets,
    showAlpha = false,
    disabled = false,
    size,
    allowClear = false,
    trigger = 'click',
    defaultFormat = 'hex',
    prefixCls: customisedCls,
    className,
    style,
    onChange,
    onFormatChange,
    children,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('color-picker', configContext.prefixCls, customisedCls);
  const pickerSize = size || configContext.componentSize || 'md';

  const [color, setColor] = useState<Color>(() =>
    parseColor('value' in props ? (props.value as string) : defaultValue)
  );
  const [format, setFormat] = useState<ColorFormat>(
    'format' in props ? (props.format as ColorFormat) : defaultFormat
  );
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});

  const spectrumRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('value' in props && props.value) {
      setColor(parseColor(props.value));
    }
  }, [props.value]);

  useEffect(() => {
    if ('format' in props) setFormat(props.format as ColorFormat);
  }, [props.format]);

  useEffect(() => {
    if ('open' in props) setOpen(props.open as boolean);
  }, [props.open]);

  // Position panel below trigger
  useEffect(() => {
    if (open && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setPanelStyle({
        position: 'absolute',
        top: rect.bottom + 4 + window.scrollY,
        left: rect.left + window.scrollX,
        zIndex: 1050,
      });
    }
  }, [open]);

  const emitChange = useCallback((c: Color) => {
    const formatted = formatColor(c, format);
    onChange?.(formatted);
  }, [format, onChange]);

  const updateColor = (updates: Partial<Color>) => {
    const newColor = { ...color, ...updates };
    if (!('value' in props)) {
      setColor(newColor);
    }
    emitChange(newColor);
  };

  const handleSpectrumMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    setDragging(true);
    updateSpectrumFromEvent(e.nativeEvent);
  };

  const updateSpectrumFromEvent = (e: MouseEvent | React.MouseEvent['nativeEvent']) => {
    const rect = spectrumRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
    const s = Math.round((x / rect.width) * 100);
    const b = Math.round(100 - (y / rect.height) * 100);
    updateColor({ s, b });
  };

  const handleHueMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    updateHueFromEvent(e.nativeEvent);
    const handleMove = (ev: MouseEvent) => updateHueFromEvent(ev);
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  const updateHueFromEvent = (e: MouseEvent | React.MouseEvent['nativeEvent']) => {
    const rect = hueRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const h = Math.round((x / rect.width) * 360);
    updateColor({ h });
  };

  const handleAlphaMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    updateAlphaFromEvent(e.nativeEvent);
    const handleMove = (ev: MouseEvent) => updateAlphaFromEvent(ev);
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  const updateAlphaFromEvent = (e: MouseEvent | React.MouseEvent['nativeEvent']) => {
    const rect = alphaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const a = Math.round((x / rect.width) * 100) / 100;
    updateColor({ a });
  };

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: MouseEvent) => updateSpectrumFromEvent(e);
    const handleUp = () => setDragging(false);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
  }, [dragging, color.h, color.a]);

  // Click outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        wrapperRef.current && !wrapperRef.current.contains(target) &&
        panelRef.current && !panelRef.current.contains(target)
      ) {
        if (!('open' in props)) setOpen(false);
        props.onOpenChange?.(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const toggleOpen = () => {
    if (disabled) return;
    const next = !open;
    if (!('open' in props)) setOpen(next);
    props.onOpenChange?.(next);
  };

  const handleFormatChange = () => {
    const formats: ColorFormat[] = ['hex', 'rgb', 'hsb'];
    const idx = formats.indexOf(format);
    const next = formats[(idx + 1) % formats.length];
    if (!('format' in props)) setFormat(next);
    onFormatChange?.(next);
  };

  const handlePresetClick = (preset: string) => {
    const c = parseColor(preset);
    if (!('value' in props)) setColor(c);
    emitChange(c);
  };

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${pickerSize}`]: pickerSize,
    [`${prefixCls}_disabled`]: disabled,
  });

  const hexColor = hsbToHex(color);
  const hueColor = hsbToHex({ h: color.h, s: 100, b: 100, a: 1 });

  const panel = open
    ? createPortal(
        <div className={`${prefixCls}__panel`} ref={panelRef} style={panelStyle}>
          <div
            ref={spectrumRef}
            className={`${prefixCls}__spectrum`}
            style={{ backgroundColor: hueColor }}
            onMouseDown={handleSpectrumMouseDown}
          >
            <div className={`${prefixCls}__spectrum-white`} />
            <div className={`${prefixCls}__spectrum-black`} />
            <div
              className={`${prefixCls}__spectrum-handle`}
              style={{
                left: `${color.s}%`,
                top: `${100 - color.b}%`,
                backgroundColor: hexColor,
              }}
            />
          </div>

          <div className={`${prefixCls}__controls`}>
            <div className={`${prefixCls}__preview`} style={{ backgroundColor: hexColor }} />
            <div className={`${prefixCls}__sliders`}>
              <div
                ref={hueRef}
                className={`${prefixCls}__hue`}
                onMouseDown={handleHueMouseDown}
              >
                <div
                  className={`${prefixCls}__slider-handle`}
                  style={{ left: `${(color.h / 360) * 100}%` }}
                />
              </div>
              {showAlpha && (
                <div
                  ref={alphaRef}
                  className={`${prefixCls}__alpha`}
                  onMouseDown={handleAlphaMouseDown}
                  style={{
                    background: `linear-gradient(to right, transparent, ${hsbToHex({ ...color, a: 1 })})`,
                  }}
                >
                  <div
                    className={`${prefixCls}__slider-handle`}
                    style={{ left: `${color.a * 100}%` }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={`${prefixCls}__input-row`}>
            <button
              type="button"
              className={`${prefixCls}__format-btn`}
              onClick={handleFormatChange}
            >
              {format.toUpperCase()}
            </button>
            <input
              className={`${prefixCls}__hex-input`}
              value={formatColor(color, format)}
              onChange={(e) => {
                const c = parseColor(e.target.value);
                if (!('value' in props)) setColor(c);
                onChange?.(e.target.value);
              }}
            />
          </div>

          {presets && presets.length > 0 && (
            <div className={`${prefixCls}__presets`}>
              {presets.map((preset, i) => (
                <div
                  key={i}
                  className={`${prefixCls}__preset`}
                  style={{ backgroundColor: preset }}
                  onClick={() => handlePresetClick(preset)}
                  title={preset}
                />
              ))}
            </div>
          )}
        </div>,
        document.body
      )
    : null;

  return (
    <div {...otherProps} ref={wrapperRef} className={cls} style={style}>
      <div
        className={`${prefixCls}__trigger`}
        onClick={trigger === 'click' ? toggleOpen : undefined}
        onMouseEnter={trigger === 'hover' ? toggleOpen : undefined}
      >
        {children || (
          <div className={`${prefixCls}__swatch`}>
            <div
              className={`${prefixCls}__swatch-inner`}
              style={{ backgroundColor: hexColor }}
            />
          </div>
        )}
      </div>
      {panel}
    </div>
  );
});

ColorPicker.displayName = 'ColorPicker';
export default ColorPicker;
