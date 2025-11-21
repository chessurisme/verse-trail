function pushRead(bookData, chapter) {
        const chaptersRead = bookData.chaptersRead || []
        const updatedChaptersRead = [...chaptersRead, Number(chapter)].sort(
                (a, b) => a - b
        )
        return updatedChaptersRead
}

export default pushRead
