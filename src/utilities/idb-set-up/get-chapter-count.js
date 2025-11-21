import chapterCountData from '../../config/chapter-count.json'

function getChapterCount() {
        const chapterCounts = chapterCountData.map(
                (count) => count.chapterCount
        )
        return chapterCounts
}

export default getChapterCount
