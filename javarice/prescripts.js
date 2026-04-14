//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->
const messages = [
  // COMMON (early) //RANDOM BULLLSHITS
  { text: "KILL ALL ENEMIES WITHOUT STEPPING OUT OF SITE OR GOING INSIDE THE BUILDING", weight: 40, minCount: 0, amounts: 2 },
  { text: "YOU MAY ONLY USE YOUR CHOICE OF GADGETS TO KILL ENEMIES FOR THIS ROUND", weight: 45, minCount: 0, amounts: 2 },
  { text: "YOU MAY ONLY USE IMPACT GRENADES TO KILL ENEMIES FOR THIS ROUND", weight: 35, minCount: 0, amounts: 2 },
  { text: "IF A TEAMMATE HAS A SNIPER RIFLE, ONLY USE A SHIELD AND GADGETS OTHERWISE, USE YOUR SECONDARY AND GADGETS AND NOTHING ELSE FOR THIS ROUND", weight: 35, minCount: 0, amounts: 2 },
  { text: "IF A TEAMMATE HAS A SMG, ONLY USE A REVOLVER OF YOUR CHOICE AND A KNIFE OTHERWISE, USE A SNIPER RIFLE ONLY AND NOTHING ELSE FOR THIS ROUND", weight: 40, minCount: 0, amounts: 1 },
  { text: "IF A TEAMMATE HAS ANY TYPE OF BARRICADES, YOU MAY ONLY USE A KNIFE TO KILL, OTHERWISE USE ONLY YOUR PRIMARY AND NOTHING ELSE FOR THIS ROUND", weight: 40, minCount: 0, amounts: 2 },
  { text: "THROW A GRENADE OF ANY KIND AT THE ENEMY DIRECTLY", weight: 45, minCount: 0, amounts: 3 },
  { text: "USE BODY ARMOUR THIS ROUND", weight: 45, minCount: 0, amounts: 2 },
  { text: "USE A DRONE THIS ROUND", weight: 45, minCount: 0, amounts: 2 },
  { text: "USE A DRONE IF SOMEONE ELSE IS USING A DRONE", weight: 40, minCount: 0, amounts: 3 },
  { text: "USE A CAMERA", weight: 45, minCount: 0, amounts: 3 },
  { text: "USE CLAYMORES THIS ROUND", weight: 20, minCount: 0, amounts: 3 },
  { text: "BREAK THE FIRST 3 BARRICADES YOU SEE", weight: 20, minCount: 0, amounts: 3 },
  { text: "DESTROY AT LEAST 1 ENEMY GADGET", weight: 20, minCount: 0, amounts: 3 },

  // UNCOMMON (mid) / NOT REALLY BAD YET
  { text: "YOU MAY ONLY USE YOUR CHOICE OF SECONDARY TO KILL ENEMIES FROM AFAR FOR THIS ROUND", weight: 10, minCount: 4, amounts: 2 },
  { text: "YOU MAY NOT USE A GADGET THIS ROUND", weight: 20, minCount: 3, amounts: 3 },
  { text: "YOU MAY NOT USE ANY TYPE OF DEFENSIVE EQUIPMENT THIS ROUND", weight: 20, minCount: 1, amounts: 4 },
  { text: "YOU MAY NOT USE ANY TYPE OF OFFENSIVE EQUIPMENT THIS ROUND", weight: 10, minCount: 1, amounts: 3 },
  { text: "YOU MAY NOT USE ANY ASSAULT RIFLES THIS ROUND", weight: 30, minCount: 2, amounts: 2 },
  { text: "YOU MAY NOT USE ANY SMGS THIS ROUND", weight: 10, minCount: 2, amounts: 5 },
  { text: "YOU MAY NOT USE ANY SHIELD OF ANY KIND THIS ROUND", weight: 10, minCount: 2, amounts: 5 },
  { text: "KILL AN ENEMY THROUGH ANY SOFTWALL", weight: 10, minCount: 2, amounts: 5 },
  { text: "REPEAT THE LAST PRESCRIPT", weight: 20, minCount: 3, amounts: 5 },
  { text: "KILL THE FIRST ENEMY YOU SEE OUTSIDE OR OUTSIDE SITE", weight: 20, minCount: 3, amounts: 5 },
  { text: "KILL AN ENEMY WITH ONLY A SECONDARY", weight: 10, minCount: 4, amounts: 5 },
  { text: "KILL AN ENEMY WITH A CLAYMORE", weight: 20, minCount: 5, amounts: 5 },
  { text: "KILL AN ENEMY WITH C4", weight: 10, minCount: 5, amounts: 5 },
  { text: "KILL AN ENEMY WITH A GRENADE", weight: 5, minCount: 7, amounts: 1 },
  // RARE (late) DIE ALREADY
  { text: "SHOOT RANDOMLY EVERY 30 SECONDS", weight: 20, minCount: 6, amounts: 3 },
  { text: "THROW A RANDOM GADGET IN A RANDOM PLACE", weight: 5, minCount: 8, amounts: 3 },
  { text: "RUN AROUND THE SITE OR MAP WITHOUT ANYTHING IN YOUR HAND FOR THE FIRST 30 SECONDS OF THE MATCH", weight: 10, minCount: 6, amounts: 3 },
  { text: "WIN THIS ROUND", weight: 5, minCount: 9, amounts: 3 },
  { text: "DIE TO A SHIELD USER", weight: 20, minCount: 6, amounts: 3 },
  { text: "MOVE INTO A CLAYMORE", weight: 5, minCount: 6, amounts: 3 },
  { text: "ACE THE ENTIRE ENEMY TEAM", weight: 30, minCount: 5, amounts: 3 },
  { text: "MAKE OPENINGS IN ANY SOFTWALL YOU SEE", weight: 10, minCount: 7, amounts: 3 },
  { text: "DESTORY ALL FRIENDLY GADGETS", weight: 10, minCount: 7, amounts: 3 },
  { text: "DESTORY EVERY BARRICADE ON THE MAP", weight: 10, minCount: 7, amounts: 3 },


  // VERY RARE / MEMES
  { text: "IF DEFENDING PLAY ONLY OUTSIDE OTHERWISE KNIFE EVERYONE", weight: 5, minCount: 8, amounts: 10 },
  { text: "USE ONLY GRENADES", weight: 20, minCount: 8, amounts: 10 },
  { text: "DO NOT MOVE ONCE THE ENEMY TEAM SPAWNS IN OR IF ATTACKING DO NOT STOP MOVING AT ALL", weight: 5, minCount: 3, amounts: 10 },
  { text: "SHITTALK THE ENEMY ACE", weight: 5, minCount: 3, amounts: 1 },
  { text: "Uhm... Can you buy me more clothes? ~ Olivia", weight: 5, minCount: 50, amounts: 1 },
  
];

const recentMessagesSize = 5;
const recentMessages = [];

function pickMessage() {
    const eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
    if (!eligible.length){
      return null;  
    }
    let picked = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    while (attempts < MAX_ATTEMPTS) {
        attempts++;

        const totalWeight = eligible.reduce((s, m) => s + m.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const m of eligible) {
            roll -= m.weight;
            if (roll <= 0) {
                picked = m;
                break;
            }
        }

        if (
            picked &&
            picked !== lastMessage &&
            !recentMessages.includes(picked)
        ) {
            break;
        }

        picked = null;
    }

    if (!picked){
      return null;  
    } 
    picked.amounts--;

    if (picked.amounts <= 0) {
        const idx = messages.indexOf(picked);
        if (idx !== -1) {
            messages.splice(idx, 1);
        }
    }

    recentMessages.push(picked);
    if (recentMessages.length > recentMessagesSize) {
        recentMessages.shift();
    }

    lastMessage = picked;
    return picked;
}
