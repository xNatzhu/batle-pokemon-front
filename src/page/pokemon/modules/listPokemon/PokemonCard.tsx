import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from "../../../../assets/logo.png";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PokemonCard({pokemon, setPokemonSelected}) {
    const { name, type, imageUrl } = pokemon;
    const selectPokemon = () => {
        setPokemonSelected(pokemon)
    }
    return(
        <Card sx={{ position: "relative", overflow:"visible", borderRadius:"20px", cursor:"pointer" }} onClick={()=>selectPokemon()}>
            <div className={`flex bg-pokemon-${type} rounded-[20px] w-[300px] md:w-auto`}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', pr: 5 }}>
                        <h5 className="text-[20px] font-semibold text-blue-50">{name}</h5>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Stack direction="row" spacing={1}>
                            <Chip sx={{color:"#fff"}} label={type} />
                        </Stack>
                    </Box>
                </Box>
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute w-[120px] z-10 top-[-20px] right-[-20px]"
                />
                <img src={logo} alt={name} className="w-[100px] opacity-20" />
            </div>
        </Card>
    )
}