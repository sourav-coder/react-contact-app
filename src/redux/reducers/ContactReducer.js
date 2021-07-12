const initialState = [
    {
        id:0,
        name:"Karan Sarkar",
        email:"sample1@gmail.com",
        phno:2489469615
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