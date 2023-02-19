type RecordItem = {
    tags: string[],
    notes: string,
    type: string,
    amount: number,
    createdDate?: Date
}

type Tag = {
    id: string,
    name: string
}