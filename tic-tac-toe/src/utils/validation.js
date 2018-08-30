export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 4 characters' : undefined);

export const maxLength = value => (value.length > 15 ? 'Value is too long' : undefined);

export const isValidMail = value => (value.endsWith('@wolox.com.ar') ? undefined : 'Only for wolox');

export const asyncValidate = values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  return sleep(1000).then(() => {
    if (['definir?????'].includes(values.username)) {
      return Promise.reject({
        username: 'Username already taken'
      });
    }
  });
};
