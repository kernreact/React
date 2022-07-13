import React, { useState } from 'react'

const FormFieldInput = ({
    label,
    type,
    fieldName,
    placeholder,
    helpText,
    required,
    handleFieldChange
}) => {
    const [value, setValue] = useState('');

    const handleOnInputChange = e => {
        setValue(e.target.value);

        if(handleFieldChange) { //check if functions exists
            handleFieldChange(e.target.name, e.target.value);
        }
    };

    return (
        <div className='field'>
            <label className='label'>{label}</label>
            <div className='control'>
                <input
                    className='input'
                    type={type}
                    placeholder={placeholder}
                    name={fieldName}
                    value={value}
                    onChange={handleOnInputChange}
                    required={required || false}
                />
            </div>
            {
                helpText &&
                <p className='help'>{helpText}</p>
            }
        </div>
    );
};

export default FormFieldInput;