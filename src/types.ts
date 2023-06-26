export type PincodeParams = {
  secretMode: boolean;
  pinCode: string;
  regexChecker?: string;
  results: string[];
  handleResult: (result: string[]) => void;
};

export type PinBoxTypeParams = {
  secretMode: boolean;
  regexChecker: string;
  code: string;
  index: number;
  results: string[];
  handleResult: (result: string[]) => void;
};
