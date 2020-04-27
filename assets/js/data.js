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
        weak: "FALSE",
        rank: 0
    }, {
        name: "Athletics",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Charm",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Command",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Medical",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Might",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Perception",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Professional",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Riding",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Science",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Stealth",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Streetwise",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Survival",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Technology",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Thievery",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Toughness",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Vehicles",
        start: 2,
        weak: "FALSE",
        rank: 0
    }, {
        name: "Willpower",
        start: 2,
        weak: "FALSE"
    }
];
var powers = [
    {
        name: "Absorption",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Animate Images",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Animate Objects",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Armor",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Banish",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Blast",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Boost",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Constructs",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Darkness",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Dazzle",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Deflection",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Dispel",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Drain",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Energy Field",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Ensnare",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Flight",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Force Field",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Growth",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Healing/Repair",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Illusions",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Images",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Leaping",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Life Drain",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Machine Control",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Matter Chameleon",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Mind Blast",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Mind Control",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Nullification",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Omni Power",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Plasticity",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Port Other",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Possession",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Power Slide",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Running",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Shrinking",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Solid Form",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Special Attack",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Strike",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Stun",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Super Speed",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Swimming",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Swing Line",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Telekinesis",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Telepathy",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Teleportation",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Transform Other",
        start: 0,
        strong: "FALSE",
        rank: 0
    }, {
        name: "Transmutation",
        start: 0,
        strong: "TRUE",
        rank: 0
    }, {
        name: "Tunneling",
        start: 0,
        strong: "FALSE",
        rank: 0
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
        name: "Special Vehicle",
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
        Modifier: 1,
        TPP: "Academics",
        rank: 0
    }, {
        name: "Martial Arts",
        Modifier: 1,
        TPP: "Athletics",
        rank: 0
    }, {
        name: "Weaponry",
        Modifier: 1,
        TPP: "Athletics",
        rank: 0
    }, {
        name: "Disguise",
        Modifier: 1,
        TPP: "Charm",
        rank: 0
    }, {
        name: "Gambling",
        Modifier: 1,
        TPP: "Charm",
        rank: 0
    }, {
        name: "Ventriloquism",
        Modifier: 1,
        TPP: "Charm",
        rank: 0
    }, {
        name: "Shockwave",
        Modifier: 2,
        TPP: "Might",
        rank: 0
    }, {
        name: "Tremor",
        Modifier: 2,
        TPP: "Might",
        rank: 0
    }, {
        name: "Acute Sense (Touch)",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Acute Sense (Sight)",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Acute Sense (Hearing)",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Acute Sense (Smell)",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Acute Sense (Taste)",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Investigation",
        Modifier: 1,
        TPP: "Perception",
        rank: 0
    }, {
        name: "Experienced",
        Modifier: 1,
        TPP: "Professional",
        rank: 0
    }, {
        name: "Aircraft",
        Modifier: 1,
        TPP: "Vehicles",
        rank: 0
    }, {
        name: "Spacecraft",
        Modifier: 1,
        TPP: "Vehicles",
        rank: 0
    }, {
        name: "Watercraft",
        Modifier: 1,
        TPP: "Vehicles",
        rank: 0
    }, {
        name: "Siphon",
        Modifier: 1,
        TPP: "Absorption",
        rank: 0
    }, {
        name: "Impenetrable",
        Modifier: "x2",
        TPP: "Armor",
        rank: 0
    }, {
        name: "Psychic",
        Modifier: 0,
        TPP: "Force Field",
        rank: 0
    }, {
        name: "Active",
        Modifier: -1,
        TPP: "Armor",
        rank: 0
    }, {
        name: "Blocking",
        Modifier: 2,
        TPP: "Strike",
        rank: 0
    }, {
        name: "Penetrating",
        Modifier: "x2",
        TPP: "Strike",
        rank: 0
    }, {
        name: "Marksmanship (Guns)",
        Modifier: -1,
        TPP: "Blast",
        rank: 0
    }, {
        name: "Marksmanship (Bows)",
        Modifier: -1,
        TPP: "Blast",
        rank: 0
    }, {
        name: "Absolute",
        Modifier: 2,
        TPP: "Darkness",
        rank: 0
    }, {
        name: "Deafening",
        Modifier: -1,
        TPP: "Dazzle",
        rank: 0
    }, {
        name: "Defensive",
        Modifier: 3,
        TPP: "Energy Field",
        rank: 0
    }, {
        name: "Energy Form",
        Modifier: 6,
        TPP: "Energy Field",
        rank: 0
    }, {
        name: "Capture",
        Modifier: 1,
        TPP: "Ensnare",
        rank: 0
    }, {
        name: "Immobilize",
        Modifier: -2,
        TPP: "Ensnare",
        rank: 0
    }, {
        name: "Spaceflight",
        Modifier: 1,
        TPP: "Flight",
        rank: 0
    }, {
        name: "Gliding",
        Modifier: -1,
        TPP: "Flight",
        rank: 0
    }, {
        name: "Levitation",
        Modifier: -2,
        TPP: "Flight",
        rank: 0
    }, {
        name: "Wings",
        Modifier: -1,
        TPP: "Flight",
        rank: 0
    }, {
        name: "Cure",
        Modifier: 2,
        TPP: "Healing/Repair",
        rank: 0
    }, {
        name: "Slay",
        Modifier: -4,
        TPP: "Life Drain",
        rank: 0
    }, {
        name: "Cables",
        Modifier: -1,
        TPP: "Machine Control",
        rank: 0
    }, {
        name: "Interface",
        Modifier: -1,
        TPP: "Machine Control",
        rank: 0
    }, {
        name: "Animal Control (all)",
        Modifier: -1,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Animal Control (large category)",
        Modifier: -2,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Animal Control (small category)",
        Modifier: -3,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Confusion",
        Modifier: -2,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Emotion Control (any)",
        Modifier: -1,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Emotion Control (specific)",
        Modifier: -2,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Hypnotism",
        Modifier: -2,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Pheremones",
        Modifier: -2,
        TPP: "Mind Control",
        rank: 0
    }, {
        name: "Micro-Universe",
        Modifier: 1,
        TPP: "Shrinking",
        rank: 0
    }, {
        name: "Proportional Strength",
        Modifier: -2,
        TPP: "Shrinking",
        rank: 0
    }, {
        name: "Dense",
        Modifier: -2,
        TPP: "Solid Form",
        rank: 0
    }, {
        name: "Fighting",
        Modifier: -1,
        TPP: "Strike",
        rank: 0
    }, {
        name: "Slow",
        Modifier: -2,
        TPP: "Stun",
        rank: 0
    }, {
        name: "Focused",
        Modifier: -2,
        TPP: "Telekenisis",
        rank: 0
    }, {
        name: "Tendrils",
        Modifier: -2,
        TPP: "Telekenisis",
        rank: 0
    }, {
        name: "Weak",
        Modifier: -4,
        TPP: "Telekenisis",
        rank: 0
    }, {
        name: "Alter Memory",
        Modifier: 6,
        TPP: "Telepathy",
        rank: 0
    }, {
        name: "Cloak Mind",
        Modifier: 1,
        TPP: "Telepathy",
        rank: 0
    }, {
        name: "Dream Travel",
        Modifier: 1,
        TPP: "Telepathy",
        rank: 0
    }, {
        name: "Sense Minds",
        Modifier: 2,
        TPP: "Telepathy",
        rank: 0
    }, {
        name: "Empathy",
        Modifier: -2,
        TPP: "Telepathy",
        rank: 0
    }, {
        name: "Blind Porting",
        Modifier: 2,
        TPP: "Teleportation",
        rank: 0
    }, {
        name: "Combat Porting",
        Modifier: 2,
        TPP: "Teleportation",
        rank: 0
    }, {
        name: "Gate",
        Modifier: 2,
        TPP: "Time Travel",
        rank: 0
    }, {
        name: "Disturbance",
        Modifier: -1,
        TPP: "Tunneling",
        rank: 0
    }, {
        name: "Adjustible (Normal)",
        Modifier: 1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Adjustible (Strong)",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Affect Inanimate",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Always On",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Area/Burst (Fixed)",
        Modifier: 1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Area/Burst (Toggle)",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Automatic",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Build Up",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Casting",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Charges (6 per Scene)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Charges (3 per Scene)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Charges (1 per Scene)",
        Modifier: -3,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Concentration",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Contact",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Contagious",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Delay",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Demanding",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Ethereal",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Fading (Reset Scene)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Fading (Reset Daily)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Imprecise",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Inhibited (Infrequent)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Inhibited (Frequent)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Item",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Limited (Minor)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Limited (Major)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Mental",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Overload",
        Modifier: 1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Ranged",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Requirement (Easy)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Requirement (Hard)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Ricochet",
        Modifier: 1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Selective",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Side Effect (Minor)",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Side Effect (Major)",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Signature",
        Modifier: -1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Subtle",
        Modifier: 1,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Trapping",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Underpowered",
        Modifier: -2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Variant",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Visual Range",
        Modifier: 2,
        TPP: "TPP",
        rank: 0
    }, {
        name: "Boss",
        Modifier: 2,
        TPP: "Ally",
        rank: 0
    }, {
        name: "Summoning",
        Modifier: 2,
        TPP: "Ally",
        rank: 0
    }, {
        name: "Xenomorphic",
        Modifier: 6,
        TPP: "Animal Forms",
        rank: 0
    }, {
        name: "Supreme",
        Modifier: 2,
        TPP: "Authority",
        rank: 0
    }, {
        name: "High Level",
        Modifier: 2,
        TPP: "Contact",
        rank: 0
    }, {
        name: "Legion",
        Modifier: 12,
        TPP: "Duplication",
        rank: 0
    }, {
        name: "Crazy",
        Modifier: 2,
        TPP: "Fame",
        rank: 0
    }, {
        name: "Environmental",
        Modifier: 2,
        TPP: "Immunity",
        rank: 0
    }, {
        name: "Make Invisible",
        Modifier: 2,
        TPP: "Invisibility",
        rank: 0
    }, {
        name: "Doppleganger",
        Modifier: -1,
        TPP: "Morph",
        rank: 0
    }, {
        name: "Clout",
        Modifier: 2,
        TPP: "Patron",
        rank: 0
    }, {
        name: "Astral",
        Modifier: 2,
        TPP: "Phasing",
        rank: 0
    }, {
        name: "Phase Object",
        Modifier: 2,
        TPP: "Phasing",
        rank: 0
    }, {
        name: "Recording",
        Modifier: 1,
        TPP: "Photographic Memory",
        rank: 0
    }, {
        name: "Weakness",
        Modifier: -1,
        TPP: "Regeneration",
        rank: 0
    }, {
        name: "Waypoints",
        Modifier: -2,
        TPP: "Time Travel",
        rank: 0
    }, {
        name: "Weak Form",
        Modifier: -2,
        TPP: "Transformation",
        rank: 0
    }, {
        name: "Automaton",
        Modifier: 6,
        TPP: "Unliving",
        rank: 0
    }, {
        name: "Wall-Running",
        Modifier: -1,
        TPP: "Wall-Crawling",
        rank: 0
    }, {
        name: "Great",
        Modifier: 2,
        TPP: "Wealth"
    }
];
var armors = [
    {
        name: "Leather",
        Category: "Ancient",
        Defense: 1,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 1,
        Active: 1
    }, {
        name: "Mail",
        Category: "Ancient",
        Defense: 2,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 2,
        Active: 2
    }, {
        name: "Plate",
        Category: "Sci-Fi",
        Defense: 4,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 4,
        Active: 4
    }, {
        name: "Biker Leather",
        Category: "Modern",
        Defense: 1,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 1,
        Active: 1
    }, {
        name: "Bulletproof Cloth",
        Category: "Modern",
        Defense: 2,
        Special: "Limited (only vs. firearms)",
        Impenetrable: "FALSE",
        Passive: 2,
        Active: 2
    }, {
        name: "Military/Riot Gear",
        Category: "Modern",
        Defense: 3,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 3,
        Active: 3
    }, {
        name: "Padding",
        Category: "Sci-Fi",
        Defense: 2,
        Special: "",
        Impenetrable: "FALSE",
        Passive: 2,
        Active: 2
    }, {
        name: "Powered",
        Category: "Sci-Fi",
        Defense: 6,
        Special: "Impenetrable",
        Impenetrable: "TRUE",
        Passive: 6,
        Active: 6
    }
];
var shields = [
    {
        name: "Ancient Shield",
        Category: "Ancient",
        Defense: 1,
        Special: "Active Only",
        Impenetrable: "FALSE",
        Passive: 0,
        Active: 1
    }, {
        name: "Sci-Fi Shield",
        Category: "Sci-Fi",
        Defense: 1,
        Special: "Active Only, Impenetrable",
        Impenetrable: "TRUE",
        Passive: 0,
        Active: 1
    }
];
var weapons = [
    {
        name: "Bow/Crossbow",
        Damage: 3,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Energy Grenade",
        Damage: 4,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Energy Pistol",
        Damage: 4,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Energy Rifle",
        Damage: 5,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Energy Rifle, Assault",
        Damage: 5,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Energy Rifle, Heavy",
        Damage: 6,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Grenade, Explosive",
        Damage: 3,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Grenade, Flash-Bang",
        Damage: 0,
        Special: "Area, Dazzle 6d, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Heavy Machinegun",
        Damage: 5,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Heavy Rocket Launcher",
        Damage: 6,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Melee, Blunt",
        Damage: 2,
        Special: "",
        isRanged: "FALSE",
        rank: 0
    }, {
        name: "Melee, Edged/Exotic",
        Damage: 3,
        Special: "",
        isRanged: "FALSE",
        rank: 0
    }, {
        name: "Melee, Energy",
        Damage: 3,
        Special: "Penetrating",
        isRanged: "FALSE",
        rank: 0
    }, {
        name: "Pistol",
        Damage: 3,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Rifle, Assault",
        Damage: 4,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Rifle, Sniper",
        Damage: 4,
        Special: "Ranged, Visual Range",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Shotgun",
        Damage: 4,
        Special: "Ranged, Limited (short range)",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Submachine Gun",
        Damage: 3,
        Special: "Area, Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Thrown, Blunt",
        Damage: 1,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Thrown, Edged/Exotic",
        Damage: 2,
        Special: "Ranged",
        isRanged: "TRUE",
        rank: 0
    }, {
        name: "Thrown, Sling",
        Damage: 2,
        Special: "Ranged",
        isRanged: "TRUE"
    }
];
var equipment = [
    {
        name: "Binoculars",
    }, {
        name: "Bug detector",
    }, {
        name: "Caltrops",
    }, {
        name: "Camera",
    }, {
        name: "Cellphone",
    }, {
        name: "Climbing Claws",
    }, {
        name: "Climbing Gear",
    }, {
        name: "Computer",
    }, {
        name: "Communicator",
    }, {
        name: "Crowbar",
    }, {
        name: "Explosives",
    }, {
        name: "Flashlight",
    }, {
        name: "Gas Mask",
    }, {
        name: "Geiger Counter",
    }, {
        name: "Handcuffs",
    }, {
        name: "Lantern",
    }, {
        name: "Light Stick",
    }, {
        name: "Lockpick Gun",
    }, {
        name: "Night Vision Goggles",
    }, {
        name: "Parabolic Microphone",
    }, {
        name: "Parachute",
    }, {
        name: "Radio",
    }, {
        name: "Rappelling Gear",
    }, {
        name: "Scuba Gear",
    }, {
        name: "Scope",
    }, {
        name: "Silencer",
    }, {
        name: "Space Suit",
    }, {
        name: "Telescope",
    }, {
        name: "Tracer Bug",
    }, {
        name: "Transmitter",
    }, {
        name: "Wiretap",
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