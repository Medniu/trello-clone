const INITIAL_STATE = [
    {
        id: 0,
        title:"First column",
        cards: [
            {
                id:0,
                title:"some Titl from Card1",
                text:"some Text from Card1",
                color:"black"
            },
            {
                id:1,
                title:"some Titl from Card2",
                text:"some Text from Card2",
                color:"black"
            },
            {
                id:2,
                title:"some Titl from Card3",
                text:"some Text from Card3",
                color:"black"
            },
        ]        
    },
    {
        id: 1,
        title:"Second column",
        cards: [
            {
                id:3,
                title:"some Titl from Card4",
                text:"some Text from Card4",
                color:"black"
            },
            {
                id:4,
                title:"some Titl from Card5",
                text:"some Text from Card5",
                color:"black"
            },
        ]        
    }
]

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case "SIGN_IN":
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default listReducer;