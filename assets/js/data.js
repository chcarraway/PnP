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
        name: "special Attack",
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
        multiple: true
    }, {
        name: "Ambidexterity",
        cost: 1
    }, {
        name: "Animal Empathy",
        cost: 2
    }, {
        name: "Animal Forms",
        cost: 6
    }, {
        name: "Astral Projection",
        cost: 6
    }, {
        name: "Authority",
        cost: 1
    }, {
        name: "Blending",
        cost: 2
    }, {
        name: "Blind Fighting",
        cost: 1
    }, {
        name: "Communicator",
        cost: 1
    }, {
        name: "Contact",
        cost: 1,
        multiple: true
    }, {
        name: "Cosmic Awareness",
        cost: 2
    }, {
        name: "Dimensional Travel",
        cost: 2
    }, {
        name: "Duplication",
        cost: 6,
        multiple: true
    }, {
        name: "Enhanced Defense",
        cost: 4
    }, {
        name: "Extra Limbs",
        cost: 1
    }, {
        name: "Fame",
        cost: 1
    }, {
        name: "Gaseous Form",
        cost: 3
    }, {
        name: "Headquarters",
        cost: 1
    }, {
        name: "Hibernation",
        cost: 1
    }, {
        name: "Immortality",
        cost: 1
    }, {
        name: "Immunity (Specific)",
        cost: 1,
        multiple: true
    }, {
        name: "Immunity (Damage Type)",
        cost: 3,
        multiple: true
    }, {
        name: "Invisibility",
        cost: 6
    }, {
        name: "Knockdown",
        cost: 1
    }, {
        name: "Leadership",
        cost: 1
    }, {
        name: "Life Support",
        cost: 1,
        multiple: true
    }, {
        name: "Lightning Reflexes",
        cost: 1
    }, {
        name: "Liquid Form",
        cost: 9
    }, {
        name: "Luck",
        cost: 2
    }, {
        name: "Morph",
        cost: 4
    }, {
        name: "Patron",
        cost: 1
    }, {
        name: "Phasing",
        cost: 4
    }, {
        name: "Photographic Memory",
        cost: 2
    }, {
        name: "Power Mimicry (single)",
        cost: 12
    }, {
        name: "Power Mimicry (all)",
        cost: 24
    }, {
        name: "Power Theft (single)",
        cost: 12
    }, {
        name: "Power Theft (all)",
        cost: 24
    }, {
        name: "Precognition",
        cost: 6
    }, {
        name: "Psi-Screen",
        cost: 1
    }, {
        name: "Psychometry",
        cost: 2
    }, {
        name: "Quick Change",
        cost: 1
    }, {
        name: "Reach",
        cost: 2
    }, {
        name: "Regeneration (1/hour)",
        cost: 3
    }, {
        name: "Regeneration (1/minute)",
        cost: 6
    }, {
        name: "Regeneration (1/page)",
        cost: 12
    }, {
        name: "Relentless",
        cost: 1
    }, {
        name: "Scrying",
        cost: 4
    }, {
        name: "Separation",
        cost: 2
    }, {
        name: "Speak with Dead",
        cost: 2
    }, {
        name: "special Vehicle",
        cost: 1,
        multiple: true
    }, {
        name: "Super Senses (Astral Sight)",
        cost: 1
    }, {
        name: "Super Senses (Attuned)",
        cost: 1
    }, {
        name: "Super Senses (Circular Vision)",
        cost: 1
    }, {
        name: "Super Senses (Danger Sense)",
        cost: 1
    }, {
        name: "Super Senses (Detection)",
        cost: 1
    }, {
        name: "Super Senses (Lie Detection)",
        cost: 1
    }, {
        name: "Super Senses (Microscopic Vision)",
        cost: 1
    }, {
        name: "Super Senses (Night Vision)",
        cost: 1
    }, {
        name: "Super Senses (Radar)",
        cost: 2
    }, {
        name: "Super Senses (Radio Hearing)",
        cost: 1
    }, {
        name: "Super Senses (Sonar)",
        cost: 1
    }, {
        name: "Super Senses (Telescopic Vision)",
        cost: 1
    }, {
        name: "Super Senses (Thermal Vision)",
        cost: 1
    }, {
        name: "Super Senses (Trace)",
        cost: 1
    }, {
        name: "Super Senses (Tracking Scent)",
        cost: 1
    }, {
        name: "Super Senses (True Sight)",
        cost: 4
    }, {
        name: "Super Senses (Ultra Hearing)",
        cost: 1
    }, {
        name: "Super Senses (Ultra Vision)",
        cost: 1
    }, {
        name: "Super Senses (X-Ray Vision)",
        cost: 4
    }, {
        name: "Super Translation",
        cost: 3
    }, {
        name: "Time Stop",
        cost: 12
    }, {
        name: "Time Travel",
        cost: 4
    }, {
        name: "Trackless",
        cost: 1
    }, {
        name: "Transformation",
        cost: 4
    }, {
        name: "Two-Dimensional",
        cost: 2
    }, {
        name: "Uncanny Defense",
        cost: 2
    }, {
        name: "Unkillable",
        cost: 2
    }, {
        name: "Unliving",
        cost: 9
    }, {
        name: "Vanish",
        cost: 1
    }, {
        name: "Wall-Crawling",
        cost: 2
    }, {
        name: "Warp Pocket",
        cost: 1
    }, {
        name: "Weakness Detection",
        cost: 6
    }, {
        name: "Wealth",
        cost: 1
    }
];
var prosCons = [
    {
        name: "Languages",
        modifier: 1,
        tpp: "Academics",
        rank: 0,
        proscons: ""
    }, {
        name: "Martial Arts",
        modifier: 1,
        tpp: "Athletics",
        rank: 0,
        proscons: ""
    }, {
        name: "Weaponry",
        modifier: 1,
        tpp: "Athletics",
        rank: 0,
        proscons: ""
    }, {
        name: "Disguise",
        modifier: 1,
        tpp: "Charm",
        rank: 0,
        proscons: ""
    }, {
        name: "Gambling",
        modifier: 1,
        tpp: "Charm",
        rank: 0,
        proscons: ""
    }, {
        name: "Ventriloquism",
        modifier: 1,
        tpp: "Charm",
        rank: 0,
        proscons: ""
    }, {
        name: "Shockwave",
        modifier: 2,
        tpp: "Might",
        rank: 0,
        proscons: ""
    }, {
        name: "Tremor",
        modifier: 2,
        tpp: "Might",
        rank: 0,
        proscons: ""
    }, {
        name: "Acute Sense (Touch)",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Acute Sense (Sight)",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Acute Sense (Hearing)",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Acute Sense (Smell)",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Acute Sense (Taste)",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Investigation",
        modifier: 1,
        tpp: "Perception",
        rank: 0,
        proscons: ""
    }, {
        name: "Experienced",
        modifier: 1,
        tpp: "Professional",
        rank: 0,
        proscons: ""
    }, {
        name: "Aircraft",
        modifier: 1,
        tpp: "Vehicles",
        rank: 0,
        proscons: ""
    }, {
        name: "Spacecraft",
        modifier: 1,
        tpp: "Vehicles",
        rank: 0,
        proscons: ""
    }, {
        name: "Watercraft",
        modifier: 1,
        tpp: "Vehicles",
        rank: 0,
        proscons: ""
    }, {
        name: "Siphon",
        modifier: 1,
        tpp: "Absorption",
        rank: 0,
        proscons: ""
    }, {
        name: "Impenetrable",
        modifier: "x2",
        tpp: "Armor",
        rank: 0,
        proscons: ""
    }, {
        name: "Psychic",
        modifier: 0,
        tpp: "Force Field",
        rank: 0,
        proscons: ""
    }, {
        name: "Active",
        modifier: -1,
        tpp: "Armor",
        rank: 0,
        proscons: ""
    }, {
        name: "Blocking",
        modifier: 2,
        tpp: "Strike",
        rank: 0,
        proscons: ""
    }, {
        name: "Penetrating",
        modifier: "x2",
        tpp: "Strike",
        rank: 0,
        proscons: ""
    }, {
        name: "Marksmanship (Guns)",
        modifier: -1,
        tpp: "Blast",
        rank: 0,
        proscons: ""
    }, {
        name: "Marksmanship (Bows)",
        modifier: -1,
        tpp: "Blast",
        rank: 0,
        proscons: ""
    }, {
        name: "Absolute",
        modifier: 2,
        tpp: "Darkness",
        rank: 0,
        proscons: ""
    }, {
        name: "Deafening",
        modifier: -1,
        tpp: "Dazzle",
        rank: 0,
        proscons: ""
    }, {
        name: "Defensive",
        modifier: 3,
        tpp: "Energy Field",
        rank: 0,
        proscons: ""
    }, {
        name: "Energy Form",
        modifier: 6,
        tpp: "Energy Field",
        rank: 0,
        proscons: ""
    }, {
        name: "Capture",
        modifier: 1,
        tpp: "Ensnare",
        rank: 0,
        proscons: ""
    }, {
        name: "Immobilize",
        modifier: -2,
        tpp: "Ensnare",
        rank: 0,
        proscons: ""
    }, {
        name: "Spaceflight",
        modifier: 1,
        tpp: "Flight",
        rank: 0,
        proscons: ""
    }, {
        name: "Gliding",
        modifier: -1,
        tpp: "Flight",
        rank: 0,
        proscons: ""
    }, {
        name: "Levitation",
        modifier: -2,
        tpp: "Flight",
        rank: 0,
        proscons: ""
    }, {
        name: "Wings",
        modifier: -1,
        tpp: "Flight",
        rank: 0,
        proscons: ""
    }, {
        name: "Cure",
        modifier: 2,
        tpp: "Healing/Repair",
        rank: 0,
        proscons: ""
    }, {
        name: "Slay",
        modifier: -4,
        tpp: "Life Drain",
        rank: 0,
        proscons: ""
    }, {
        name: "Cables",
        modifier: -1,
        tpp: "Machine Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Interface",
        modifier: -1,
        tpp: "Machine Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Animal Control (all)",
        modifier: -1,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Animal Control (large category)",
        modifier: -2,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Animal Control (small category)",
        modifier: -3,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Confusion",
        modifier: -2,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Emotion Control (any)",
        modifier: -1,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Emotion Control (specific)",
        modifier: -2,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Hypnotism",
        modifier: -2,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Pheremones",
        modifier: -2,
        tpp: "Mind Control",
        rank: 0,
        proscons: ""
    }, {
        name: "Micro-Universe",
        modifier: 1,
        tpp: "Shrinking",
        rank: 0,
        proscons: ""
    }, {
        name: "Proportional Strength",
        modifier: -2,
        tpp: "Shrinking",
        rank: 0,
        proscons: ""
    }, {
        name: "Dense",
        modifier: -2,
        tpp: "Solid Form",
        rank: 0,
        proscons: ""
    }, {
        name: "Fighting",
        modifier: -1,
        tpp: "Strike",
        rank: 0,
        proscons: ""
    }, {
        name: "Slow",
        modifier: -2,
        tpp: "Stun",
        rank: 0,
        proscons: ""
    }, {
        name: "Focused",
        modifier: -2,
        tpp: "Telekenisis",
        rank: 0,
        proscons: ""
    }, {
        name: "Tendrils",
        modifier: -2,
        tpp: "Telekenisis",
        rank: 0,
        proscons: ""
    }, {
        name: "Weak",
        modifier: -4,
        tpp: "Telekenisis",
        rank: 0,
        proscons: ""
    }, {
        name: "Alter Memory",
        modifier: 6,
        tpp: "Telepathy",
        rank: 0,
        proscons: ""
    }, {
        name: "Cloak Mind",
        modifier: 1,
        tpp: "Telepathy",
        rank: 0,
        proscons: ""
    }, {
        name: "Dream Travel",
        modifier: 1,
        tpp: "Telepathy",
        rank: 0,
        proscons: ""
    }, {
        name: "Sense Minds",
        modifier: 2,
        tpp: "Telepathy",
        rank: 0,
        proscons: ""
    }, {
        name: "Empathy",
        modifier: -2,
        tpp: "Telepathy",
        rank: 0,
        proscons: ""
    }, {
        name: "Blind Porting",
        modifier: 2,
        tpp: "Teleportation",
        rank: 0,
        proscons: ""
    }, {
        name: "Combat Porting",
        modifier: 2,
        tpp: "Teleportation",
        rank: 0,
        proscons: ""
    }, {
        name: "Gate",
        modifier: 2,
        tpp: "Time Travel",
        rank: 0,
        proscons: ""
    }, {
        name: "Disturbance",
        modifier: -1,
        tpp: "Tunneling",
        rank: 0,
        proscons: ""
    }, {
        name: "Adjustible (Normal)",
        modifier: 1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Adjustible (Strong)",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Affect Inanimate",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Always On",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Area/Burst (Fixed)",
        modifier: 1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Area/Burst (Toggle)",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Automatic",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Build Up",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Casting",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Charges (6 per Scene)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Charges (3 per Scene)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Charges (1 per Scene)",
        modifier: -3,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Concentration",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Contact",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Contagious",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Delay",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Demanding",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Ethereal",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Fading (Reset Scene)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Fading (Reset Daily)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Imprecise",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Inhibited (Infrequent)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Inhibited (Frequent)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Item",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Limited (Minor)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Limited (Major)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Mental",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Overload",
        modifier: 1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Ranged",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Requirement (Easy)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Requirement (Hard)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Ricochet",
        modifier: 1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Selective",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Side Effect (Minor)",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Side Effect (Major)",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Signature",
        modifier: -1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Subtle",
        modifier: 1,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Trapping",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Underpowered",
        modifier: -2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Variant",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Visual Range",
        modifier: 2,
        tpp: "tpp",
        rank: 0,
        proscons: ""
    }, {
        name: "Boss",
        modifier: 2,
        tpp: "Ally",
        rank: 0,
        proscons: ""
    }, {
        name: "Summoning",
        modifier: 2,
        tpp: "Ally",
        rank: 0,
        proscons: ""
    }, {
        name: "Xenomorphic",
        modifier: 6,
        tpp: "Animal Forms",
        rank: 0,
        proscons: ""
    }, {
        name: "Supreme",
        modifier: 2,
        tpp: "Authority",
        rank: 0,
        proscons: ""
    }, {
        name: "High Level",
        modifier: 2,
        tpp: "Contact",
        rank: 0,
        proscons: ""
    }, {
        name: "Legion",
        modifier: 12,
        tpp: "Duplication",
        rank: 0,
        proscons: ""
    }, {
        name: "Crazy",
        modifier: 2,
        tpp: "Fame",
        rank: 0,
        proscons: ""
    }, {
        name: "Environmental",
        modifier: 2,
        tpp: "Immunity",
        rank: 0,
        proscons: ""
    }, {
        name: "Make Invisible",
        modifier: 2,
        tpp: "Invisibility",
        rank: 0,
        proscons: ""
    }, {
        name: "Doppleganger",
        modifier: -1,
        tpp: "Morph",
        rank: 0,
        proscons: ""
    }, {
        name: "Clout",
        modifier: 2,
        tpp: "Patron",
        rank: 0,
        proscons: ""
    }, {
        name: "Astral",
        modifier: 2,
        tpp: "Phasing",
        rank: 0,
        proscons: ""
    }, {
        name: "Phase Object",
        modifier: 2,
        tpp: "Phasing",
        rank: 0,
        proscons: ""
    }, {
        name: "Recording",
        modifier: 1,
        tpp: "Photographic Memory",
        rank: 0,
        proscons: ""
    }, {
        name: "Weakness",
        modifier: -1,
        tpp: "Regeneration",
        rank: 0,
        proscons: ""
    }, {
        name: "Waypoints",
        modifier: -2,
        tpp: "Time Travel",
        rank: 0,
        proscons: ""
    }, {
        name: "Weak Form",
        modifier: -2,
        tpp: "Transformation",
        rank: 0,
        proscons: ""
    }, {
        name: "Automaton",
        modifier: 6,
        tpp: "Unliving",
        rank: 0,
        proscons: ""
    }, {
        name: "Wall-Running",
        modifier: -1,
        tpp: "Wall-Crawling",
        rank: 0,
        proscons: ""
    }, {
        name: "Great",
        modifier: 2,
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