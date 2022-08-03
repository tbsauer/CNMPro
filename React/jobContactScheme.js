import * as Yup from 'yup';

const jobValidation = Yup.object().shape({
    contactName: Yup.string().min(2).max(50).required('Required'),
    contactEmail: Yup.string().min(2).max(50).required('Required'),
    contactPhone: Yup.string().min(2).max(50).required('Required'),
});

export default jobValidation;
