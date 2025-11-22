import setUpScaffold from './utilities/idb-set-up/set-up-scaffold'
import saveReadChapter from './utilities/chapter/save-read'
import getBookData from './utilities/chapter/get-book-data'

window.addEventListener('DOMContentLoaded', () => {
        setUpScaffold()
        saveReadChapter('1', 1)
        // saveReadChapter('1', 2)
        // saveReadChapter('1', 3)

        // const bookData = getBookData('1')
        // console.log('Book Data of book 1: ', bookData)
})
