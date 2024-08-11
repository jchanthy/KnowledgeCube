import Modal from "../../../components/modalForm.js";

const EditSkill = () => {
    const handleSave = () => {
        console.log('Data saved');
    };

    const handleCancel = () => {
        console.log('Modal closed');
    };
    return (
        <>

            <div>
                <Modal
                    title="My Modal"
                    onSave={handleSave}
                    onCancel={handleCancel}
                >
                    {/* Modal content */}
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                </Modal>

            </div>
        </>
    )
}
export default EditSkill;