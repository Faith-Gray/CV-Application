import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";

const FormParent = () => {
    return (
        <div>
            {PersonalDetailsForm}
            {EducationForm}
        </div>
    )
}

export default FormParent;