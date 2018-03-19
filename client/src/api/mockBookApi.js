import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    id: 'test',
    title: 'JavaScript The good parts',
    authorId: 'douglas-crockford',
    pages: '250',
    category: 'programming',
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = course => replaceAll(course.title, ' ', '-');

class BookApi {
  static getAllBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(bookFromForm) {
    const book = Object.assign({}, bookFromForm); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (book.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (book.id) {
          const existingCourseIndex = books.findIndex(a => a.id === book.id);
          books.splice(existingCourseIndex, 1, book);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's
          // for new courses in a real app.
          // Cloning so copy returned is passed by value rather
          // than by reference.
          book.id = generateId(book);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfCourseToDelete = books
                .findIndex(book => book.id === bookId);
        books.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
