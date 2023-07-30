import { Gender, Patient } from "../types";
import { v1 as uuid } from "uuid";

const toNewPatientEntry = (object: unknown): Patient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing object");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient: Patient = {
      id: uuid(),
      name: parseField(object.name),
      dateOfBirth: parseField(object.dateOfBirth),
      ssn: parseField(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseField(object.occupation),
    };

    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

const isGender = (gender: string): gender is Gender => {
  return Object.keys(Gender)
    .map((v) => v.toString())
    .includes(gender);
};

const parseField = (field: unknown): string => {
  if (!field || !isString(field)) {
    throw new Error("Incorrect or missing field");
  }

  return field;
};
export default toNewPatientEntry;
