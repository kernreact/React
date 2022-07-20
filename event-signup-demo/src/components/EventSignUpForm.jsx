import React, { useState } from "react";
import { connect } from 'react-redux';

// actions
import { addEventAttendee } from '../reducers/eventReducer';

// components
import EventDetails from './EventDetails';

const _baseFormFields = {
    name: '',
    email: '',
    number: '',
};

const EventSignUpForm = ({ addEventAttendee }) => {
    const [signUpComplete, setSignUpComplete] = useState(false);
    const [formFields, setFormFields] = useState(_baseFormFields);

    const handleOnChange = evt => {
        setFormFields({
            ...formFields,
            [evt.target.id]: evt.target.value,
        });
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();

        addEventAttendee({...formFields});
        setSignUpComplete(true);
    };

    const resetForm = () => {
        setFormFields({..._baseFormFields});
        setSignUpComplete(false);
    };

    return (
        <>
            <EventDetails />
            <div className="box">
                {
                    !signUpComplete && (
                        <form onSubmit={handleFormSubmit}>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">From</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="Name" id="name" value={formFields.name} onChange={handleOnChange} />
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control is-expanded">
                                            <input className="input" type="email" placeholder="email" id="email" value={formFields.email} onChange={handleOnChange} />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label"></div>
                                <div className="field-body">
                                    <div className="field is-expanded">
                                        <div className="field has-addons">
                                            <p className="control">
                                                <a className="button is-static" href="#nogo">
                                                    +44
                                                </a>
                                            </p>
                                            <p className="control is-expanded">
                                                <input className="input" type="tel" placeholder="Your phone number" id="number" value={formFields.number} onChange={handleOnChange} />
                                            </p>
                                        </div>
                                        <p className="help">Do not enter the first zero</p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label"></div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary">
                                                Sign me up!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }
                {
                    signUpComplete && (
                        <>
                            <p className="is-attribute is-size-4 has-text-primary">
                                Thanks for signing up! We'll see you soon
                                <button className="button is-link is-pulled-right" onClick={resetForm}>Add another</button>
                            </p>
                        </>
                    )
                }
            </div>
        </>
    );
};

// wiring up the reduxstore with componets

const mapDispatchToProps = {
    addEventAttendee
};

export default connect(
    null,
    mapDispatchToProps
)(EventSignUpForm);