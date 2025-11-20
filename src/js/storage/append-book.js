import Storage from '../../utilities/storage'
import getBookNames from './get-book-names'

function appendBookNames() {
        const storage = Storage.getInstance()
        const bookNames = getBookNames()

        bookNames.forEach(async (name, index) => {
                const exists = await storage.exists('ReadChapters', name)

                if (exists) return

                await storage.save('ReadChapters', {
                        id: index + 1, // 1-indexed
                        bookName: name,
                        chaptersRead: [],
                })
        })
}

export default appendBookNames
