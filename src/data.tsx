
interface Button {
    title: string;
    pointer: number;
}

interface StoryCard {
    cardID: number;
    cardText: string;
    healthChange: number;
    cardButtons: Button[];
}

interface Deck {
    deckID: number;
    image: string;
    imagealt: string;
    description: string;
    playerHealth: number;
    storyCards: StoryCard[]
}

const myDecks: Deck[] = [{
    deckID: 1,
    image: 'images/soldierdeck.png',
    imagealt: 'soldiers facing battle',
    description: 'this is a deck description: fun adventure as a warrior in battle.',
    playerHealth: 5,
    storyCards: [{
        cardID: 1,
        cardText: 'intro story',
        healthChange: 0,
        cardButtons: [{
            title: 'forward',
            pointer: 2
        },{
            title: 'stand ground',
            pointer: 3
        },{
            title: 'flee',
            pointer: 4
        }]
    },{
        cardID: 2,
        cardText: 'dodged forward',
        healthChange: -1,
        cardButtons: [{
            title: 'meet the team',
            pointer: 5
        }]
    },{
        cardID: 3,
        cardText: 'stood ground',
        healthChange: 0,
        cardButtons: [{
            title: 'meet the team',
            pointer: 5
        }]
    },{
        cardID: 4,
        cardText: 'fleeeee',
        healthChange: -2,
        cardButtons: [{
            title: 'meet the team',
            pointer: 5
        }]
    },{
        cardID: 5,
        cardText: 'meet the team, get some story, choose a weap',
        healthChange: +10,
        cardButtons: [{
            title: 'sword and board',
            pointer: 6
        },{
            title: 'spear and knife',
            pointer: 7
        },{
            title: 'greataxe',
            pointer: 8
        }]
    },{
        cardID: 6,
        cardText: 'battle with sword and board',
        healthChange: 0,
        cardButtons: [{
            title: 'battle lost',
            pointer: 9
        }]
    },{
        cardID: 7,
        cardText: 'battle with spear',
        healthChange: 0,
        cardButtons: [{
            title: 'battle lost',
            pointer: 9
        }]
    },{
        cardID: 8,
        cardText: 'battle with greataxe',
        healthChange: 0,
        cardButtons: [{
            title: 'battle lost',
            pointer: 9
        }]
    },{
        cardID: 9,
        cardText: 'battle lost, friends dead, run for your life',
        healthChange: 0,
        cardButtons: [{
            title: 'rest at cabin',
            pointer: 10
        },{
            title: 'rest by riverside',
            pointer: 11
        },{
            title: 'rest hidden in tree',
            pointer: 12
        }]
    },{
        cardID: 10,
        cardText: 'rest at cabin and hear about betrayal',
        healthChange: +10,
        cardButtons: [{
            title: 'the betrayal',
            pointer: 13
        }]
    },{
        cardID: 11,
        cardText: 'meet travelers and hear about betrayal',
        healthChange: +10,
        cardButtons: [{
            title: 'the betrayal',
            pointer: 13
        }]
    },{
        cardID: 12,
        cardText: 'hear betrayers speaking with boss',
        healthChange: +10,
        cardButtons: [{
            title: 'the betrayal',
            pointer: 13
        }]
    },{
        cardID: 13,
        cardText: "the betrayal, how do you want to do this?",
        healthChange: 0,
        cardButtons: [{
            title: 'deliver challenge',
            pointer: 14
        },{
            title: 'sneak in camp',
            pointer: 15
        }]
    },{
        cardID: 14,
        cardText: 'deliver challenge at sunset, what do you say?',
        healthChange: 0,
        cardButtons: [{
            title: 'because of your betrayal...',
            pointer: 16
        },{
            title: 'for the good of the people...',
            pointer: 17
        },{
            title: 'this is for my lost brothers...',
            pointer: 18
        }]
    },{
        cardID: 15,
        cardText: 'how do you want to sneak in?',
        healthChange: 0,
        cardButtons: [{
            title: 'sneak by the gate guards',
            pointer: 19
        },{
            title: 'climb over the town walls',
            pointer: 20
        },{
            title: 'swim up the river',
            pointer: 21
        }]
    },{
        cardID: 16,
        cardText: 'because of your betrayal...',
        healthChange: 0,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 17,
        cardText: 'for the good of the people...',
        healthChange: 0,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 18,
        cardText: 'this is for my lost brothers...',
        healthChange: 0,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 19,
        cardText: 'try to sneak by, get caught and beaten up before facing the BBEG',
        healthChange: -2,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 20,
        cardText: 'jump the town walls',
        healthChange: 0,
        cardButtons: [{
            title: 'how to sneak by',
            pointer: 23
        }]
    },{
        cardID: 21,
        cardText: 'swim up the river',
        healthChange: 0,
        cardButtons: [{
            title: 'how to sneak by',
            pointer: 23
        }]
    },{
        cardID: 22,
        cardText: 'the final battle',
        healthChange: 0,
        cardButtons: [{
            title: 'be aggresive',
            pointer: 24
        },{
            title: 'test his defences',
            pointer: 25
        },{
            title: 'let him make the first move',
            pointer: 26
        }]
    },{
        cardID: 23,
        cardText: 'how to sneak by',
        healthChange: 0,
        cardButtons: [{
            title: 'hit the rooftops',
            pointer: 27
        },{
            title: 'grab a disguise',
            pointer: 28
        },{
            title: 'make a distraction',
            pointer: 29
        }]
    },{
        cardID: 24,
        cardText: 'be aggresive',
        healthChange: -2,
        cardButtons: [{
            title: 'final battle 2',
            pointer: 32
        }]
    },{
        cardID: 25,
        cardText: 'test his defences',
        healthChange: -1,
        cardButtons: [{
            title: 'final battle 2',
            pointer: 32
        }]
    },{
        cardID: 26,
        cardText: 'let him make the first move',
        healthChange: 0,
        cardButtons: [{
            title: 'final battle 2',
            pointer: 32
        }]
    },{
        cardID: 27,
        cardText: 'sneak by rooftops',
        healthChange: -2,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 28,
        cardText: 'grabbed a bad disguise',
        healthChange: -2,
        cardButtons: [{
            title: 'the final battle',
            pointer: 22
        }]
    },{
        cardID: 29,
        cardText: 'started a distraction',
        healthChange: 0,
        cardButtons: [{
            title: 'slay the BBEG',
            pointer: 30
        },{
            title: 'mercy for the BBEG',
            pointer: 31
        }]
    },{
        cardID: 30,
        cardText: 'BBEG death',
        healthChange: 0,
        cardButtons: [{
            title: 'epilogue',
            pointer: 39
        }]
    },{
        cardID: 31,
        cardText: 'mercy for the BBEG',
        healthChange: 0,
        cardButtons: [{
            title: 'epilogue',
            pointer: 39
        }]
    },{
        cardID: 32,
        cardText: 'final battle 2',
        healthChange: 0,
        cardButtons: [{
            title: 'pocket some dirt',
            pointer: 33
        },{
            title: 'taunt him',
            pointer: 34
        },{
            title: 'charge him',
            pointer: 35
        }]
    },{
        cardID: 33,
        cardText: 'pocket some dirt and throw em',
        healthChange: 0,
        cardButtons: [{
            title: 'choice of no honor',
            pointer: 36
        }]
    },{
        cardID: 34,
        cardText: 'taunt him',
        healthChange: -1,
        cardButtons: [{
            title: 'final battle 3',
            pointer: 37
        }]
    },{
        cardID: 35,
        cardText: 'charge him',
        healthChange: -2,
        cardButtons: [{
            title: 'final battle 3',
            pointer: 37
        }]
    },{
        cardID: 36,
        cardText: 'choice of no honor',
        healthChange: -5,
        cardButtons: [{
            title: 'death',
            pointer: 40
        }]
    },{
        cardID: 37,
        cardText: 'final slash',
        healthChange: -1,
        cardButtons: [{
            title: 'happy ending',
            pointer: 38
        }]
    },{
        cardID: 38,
        cardText: 'happy ending',
        healthChange: 0,
        cardButtons: [{
            title: 'epilogue',
            pointer: 39
        }]
    },{
        cardID: 39,
        cardText: 'epilogue',
        healthChange: 0,
        cardButtons: []
    },{
        cardID: 40,
        cardText: 'death',
        healthChange: 0,
        cardButtons: []
    }]
}]

export default myDecks