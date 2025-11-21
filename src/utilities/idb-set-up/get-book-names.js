import bookData from '../../config/book-name/en.json'

function getBookNames() {
        const bookNames = bookData.map((book) => book.name)
        return bookNames
}

export default getBookNames
