import { ReactComponent as Globe } from './../../img/card-icons/internet-icon.svg';
import { ReactComponent as Invoice } from './../../img/card-icons/invoice-icon.svg';
import { ReactComponent as BloodPressure } from './../../img/card-icons/BloodPressure-icon.svg';
import { ReactComponent as RegisterForm } from './../../img/card-icons/RegisterForm-icon.svg';
import { ReactComponent as ToDoList } from './../../img/card-icons/ToDoList-icon.svg';
import { ReactComponent as GetData } from './../../img/card-icons/ToDoList-icon.svg';
import { ReactComponentElement } from 'react';

export enum IconName {
    Globe = 'Globe',
    Invoice = 'Invoice',
    BloodPressure = 'BloodPressure',
    RegisterForm = 'RegistrationForm',
    ToDoList = 'ToDoList',
    GetData = 'GetData'
}

export const icons = {
    Globe,
    Invoice,
    BloodPressure,
    RegisterForm,
    ToDoList,
    GetData
}

// export {Globe, Invoice, BloodPressure, RegisterForm, ToDoList, GetData};