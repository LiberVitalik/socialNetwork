export interface MockUserDataType {
    id: string,
    active: boolean,
    age: number,
    friends?: {
        id: number,
        name: string
    },
    gender?: string,
    name: string,
    picture: string,
    status: boolean
}