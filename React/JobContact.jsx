import React, { useEffect} from 'react';
import jobContactSchema from '../../schema/jobs/jobContactSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './jobsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('JobContact');

const JobContact = (props) => {
    const {         values,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        onBack,
        backLabel,
        nextLabel,
        onNext,
        cantBack, } = props;

    _logger(props, 'props');

    useEffect(() => {
        onChange();
    }, [values]);

    const onChange = () => {
        props.onChange(values);
    };

    const onNextClicked = () => {
        onNext(values);
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Contact Information</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <label htmlFor="contactName">Contact Name</label>
                        <div className="form-group my-2">
                            <Form.Control
                                name="contactName"
                                value={values.contactName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                placeholder="Enter Your Name"
                                className="form-control"
                            />
                        </div>
                        <label htmlFor="contactEmail">Contact Email</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="contactEmail"
                                value={values.contactEmail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                                placeholder="Enter A Valid Email Address"
                            />
                        </div>
                        <label htmlFor="contactPhone">Contact Phone Number</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="contactPhone"
                                value={values.contactPhone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                                placeholder="(xxx)-xxx-xxx - Enter Your Phone Number"
                            />
                        </div>
                        <div className="button-group pt-3 row">
                            <div className="col-sm-1">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onBack}
                                    disabled={isSubmitting || cantBack}>
                                    {backLabel}
                                </button>
                            </div>
                            <div className="col-sm-1">
                            <button
                                type="submit"
                                className="btn btn-primary ml-2"
                                disabled={
                                    !values.contactName ||
                                    Boolean(errors.contactName) ||
                                    !values.contactPhone ||
                                    Boolean(errors.contactPhone) ||
                                    !values.contactEmail ||
                                    Boolean(errors.contactEmail)
                                }
                                onClick={onNextClicked}>
                                {nextLabel}
                            </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

JobContact.propTypes = wizardPropTypes.jobPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        contactName: props.formData.contactName,
        contactEmail: props.formData.contactEmail,
        contactPhone: props.formData.contactPhone,
    }),

    validationSchema: jobContactSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(JobContact);
