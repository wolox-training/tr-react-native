export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

export const maxLength = value => (value.length > 15 ? 'Value is too long' : undefined);

export const isValidMail = value => (value.endsWith('@wolox.com.ar') ? undefined : 'Email is invalid');
