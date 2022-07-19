import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">Create a new user</h1>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Sally Appleseed" />
            </div>
        </div>

        <div className="field">
            <label className="label">Username</label>
            <div className="control">
                <input className="input" type="text" placeholder="sal12_00" />
            </div>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="Email" />                
            </div>
        </div>

        <div className="field">
            <label className="label">Department</label>
            <div className="control">
                <div className="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>Management</option>
                        <option>Logistics</option>
                        <option>Marketing</option>
                        <option>Maintenance</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Create user</button>
            </div>
            <div className="control">
                <button className="button is-link is-light">cancel</button>
            </div>
        </div>
    </>
);