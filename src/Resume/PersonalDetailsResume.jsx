import PersonalDetailsForm from "../Form/PersonalDetailsForm";

const PersonalDetailsResume = ({ PersonalDetailsFormData }) => {
    return (
        <div>
            {PersonalDetailsFormData.resumeName}
            {PersonalDetailsFormData.titleName}

        </div>
    )
}

export default PersonalDetailsResume;