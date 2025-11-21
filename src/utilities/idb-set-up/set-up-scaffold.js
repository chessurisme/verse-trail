import Storage from '../storage.js'
import database from '../../config/idb-storage.json'
import getBookNames from './get-book-names.js'
import getChapterCount from './get-chapter-count.js'

async function setUpScaffold() {
        const storage = Storage.getInstance()
        const bookNames = getBookNames()
        const chapterCount = getChapterCount()
        const storeName = database.storeNames[0]
        const scaffoldData = bookNames.map((bookName, index) => ({
                id: index + 1,
                bookName,
                chapterCount: chapterCount[index],
                readChapters: [],
        }))

        for (const record of scaffoldData) {
                await storage.save(storeName, record)
        }

        return scaffoldData
}

export default setUpScaffold
