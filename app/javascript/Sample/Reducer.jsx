const initState = {
    age: 18,
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirm: "",
    edit: false,
    view: false,
    login: false,
}

function reducer(state = initState, action) {
    switch (action.type) { 
        case 'ageincrement':
            return { ...state, age: state.age + 1 };
        case 'agedecrement':
            return { ...state, age: state.age - 1 };
        case 'name':
            return { ...state, name: action.payload ? String(action.payload.value) : "" };
        case 'email':
            return { ...state, email: action.payload ? String(action.payload.value) : "" };
        case 'user':
            return { ...state, username: action.payload ? String(action.payload.value) : "" };
        case 'password':
            return { ...state, password: action.payload ? String(action.payload.value) : "" };
        case 'confirm':
            return { ...state, confirm: action.payload ? String(action.payload.value) : "" };
        case 'phone':
            return { ...state, phone: action.payload ? String(action.payload.value) : "" };
        case 'edit':
            return { ...state, edit: action.payload ? action.payload.value: false };
        case 'login':
            return { ...state, login: action.payload ? action.payload.value : false};
        case 'view':
            return { ...state, view: action.payload ?action.payload.value : false };
        default:
            return { ...state  };
    }
}

export default reducer;