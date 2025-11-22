import Storage from '../storage'
import database from '../../config/idb-storage.json'

async function getBookData(bookId) {
        const storage = Storage.getInstance()
        const storeName = database.storeNames[0]

        return await storage.get(storeName, bookId)
}

export default getBookData
