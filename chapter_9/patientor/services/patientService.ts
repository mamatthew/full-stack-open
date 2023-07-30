import patients from "../data/patients";
import { NonSensitivePatient, Patient } from "../types";

const getPatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: Patient) => {
  patients.push(patient);
  return patient;
};

export default {
  getPatients,
  addPatient,
};
