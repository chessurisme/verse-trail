import Storage from '../storage'
import getBookData from './get-book-data'
import pushRead from './push-read'
import isRead from './is-read'

async function saveReadChapter(bookId, chapter) {
        const storage = Storage.getInstance()
        const bookData = await getBookData(bookId)

        if (isRead(bookData, chapter)) return

        const updatedChaptersRead = pushRead(bookData, chapter)
        const newBookData = { ...bookData, chaptersRead: updatedChaptersRead }

        await storage.save('ReadChapters', newBookData)

        return newBookData
}

export default saveReadChapter
