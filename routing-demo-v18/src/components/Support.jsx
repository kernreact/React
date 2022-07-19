import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">Support</h1>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Sally Appleseed" />
            </div>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="Email" />                
            </div>
        </div>

        <div className="field">
            <label className="label">Type of issue</label>
            <div className="control">
                <div className="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>Website</option>
                        <option>Technical</option>
                        <option>Product A</option>
                        <option>Product B</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="field">
            <label className="label">Describe the issue in detail</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Create ticket</button>
            </div>
            <div className="control">
                <button className="button is-link is-light">cancel</button>
            </div>
        </div>
    </>
);