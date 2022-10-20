export type TGood = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type THeaderLinks = {
  name: string;
  path: string;
};

export type TCity = {
  value: string;
  title: string;
};

export type TErrorVal = {
  error?: boolean;
  helperText?: string;
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
