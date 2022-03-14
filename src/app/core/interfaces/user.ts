export interface ILogin {
  email: string;
  password: string;
}

export interface IOnboarding {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  Phone?: string;
  email?: string;
  DOB?: string;
  password?: string;
  ref_code?: string;
  accountType?: string;
  companyType: string;
  BVN?: string;
  hasBVN?: boolean;
  isVrifiedInfo?: boolean;
  stage?: number;
  isFinal?: false;
  image?: string;
}
