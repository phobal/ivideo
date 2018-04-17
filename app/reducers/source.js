export default function source(state = null, action) {
  switch(action.type) {
    case 'GETALLVIDEOSOURCE':
      return action.payload;
    default:
      return state;
  }
}