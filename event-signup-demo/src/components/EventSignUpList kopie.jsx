import React from 'react';
import { connect } from 'react-redux';

// Actions
import { deleteEventAttendee, toggleEventAttendance } from '../reducers/eventReducer';

const EventSignUpList = ({ eventAttendees, deleteEventAttendee, toggleEventAttendance }) => (
    <div className="box">        
        {
            eventAttendees && eventAttendees.length ?
            <>
                <h2 className="subtitle is-size-5">Hurrah, {eventAttendees.length} {eventAttendees.length > 1 ? "people have" : "person has"} signed up to our event!</h2>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Attending</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eventAttendees.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td><span className={`has-text-${item.attending ? 'success' : 'danger'}`}>{item.attending ? "Yes" : "No"}</span></td>
                                    <td>
                                        <div className="buttons">
                                            <button className="button is-info is-small" onClick={() => toggleEventAttendance(item.id)}>change attendance</button>
                                            <button className="button is-danger is-small" onClick={() => deleteEventAttendee(item.id)}>delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
            : <h2>Oh dear...looks like no one has signed up yet :(</h2>
        }
    </div>
);

const mapStateToProps = state => ({
    eventAttendees: state.events.eventAttendees,
});

const mapDispatchToProps = {
    deleteEventAttendee, 
    toggleEventAttendance
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventSignUpList);