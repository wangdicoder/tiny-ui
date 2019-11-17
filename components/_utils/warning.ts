const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function warning(condition: boolean, message: string, serious = false): void {
  if (!isProduction && condition) {
    const text = `Warning: ${message}`;
    serious ? console.error(text) : console.warn(text);
  }
}
