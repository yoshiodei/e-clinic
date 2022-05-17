export const addNewPatient = (obj) =>{
    return {
        type: 'ADD_NEW_PATIENT',
        payload: obj,
    } 
}

export const addToConsult = (obj, array) => {
    return {
        type: 'ADD_TO_CONSULTATION',
        payload: obj,
        patientList: array
    }
}

export const addToExam = (obj, array) => {
    return {
        type: 'ADD_TO_EXAM',
        payload: obj,
        patientList: array
    }
}

export const updateConsult = (array) => {
    return {
        type: 'UPDATE_CONSULT',
        payload: array
    }
}

export const updateExam = (obj, array) => {
    return {
        type: 'UPDATE_EXAM',
        payload: obj,
        patientList: array
    }
}

export const addToAccount = (obj, array) => {
    return {
        type: 'ADD_TO_ACCOUNT',
        payload: obj,
        patientList: array
    }
}

export const addToPharmacy = (obj, array) => {
    return {
        type: 'ADD_TO_PHARMACY',
        payload: obj,
        patientList: array
    }
}

export const addToRecords = (obj, array, tallyArray) => {
    return {
        type: 'ADD_TO_RECORDS',
        payload: obj,
        patientList: array,
        patienTallyList: tallyArray
    }
}

export const setAccountStatus = () => {
    return {
        type: 'SET_ACCOUNT_STATUS',
    }
}

export const setConsultationStatus = () => {
    return {
        type: 'SET_CONSULTATION_STATUS',
    }
}

export const setExaminationStatus = () => {
    return {
        type: 'SET_EXAMINATION_STATUS',
    }
}

export const setPatientsStatus = () => {
    return {
        type: 'SET_PATIENTS_STATUS',
    }
}

export const setPharmacyStatus = () => {
    return {
        type: 'SET_PHARMACY_STATUS',
    }
}

export const setRecordStatus = () => {
    return {
        type: 'SET_RECORD_STATUS',
    }
}


