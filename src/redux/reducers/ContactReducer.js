const initialState = [
    {
        id:0,
        name:"Sourav Sarkar",
        email:"sample1@gmail.com",
        phno:8017289046
    },
    {
        id:1,
        name:"Nil",
        email:"sample2@gmail.com",
        phno:1234567890
    }
];

const ContactReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD_CONTACT":
            state=[...state,action.payload]
            return state
        case "DELETE_CONTACT":
            state=state.filter((val,id)=>{
                return id!==action.payload
            })
            return state
        default:
            return state;

    }
}
export default ContactReducer;