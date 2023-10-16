export enum DogStatus {
    LOST = "lost", 
    FOUND = "found"
}

export interface QueryPayload extends FormData {
    append(type: DogStatus, img: Blob): void
}