export type TCategory = {
  id: number;
  name: string;
  image: string;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
};

export type TBadResponse = {
  statusCode: number;
  message: string;
  error: string;
};

export type THeaderLinks = {
  name: string;
  path: string;
};

export type TCity = {
  value: string;
  title: string;
};

export type TFormStore = {
  userName?: string;
  email?: string;
  phoneNumber?: string;
  birthday?: string;
  city?: string;
  gender?: string;
  cashback?: string[];
  file?: FileList;
};
