import appendBookNames from './js/storage/append-book'

appendBookNames()
console.log('Verse Trail initialized')

window.addEventListener('beforeunload', () => Storage.getInstance().close())
