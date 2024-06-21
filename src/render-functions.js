export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = "";
  books.forEach((book) => {
    const bookDetail = document.createElement("li");
    const img = document.createElement("img");
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = `Title: ${book.title}`;
    const viewAuthorButton = document.createElement("button");
    viewAuthorButton.textContent = `View ${book.author.name}`;
    viewAuthorButton.setAttribute("data-author-url-key", book.author.urlKey);

    bookDetail.appendChild(img);
    bookDetail.appendChild(titleParagraph);
    bookDetail.appendChild(viewAuthorButton);

    bookListEl.append(bookDetail);
  });
};

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = "";
  //   console.log(author);
  //   console.log("Picture URL:", author.pictureUrl);

  const authorName = document.createElement("h2");
  authorName.textContent = author.name;
  const img = document.createElement("img");
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;
  const birth = document.createElement("p");
  birth.textContent = `Born: ${author.birthDate}`;
  const bio = document.createElement("p");
  bio.textContent = author.bio;
  const wikiUrl = document.createElement("a");
  wikiUrl.href = author.wikipediaUrl;
//   console.log(author)
  wikiUrl.textContent = "Wikipedia Link";
  authorInfoEl.append(authorName);
  authorInfoEl.append(img);
  authorInfoEl.append(birth);
  authorInfoEl.append(bio);
  authorInfoEl.append(wikiUrl);
};

export const renderNewUserForm = (newUserFormEl) => {
    // Username input and label
    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'Username';
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('id', 'username');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('placeholder', 'Username');
  
    // IsCool checkbox and label
    const isCoolLabel = document.createElement('label');
    isCoolLabel.setAttribute('for', 'is-cool');
    isCoolLabel.textContent = 'Is this user cool?';
    const isCoolCheckbox = document.createElement('input');
    isCoolCheckbox.setAttribute('type', 'checkbox');
    isCoolCheckbox.setAttribute('id', 'is-cool');
    isCoolCheckbox.setAttribute('name', 'isCool');
    isCoolLabel.appendChild(isCoolCheckbox);
  
    // FavoriteLanguage select dropdown and label
    const favoriteLanguageLabel = document.createElement('label');
    favoriteLanguageLabel.setAttribute('for', 'favorite-language');
    favoriteLanguageLabel.textContent = 'Favorite Language';
    const favoriteLanguageSelect = document.createElement('select');
    favoriteLanguageSelect.setAttribute('id', 'favorite-language');
    favoriteLanguageSelect.setAttribute('name', 'favoriteLanguage');
    // Adding 'None' option
    const noneOption = document.createElement('option');
    noneOption.value = 'None';
    noneOption.textContent = 'None';
    favoriteLanguageSelect.appendChild(noneOption);
    // Other options
    const languages = ['JavaScript', 'Python', 'Ruby'];
    languages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.textContent = lang;
      favoriteLanguageSelect.appendChild(option);
    });
  
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Create User';
  
    // Append elements to form
    newUserFormEl.appendChild(usernameLabel);
    newUserFormEl.appendChild(usernameInput);
    newUserFormEl.appendChild(isCoolLabel); // Checkbox with label
    newUserFormEl.appendChild(favoriteLanguageLabel);
    newUserFormEl.appendChild(favoriteLanguageSelect);
    newUserFormEl.appendChild(submitButton);
  };

export const renderNewUser = (newUserEl, newUser) => {
    newUserEl.innerHTML = ""
    const username = document.createElement("h2");
    username.textContent = newUser.username;
    username.setAttribute("data-user-id", newUser.id)
    // username.dataset.userId = newUser.id;
    newUserEl.append(username);

    const isCool = document.createElement("p")
    isCool.textContent = newUser.isCool ? "The hippest in the house!" : "A real square.";
    newUserEl.append(isCool);

    const favoriteLanguage = document.createElement("p");
    favoriteLanguage.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;
    newUserEl.append(favoriteLanguage);

};
