import HeaderForm from "../Form/HeaderForm";

function HeaderResume() {
    const headerFormElements = HeaderForm.map(input => {
        return <HeaderForm resumeName={headerFormData.resumeName} />
    })
}

export default HeaderResume;