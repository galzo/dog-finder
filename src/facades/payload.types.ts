export enum DogStatus {
    LOST = "lost", 
    FOUND = "found"
}

export interface QueryPaylad {
    type: DogStatus,
    img: string
}