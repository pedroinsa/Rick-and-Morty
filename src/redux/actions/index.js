import axios from "axios"



export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';


export const getAllCharacters = () => async dispatch => {
    const characters = await axios.get("https://rickandmortyapi.com/api/character")
    const charactersdata = characters.data.results

    dispatch({ type: GET_ALL_CHARACTERS, payload: charactersdata })
}
