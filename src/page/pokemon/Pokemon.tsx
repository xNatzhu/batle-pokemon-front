import PokemonCard from "./modules/listPokemon/PokemonCard.tsx";
import PokemonBatleCard from "./modules/battle/PokemonBatleCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import ActionBattle from "./modules/battle/ActionBattle.tsx";
import * as React from "react";
import WinnerCard from "./modules/battle/WinnerCard.tsx";
export default function Pokemon() {
    const [listpokemon, setListPokemon] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [pokemonSelectSort, setPokemonSelectSort] = useState(null);
    const [pokemonWin, setPokemonWin] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/pokemon');
                setListPokemon(response.data || []);
                setPokemonSelected(response.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        selectRandomPokemon();
    }, [pokemonSelected]);

    const selectRandomPokemon = () => {
        const randomIndex = Math.floor(Math.random() * listpokemon.length);
        setPokemonSelectSort(listpokemon[randomIndex]);
    }

    return (
        <div className="px-10 mt-10 pb-[20px]">
            <h1 className="text-[40px] font-bold text-[#161616]">Battle of Pokemon</h1>
            <h2 className="text-[20px] text-[#161616]">Select your pokemon</h2>
            <div className="flex flex-wrap gap-6 mt-[30px] justify-center lg:justify-between">
                {listpokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} setPokemonSelected={setPokemonSelected} />
                ))}
            </div>
            <div className="flex flex-row mt-[50px] justify-center items-center gap-10 md:gap-[40px] flex-wrap ">
                {pokemonSelected && <PokemonBatleCard pokemonSelected={pokemonSelected} />}
                {pokemonSelectSort && <PokemonBatleCard pokemonSelected={pokemonSelectSort} />}
            </div>
            <div className="w-full flex items-center justify-center mt-[30px]">
                <ActionBattle pokemonSelected={pokemonSelected} pokemonSelectSort={pokemonSelectSort} setPokemonWin={setPokemonWin} />
            </div>
            <WinnerCard  pokemonWin={pokemonWin}/>
        </div>
    );
}
