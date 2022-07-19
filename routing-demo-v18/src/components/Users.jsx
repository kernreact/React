import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">Team users</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>User id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Employment date</th>            
                </tr>
            </thead>        
            <tbody>
                <tr>
                    <th>8</th>
                    <td>Sally Appleseed</td>        
                    <td>sally@mail.com</td>
                    <td>Management</td>
                    <td>01 Jan 2014</td>      
                </tr>
                <tr>
                    <th>13</th>
                    <td>Dave Davis</td>        
                    <td>dave.davis@mail.com</td>
                    <td>Management</td>
                    <td>07 Mar 2017</td>      
                </tr>
                <tr>
                    <th>11</th>
                    <td>Alexis Macintosh</td>        
                    <td>amac@gmail.com</td>
                    <td>Logistics</td>
                    <td>24 Apr 2020</td>      
                </tr>
                <tr>
                    <th>2</th>
                    <td>Mark Studdart</td>        
                    <td>mark@studdart.co.uk</td>
                    <td>Marketing</td>
                    <td>19 May 2016</td>      
                </tr>
                <tr>
                    <th>56</th>
                    <td>Don Swanson</td>        
                    <td>d.swanson@goodbuildingcompany.com</td>
                    <td>Maintenance</td>
                    <td>13 Feb 2018</td>      
                </tr>
            </tbody>
        </table>
    </>
);