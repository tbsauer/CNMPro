import React, { useEffect, useState } from 'react';
import jobLocationSchema from '../../schema/jobs/jobLocationSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './jobsPropTypes';
import lookUpService from '../../services/lookUpService';
import debug from 'sabio-debug';

const _logger = debug.extend('jobLocation');

const JobLocation = (props) => {
    const {
        values,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        onBack,
        backLabel,
        nextLabel,
        onNext,
        cantBack,
    } = props;
    _logger(props, 'Job Location props');

    const [states, setStates] = useState([]);
    const [locationTypes, setLocationTypes]  = useState([]);

    _logger(states, 'new state States');
    _logger(locationTypes, 'new locationType');


    useEffect(() => {
        onChange();
        lookUpService.LookUp(['LocationTypes']).then(onSuccessLocationTypes).catch(onErrorLocationTypes)
        lookUpService.LookUp(['States']).then(onSuccessStates).catch(onErrorStates);
    }, []);

    const onSuccessLocationTypes = (response) =>{
        setLocationTypes((prevState) => {
            let lt = { ...prevState };
            lt = response.item.locationTypes;
            _logger(response, 'TYPES LOG ---------------');
            return lt;
        });
    };

    const onSuccessStates = (response) => {
        setStates((prevState) => {
            let s = { ...prevState };
            s = response.item.states;
            _logger(response, 'TYPES LOG ---------------');
            return s;
        });
    };

    const onErrorLocationTypes = (err) => {
        _logger('Get Location Types error', err);
    };


    const onErrorStates = (err) => {
        _logger('Get Organization Types error', err);
    };

    const mapLocationTypesOptions = (locationType)=>{
    return(<option key={locationType.id} value={locationType.id} type="number">{locationType.name}</option>)
    };

    const mapStateOptions = (state) => {
        return (
            <option key={state.id} value={state.id} type="number">
                {state.name}
            </option>
        );
    };

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
                        <h3 className="text-center">Job Location</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="locationTypeId">Location Type:</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="locationTypeId"
                                        value={values.locationTypeId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select One</option>
                                        {locationTypes.map(mapLocationTypesOptions)}
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="lineOne">Address 1:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="lineOne"
                                        value={values.lineOne}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Address"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="lineTwo">Address 2:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="lineTwo"
                                        value={values.lineTwo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="(Optional)"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="city">City:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter City"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="stateId">State:</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="stateId"
                                        value={values?.stateId || 0}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select a State</option>
                                        {states?.map(mapStateOptions)}
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="zip">Zipcode:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Zipcode"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="latitude">Latitude:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="latitude"
                                        value={values.latitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Latitude"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="longitude">Longitude:</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="longitude"
                                        value={values.longitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Longitude"
                                        className="form-control"
                                    />
                                </div>
                            </div>
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
                                    className="btn btn-primary"
                                    disabled={
                                        !values.locationTypeId ||
                                        Boolean(errors.locationTypeId) ||
                                        !values.lineOne ||
                                        Boolean(errors.lineOne) ||
                                        !values.zip ||
                                        Boolean(errors.zip) ||
                                        !values.stateId ||
                                        Boolean(errors.stateId) ||
                                        !values.latitude ||
                                        Boolean(errors.latitude) ||
                                        !values.longitude ||
                                        Boolean(errors.longitude)
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

JobLocation.propTypes = wizardPropTypes.jobPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        locationTypeId: props.formData.locationTypeId,
        lineOne: props.formData.lineOne,
        lineTwo: props.formData.lineTwo,
        city: props.formData.city,
        zip: props.formData.zip,
        stateId: props.formData.stateId,
        stateName: props.formData.stateName || '',
        latitude: props.formData.latitude,
        longitude: props.formData.longitude,
    }),

    validationSchema: jobLocationSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(JobLocation);
