export function selectBook(book) {
    console.log('A book has been selected:', book.title);
    //need to return an action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}