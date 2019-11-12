const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function warning(condition: boolean, message: string, serious: boolean = false) {
    if (!isProduction && condition) {
        const text: string = `Warning: ${message}`;
        serious ? console.error(text) : console.warn(text);
    }
}
