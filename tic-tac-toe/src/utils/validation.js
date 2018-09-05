import strings from '~utils/strings';

export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

export const maxLength = value => (value.length > 15 ? 'Value is too long' : undefined);

export const isValidMail = value =>
  RegExp(strings.regex.MAIL_VALIDATATION).test(value) ? undefined : 'Email is invalid';
