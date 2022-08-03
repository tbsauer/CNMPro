import * as Yup from 'yup';

const jobValidation = Yup.object().shape({
    jobTypeId: Yup.number().required('Required'),
    title: Yup.string().min(2).max(50).required('Required'),
    description: Yup.string().min(2).max(1000).required('Required'),
    requirements: Yup.string().min(2).max(1000).required('Required'),
});

export default jobValidation;
