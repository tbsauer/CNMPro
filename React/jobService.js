import axios from 'axios';
// import debug from 'sabio-debug';
import * as helper from './serviceHelpers';
import { API_HOST_PREFIX } from './serviceHelpers';

// const _logger = debug.extend('Job Service')

const add = (payload) => {
    const config = {
        method: 'POST',
        url: `${API_HOST_PREFIX}/api/jobs`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const update = (payload, id) => {
    const config = {
        method: 'POST',
        url: `${helper.API_HOST_PREFIX}/api/jobs/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then((response) => {
        return {
            id: response.data.item,
            ...payload,
        };
    });
}

const lookUp = (payload) => {
    const config = {
        method: 'POST',
        url: process.env.REACT_APP_API_HOST_PREFIX + '/api/lookups',
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
  };


const getById = (id) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/jobs/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getPaginated = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/jobs/pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getCreatedBy = (pageIndex, pageSize, createdBy) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/createdby?pageIndex=${pageIndex}&pageSize=${pageSize}&createdBy=${createdBy}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getJobsSearch = (pageIndex, pageSize, query) => {
    const config = {
        method: 'GET',
        url: `${API_HOST_PREFIX}/api/jobs/search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess);
};

export { add, update, lookUp, getById, getPaginated, getCreatedBy, getJobsSearch };
