import * as actions from '../../utils/constants';

export default function appointments(state = [], { type, payload }) {
  switch(type) {
    case actions.BOOKED_APPOINTMENT:
      return 
        [
          ...state.appointments,
          payload
        ];
    case actions.LOAD_APPOINTMENTS: 
      return payload;
    default:
      return state;
  } 
}  

