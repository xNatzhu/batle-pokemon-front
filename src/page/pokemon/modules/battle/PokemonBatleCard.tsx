import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import logo from "../../../../assets/logo.png";
import StarBar from "../../../../components/statBar/StatBar.tsx";
export default function PokemonBatleCard({pokemonSelected}) {
    const {id, name, attack, defense, hp, speed, type, imageUrl} = pokemonSelected
    return (
        <Card sx={{borderRadius:"20px"}}>
            <div className={`flex flex-col bg-pokemon-${type} rounded-[20px] w-[400px] relative`}>
                <CardContent>
                    <div className="flex items-center justify-center gap-20">
                        <div className="flex flex-col">
                            <h5 className="text-[25px] font-semibold text-blue-50 mb-[10px]">{name}</h5>
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{color:"#fff"}} label={type} />
                            </Stack>
                        </div>
                        <img src={imageUrl} alt={name} className="w-[150px] z-10 "/>
                        <img src={logo} alt={name} className="w-[100px] opacity-30 absolute top-[120px] left-5" />
                    </div>
                </CardContent>
                <CardContent sx={{backgroundColor:"#fff", borderRadius:"20px", zIndex:10}}>
                    <h5 className="text-[20px] font-semibold text-[#161616] mb-[20px]">Stats </h5>
                    <StarBar label="HP" value={hp} color="success" />
                    <StarBar label="Attack" value={attack} color="error" />
                    <StarBar label="Defense" value={defense} color="info" />
                    <StarBar label="Speed" value={speed} color="warning" />
                </CardContent>
            </div>
        </Card>
    );
}