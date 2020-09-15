import { v4 as uuidV4 } from 'uuid';

const dhuliId = uuidV4();
const spouseId = ["dhuli" + uuidV4(), "dhuli" + uuidV4()];
const childId = [
    "dhuli" + uuidV4(), // Dil Bahadur Gurung
    "dhuli" + uuidV4(), // Bil Bahadur Gurung
    "dhuli" + uuidV4(), // Dhan Maya Gurung
    "dhuli" + uuidV4(), // Gam Bahadur Gurung
    "dhuli" + uuidV4(), // Sanu Phupu Gurung
    "dhuli" + uuidV4() // Bhoj Bahadur Gurung
];
const data = [
    {
        id: dhuliId,
        firstName: "Dhuli",
        middleName: "Bahadur",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: [
            {
                spouse: spouseId[0],
                childrens: [
                    childId[0] // Dil Bahaudr Gurung
                ]
            },
            {
                spouse: spouseId[1],
                childrens: [
                    childId[1], // Bil Bahadur Gurung
                    childId[2], // Dhan Maya gurung
                    childId[3], // Gam Bahadur Gurung
                    childId[4], // Sanu Phupu Gurung
                    childId[5], // Bhoj Bahadur Gurung
                ]
            }
        ]
    },
    {
        id: spouseId[0],
        firstName: "Wife1",
        middleName: "Maya",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Plemey"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: [
            {
                spouse: dhuliId,
                childrens: [
                    childId[0] // Dil Bahaudr Gurung
                ]
            }
        ]
    },
    {
        id: spouseId[1],
        firstName: "Wife2",
        middleName: "Maya",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Kromchey"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "XXXX/XX/XX",
        marriages: [
            {
                spouse: dhuliId,
                childrens: [
                    childId[1], // Bil Bahaudur Gurung
                    childId[2], // Dhan Maya Gurung
                    childId[3], // Gam Bahaudur Gurung
                    childId[4], // Sanu Phupu Gurung
                    childId[5], // Bhoj Bahaudur Gurung
                ]
            }
        ]
    },
    {
        id: childId[0],
        firstName: "Dil",
        middleName: "Bahadur",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: [
            {
                spouse: "til_id",
                childrens: [
                    "nishan_id",
                    "bhagat_id",
                    "prashant_id",
                    "pratikshya_id"
                ]
            }
        ]
    },
    {
        id: "til_id",
        firstName: "Til",
        middleName: "Maya",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Plemey"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        mariages: [
            {
                spouse: "dhuli" + childId[0], // dil bahadur gurung
                childrens: [
                    "nishan_id",
                    "bhagat_id",
                    "prashant_id",
                    "pratikshya_id"
                ]
            }
        ]
    },
    {
        id: "nishan_id",
        firstName: "Nishan",
        middleName: "",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: [
            {
                spouse: "manu_id",
                childrens: [
                    "nilima_id"
                ]
            }
        ]
    },
    {
        id: "manu_id",
        firstName: "Manu",
        middleName: "Maya",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Thimney"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        mariages: [
            {
                spouse: "nishan_id",
                childrens: [
                    "nilima_id"
                ]
            }
        ]
    },
    {
        id: "nilima_id",
        firstName: "Nilima",
        middleName: "",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "2018/05/05",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: "bhagat_id",
        firstName: "Bhagat",
        middleName: "",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "1996/01/18",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: "prashant_id",
        firstName: "Prashant",
        middleName: "",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "1998/06/09",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: "pratikshya_id",
        firstName: "Pratikshya",
        middleName: "",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "1999/02/31",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: childId[1],
        firstName: "Bil",
        middleName: "Bahadur",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: childId[2],
        firstName: "Dhan",
        middleName: "Maya",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: childId[3],
        firstName: "Gam",
        middleName: "Bahadur",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: childId[4],
        firstName: "Sanu",
        middleName: "Phupu",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "female",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: []
    },
    {
        id: childId[5],
        firstName: "Bhoj",
        middleName: "Bahadur",
        lastName: "Gurung",
        familyName: {
            main: "Gurung",
            sub: "Leghe"
        },
        gender: "male",
        origin: "Tangting",
        dateOfBirth: "XXXX/XX/XX",
        dateOfDeath: "_",
        marriages: []
    }
]
 
// simulating getData as api
export const getData = () => new Promise(resolve => {
    setTimeout(() => resolve(data), 2000)
})