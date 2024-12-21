export interface IPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  thumbHash?: string;
  width?: number;
  height?: number;
}

export interface IPhotosResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: IPhoto[];
  };

  stat: string;
}
