import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">User invoices</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Invoice id</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Actions</th>                    
                </tr>
            </thead>        
            <tbody>
                <tr>
                    <th>INV_0001123</th>
                    <td>Work order 2345</td>        
                    <td>£398.78</td>
                    <td><span className="has-text-primary has-text-weight-bold">PAID</span></td>
                    <td>
                        <div className="buttons">
                            <a className="button is-danger is-small">archive</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>INV_0001187</th>
                    <td>Work order 12345</td>        
                    <td>£1268.78</td>
                    <td><span className="has-text-warning has-text-weight-bold">SENT</span></td>
                    <td>
                        <div className="buttons">
                            <a className="button is-primary is-small">mark paid</a>
                            <a className="button is-link is-small">resend</a>
                            <a className="button is-danger is-small">archive</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>INV_0001123</th>
                    <td>Work order 9945</td>        
                    <td>£422.99</td>
                    <td><span className="has-text-primary has-text-weight-bold">PAID</span></td>
                    <td>
                        <div className="buttons">
                            <a className="button is-primary is-small">mark paid</a>
                            <a className="button is-link is-small">resend</a>
                            <a className="button is-danger is-small">archive</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>INV_0001123</th>
                    <td>Work order 9455</td>        
                    <td>£1118.49</td>
                    <td><span className="has-text-danger has-text-weight-bold">REFUNDED</span></td>
                    <td>
                        <div className="buttons">
                            <a className="button is-danger is-small">archive</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);