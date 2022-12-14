import PropTypes from 'prop-types';

const jobPropTypes = {
    formData: PropTypes.shape({
        jobTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        requirements: PropTypes.string.isRequired,
        organizationTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
        orgDescription: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        locationTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        lineOne: PropTypes.string.isRequired,
        lineTwo: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        stateId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        contactName: PropTypes.string.isRequired,
        contactPhone: PropTypes.string.isRequired,
        contactEmail: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        createdBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        modifiedBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    values: PropTypes.shape({
        jobTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        requirements: PropTypes.string.isRequired,
        organizationTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
        orgDescription: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        locationTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        lineOne: PropTypes.string.isRequired,
        lineTwo: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        stateId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        contactName: PropTypes.string.isRequired,
        contactPhone: PropTypes.string.isRequired,
        contactEmail: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        createdBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        modifiedBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    touched: PropTypes.shape({
        jobTypeId: PropTypes.bool,
        title: PropTypes.bool,
        description: PropTypes.bool,
        requirements: PropTypes.bool,
        organizationTypeId: PropTypes.bool,
        name: PropTypes.bool,
        headline: PropTypes.bool,
        orgDescription: PropTypes.bool,
        logo: PropTypes.bool,
        phone: PropTypes.bool,
        siteUrl: PropTypes.bool,
        locationTypeId: PropTypes.bool,
        lineOne: PropTypes.bool,
        lineTwo: PropTypes.bool,
        city: PropTypes.bool,
        zip: PropTypes.bool,
        stateId: PropTypes.bool,
        latitude: PropTypes.bool,
        longitude: PropTypes.bool,
        contactName: PropTypes.bool,
        contactPhone: PropTypes.bool,
        contactEmail: PropTypes.bool,
        isActive: PropTypes.bool,
        createdBy: PropTypes.bool,
        modifiedBy: PropTypes.bool,
    }),

    errors: PropTypes.shape({
        jobTypeId: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        requirements: PropTypes.string,
        organizationTypeId: PropTypes.string,
        name: PropTypes.string,
        headline: PropTypes.string,
        orgDescription: PropTypes.string,
        logo: PropTypes.string,
        phone: PropTypes.string,
        siteUrl: PropTypes.string,
        locationTypeId: PropTypes.string,
        lineOne: PropTypes.string,
        lineTwo: PropTypes.string,
        city: PropTypes.string,
        zip: PropTypes.string,
        stateId: PropTypes.string,
        latitude: PropTypes.string,
        longitude: PropTypes.string,
        contactName: PropTypes.string,
        contactPhone: PropTypes.string,
        contactEmail: PropTypes.string,
        isActive: PropTypes.string,
        createdBy: PropTypes.string,
        modifiedBy: PropTypes.string,
    }),

    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    nextLabel: PropTypes.string,
    backLabel: PropTypes.string,
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    cantBack: PropTypes.bool.isRequired,
};

export { jobPropTypes };
