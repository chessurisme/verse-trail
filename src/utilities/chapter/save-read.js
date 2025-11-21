import Storage from '../storage'
import getBookData from './get-book-data'
import pushRead from './push-read'
import isRead from './is-read'

function saveReadChapter(bookId, chapter) {
        const storage = Storage.getInstance()
        const bookData = getBookData(bookId)

        if (isRead(bookData, chapter)) return

        const updatedChaptersRead = pushRead(bookData, chapter)
        const newBookData = { ...bookData, chaptersRead: updatedChaptersRead }

        storage.save('readChapters', newBookData)

        return newBookData
}

export default saveReadChapter
