import { ReactComponent as Globe } from './../../img/card-icons/internet-icon.svg';
import { ReactComponent as RegisterForm } from './../../img/card-icons/RegisterForm-icon.svg';
import { ReactComponent as ToDoList } from './../../img/card-icons/ToDoList-icon.svg';
import { ReactComponent as GetData } from './../../img/card-icons/GetData-icon.svg';
import { ReactComponent as Shop } from './../../img/card-icons/e-commerse-icon.svg';
import { ReactComponent as BloodPressure } from './../../img/card-icons/BloodPressure-icon.svg';

export interface IconsType {
	Globe: typeof Globe;
	Shop: typeof Shop;
	RegisterForm: typeof RegisterForm;
	ToDoList: typeof ToDoList;
	GetData: typeof GetData;
	BloodPressure: typeof BloodPressure;
}

const icons: IconsType = {
	Globe,
	Shop,
	RegisterForm,
	ToDoList,
	GetData,
	BloodPressure,
};

export default icons;
