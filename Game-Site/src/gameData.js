import GG from './assets/GG.jpg';
import Tekken from './assets/Tekken.jpg';
import StreetFighter from './assets/Street fighter.jpg';
import MortalKombat from './assets/mk1.jpg';
import DBFZ from './assets/dbfz.jpg';
import Rivals from './assets/rivals.jpg';
import DOA from './assets/doa.jpg';
import SoulCalibur from './assets/soul calibur.jpg';
import VF from './assets/vf5.jpg';
import KOF from './assets/kof.jpg';
import MVC from './assets/mahvel baby.jpg';
import SS from './assets/sam sho.jpg';
import BB from './assets/BB.jpg';
import UNI from './assets/UN.jpg';
import SG from './assets/sg.jpg';
import KI from './assets/KI.jpg';
import Injustice from './assets/injustice.jpg';
import DS from './assets/DS.jpg';
import PR from './assets/Pr.jpg';

const gamesData = [
    {
        title: "Guilty Gear Strive",
        description: "A fast-paced anime fighting game with unique characters and deep mechanics.",
        longDescription: "Guilty Gear Strive is the latest entry in the Guilty Gear series, known for its stunning visuals, intricate combo system, and unique character designs. The game features a robust online mode, a comprehensive story mode, and a variety of single-player content. Players can enjoy intense battles with friends or compete in ranked matches to climb the leaderboards.",
        imagePath: GG,
        developer: "Arc System Works",
        publisher: "Bandai Namco Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Tekken 8",
        description: "A 3D fighting game known for its deep combat system and diverse character roster.",
        longDescription: "Tekken 8 is a critically acclaimed 3D fighting game that offers a deep and rewarding combat system. With a diverse roster of characters, each with their own unique fighting styles, players can engage in intense battles and master complex combos. The game also features a cinematic story mode that delves into the Mishima family feud, as well as various online and offline modes.",
        imagePath: Tekken,
        developer: "Bandai Namco Studios",
        publisher: "Bandai Namco Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Street Fighter 6",
        description: "A classic 2D fighting game series with iconic characters and competitive gameplay.",
        longDescription: "Street Fighter 6 continues the legacy of the iconic Street Fighter series with its classic 2D fighting mechanics and a roster of beloved characters. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can hone their skills in training mode and compete in ranked matches to prove their prowess. The game is known for its competitive scene and regular updates.",
        imagePath: StreetFighter,
        developer: "Capcom",
        publisher: "Capcom",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Mortal Kombat 1",
        description: "A brutal fighting game famous for its violent fatalities and dark storyline.",
        longDescription: "Mortal Kombat 1 is the latest installment in the legendary Mortal Kombat series, known for its brutal combat and graphic fatalities. The game features a dark and engaging storyline, a diverse roster of characters, and a variety of game modes. Players can customize their fighters with different skins and gear, and compete in online matches to test their skills against others.",
        imagePath: MortalKombat,
        developer: "NetherRealm Studios",
        publisher: "Warner Bros. Interactive Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Dragon Ball FighterZ",
        description: "A visually stunning 2D fighter featuring characters from the Dragon Ball series.",
        longDescription: "Dragon Ball FighterZ is a visually stunning 2D fighting game that brings the beloved characters of the Dragon Ball series to life. The game features fast-paced combat, intricate combos, and a variety of game modes. Players can relive iconic moments from the anime in story mode, compete in online matches, and participate in tournaments. The game's graphics and animations are highly praised for their fidelity to the source material.",
        imagePath: DBFZ,
        developer: "Arc System Works",
        publisher: "Bandai Namco Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Rivals of Aether",
        description: "A crossover fighting game with characters from various indie franchises.",
        longDescription: "Rivals of Aether is an indie fighting game that features characters inspired by various Nintendo franchises. The game offers a unique combat system that emphasizes movement and positioning. Players can choose from a roster of original characters, each with their own abilities and playstyles. The game includes a story mode, online multiplayer, and a variety of single-player challenges.",
        imagePath: Rivals,
        developer: "Dan Fornace",
        publisher: "Dan Fornace",
        price: "$29.99",
        genre: "Fighting"
    },
    {
        title: "Dead or Alive 6",
        description: "A 3D fighting game with a focus on counterattacks and interactive stages.",
        longDescription: "Dead or Alive 6 is a 3D fighting game that emphasizes counterattacks and interactive stages. The game features a diverse roster of characters, each with their own unique fighting styles and abilities. Players can engage in fast-paced battles, perform devastating combos, and interact with the environment to gain an advantage. The game also includes a story mode, online multiplayer, and various customization options.",
        imagePath: DOA,
        developer: "Team Ninja",
        publisher: "Koei Tecmo",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "SoulCalibur VI",
        description: "A weapon-based 3D fighting game with a diverse cast of characters.",
        longDescription: "SoulCalibur VI is a weapon-based 3D fighting game that features a diverse cast of characters, each with their own unique weapons and fighting styles. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can customize their characters with different outfits and accessories, and compete in intense battles to prove their skills.",
        imagePath: SoulCalibur,
        developer: "Bandai Namco Studios",
        publisher: "Bandai Namco Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Virtua Fighter 5: Ultimate Showdown",
        description: "A classic 3D fighting game known for its realistic martial arts combat.",
        longDescription: "Virtua Fighter 5: Ultimate Showdown is a remastered version of the classic 3D fighting game, known for its realistic martial arts combat. The game features a roster of characters, each with their own unique fighting styles and abilities. Players can engage in intense battles, master complex combos, and compete in online matches. The game also includes various single-player modes and customization options.",
        imagePath: VF,
        developer: "Sega AM2",
        publisher: "Sega",
        price: "$29.99",
        genre: "Fighting"
    },
    {
        title: "The King of Fighters XV",
        description: "A team-based 2D fighter featuring characters from various SNK franchises.",
        longDescription: "The King of Fighters XV is the latest entry in the long-running King of Fighters series. The game features a team-based 2D fighting system, with a roster of characters from various SNK franchises. Players can form teams of three fighters, each with their own unique abilities and playstyles. The game offers a variety of modes, including a story mode, online multiplayer, and training mode.",
        imagePath: KOF,
        developer: "SNK",
        publisher: "SNK",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Marvel vs. Capcom: Infinite",
        description: "A crossover fighting game featuring characters from Marvel and Capcom franchises.",
        longDescription: "Marvel vs. Capcom: Infinite is a crossover fighting game that features characters from both Marvel and Capcom franchises. The game offers a fast-paced combat system, with a focus on tag-team battles and combo-based gameplay. Players can choose from a roster of iconic characters, each with their own unique abilities and playstyles. The game includes a story mode, online multiplayer, and various single-player challenges.",
        imagePath: MVC,
        developer: "Capcom",
        publisher: "Capcom",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Samurai Shodown",
        description: "A weapon-based 2D fighting game with a focus on precise strikes and parries.",
        longDescription: "Samurai Shodown is a weapon-based 2D fighting game that emphasizes precise strikes and parries. The game features a roster of characters, each with their own unique weapons and fighting styles. Players can engage in intense battles, master complex combos, and compete in online matches. The game also includes a story mode, arcade mode, and various customization options.",
        imagePath: SS,
        developer: "SNK",
        publisher: "SNK",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "BlazBlue: Central Fiction",
        description: "A 2D fighting game with a complex storyline and unique character abilities.",
        longDescription: "BlazBlue: Central Fiction is a 2D fighting game that features a complex storyline and unique character abilities. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can choose from a roster of characters, each with their own unique abilities and playstyles. The game is known for its intricate combo system and competitive gameplay.",
        imagePath: BB,
        developer: "Arc System Works",
        publisher: "Arc System Works",
        price: "$39.99",
        genre: "Fighting"
    },
    {
        title: "Under Night In-Birth Exe:Late[cl-r]",
        description: "A 2D fighting game with",
        longDescription: "Under Night In-Birth Exe:Late[cl-r] is a 2D fighting game that features a unique cast of characters and a deep combat system. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can engage in fast-paced battles, master complex combos, and compete in ranked matches. The game is known for its intricate mechanics and competitive scene.",
        imagePath: UNI,
        developer: "French Bread",
        publisher: "Arc System Works",
        price: "$39.99",
        genre: "Fighting"
    },
    {
        title: "Skullgirls",
        description: "A 2D fighting game with a unique art style and fast-paced combat.",
        longDescription: "Skullgirls is a 2D fighting game that features a unique art style and fast-paced combat. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can choose from a roster of characters, each with their own unique abilities and playstyles. The game is known for its intricate combo system and competitive gameplay.",
        imagePath: SG,
        developer: "Lab Zero Games",
        publisher: "Autumn Games",
        price: "$24.99",
        genre: "Fighting"
    },
    {
        title: "Killer Instinct",
        description: "A 2D fighting game with a diverse cast of characters and combo-based gameplay.",
        longDescription: "Killer Instinct is a 2D fighting game that features a diverse cast of characters and combo-based gameplay. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can engage in fast-paced battles, master complex combos, and compete in ranked matches. The game is known for its competitive scene and regular updates.",
        imagePath: KI,
        developer: "Double Helix Games, Iron Galaxy",
        publisher: "Microsoft Studios",
        price: "$39.99",
        genre: "Fighting"
    },
    {
        title: "Injustice 2",
        description: "A 2D fighting game featuring characters from the DC Universe and interactive stages.",
        longDescription: "Injustice 2 is a 2D fighting game that features characters from the DC Universe and interactive stages. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can choose from a roster of iconic characters, each with their own unique abilities and playstyles. The game is known for its intricate combo system and competitive gameplay.",
        imagePath: Injustice,
        developer: "NetherRealm Studios",
        publisher: "Warner Bros. Interactive Entertainment",
        price: "$59.99",
        genre: "Fighting"
    },
    {
        title: "Darkstalkers",
        description: "A 2D fighting game with a gothic horror theme and unique character designs.",
        longDescription: "Darkstalkers is a 2D fighting game that features a gothic horror theme and unique character designs. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can choose from a roster of characters, each with their own unique abilities and playstyles. The game is known for its intricate combo system and competitive gameplay.",
        imagePath: DS,
        developer: "Capcom",
        publisher: "Capcom",
        price: "$19.99",
        genre: "Fighting"
    },
    {
        title: "Power Rangers: BFTG",
        description: "A 2D fighting game featuring characters from the Power Rangers franchise.",
        longDescription: "Power Rangers: Battle for the Grid is a 2D fighting game that features characters from the Power Rangers franchise. The game offers a variety of modes, including a story mode, arcade mode, and online multiplayer. Players can choose from a roster of characters, each with their own unique abilities and playstyles. The game is known for its fast-paced combat and competitive gameplay.",
        imagePath: PR,
        developer: "nWay",
        publisher: "nWay",
        price: "$19.99",
        genre: "Fighting"
    }
];

export default gamesData;