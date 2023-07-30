export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
};

export type NonSensitivePatient = Omit<Patient, "ssn">;

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}
