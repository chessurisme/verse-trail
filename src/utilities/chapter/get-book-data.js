import Storage from '../storage'

function getBookData(bookId) {
        const storage = Storage.getInstance()
        const storeName = 'readChapters'

        return storage.get(storeName, bookId)
}

export default getBookData
