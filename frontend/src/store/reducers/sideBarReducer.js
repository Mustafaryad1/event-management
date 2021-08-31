const initialState = {
  sidebarShow: 'responsive'
}


export default  (state = "responsive", { type, val }) => {
  switch (type) {
    case 'set':
      return val
    default:
      return state
  }
};

