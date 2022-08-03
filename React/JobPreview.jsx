import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './jobsPropTypes';

const JobPreview = (props) => {
    const { values, isSubmitting, handleSubmit, onBack, backLabel, nextLabel, onNext, cantBack } = props;

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
                        <h3 className="text-center">Job Preview</h3>
                    </Card.Header>
                    <h3 className="text-left">Job Information:</h3>
                    <div className="form-group mt-2">
                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Job Type: </strong>
                                    {props.formData.jobTypeId === "1" && "Full-Time"}
                                    {props.formData.jobTypeId === "2" && "Part-Time"}
                                    {props.formData.jobTypeId === "3" && "Contract"}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Title: </strong>
                                    {props.formData.title}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Description: </strong>
                                    {props.formData.description}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Requirements: </strong>
                                    {props.formData.requirements}
                                </p>
                            </div>
                        </div>
                        <h3 className="text-left">Location Information:</h3>
                        <div className="form-group mt-2">
                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Location Type: </strong>
                                    {props.formData.locationTypeId === '1' && 'Home'}
                                    {props.formData.locationTypeId === '2' && 'Billing'}
                                    {props.formData.locationTypeId === '3' && 'Business'}
                                    {props.formData.locationTypeId === '4' && 'Shipping'}
                                    {props.formData.locationTypeId === '5' && 'Vending Location'}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Address: </strong>
                                    {props.formData.lineOne}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Address 2: </strong>
                                    {props.formData.lineTwo}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>State: </strong>
                                    {props.formData.stateId === '1' && 'Alabama'}
                                    {props.formData.stateId === '2' && 'Alaska'}
                                    {props.formData.stateId === '3' && 'Arizona'}
                                    {props.formData.stateId === '4' && 'California'}
                                    {props.formData.stateId === '5' && 'Colorado'}
                                    {props.formData.stateId === '6' && 'Connecticut'}
                                    {props.formData.stateId === '7' && 'Delaware'}
                                    {props.formData.stateId === '8' && 'Florida'}
                                    {props.formData.stateId === '9' && 'Georgia'}
                                    {props.formData.stateId === '10' && 'Hawaii'}
                                    {props.formData.stateId === '12' && 'Idaho'}
                                    {props.formData.stateId === '13' && 'Illinois'}
                                    {props.formData.stateId === '14' && 'Indiana'}
                                    {props.formData.stateId === '15' && 'Iowa'}
                                    {props.formData.stateId === '16' && 'Kansas'}
                                    {props.formData.stateId === '17' && 'Kentucky'}
                                    {props.formData.stateId === '18' && 'Louisiana'}
                                    {props.formData.stateId === '19' && 'Maine'}
                                    {props.formData.stateId === '19' && 'Maryland'}
                                    {props.formData.stateId === '20' && 'Massachusetts'}
                                    {props.formData.stateId === '21' && 'Michigan'}
                                    {props.formData.stateId === '22' && 'Minnesota'}
                                    {props.formData.stateId === '23' && 'Mississippi'}
                                    {props.formData.stateId === '24' && 'Missouri'}
                                    {props.formData.stateId === '27' && 'Montana'}
                                    {props.formData.stateId === '28' && 'Nebraska'}
                                    {props.formData.stateId === '29' && 'Nevada'}
                                    {props.formData.stateId === '30' && 'New Hampshire'}
                                    {props.formData.stateId === '31' && 'New Jersey'}
                                    {props.formData.stateId === '32' && 'New Mexico'}
                                    {props.formData.stateId === '33' && 'New York'}
                                    {props.formData.stateId === '34' && 'North Carolina'}
                                    {props.formData.stateId === '35' && 'North Dakota'}
                                    {props.formData.stateId === '36' && 'Ohio'}
                                    {props.formData.stateId === '37' && 'Oklahoma'}
                                    {props.formData.stateId === '38' && 'Oregon'}
                                    {props.formData.stateId === '39' && 'Pennsylvania'}
                                    {props.formData.stateId === '40' && 'Rhode Island'}
                                    {props.formData.stateId === '41' && 'South Carolina'}
                                    {props.formData.stateId === '42' && 'South Dakota'}
                                    {props.formData.stateId === '43' && 'Tennessee'}
                                    {props.formData.stateId === '44' && 'Texas'}
                                    {props.formData.stateId === '45' && 'Utah'}
                                    {props.formData.stateId === '46' && 'Vermont'}
                                    {props.formData.stateId === '47' && 'Virginia'}
                                    {props.formData.stateId === '48' && 'Washington'}
                                    {props.formData.stateId === '49' && 'West Virginia'}
                                    {props.formData.stateId === '50' && 'Wisconsin'}
                                    {props.formData.stateId === '51' && 'Arkansas'}
                                    {props.formData.stateId === '52' && 'Wyoming'}

                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Zipcode: </strong>
                                    {props.formData.zip}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Latitude: </strong>
                                    {props.formData.latitude}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Longitude: </strong>
                                    {props.formData.longitude}
                                </p>
                            </div>
                        </div>
                        </div>
                        <h3 className="text-left">Organization Information:</h3>
            <div className="card-body">
                <img 
                src={props.formData.logo}
                className="card-img-center"
                alt="Organization Logo"
                height="230 px"
                width="300px">
                </img>
                <h3 className="card-title my-2"> {props.formData.name} </h3>
            </div>
            <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Organization Type: </strong>
                                    {props.formData.organizationTypeId === '1' && 'Non-profit'}
                                    {props.formData.organizationTypeId === '2' && 'College'}
                                    {props.formData.organizationTypeId === '3' && 'Professional Association'}
                                    {props.formData.organizationTypeId === '4' && 'Social Services'}
                                    {props.formData.organizationTypeId === '5' && 'Homeless Services'}
                                    {props.formData.organizationTypeId === '6' && 'Childrens and Family Services'}
                                    {props.formData.organizationTypeId === '7' && 'Youth Development'}
                                </p>
                            </div>
                        </div>
                        <div className="row p-2">
                        <div className="col-sm-6">
                                <p>
                                    <strong>Organization Headline: </strong>
                                    {props.formData.headline}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Organization Description: </strong>
                                    {props.formData.orgDescription}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Organization Phone: </strong>
                                    {props.formData.phone}
                                </p>
                            </div>
                        </div>
                        <h3>Contact Information:</h3>
                        <div className="row p-2">
                        <div className="col-sm-6">
                                <p>
                                    <strong>Contact Name: </strong>
                                    {props.formData.contactName}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Contact Phone: </strong>
                                    {props.formData.contactPhone}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Contact Email: </strong>
                                    {props.formData.contactEmail}
                                </p>
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
                                <button type="submit" className="btn btn-primary" onClick={onNextClicked}>
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

JobPreview.propTypes = wizardPropTypes.jobPropTypes;

export default withFormik({
    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(JobPreview);
