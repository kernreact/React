import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">Manage user account</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lacus sit amet ex accumsan euismod. Donec vehicula fermentum augue, a sodales 
            justo gravida congue. Cras mattis augue metus, vitae facilisis odio condimentum et. Sed elementum quam ac turpis blandit, eget tincidunt est convallis.
        </p>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Sally Appleseed" value="Sally Appleseed" />
            </div>
        </div>

        <div className="field">
            <label className="label">Username</label>
            <div className="control">
                <input className="input" type="text" placeholder="sal12_00" value="sal12_00"/>
            </div>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="Email" value="sally@mail.com"/>                
            </div>
        </div>

        <div className="field">
            <label className="label">Department</label>
            <div className="control">
                <div className="select">
                    <select value="Management">
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
                <button className="button is-link">Update user</button>
            </div>
            <div className="control">
                <button className="button is-link is-light">cancel</button>
            </div>
        </div>
    </>
);