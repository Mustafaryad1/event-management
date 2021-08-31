const initialState = {
  components: []
}


export default  (state = [], { type, val }) => {
  switch (type) {
    case 'add-component':
      return [...state, val]
    case 'add-components':
      return [...val]
    case 'remove-component':
        return [...state.filter(item=> {return item.key !== val.key})]
    case 'clear-components':
        return []
    default:
      return state
  }
};

