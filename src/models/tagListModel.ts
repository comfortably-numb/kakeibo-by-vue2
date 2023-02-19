const localStorageKeyName = "tagList";
const tagListModel = {
    data: [] as string[],
    fetch(): string[] {
        this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },
    save(): void {
        localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string): string {

        if (this.data.indexOf(name) >= 0) {
            return "duplicated";
        }
        this.data.push(name);
        this.save();
        return "success";
    }

};

export {tagListModel};