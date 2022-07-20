import uuid from 'react-uuid';

// data
import initialState from '../data/initialState';

// action types
export const actions = {
    ADD_EVENT_ATTENDEE: 'add-event-attendee',
    TOGGLE_EVENT_ATTENDANCE: 'toggle-event-attendance',
    DELETE_EVENT_ATTENDEE: 'delete-event-attendee',
};

// actions
export const addEventAttendee = content => ({
    type: actions.ADD_EVENT_ATTENDEE,
    payload: {
        id: uuid(),
        content,
    }
});

export const toggleEventAttendance = id => ({
    type: actions.TOGGLE_EVENT_ATTENDANCE,
    payload: {
        id
    }
});

export const deleteEventAttendee = id => ({
    type: actions.DELETE_EVENT_ATTENDEE,
    payload: {
        id
    }
});

const eventReducer = (state = initialState.events, action) => {
    switch (action.type) {
        case actions.ADD_EVENT_ATTENDEE: {
            const { id, content } = action.payload;

            return {
                ...state,
                eventAttendees: [
                    ...state.eventAttendees,
                    {
                        ...content,
                        attending: true,
                        id,
                    }
                ],
                loading: false,
            };
        }
        case actions.TOGGLE_EVENT_ATTENDANCE: {
            const { id } = action.payload;
            const updatedEventAttendees = state.eventAttendees.map(item => {
                if(item.id === id) {
                    item.attending = !item.attending;
                }

                return item;
            });

            return {
                ...state,
                eventAttendees: updatedEventAttendees,
                loading: false,
            }
        }
        case actions.DELETE_EVENT_ATTENDEE: {
            const { id } = action.payload;
            const updatedEventAttendees = state.eventAttendees.filter(item => item.id !== id);

            return {
                ...state,
                eventAttendees: updatedEventAttendees,
                loading: false,
            }
        }
        default:
            return state;
    }
};

export default eventReducer;

