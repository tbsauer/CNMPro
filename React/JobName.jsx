import React, { useEffect, useState } from 'react';
import jobNameSchema from '../../schema/jobs/jobNameSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as jobService from '../../services/jobsService';
import * as wizardPropTypes from './jobsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('JobName');

const JobName = (props) => {
    const { values, errors, handleChange, handleBlur, handleSubmit, nextLabel, onNext } = props;

    _logger(props, 'props');

    useEffect(() => {
        onChange();
        jobService.lookUp(['JobTypes']).then(onSuccessJobTypes).catch(onErrorJobTypes);
    }, []);

    const [jobType, setJobType] = useState([]);
    _logger(jobType, 'new JobType');

    const onChange = () => {
        props.onChange(values);
    };

    const onSuccessJobTypes = (response) =>{
        setJobType((prevState) => {
            let jobType = {...prevState} 
            jobType = response.data.item.jobTypes
            _logger(response, "TYPES LOG ---------------")
            return jobType
        })
     };

     const mapJobTypesOptions = (jobType)=>{
        return(<option key={jobType.id} value={jobType.id} type="number">{jobType.name}</option>)
    };


     const onErrorJobTypes = (err) => {
        _logger("Get Job Types error", err)
    };

    const onNextClicked = () => {
        onNext(values);
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Create a Job</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                    <div className="col-sm-6">
                                <label htmlFor="jobTypeId">Job Type:</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="jobTypeId"
                                        value={values?.jobTypeId || 0}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select One</option>
                                        {jobType.map(mapJobTypesOptions)}
                                    </Form.Select>
                                </div>
                            </div>
                        <label htmlFor="title">Title:</label>
                        <div className="form-group my-2">
                            <Form.Control
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                placeholder="Enter Title"
                                className="form-control"
                            />
                        </div>
                        <label htmlFor="description">Description:</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={8}
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                            />
                        </div>
                        <label htmlFor="requirements">Requirements:</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="requirements"
                                value={values.requirements}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                            />
                        </div>
                        <div className="button-group pt-3">
                            <button
                                type="submit"
                                className="btn btn-primary ml-2"
                                disabled={
                                    !values.jobTypeId ||
                                    Boolean(errors.jobTypeId) ||
                                    !values.title ||
                                    Boolean(errors.title) ||
                                    !values.description ||
                                    Boolean(errors.description) ||
                                    !values.requirements ||
                                    Boolean(errors.requirements)
                                }
                                onClick={onNextClicked}>
                                {nextLabel}
                            </button>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

JobName.propTypes = wizardPropTypes.jobPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        jobTypeId: props.formData.jobTypeId,
        title: props.formData.title,
        description: props.formData.description,
        requirements: props.formData.requirements,
    }),

    validationSchema: jobNameSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(JobName);
