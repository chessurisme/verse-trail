import Reign from 'reign-idb'
import database from '../config/idb-storage.json'

class Storage {
        static #instance

        #dbName = database.name
        #version = database.version
        #storeNames = database.storeNames
        #db = null
        #readyPromise = null

        constructor() {
                if (Storage.#instance) return Storage.#instance

                this.name = this.#dbName
                this.version = this.#version
                this.storeNames = this.#storeNames

                this.#db = new Reign({
                        databaseName: this.#dbName,
                        storeNames: this.storeNames,
                        version: this.#version,
                })

                this.#readyPromise = this.#db.init()

                Storage.#instance = this
        }

        static getInstance() {
                return Storage.#instance ?? new Storage()
        }

        async #ready() {
                await this.#readyPromise
        }

        async save(storeName, data) {
                await this.#ready()
                return this.#db.update(storeName, data)
        }

        async retrieve(storeName) {
                await this.#ready()
                return this.#db.read(storeName)
        }

        async get(storeName, id) {
                await this.#ready()
                return this.#db.get(storeName, id)
        }

        async exists(storeName, id) {
                await this.#ready()
                return this.#db.isExist(storeName, id)
        }

        async delete(storeName, id) {
                await this.#ready()
                await this.#db.delete(storeName, id)
        }

        async clear(storeName) {
                await this.#ready()
                await this.#db.clear(storeName)
        }

        close() {
                this.#db.close()
        }
}

export default Storage
