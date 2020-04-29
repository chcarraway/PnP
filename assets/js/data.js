var powerLevels = [
    {
        name: "Mundane",
        hd: 12,
        maxRank: 6
    },
    {
        name: "Pulp",
        hd: 18,
        maxRank: 7
    },
    {
        name: "Street",
        hd: 24,
        maxRank: 8
    },
    {
        name: "Low",
        hd: 30,
        maxRank: 9
    },
    {
        name: "Standard",
        hd: 36,
        maxRank: 10
    },
    {
        name: "High",
        hd: 42,
        maxRank: 11
    },
    {
        name: "Very High",
        hd: 48,
        maxRank: 12
    },
    {
        name: "Extreme",
        hd: 54,
        maxRank: 13
    },
    {
        name: "Iconic",
        hd: 60,
        maxRank: 14
    }
];
var traits = [
    {
        name: "Academics",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Athletics",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Charm",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Command",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Medical",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Might",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Perception",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Professional",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Riding",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Science",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Stealth",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Streetwise",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Survival",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Technology",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Thievery",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Toughness",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Vehicles",
        start: 2,
        weak: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Willpower",
        start: 2,
        weak: false
    }
];
var powers = [
    {
        name: "Absorption",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Animate Images",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Animate Objects",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Armor",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Banish",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Blast",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Boost",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Constructs",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Darkness",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Dazzle",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Deflection",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Dispel",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Drain",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Energy Field",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Ensnare",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Flight",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Force Field",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Growth",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Healing/Repair",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Illusions",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Images",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Leaping",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Life Drain",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Machine Control",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Matter Chameleon",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Mind Blast",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Mind Control",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Nullification",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Omni Power",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Plasticity",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Port Other",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Possession",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Power Slide",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Running",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Shrinking",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Solid Form",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Special Attack",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Strike",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Stun",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Super Speed",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Swimming",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Swing Line",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Telekinesis",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Telepathy",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Teleportation",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Transform Other",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }, {
        name: "Transmutation",
        start: 0,
        strong: true,
        rank: 0,
        proscons: ""
    }, {
        name: "Tunneling",
        start: 0,
        strong: false,
        rank: 0,
        proscons: ""
    }
];
var perks = [
    {
        name: "Ally",
        cost: 2,
        multiple: true,
        rank: 0,
    }, {
        name: "Ambidexterity",
        cost: 1,
        rank: 0
    }, {
        name: "Animal Empathy",
        cost: 2,
        rank: 0
    }, {
        name: "Animal Forms",
        cost: 6,
        rank: 0
    }, {
        name: "Astral Projection",
        cost: 6,
        rank: 0
    }, {
        name: "Authority",
        cost: 1,
        rank: 0
    }, {
        name: "Blending",
        cost: 2,
        rank: 0
    }, {
        name: "Blind Fighting",
        cost: 1,
        rank: 0
    }, {
        name: "Communicator",
        cost: 1,
        rank: 0
    }, {
        name: "Contact",
        cost: 1,
        multiple: true,
        rank: 0
    }, {
        name: "Cosmic Awareness",
        cost: 2,
        rank: 0
    }, {
        name: "Dimensional Travel",
        cost: 2,
        rank: 0
    }, {
        name: "Duplication",
        cost: 6,
        multiple: true,
        rank: 0
    }, {
        name: "Enhanced Defense",
        cost: 4,
        rank: 0
    }, {
        name: "Extra Limbs",
        cost: 1,
        rank: 0
    }, {
        name: "Fame",
        cost: 1,
        rank: 0
    }, {
        name: "Gaseous Form",
        cost: 3,
        rank: 0
    }, {
        name: "Headquarters",
        cost: 1,
        rank: 0
    }, {
        name: "Hibernation",
        cost: 1,
        rank: 0
    }, {
        name: "Immortality",
        cost: 1,
        rank: 0
    }, {
        name: "Immunity (Specific)",
        cost: 1,
        multiple: true,
        rank: 0
    }, {
        name: "Immunity (Damage Type)",
        cost: 3,
        multiple: true,
        rank: 0
    }, {
        name: "Invisibility",
        cost: 6,
        rank: 0
    }, {
        name: "Knockdown",
        cost: 1,
        rank: 0
    }, {
        name: "Leadership",
        cost: 1,
        rank: 0
    }, {
        name: "Life Support",
        cost: 1,
        multiple: true,
        rank: 0
    }, {
        name: "Lightning Reflexes",
        cost: 1,
        rank: 0
    }, {
        name: "Liquid Form",
        cost: 9,
        rank: 0
    }, {
        name: "Luck",
        cost: 2,
        rank: 0
    }, {
        name: "Morph",
        cost: 4,
        rank: 0
    }, {
        name: "Patron",
        cost: 1,
        rank: 0
    }, {
        name: "Phasing",
        cost: 4,
        rank: 0
    }, {
        name: "Photographic Memory",
        cost: 2,
        rank: 0
    }, {
        name: "Power Mimicry (single)",
        cost: 12,
        rank: 0
    }, {
        name: "Power Mimicry (all)",
        cost: 24,
        rank: 0
    }, {
        name: "Power Theft (single)",
        cost: 12,
        rank: 0
    }, {
        name: "Power Theft (all)",
        cost: 24,
        rank: 0
    }, {
        name: "Precognition",
        cost: 6,
        rank: 0
    }, {
        name: "Psi-Screen",
        cost: 1,
        rank: 0
    }, {
        name: "Psychometry",
        cost: 2,
        rank: 0
    }, {
        name: "Quick Change",
        cost: 1,
        rank: 0
    }, {
        name: "Reach",
        cost: 2,
        rank: 0
    }, {
        name: "Regeneration (1/hour)",
        cost: 3,
        rank: 0
    }, {
        name: "Regeneration (1/minute)",
        cost: 6,
        rank: 0
    }, {
        name: "Regeneration (1/page)",
        cost: 12,
        rank: 0
    }, {
        name: "Relentless",
        cost: 1,
        rank: 0
    }, {
        name: "Scrying",
        cost: 4,
        rank: 0
    }, {
        name: "Separation",
        cost: 2,
        rank: 0
    }, {
        name: "Speak with Dead",
        cost: 2,
        rank: 0
    }, {
        name: "Special Vehicle",
        cost: 1,
        multiple: true,
        rank: 0
    }, {
        name: "Super Senses (Astral Sight)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Attuned)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Circular Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Danger Sense)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Detection)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Lie Detection)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Microscopic Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Night Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Radar)",
        cost: 2,
        rank: 0
    }, {
        name: "Super Senses (Radio Hearing)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Sonar)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Telescopic Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Thermal Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Trace)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Tracking Scent)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (True Sight)",
        cost: 4,
        rank: 0
    }, {
        name: "Super Senses (Ultra Hearing)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (Ultra Vision)",
        cost: 1,
        rank: 0
    }, {
        name: "Super Senses (X-Ray Vision)",
        cost: 4,
        rank: 0
    }, {
        name: "Super Translation",
        cost: 3,
        rank: 0
    }, {
        name: "Time Stop",
        cost: 12,
        rank: 0
    }, {
        name: "Time Travel",
        cost: 4,
        rank: 0
    }, {
        name: "Trackless",
        cost: 1,
        rank: 0
    }, {
        name: "Transformation",
        cost: 4,
        rank: 0
    }, {
        name: "Two-Dimensional",
        cost: 2,
        rank: 0
    }, {
        name: "Uncanny Defense",
        cost: 2,
        rank: 0
    }, {
        name: "Unkillable",
        cost: 2,
        rank: 0
    }, {
        name: "Unliving",
        cost: 9,
        rank: 0
    }, {
        name: "Vanish",
        cost: 1,
        rank: 0
    }, {
        name: "Wall-Crawling",
        cost: 2,
        rank: 0
    }, {
        name: "Warp Pocket",
        cost: 1,
        rank: 0
    }, {
        name: "Weakness Detection",
        cost: 6,
        rank: 0
    }, {
        name: "Wealth",
        cost: 1,
        rank: 0
    }
];
var prosCons = [
    {
        name: "Languages",
        cost: 1,
        tpp: "Academics",
        rank: 0,
    }, {
        name: "Martial Arts",
        cost: 1,
        tpp: "Athletics",
        rank: 0,
    }, {
        name: "Weaponry",
        cost: 1,
        tpp: "Athletics",
        rank: 0,
    }, {
        name: "Disguise",
        cost: 1,
        tpp: "Charm",
        rank: 0,
    }, {
        name: "Gambling",
        cost: 1,
        tpp: "Charm",
        rank: 0,
    }, {
        name: "Ventriloquism",
        cost: 1,
        tpp: "Charm",
        rank: 0,
    }, {
        name: "Shockwave",
        cost: 2,
        tpp: "Might",
        rank: 0,
    }, {
        name: "Tremor",
        cost: 2,
        tpp: "Might",
        rank: 0,
    }, {
        name: "Acute Sense (Touch)",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Acute Sense (Sight)",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Acute Sense (Hearing)",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Acute Sense (Smell)",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Acute Sense (Taste)",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Investigation",
        cost: 1,
        tpp: "Perception",
        rank: 0,
    }, {
        name: "Experienced",
        cost: 1,
        tpp: "Professional",
        rank: 0,
    }, {
        name: "Aircraft",
        cost: 1,
        tpp: "Vehicles",
        rank: 0,
    }, {
        name: "Spacecraft",
        cost: 1,
        tpp: "Vehicles",
        rank: 0,
    }, {
        name: "Watercraft",
        cost: 1,
        tpp: "Vehicles",
        rank: 0,
    }, {
        name: "Siphon",
        cost: 1,
        tpp: "Absorption",
        rank: 0,
    }, {
        name: "Impenetrable",
        cost: "x2",
        tpp: "Armor",
        rank: 0,
    }, {
        name: "Psychic",
        cost: 0,
        tpp: "Force Field",
        rank: 0,
    }, {
        name: "Active",
        cost: -1,
        tpp: "Armor",
        rank: 0,
    }, {
        name: "Blocking",
        cost: 2,
        tpp: "Strike",
        rank: 0,
    }, {
        name: "Penetrating",
        cost: "x2",
        tpp: "Strike",
        rank: 0,
    }, {
        name: "Marksmanship (Guns)",
        cost: -1,
        tpp: "Blast",
        rank: 0,
    }, {
        name: "Marksmanship (Bows)",
        cost: -1,
        tpp: "Blast",
        rank: 0,
    }, {
        name: "Absolute",
        cost: 2,
        tpp: "Darkness",
        rank: 0,
    }, {
        name: "Deafening",
        cost: -1,
        tpp: "Dazzle",
        rank: 0,
    }, {
        name: "Defensive",
        cost: 3,
        tpp: "Energy Field",
        rank: 0,
    }, {
        name: "Energy Form",
        cost: 6,
        tpp: "Energy Field",
        rank: 0,
    }, {
        name: "Capture",
        cost: 1,
        tpp: "Ensnare",
        rank: 0,
    }, {
        name: "Immobilize",
        cost: -2,
        tpp: "Ensnare",
        rank: 0,
    }, {
        name: "Spaceflight",
        cost: 1,
        tpp: "Flight",
        rank: 0,
    }, {
        name: "Gliding",
        cost: -1,
        tpp: "Flight",
        rank: 0,
    }, {
        name: "Levitation",
        cost: -2,
        tpp: "Flight",
        rank: 0,
    }, {
        name: "Wings",
        cost: -1,
        tpp: "Flight",
        rank: 0,
    }, {
        name: "Cure",
        cost: 2,
        tpp: "Healing/Repair",
        rank: 0,
    }, {
        name: "Slay",
        cost: -4,
        tpp: "Life Drain",
        rank: 0,
    }, {
        name: "Cables",
        cost: -1,
        tpp: "Machine Control",
        rank: 0,
    }, {
        name: "Interface",
        cost: -1,
        tpp: "Machine Control",
        rank: 0,
    }, {
        name: "Animal Control (all)",
        cost: -1,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Animal Control (large category)",
        cost: -2,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Animal Control (small category)",
        cost: -3,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Confusion",
        cost: -2,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Emotion Control (any)",
        cost: -1,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Emotion Control (specific)",
        cost: -2,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Hypnotism",
        cost: -2,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Pheremones",
        cost: -2,
        tpp: "Mind Control",
        rank: 0,
    }, {
        name: "Micro-Universe",
        cost: 1,
        tpp: "Shrinking",
        rank: 0,
    }, {
        name: "Proportional Strength",
        cost: -2,
        tpp: "Shrinking",
        rank: 0,
    }, {
        name: "Dense",
        cost: -2,
        tpp: "Solid Form",
        rank: 0,
    }, {
        name: "Fighting",
        cost: -1,
        tpp: "Strike",
        rank: 0,
    }, {
        name: "Slow",
        cost: -2,
        tpp: "Stun",
        rank: 0,
    }, {
        name: "Focused",
        cost: -2,
        tpp: "Telekinesis",
        rank: 0,
    }, {
        name: "Tendrils",
        cost: -2,
        tpp: "Telekinesis",
        rank: 0,
    }, {
        name: "Weak",
        cost: -4,
        tpp: "Telekinesis",
        rank: 0,
    }, {
        name: "Alter Memory",
        cost: 6,
        tpp: "Telepathy",
        rank: 0,
    }, {
        name: "Cloak Mind",
        cost: 1,
        tpp: "Telepathy",
        rank: 0,
    }, {
        name: "Dream Travel",
        cost: 1,
        tpp: "Telepathy",
        rank: 0,
    }, {
        name: "Sense Minds",
        cost: 2,
        tpp: "Telepathy",
        rank: 0,
    }, {
        name: "Empathy",
        cost: -2,
        tpp: "Telepathy",
        rank: 0,
    }, {
        name: "Blind Porting",
        cost: 2,
        tpp: "Teleportation",
        rank: 0,
    }, {
        name: "Combat Porting",
        cost: 2,
        tpp: "Teleportation",
        rank: 0,
    }, {
        name: "Gate",
        cost: 2,
        tpp: "Time Travel",
        rank: 0,
    }, {
        name: "Disturbance",
        cost: -1,
        tpp: "Tunneling",
        rank: 0,
    }, {
        name: "Adjustible (Normal)",
        cost: 1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Adjustible (Strong)",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Affect Inanimate",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Always On",
        cost: -1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Area/Burst (Fixed)",
        cost: 1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Area/Burst (Toggle)",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Automatic",
        cost: -1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Build Up",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Casting",
        cost: 2,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Charges (6 per Scene)",
        cost: -1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Charges (3 per Scene)",
        cost: -2,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Charges (1 per Scene)",
        cost: -3,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Concentration",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Contact",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Contagious",
        cost: 2,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Delay",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Demanding",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Ethereal",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Fading (Reset Scene)",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Fading (Reset Daily)",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Imprecise",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Inhibited (Infrequent)",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Inhibited (Frequent)",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Item",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Limited (Minor)",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Limited (Major)",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Mental",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Overload",
        cost: 1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Ranged",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Requirement (Easy)",
        cost: -1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Requirement (Hard)",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Ricochet",
        cost: 1,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Selective",
        cost: 2,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Side Effect (Minor)",
        cost: -1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Side Effect (Major)",
        cost: -2,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Signature",
        cost: -1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Subtle",
        cost: 1,
        tpp: "tpp",
        rank: 0,
    }, {
        name: "Trapping",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Underpowered",
        cost: -2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Variant",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Visual Range",
        cost: 2,
        tpp: "tp",
        rank: 0,
    }, {
        name: "Boss",
        cost: 2,
        tpp: "Ally",
        rank: 0,
    }, {
        name: "Summoning",
        cost: 2,
        tpp: "Ally",
        rank: 0,
    }, {
        name: "Xenomorphic",
        cost: 6,
        tpp: "Animal Forms",
        rank: 0,
    }, {
        name: "Supreme",
        cost: 2,
        tpp: "Authority",
        rank: 0,
    }, {
        name: "High Level",
        cost: 2,
        tpp: "Contact",
        rank: 0,
    }, {
        name: "Legion",
        cost: 12,
        tpp: "Duplication",
        rank: 0,
    }, {
        name: "Crazy",
        cost: 2,
        tpp: "Fame",
        rank: 0,
    }, {
        name: "Environmental",
        cost: 2,
        tpp: "Immunity",
        rank: 0,
    }, {
        name: "Make Invisible",
        cost: 2,
        tpp: "Invisibility",
        rank: 0,
    }, {
        name: "Doppleganger",
        cost: -1,
        tpp: "Morph",
        rank: 0,
    }, {
        name: "Clout",
        cost: 2,
        tpp: "Patron",
        rank: 0,
    }, {
        name: "Astral",
        cost: 2,
        tpp: "Phasing",
        rank: 0,
    }, {
        name: "Phase Object",
        cost: 2,
        tpp: "Phasing",
        rank: 0,
    }, {
        name: "Recording",
        cost: 1,
        tpp: "Photographic Memory",
        rank: 0,
    }, {
        name: "Weakness",
        cost: -1,
        tpp: "Regeneration",
        rank: 0,
    }, {
        name: "Waypoints",
        cost: -2,
        tpp: "Time Travel",
        rank: 0,
    }, {
        name: "Weak Form",
        cost: -2,
        tpp: "Transformation",
        rank: 0,
    }, {
        name: "Automaton",
        cost: 6,
        tpp: "Unliving",
        rank: 0,
    }, {
        name: "Wall-Running",
        cost: -1,
        tpp: "Wall-Crawling",
        rank: 0,
    }, {
        name: "Great",
        cost: 2,
        tpp: "Wealth"
    }
];
var armors = [
    {
        name: "Leather",
        Category: "Ancient",
        Defense: 1,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 1,
        Active: 1
    }, {
        name: "Mail",
        Category: "Ancient",
        Defense: 2,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 2,
        Active: 2
    }, {
        name: "Plate",
        Category: "Sci-Fi",
        Defense: 4,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 4,
        Active: 4
    }, {
        name: "Biker Leather",
        Category: "Modern",
        Defense: 1,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 1,
        Active: 1
    }, {
        name: "Bulletproof Cloth",
        Category: "Modern",
        Defense: 2,
        acquired: false,
        special: "Limited (only vs. firearms)",
        Impenetrable: false,
        Passive: 2,
        Active: 2
    }, {
        name: "Military/Riot Gear",
        Category: "Modern",
        Defense: 3,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 3,
        Active: 3
    }, {
        name: "Padding",
        Category: "Sci-Fi",
        Defense: 2,
        acquired: false,
        special: "",
        Impenetrable: false,
        Passive: 2,
        Active: 2
    }, {
        name: "Powered",
        Category: "Sci-Fi",
        Defense: 6,
        acquired: false,
        special: "Impenetrable",
        Impenetrable: true,
        Passive: 6,
        Active: 6
    }
];
var shields = [
    {
        name: "Ancient Shield",
        Category: "Ancient",
        Defense: 1,
        acquired: false,
        special: "Active Only",
        Impenetrable: false,
        Passive: 0,
        Active: 1
    }, {
        name: "Sci-Fi Shield",
        Category: "Sci-Fi",
        Defense: 1,
        acquired: false,
        special: "Active Only, Impenetrable",
        Impenetrable: true,
        Passive: 0,
        Active: 1
    }
];
var weapons = [
    {
        name: "Bow/Crossbow",
        Damage: 3,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Energy Grenade",
        Damage: 4,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Energy Pistol",
        Damage: 4,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Energy Rifle",
        Damage: 5,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Energy Rifle, Assault",
        Damage: 5,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Energy Rifle, Heavy",
        Damage: 6,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Grenade, Explosive",
        Damage: 3,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Grenade, Flash-Bang",
        Damage: 0,
        acquired: false,
        special: "Area, Dazzle 6d, Ranged",
        isRanged: true
    }, {
        name: "Heavy Machinegun",
        Damage: 5,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Heavy Rocket Launcher",
        Damage: 6,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Melee, Blunt",
        Damage: 2,
        acquired: false,
        special: "",
        isRanged: false
    }, {
        name: "Melee, Edged/Exotic",
        Damage: 3,
        acquired: false,
        special: "",
        isRanged: false
    }, {
        name: "Melee, Energy",
        Damage: 3,
        acquired: false,
        special: "Penetrating",
        isRanged: false
    }, {
        name: "Pistol",
        Damage: 3,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Rifle, Assault",
        Damage: 4,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Rifle, Sniper",
        Damage: 4,
        acquired: false,
        special: "Ranged, Visual Range",
        isRanged: true
    }, {
        name: "Shotgun",
        Damage: 4,
        acquired: false,
        special: "Ranged, Limited (short range)",
        isRanged: true
    }, {
        name: "Submachine Gun",
        Damage: 3,
        acquired: false,
        special: "Area, Ranged",
        isRanged: true
    }, {
        name: "Thrown, Blunt",
        Damage: 1,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Thrown, Edged/Exotic",
        Damage: 2,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }, {
        name: "Thrown, Sling",
        Damage: 2,
        acquired: false,
        special: "Ranged",
        isRanged: true
    }
];
var equipment = [
    {
        name: "Binoculars",
        acquired: false
    }, {
        name: "Bug detector",
        acquired: false
    }, {
        name: "Caltrops",
        acquired: false
    }, {
        name: "Camera",
        acquired: false
    }, {
        name: "Cellphone",
        acquired: false
    }, {
        name: "Climbing Claws",
        acquired: false
    }, {
        name: "Climbing Gear",
        acquired: false
    }, {
        name: "Computer",
        acquired: false
    }, {
        name: "Communicator",
        acquired: false
    }, {
        name: "Crowbar",
        acquired: false
    }, {
        name: "Explosives",
        acquired: false
    }, {
        name: "Flashlight",
        acquired: false
    }, {
        name: "Gas Mask",
        acquired: false
    }, {
        name: "Geiger Counter",
        acquired: false
    }, {
        name: "Handcuffs",
        acquired: false
    }, {
        name: "Lantern",
        acquired: false
    }, {
        name: "Light Stick",
        acquired: false
    }, {
        name: "Lockpick Gun",
        acquired: false
    }, {
        name: "Night Vision Goggles",
        acquired: false
    }, {
        name: "Parabolic Microphone",
        acquired: false
    }, {
        name: "Parachute",
        acquired: false
    }, {
        name: "Radio",
        acquired: false
    }, {
        name: "Rappelling Gear",
        acquired: false
    }, {
        name: "Scuba Gear",
        acquired: false
    }, {
        name: "Scope",
        acquired: false
    }, {
        name: "Silencer",
        acquired: false
    }, {
        name: "Space Suit",
        acquired: false
    }, {
        name: "Telescope",
        acquired: false
    }, {
        name: "Tracer Bug",
        acquired: false
    }, {
        name: "Transmitter",
        acquired: false
    }, {
        name: "Wiretap",
        acquired: false
    }
];
var flaws = [
    {
        name: "Absentminded",
    }, {
        name: "Alter Ego",
    }, {
        name: "Amnesia",
    }, {
        name: "Aversion/Fear",
    }, {
        name: "Beast",
    }, {
        name: "Blind",
    }, {
        name: "Broke",
    }, {
        name: "Code of Conduct",
    }, {
        name: "Color Blind",
    }, {
        name: "Compulsion",
    }, {
        name: "Creepy",
    }, {
        name: "Deaf",
    }, {
        name: "Disabled",
    }, {
        name: "Emotionless",
    }, {
        name: "Enemy",
    }, {
        name: "Flashbacks/Guilt",
    }, {
        name: "Frenzy",
    }, {
        name: "Frightening",
    }, {
        name: "Illiterate",
    }, {
        name: "Impaired Sense",
    }, {
        name: "Insane",
    }, {
        name: "Light Sensitive",
    }, {
        name: "Mute",
    }, {
        name: "Night Blind",
    }, {
        name: "Nocturnal",
    }, {
        name: "Notoriety",
    }, {
        name: "Outsider",
    }, {
        name: "Power Limits",
    }, {
        name: "Quirk",
    }, {
        name: "Reaction",
    }, {
        name: "Repair",
    }, {
        name: "Requirement",
    }, {
        name: "Responsibility",
    }, {
        name: "Restriction",
    }, {
        name: "Secret",
    }, {
        name: "Slow",
    }, {
        name: "Unlucky/Jinx",
    }, {
        name: "Unusual Looks",
    }, {
        name: "Unusual Shape",
    }, {
        name: "Unwanted Power",
    }, {
        name: "Vulnerability",
    }, {
        name: "Wanted",
    }
];
var powerSources = [
    {
        name: "Magic",
    }, {
        name: "Natural",
    }, {
        name: "Psionic",
    }, {
        name: "Super",
    }, {
        name: "Tech",
    }, {
        name: "Training",
    }, {
        name: "Custom",
    }
];