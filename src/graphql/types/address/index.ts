export type Address = {
  additional_info?: string;
  neighborhood: string;
  zip_code: string;
  created_at: Date;
  updated_at: Date;
  country: string;
  number: string;
  street: string;
  city: string;
  uf: string;
  id: number;
};

export type AddressInput = {
  additional_info?: string;
  neighborhood: string;
  zip_code: string;
  country: string;
  number: string;
  street: string;
  city: string;
  uf: string;
};
