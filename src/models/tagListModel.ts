const localStorageKeyName = "tagList";
const tagListModel = {
    data: [] as Tag[],
    fetch(): Tag[] {
        this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },
    save(): void {
        localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string): string {

        const names = this.data.map(tag => tag.name);
        if (names.indexOf(name) >= 0) {
            return "duplicated";
        }
        this.data.push({id: name, name: name});
        this.save();
        return "success";
    }
};

export {tagListModel};