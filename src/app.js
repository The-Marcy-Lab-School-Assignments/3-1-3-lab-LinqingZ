import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from "./render-functions.js";
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from "./fetch-functions.js";

export default async function app(appDiv) {
  const bookListEl = document.createElement("ul");
  bookListEl.id = "book-list";
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement("div");
  authorInfoEl.id = "author-info";
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement("div");
  newUserEl.id = "new-user";
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement("form");
  newUserFormEl.id = "new-user-form";
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;
  renderNewUserForm(newUserFormEl)

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();
  // console.log(books);

  // render out the books
  // renderBookList
  renderBookList(bookListEl, books);

  

  bookListEl.addEventListener("click", async (event) => {
    // get the dataset from the button
    // console.log(event.target.dataset.authorUrlKey);
    // const authorUrlKey = event.target.getAttribute("data-author-url-key");
    const authorUrlKey = event.target.dataset.authorUrlKey;
    const author = await getAuthor(authorUrlKey);
    renderAuthorInfo(authorInfoEl, author);
  });
  // console.log(newUserFormEl)
  newUserFormEl.addEventListener("submit", async (event) => {
    
    event.preventDefault(); // Prevent default form submission behavior
    // Extract form data
    const formData = new FormData(event.target);
    const user = {
      username: formData.get("username"), // Assuming the input name is 'username'
      isCool: formData.get("isCool") === "on", // Convert checkbox value to boolean
      favoriteLanguage: formData.get("favoriteLanguage"), // Assuming the input name is 'favoriteLanguage'
    };

    // Call createNewUser with the form data
    
    const newUser = await createNewUser(user);
    // console.log('newUser', newUser)

    // If user creation was successful, render the new user
    if (newUser) {
      renderNewUser(newUserEl, newUser);
    }
  });
}
