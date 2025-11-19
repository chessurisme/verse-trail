import data from '../../config/book-name/en.json'

function getBookNames() {
        // Book names are using English in IDB storage, this will not affected localization
        const bookNames = data.map((book) => book.name)
        return bookNames
}

export default getBookNames
