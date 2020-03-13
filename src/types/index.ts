export interface Movie {
  id: number;
  title: string;
  date: string;
  videoUrl: string;
  imageUrl: string;
  imageFileName: string;
  imageFileNameMob: string;
  imageFileNameDesktop: string;
  extention: string;
  imageMobile: string;
  imageDesktop: string;
  videoPath: string;
  genre: Array<string>;
  cast: Array<string>;
  description: string;
}
