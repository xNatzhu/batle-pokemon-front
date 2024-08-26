// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pokemon: {
                    Electric: '#F7D02C',
                    Normal: '#A8A77A',
                    Fire: '#EE8130',
                    Water: '#6390F0',
                    Grass: '#7AC74C',
                    Ice: '#96D9D6',
                    Fighting: '#C22E28',
                    Poison: '#A33EA1',
                    Ground: '#E2BF65',
                    Flying: '#A98FF3',
                    Psychic: '#F95587',
                    Bug: '#A6B91A',
                    Rock: '#B6A136',
                    Ghost: '#735797',
                    Dragon: '#6F35FC',
                    Dark: '#705746',
                    Steel: '#B7B7CE',
                    Fairy: '#D685AD',
                    Shadow: '#5A5A5A',
                    Unknown: '#5A5A5A',
                },
            },
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /bg-pokemon-(Electric|Normal|Fire|Water|Grass|Ice|Fighting|Poison|Ground|Flying|Psychic|Bug|Rock|Ghost|Dragon|Dark|Steel|Fairy|Shadow|Unknown)/,
        },
    ],
}
