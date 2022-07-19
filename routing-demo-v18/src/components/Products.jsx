import React from 'react';

export default () => (
    <>
        <h1 className="title is-size-2">Products</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Product id</th>
                    <th>Name</th>
                    <th>SKU</th>                    
                    <th>Description</th>
                    <th>Stock level</th>            
                </tr>
            </thead>        
            <tbody>
                <tr>
                    <th>12</th>
                    <td>Large welding torch</td>        
                    <td>SKU_011234</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>56</td>      
                </tr>
                <tr>
                    <th>13</th>
                    <td>Soft hammer</td>        
                    <td>SKU_01189</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>12</td>      
                </tr>
                <tr>
                    <th>14</th>
                    <td>Calculator, scientific</td>        
                    <td>SKU_023334</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>43</td>      
                </tr>
                <tr>
                    <th>15</th>
                    <td>Coffee machine</td>        
                    <td>SKU_010134</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>120</td>      
                </tr>
                <tr>
                    <th>16</th>
                    <td>Botanitcal house plant</td>        
                    <td>SKU_01873</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>450</td>      
                </tr>
            </tbody>
        </table>
    </>
);