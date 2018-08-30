export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 4 ? 'Value must be at least 4 characters' : undefined);

export const maxLength = value => (value.length > 10 ? 'Value is too long' : undefined);

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
