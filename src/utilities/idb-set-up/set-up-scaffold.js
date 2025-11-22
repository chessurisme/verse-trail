import Storage from '../storage.js'
import database from '../../config/idb-storage.json'
import getBookNames from './get-book-names.js'
import getChapterCount from './get-chapter-count.js'

async function setUpScaffold() {
        const storage = Storage.getInstance()
        const storeName = database.storeNames[0]

        const isStoragePopulated = await storage.retrieve(storeName)
        if (isStoragePopulated.length > 0) return isStoragePopulated

        const bookNames = getBookNames()
        const chapterCount = getChapterCount()
        const scaffoldData = bookNames.map((bookName, index) => ({
                id: index + 1,
                bookName,
                chapterCount: chapterCount[index],
                chaptersRead: [],
        }))

        for (const record of scaffoldData) {
                await storage.save(storeName, record)
        }

        return scaffoldData
}

export default setUpScaffold
