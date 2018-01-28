import * as actions from '../../utils/constants';

export default function appointments(state = [], { type, payload }) {
  switch(type) {
    case actions.BOOKED_APPOINTMENT:
      return 
        [
          ...state.appointments,
          payload
        ];
    case actions.APPOINTMENT_UPDATE:
      return state.map(appointment => appointment._id === payload._id ? { ...appointment, ...payload } : appointment);
    case actions.LOAD_APPOINTMENTS: 
      return payload;
    case actions.DELETE_APPOINTMENT:
      return state.filter(appointment => appointment._id !== payload);
    default:
      return state;
  } 
}  

