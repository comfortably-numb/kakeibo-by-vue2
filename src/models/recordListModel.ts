const localStorageKeyName = "recordList";
const recordListModel = {
    fetch(): RecordItem[] {
        return JSON.parse(localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    },
    save(data: RecordItem[]): void {
        localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },
    clone(data: RecordItem[] | RecordItem):RecordItem {
        return JSON.parse(JSON.stringify(data));
    }

};

export {recordListModel};