
import logo from "../../../../assets/logo.png";
export default function WinnerCard({pokemonWin}) {
    const { winner } = pokemonWin || {};
    const { name, type, imageUrl } = winner || {};
    const winnerBackground = winner ? `bg-pokemon-${type} text-blue-50 relative  mt-[30px]` : "bg-white";
    const winnerMessage = winner ? `Pokemon ${name} win` : "Click the battle button to see the result.";
    const winnerText = winner ? 'Victory is mine! I’ve proven my strength and emerged triumphant in battle!' : 'Sometimes I feel like my powers are too strong for this world, and all I want is to prove my worth in battle!';

    return (
        <div className={`${winnerBackground} rounded-lg shadow-md p-5 px-10 mt-[10px] flex justify-between items-center`}>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{winnerMessage}</h2>
                <p>{winnerText}</p>
            </div>
            <div className="z-30 flex">
                {winner && <img src={imageUrl} className="w-[100px] hidden md:flex" alt={`Pokemon ${name}`} />}
            </div>
            {winner && <img src={logo} className="w-[100px] hidden md:flex opacity-30 absolute top-5 right-10" alt="Logo" />}
        </div>
    );
}