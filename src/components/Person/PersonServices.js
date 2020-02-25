const apiUrl = 'https://api.github.com/users/';

export const getUser = async user => {
  return fetch(`${apiUrl}${user}`)
    .then(async response => {
      const result = await response.json();
      const person = {
        avatar: result.avatar_url,
        name: result.name,
        location: result.location,
      };
      return person;
    })
    .catch(e => {
      return 'error';
    });
};
