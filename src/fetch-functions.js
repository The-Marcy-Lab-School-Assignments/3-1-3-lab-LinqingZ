export const getFirstThreeFantasyBooks = () => {
  return fetch("https://openlibrary.org/subjects/fantasy.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to get fantasy books");
      }
      return response.json();
    })
    .then((data) => {
        const bookData = []
        // console.log(data.works.slice(0, 3))
        data.works.slice(0, 3).forEach(book => {
            bookData.push({
                title: book.title,
                author: {
                  name: book.authors[0].name,
                  urlKey: book.authors[0].key,
                },
                coverUrl: `https://covers.openlibrary.org/a/id/${book.cover_id}-M.jpg`
              })
        });;
        return bookData
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });
};

export const getAuthor = (authorUrlKey) => {
  const url = `https://openlibrary.org${authorUrlKey}.json`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to get author");
      }
      return response.json();
    })
    .then((data) =>{
        // console.log(data)
        const picKey = data.photos.length >1 ? data.photos[0] : data.photos;
        return {
            birthDate: data.birth_date,
            bio: data.bio,
            wikipediaUrl: data.wikipedia,
            name: data.name,
            pictureUrl: `https://covers.openlibrary.org/a/id/${picKey}-M.jpg`,
        }
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });
};

export const createNewUser = async (user) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create new user');
    }
    return response.json();
  })
  .then(newUser => {
    return newUser;
  })
  .catch(error => {
    console.warn(error.message);
    return null;
  });
};
