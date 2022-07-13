import React, {useState} from "react";

//components
import FormFieldInput from "./FormFieldInput";

const Form = ({handleFormSubmit, formFields}) => {
    const [formValues, setFormValues] = useState({});

    const handleFormValuesChange = (name, value) => { //passed down to child     components
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if(handleFormSubmit) {
            handleFormSubmit(formValues);
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            {formFields.map((fieldDetails) => (
                <FormFieldInput
                    key={fieldDetails.fieldName}
                    handleFieldChange={handleFormValuesChange}
                    {...fieldDetails}
                />
                ))}
                <div className="control">
                    <button className="button is-primary">Sign up</button>
                </div>
        </form>
    );
};

export default Form;