export enum DogType {
  LOST = "lost",
  FOUND = "found",
}

export interface QueryPayload {
  type: DogType;
  img: Blob;
}

export interface ReportDogPayload {
  type: DogType;
  img: Blob;
  contactName: string;
  contactPhone: string;
  breed?: string;
  contactEmail?: string;
  contactAdress?: string;
}
