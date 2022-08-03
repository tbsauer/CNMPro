import React, { useState } from 'react';
import Loki from 'react-loki'
import debug from 'sabio-debug';
import JobName from './JobName';
import JobContact from './JobContact';
import JobLocation from './JobLocation';
import JobOrganization from './JobOrganization';
import JobFinish from './JobFinish';
import JobPreview from './JobPreview';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import {  FaClipboardCheck, FaPhoneAlt, FaPenAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { ImHome2 } from 'react-icons/im';
import {toastr} from 'react-toastr';
import * as jobServices from '../../services/jobsService';
import './jobs.css';

const _logger = debug.extend('JobAdd');

function AddJob() {
    const [formData, setFormData] = useState({
        jobTypeId: '',
        title: '',
        description: '',
        requirements: '',
        organizationTypeId: '',
        name: '', 
        headline: '', 
        orgDescription: '',
        logo: '', 
        phone: '',
        siteUrl: '',
        locationTypeId: '',
        lineOne: '',
        lineTwo: '',
        city: '',
        zip: '',
        stateId: '',
        latitude: '',
        longitude: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        isActive: true,
        createdBy: 30,
        modifiedBy: 30,
    });
    _logger(formData, 'HookState Test');

    const onChange = (values) => {
        _logger(values, 'onChange');
        setFormData((prevState) => {
            const sd = { ...prevState, ...values };
            return sd;
        });
    };

    const onFinish = () => {
        _logger('Finish button clicked', formData);        
        jobServices.add(formData).then(onAddJobSuccess).catch(onAddJobError);
    };

    const onAddJobSuccess = (response) => {
        _logger(response, 'onAddListingSuccess');
        toastr.success('You Have Added A Job!');
    };

    const onAddJobError = (error) => {
        _logger(error, 'Could Not Add Job');
        toastr.warn('Could Not Add Job, Please Try Again');
    };


    const wizardSteps = [
        {
            label: 'Step 1',
            icon: <FaPenAlt className="mt-2 text-center" />,
            component: <JobName formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 2',
            icon: <FaMapMarkedAlt className="mt-2 text-center" />,
            component: <JobLocation formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 3',
            icon: <ImHome2 className="mt-2 text-center" />,
            component: <JobOrganization formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 4',
            icon: <FaPhoneAlt className="mt-2 text-center" />,
            component: <JobContact formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 5',
            icon: <BsFileEarmarkTextFill className="mt-2 text-center" />,
            component: <JobPreview formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 6',
            icon: <FaClipboardCheck className="mt-2" />,
            component: <JobFinish formData={formData} onChange={onChange} />,
        },
    ];

    return (
        <React.Fragment>
            <div className="jobWizard">
                <Loki steps={wizardSteps} onNext={onChange} onBack={onChange} onFinish={onFinish} noActions/>
            </div>
        </React.Fragment>
    );
}

export default AddJob;
