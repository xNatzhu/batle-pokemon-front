import Button from "@mui/material/Button";
import axios from "axios";

export default function ActionBattle({pokemonSelected, pokemonSelectSort, setPokemonWin}) {
    let handleActionBattle = async () => {
        try {
            const response = await axios.post('http://localhost:3000/battle',{
                pokemon1: pokemonSelected.id,
                pokemon2: pokemonSelectSort.id,
            })
            console.log("response", response)
            setPokemonWin(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <Button variant="contained" color="success" onClick={handleActionBattle}>
            Start Battle
        </Button>
    )
}