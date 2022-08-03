import * as Yup from 'yup';

const jobValidation = Yup.object().shape({
    locationTypeId: Yup.number().required('Required'),
    lineOne: Yup.string().min(2).max(50).required('Required'),
    zip: Yup.number().required('Required'),
    stateId: Yup.number().required('Required'),
    latitude: Yup.number().required('Required'),
    longitude: Yup.number().required('Required'),
});

export default jobValidation;
