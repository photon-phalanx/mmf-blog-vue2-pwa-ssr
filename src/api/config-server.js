var lruCache = require('lru-cache')

let api
if (process.__API__) {
    api = process.__API__
} else {
    api = process.__API__ = {
        api: 'http://localhost:80/api/',
        port: 80,
        timeout: 30000,
        cached: lruCache({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        cachedItem: {}
    }
}

module.exports = api
