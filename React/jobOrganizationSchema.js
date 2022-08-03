import * as Yup from "yup";

const jobValidation = Yup.object().shape({
    organizationTypeId: Yup.number().required('Organization Type Required'),
    name: Yup.string().min(2).max(200).required("Name is Required"),
    headline: Yup.string().min(2).max(200).required("Headline is Required"),
    orgDescription: Yup.string(2).min(3).required("Description is Required"), 
    logo: Yup.string().min(2).max(255).required("Logo is Required"),
    phone: Yup.string().min(3).max(50).required("Phone Number is Required"),
    siteUrl: Yup.string().min(3).max(255).required("Site URL is Required"),
})

export default jobValidation;
