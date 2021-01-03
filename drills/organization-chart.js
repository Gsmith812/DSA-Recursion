// Write a recursive function that prints the following organization chart. 
// Your output should be as shown below with proper indentation to show the 
// hierarchy. You may store the org chart in an object and send that as an 
// input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

let sampleOrgChart = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {
                Steve: '',
                Kyle: '',
                Andra: ''
            },
            Zhao: {
                Richie: '',
                Sofia: '',
                Jen: ''
            }
        },
        Shrage: {
            VanDyck: {
                Sabrina: '',
                Michelle: '',
                Josh: ''
            },
            Swain: {
                Blanch: '',
                Tom: '',
                Joe: ''
            }
        },
        Sandberg: {
            Goler: {
                Eddie: '',
                Julie: '',
                Annie: ''
            },
            Hernandex: {
                    Rowi: '',
                    Inga: '',
                    Morgan: ''
            },
            Moissinac: {
                    Amy: '',
                    Chuck: '',
                    Vinni: ''
            },
            Kelley: {
                    Eric: '',
                    Ana: '',
                    Wes: ''
            }
        }
    }
};

const organizationChart = orgChart => {
    let results = {};

    // General Case
    for(let member in orgChart) {
        results.push(member);
        if(typeof orgChart[member] === 'object') {
            let subKeys = organizationChart(orgChart[member]);
            results = results.concat(subKeys.map(key => {
                return '    ' + key;
            }))
        }
    }

    // Base Case once all keys have been looped through
    return results;

};