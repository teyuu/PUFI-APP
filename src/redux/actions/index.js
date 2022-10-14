import axios from 'axios';

export const newsLetterSubscription = (payload)=>{
    return async (dispatch) => {
        try {
           const response = await axios.post('https://formspree.io/f/xzbwvojd', payload)
           
           return dispatch({
            type: 'REGISTRO', 
            payload: response.config.data
        }) 

        } catch (error) {
            console.log(error)
        }
    }
};