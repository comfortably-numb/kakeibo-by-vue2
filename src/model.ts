const localStorageKeyName = "recordList";
const model = {
    fetch() {
        return JSON.parse(localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    },
    save(data: RecordItem[]) {
        localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    }

};

export {model};