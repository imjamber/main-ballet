export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface RegistrationFormData {
  studentFirstName: string
  studentLastName: string
  studentAge: string
  classType: string
  parentFirstName: string
  parentLastName: string
  email: string
  phone: string
  studio: string
  medicalNotes: string
  hearAboutUs: string
}

export interface Studio {
  name: string
  url: string | null
  day: string
}

export interface FacultyMember {
  name: string
  role: string
}
