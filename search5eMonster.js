const fs = require(`fs`)

let rawdata = fs.readFileSync('./files/5e-SRD-Monsters.json');
let monstersSRD = JSON.parse(rawdata);
// console.log(Object.keys(monstersSRD[0]));
// console.log(monstersSRD[0].actions);
// console.log(monstersSRD[0].special_abilities);
// console.log(monstersSRD[0].legendary_actions);

function getMonsterByAbilityKeyword(monsterObject, keyword) {
    let camel = keyword.charAt(0).toUpperCase() + keyword.slice(1)
    let lower = keyword.toLowerCase()
    try {
        for (ability of monsterObject.special_abilities) {
            if (ability.desc.includes(camel) || ability.desc.includes(lower)) {
                // return monsterObject.name
                return true
            }
        }
        return false
    } catch(err) {
        // console.log(err);
        return false
    }

}

function getMonsterByActionsKeyword(monsterObject, keyword) {
    let camel = keyword.charAt(0).toUpperCase() + keyword.slice(1)
    let lower = keyword.toLowerCase()
    try {
        for (action of monsterObject.actions) {
            if (action.desc.includes(camel) || action.desc.includes(lower)) {
                // return monsterObject.name
                return true
            }
        }
        return false
    } catch(err) {
        // console.log(err);
        return false
    }
    
}

function getMonsterByLActionsKeyword(monsterObject, keyword) {
    let camel = keyword.charAt(0).toUpperCase() + keyword.slice(1)
    let lower = keyword.toLowerCase()
    try {
        for (action of monsterObject.legendary_actions) {
            if (action.desc.includes(camel) || action.desc.includes(lower)) {
                // return monsterObject.name
                return true
            }
        } 
        return false
    } catch(err) {
        // console.log(err);
        return false
    }
    

}

function findSRDMonsters (keyword) {
    let foundMonsters = []
    monstersSRD.forEach(monster => {
        if (getMonsterByAbilityKeyword(monster, keyword) || getMonsterByActionsKeyword(monster, keyword) || getMonsterByLActionsKeyword(monster, keyword)) {
            foundMonsters.push(monster.name)
        }
    });
    let result = foundMonsters.join(`, `)
    console.log(`\nMonsters with keyword ${keyword}\n${result}\n`);
    return foundMonsters
}

// console.log(`Monsters with dream: ${findSRDMonsters(`dream`)}\n`);
// console.log(`Monsters with unconscious: ${findSRDMonsters(`unconscious`)}\n`);

// findSRDMonsters(`dream`)
// findSRDMonsters(`unconscious`)
// findSRDMonsters(`shift`)
findSRDMonsters(`polym`)
// findSRDMonsters(`shapechange`)


document.querySelector(`.search-button`).addEventListener(`click`, () => {
    keywords = document.querySelector(`.search-keyword`).textContent.split('')
    console.log(keywords);
})

export {monstersSRD} from "monstersSRD"