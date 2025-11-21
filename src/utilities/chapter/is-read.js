function isRead(bookData, chapter) {
        const chaptersRead = bookData.chaptersRead || []
        return chaptersRead.includes(chapter)
}

export default isRead
