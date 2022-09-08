import { ReactComponent as Globe } from './../../img/card-icons/internet-icon.svg';
import { ReactComponent as Invoice } from './../../img/card-icons/invoice-icon.svg';
import { ReactComponent as BloodPressure } from './../../img/card-icons/BloodPressure-icon.svg';
import { ReactComponent as RegisterForm } from './../../img/card-icons/RegisterForm-icon.svg';
import { ReactComponent as ToDoList } from './../../img/card-icons/ToDoList-icon.svg';
import { ReactComponent as GetData } from './../../img/card-icons/ToDoList-icon.svg';

export interface IconsType {
    Globe: typeof Globe,
    Invoice: typeof Invoice,
    BloodPressure: typeof BloodPressure,
    RegisterForm: typeof RegisterForm,
    ToDoList: typeof ToDoList,
    GetData: typeof GetData
}


const icons: IconsType ={
    Globe, 
    Invoice, 
    BloodPressure, 
    RegisterForm, 
    ToDoList, 
    GetData
}

export default icons;
