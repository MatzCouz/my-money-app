import axios from 'axios'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTabs, selectTab} from '../common/tab/tabActions'
import billingCycleForm from './billingCycleForm';
import billingCycle from './billingCycle';

const BASE_URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}


export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp =>{
                dispatch(init())
            })
    }
}


export function showUpdate(billingCycles) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycles)
    ]
}

export function showDelete(billingCycles) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycles)
    ]
}


export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}