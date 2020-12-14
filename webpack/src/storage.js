export default class Storage {
    save(key, data) {
        localStorage.setItem(key, data)
    }
}
