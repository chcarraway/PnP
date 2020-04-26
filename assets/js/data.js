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
        weak: "FALSE"
    }, {
        name: "Athletics",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Charm",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Command",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Medical",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Might",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Perception",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Professional",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Riding",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Science",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Stealth",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Streetwise",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Survival",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Technology",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Thievery",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Toughness",
        start: 2,
        weak: "FALSE"
    }, {
        name: "Vehicles",
        start: 2,
        weak: "FALSE"
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
        strong: "FALSE"
    }, {
        name: "Animate Images",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Animate Objects",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Armor",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Banish",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Blast",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Boost",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Constructs",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Darkness",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Dazzle",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Deflection",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Dispel",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Drain",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Energy Field",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Ensnare",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Flight",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Force Field",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Growth",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Healing/Repair",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Illusions",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Images",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Leaping",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Life Drain",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Machine Control",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Matter Chameleon",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Mind Blast",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Mind Control",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Nullification",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Omni Power",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Plasticity",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Port Other",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Possession",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Power Slide",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Running",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Shrinking",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Solid Form",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Special Attack",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Strike",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Stun",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Super Speed",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Swimming",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Swing Line",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Telekinesis",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Telepathy",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Teleportation",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Transform Other",
        start: 0,
        strong: "FALSE"
    }, {
        name: "Transmutation",
        start: 0,
        strong: "TRUE"
    }, {
        name: "Tunneling",
        start: 0,
        strong: "FALSE"
    }
];
var perks = [
    {
        name: "Ally",
        Modifier: 2
    }, {
        name: "Ambidexterity",
        Modifier: 1
    }, {
        name: "Animal Empathy",
        Modifier: 2
    }, {
        name: "Animal Forms",
        Modifier: 6
    }, {
        name: "Astral Projection",
        Modifier: 6
    }, {
        name: "Authority",
        Modifier: 1
    }, {
        name: "Blending",
        Modifier: 2
    }, {
        name: "Blind Fighting",
        Modifier: 1
    }, {
        name: "Communicator",
        Modifier: 1
    }, {
        name: "Contact",
        Modifier: 1
    }, {
        name: "Cosmic Awareness",
        Modifier: 2
    }, {
        name: "Dimensional Travel",
        Modifier: 2
    }, {
        name: "Duplication",
        Modifier: 6
    }, {
        name: "Enhanced Defense",
        Modifier: 4
    }, {
        name: "Extra Limbs",
        Modifier: 1
    }, {
        name: "Fame",
        Modifier: 1
    }, {
        name: "Gaseous Form",
        Modifier: 3
    }, {
        name: "Headquarters",
        Modifier: 1
    }, {
        name: "Hibernation",
        Modifier: 1
    }, {
        name: "Immortality",
        Modifier: 1
    }, {
        name: "Immunity (Specific)",
        Modifier: 1
    }, {
        name: "Immunity (Damage Type)",
        Modifier: 3
    }, {
        name: "Invisibility",
        Modifier: 6
    }, {
        name: "Knockdown",
        Modifier: 1
    }, {
        name: "Leadership",
        Modifier: 1
    }, {
        name: "Life Support",
        Modifier: 1
    }, {
        name: "Lightning Reflexes",
        Modifier: 1
    }, {
        name: "Liquid Form",
        Modifier: 9
    }, {
        name: "Luck",
        Modifier: 2
    }, {
        name: "Morph",
        Modifier: 4
    }, {
        name: "Patron",
        Modifier: 1
    }, {
        name: "Phasing",
        Modifier: 4
    }, {
        name: "Photographic Memory",
        Modifier: 2
    }, {
        name: "Power Mimicry (single)",
        Modifier: 12
    }, {
        name: "Power Mimicry (all)",
        Modifier: 24
    }, {
        name: "Power Theft (single)",
        Modifier: 12
    }, {
        name: "Power Theft (all)",
        Modifier: 24
    }, {
        name: "Precognition",
        Modifier: 6
    }, {
        name: "Psi-Screen",
        Modifier: 1
    }, {
        name: "Psychometry",
        Modifier: 2
    }, {
        name: "Quick Change",
        Modifier: 1
    }, {
        name: "Reach",
        Modifier: 2
    }, {
        name: "Regeneration (1/hour)",
        Modifier: 3
    }, {
        name: "Regeneration (1/minute)",
        Modifier: 6
    }, {
        name: "Regeneration (1/page)",
        Modifier: 12
    }, {
        name: "Relentless",
        Modifier: 1
    }, {
        name: "Scrying",
        Modifier: 4
    }, {
        name: "Separation",
        Modifier: 2
    }, {
        name: "Speak with Dead",
        Modifier: 2
    }, {
        name: "Special Vehicle",
        Modifier: 1
    }, {
        name: "Super Senses (Astral Sight)",
        Modifier: 1
    }, {
        name: "Super Senses (Attuned)",
        Modifier: 1
    }, {
        name: "Super Senses (Circular Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (Danger Sense)",
        Modifier: 1
    }, {
        name: "Super Senses (Detection)",
        Modifier: 1
    }, {
        name: "Super Senses (Lie Detection)",
        Modifier: 1
    }, {
        name: "Super Senses (Microscopic Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (Night Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (Radar)",
        Modifier: 2
    }, {
        name: "Super Senses (Radio Hearing)",
        Modifier: 1
    }, {
        name: "Super Senses (Sonar)",
        Modifier: 1
    }, {
        name: "Super Senses (Telescopic Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (Thermal Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (Trace)",
        Modifier: 1
    }, {
        name: "Super Senses (Tracking Scent)",
        Modifier: 1
    }, {
        name: "Super Senses (True Sight)",
        Modifier: 4
    }, {
        name: "Super Senses (Ultra Hearing)",
        Modifier: 1
    }, {
        name: "Super Senses (Ultra Vision)",
        Modifier: 1
    }, {
        name: "Super Senses (X-Ray Vision)",
        Modifier: 4
    }, {
        name: "Super Translation",
        Modifier: 3
    }, {
        name: "Time Stop",
        Modifier: 12
    }, {
        name: "Time Travel",
        Modifier: 4
    }, {
        name: "Trackless",
        Modifier: 1
    }, {
        name: "Transformation",
        Modifier: 4
    }, {
        name: "Two-Dimensional",
        Modifier: 2
    }, {
        name: "Uncanny Defense",
        Modifier: 2
    }, {
        name: "Unkillable",
        Modifier: 2
    }, {
        name: "Unliving",
        Modifier: 9
    }, {
        name: "Vanish",
        Modifier: 1
    }, {
        name: "Wall-Crawling",
        Modifier: 2
    }, {
        name: "Warp Pocket",
        Modifier: 1
    }, {
        name: "Weakness Detection",
        Modifier: 6
    }, {
        name: "Wealth",
        Modifier: 1
    }
];
var prosCons = [
    {
        name: "Languages",
        Modifier: 1,
        TPP: "Academics"
    }, {
        name: "Martial Arts",
        Modifier: 1,
        TPP: "Athletics"
    }, {
        name: "Weaponry",
        Modifier: 1,
        TPP: "Athletics"
    }, {
        name: "Disguise",
        Modifier: 1,
        TPP: "Charm"
    }, {
        name: "Gambling",
        Modifier: 1,
        TPP: "Charm"
    }, {
        name: "Ventriloquism",
        Modifier: 1,
        TPP: "Charm"
    }, {
        name: "Shockwave",
        Modifier: 2,
        TPP: "Might"
    }, {
        name: "Tremor",
        Modifier: 2,
        TPP: "Might"
    }, {
        name: "Acute Sense (Touch)",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Acute Sense (Sight)",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Acute Sense (Hearing)",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Acute Sense (Smell)",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Acute Sense (Taste)",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Investigation",
        Modifier: 1,
        TPP: "Perception"
    }, {
        name: "Experienced",
        Modifier: 1,
        TPP: "Professional"
    }, {
        name: "Aircraft",
        Modifier: 1,
        TPP: "Vehicles"
    }, {
        name: "Spacecraft",
        Modifier: 1,
        TPP: "Vehicles"
    }, {
        name: "Watercraft",
        Modifier: 1,
        TPP: "Vehicles"
    }, {
        name: "Siphon",
        Modifier: 1,
        TPP: "Absorption"
    }, {
        name: "Impenetrable",
        Modifier: "x2",
        TPP: "Armor"
    }, {
        name: "Psychic",
        Modifier: 0,
        TPP: "Force Field"
    }, {
        name: "Active",
        Modifier: -1,
        TPP: "Armor"
    }, {
        name: "Blocking",
        Modifier: 2,
        TPP: "Strike"
    }, {
        name: "Penetrating",
        Modifier: "x2",
        TPP: "Strike"
    }, {
        name: "Marksmanship (Guns)",
        Modifier: -1,
        TPP: "Blast"
    }, {
        name: "Marksmanship (Bows)",
        Modifier: -1,
        TPP: "Blast"
    }, {
        name: "Absolute",
        Modifier: 2,
        TPP: "Darkness"
    }, {
        name: "Deafening",
        Modifier: -1,
        TPP: "Dazzle"
    }, {
        name: "Defensive",
        Modifier: 3,
        TPP: "Energy Field"
    }, {
        name: "Energy Form",
        Modifier: 6,
        TPP: "Energy Field"
    }, {
        name: "Capture",
        Modifier: 1,
        TPP: "Ensnare"
    }, {
        name: "Immobilize",
        Modifier: -2,
        TPP: "Ensnare"
    }, {
        name: "Spaceflight",
        Modifier: 1,
        TPP: "Flight"
    }, {
        name: "Gliding",
        Modifier: -1,
        TPP: "Flight"
    }, {
        name: "Levitation",
        Modifier: -2,
        TPP: "Flight"
    }, {
        name: "Wings",
        Modifier: -1,
        TPP: "Flight"
    }, {
        name: "Cure",
        Modifier: 2,
        TPP: "Healing/Repair"
    }, {
        name: "Slay",
        Modifier: -4,
        TPP: "Life Drain"
    }, {
        name: "Cables",
        Modifier: -1,
        TPP: "Machine Control"
    }, {
        name: "Interface",
        Modifier: -1,
        TPP: "Machine Control"
    }, {
        name: "Animal Control (all)",
        Modifier: -1,
        TPP: "Mind Control"
    }, {
        name: "Animal Control (large category)",
        Modifier: -2,
        TPP: "Mind Control"
    }, {
        name: "Animal Control (small category)",
        Modifier: -3,
        TPP: "Mind Control"
    }, {
        name: "Confusion",
        Modifier: -2,
        TPP: "Mind Control"
    }, {
        name: "Emotion Control (any)",
        Modifier: -1,
        TPP: "Mind Control"
    }, {
        name: "Emotion Control (specific)",
        Modifier: -2,
        TPP: "Mind Control"
    }, {
        name: "Hypnotism",
        Modifier: -2,
        TPP: "Mind Control"
    }, {
        name: "Pheremones",
        Modifier: -2,
        TPP: "Mind Control"
    }, {
        name: "Micro-Universe",
        Modifier: 1,
        TPP: "Shrinking"
    }, {
        name: "Proportional Strength",
        Modifier: -2,
        TPP: "Shrinking"
    }, {
        name: "Dense",
        Modifier: -2,
        TPP: "Solid Form"
    }, {
        name: "Fighting",
        Modifier: -1,
        TPP: "Strike"
    }, {
        name: "Slow",
        Modifier: -2,
        TPP: "Stun"
    }, {
        name: "Focused",
        Modifier: -2,
        TPP: "Telekenisis"
    }, {
        name: "Tendrils",
        Modifier: -2,
        TPP: "Telekenisis"
    }, {
        name: "Weak",
        Modifier: -4,
        TPP: "Telekenisis"
    }, {
        name: "Alter Memory",
        Modifier: 6,
        TPP: "Telepathy"
    }, {
        name: "Cloak Mind",
        Modifier: 1,
        TPP: "Telepathy"
    }, {
        name: "Dream Travel",
        Modifier: 1,
        TPP: "Telepathy"
    }, {
        name: "Sense Minds",
        Modifier: 2,
        TPP: "Telepathy"
    }, {
        name: "Empathy",
        Modifier: -2,
        TPP: "Telepathy"
    }, {
        name: "Blind Porting",
        Modifier: 2,
        TPP: "Teleportation"
    }, {
        name: "Combat Porting",
        Modifier: 2,
        TPP: "Teleportation"
    }, {
        name: "Gate",
        Modifier: 2,
        TPP: "Time Travel"
    }, {
        name: "Disturbance",
        Modifier: -1,
        TPP: "Tunneling"
    }, {
        name: "Adjustible (Normal)",
        Modifier: 1,
        TPP: "TPP"
    }, {
        name: "Adjustible (Strong)",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Affect Inanimate",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Always On",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Area/Burst (Fixed)",
        Modifier: 1,
        TPP: "TPP"
    }, {
        name: "Area/Burst (Toggle)",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Automatic",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Build Up",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Casting",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Charges (6 per Scene)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Charges (3 per Scene)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Charges (1 per Scene)",
        Modifier: -3,
        TPP: "TPP"
    }, {
        name: "Concentration",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Contact",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Contagious",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Delay",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Demanding",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Ethereal",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Fading (Reset Scene)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Fading (Reset Daily)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Imprecise",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Inhibited (Infrequent)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Inhibited (Frequent)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Item",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Limited (Minor)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Limited (Major)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Mental",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Overload",
        Modifier: 1,
        TPP: "TPP"
    }, {
        name: "Ranged",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Requirement (Easy)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Requirement (Hard)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Ricochet",
        Modifier: 1,
        TPP: "TPP"
    }, {
        name: "Selective",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Side Effect (Minor)",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Side Effect (Major)",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Signature",
        Modifier: -1,
        TPP: "TPP"
    }, {
        name: "Subtle",
        Modifier: 1,
        TPP: "TPP"
    }, {
        name: "Trapping",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Underpowered",
        Modifier: -2,
        TPP: "TPP"
    }, {
        name: "Variant",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Visual Range",
        Modifier: 2,
        TPP: "TPP"
    }, {
        name: "Boss",
        Modifier: 2,
        TPP: "Ally"
    }, {
        name: "Summoning",
        Modifier: 2,
        TPP: "Ally"
    }, {
        name: "Xenomorphic",
        Modifier: 6,
        TPP: "Animal Forms"
    }, {
        name: "Supreme",
        Modifier: 2,
        TPP: "Authority"
    }, {
        name: "High Level",
        Modifier: 2,
        TPP: "Contact"
    }, {
        name: "Legion",
        Modifier: 12,
        TPP: "Duplication"
    }, {
        name: "Crazy",
        Modifier: 2,
        TPP: "Fame"
    }, {
        name: "Environmental",
        Modifier: 2,
        TPP: "Immunity"
    }, {
        name: "Make Invisible",
        Modifier: 2,
        TPP: "Invisibility"
    }, {
        name: "Doppleganger",
        Modifier: -1,
        TPP: "Morph"
    }, {
        name: "Clout",
        Modifier: 2,
        TPP: "Patron"
    }, {
        name: "Astral",
        Modifier: 2,
        TPP: "Phasing"
    }, {
        name: "Phase Object",
        Modifier: 2,
        TPP: "Phasing"
    }, {
        name: "Recording",
        Modifier: 1,
        TPP: "Photographic Memory"
    }, {
        name: "Weakness",
        Modifier: -1,
        TPP: "Regeneration"
    }, {
        name: "Waypoints",
        Modifier: -2,
        TPP: "Time Travel"
    }, {
        name: "Weak Form",
        Modifier: -2,
        TPP: "Transformation"
    }, {
        name: "Automaton",
        Modifier: 6,
        TPP: "Unliving"
    }, {
        name: "Wall-Running",
        Modifier: -1,
        TPP: "Wall-Crawling"
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
        isRanged: "TRUE"
    }, {
        name: "Energy Grenade",
        Damage: 4,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Energy Pistol",
        Damage: 4,
        Special: "Ranged",
        isRanged: "TRUE"
    }, {
        name: "Energy Rifle",
        Damage: 5,
        Special: "Ranged",
        isRanged: "TRUE"
    }, {
        name: "Energy Rifle, Assault",
        Damage: 5,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Energy Rifle, Heavy",
        Damage: 6,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Grenade, Explosive",
        Damage: 3,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Grenade, Flash-Bang",
        Damage: 0,
        Special: "Area, Dazzle 6d, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Heavy Machinegun",
        Damage: 5,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Heavy Rocket Launcher",
        Damage: 6,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Melee, Blunt",
        Damage: 2,
        Special: "",
        isRanged: "FALSE"
    }, {
        name: "Melee, Edged/Exotic",
        Damage: 3,
        Special: "",
        isRanged: "FALSE"
    }, {
        name: "Melee, Energy",
        Damage: 3,
        Special: "Penetrating",
        isRanged: "FALSE"
    }, {
        name: "Pistol",
        Damage: 3,
        Special: "Ranged",
        isRanged: "TRUE"
    }, {
        name: "Rifle, Assault",
        Damage: 4,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Rifle, Sniper",
        Damage: 4,
        Special: "Ranged, Visual Range",
        isRanged: "TRUE"
    }, {
        name: "Shotgun",
        Damage: 4,
        Special: "Ranged, Limited (short range)",
        isRanged: "TRUE"
    }, {
        name: "Submachine Gun",
        Damage: 3,
        Special: "Area, Ranged",
        isRanged: "TRUE"
    }, {
        name: "Thrown, Blunt",
        Damage: 1,
        Special: "Ranged",
        isRanged: "TRUE"
    }, {
        name: "Thrown, Edged/Exotic",
        Damage: 2,
        Special: "Ranged",
        isRanged: "TRUE"
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