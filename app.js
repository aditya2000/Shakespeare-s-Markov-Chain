let str = "Here is wishing the President a cold, emancipation,lonely, miserable, desperate, self-loathing, scandal-ridden, dementia-fueled, sclerotic, septic, syphilitic, leprous Christmas.";
let word = str.split(" ");
let obj = {};

for(let i=0; i<word.length; i++) {
    let noOfSylls = RiTa.getSyllables(word[i]).split('/').length;
    if(obj[noOfSylls] !== undefined) {
        if(RiTa.isNoun(word[i])) {
            if(obj[noOfSylls]['noun'] !== undefined) {
                obj[noOfSylls]['noun'].push(word[i]);
            } else if(obj[noOfSylls]['noun'] === undefined) {
                obj[noOfSylls]['noun'] = [];
                obj[noOfSylls]['noun'].push(word[i]);
            }
        }
        if(RiTa.isAdverb(word[i])) {
            if(obj[noOfSylls]['adverb'] !== undefined) {
                obj[noOfSylls]['adverb'].push(word[i]);
            } else if(obj[noOfSylls]['adverb'] === undefined) {
                obj[noOfSylls]['adverb'] = [];
                obj[noOfSylls]['adverb'].push(word[i]);
            }
        }
        if(RiTa.isAdjective(word[i])) {
            if(obj[noOfSylls]['adjective'] !== undefined) {
                obj[noOfSylls]['adjective'].push(word[i]);
            } else if(obj[noOfSylls]['adjective'] === undefined) {
                obj[noOfSylls]['adjective'] = [];
                obj[noOfSylls]['adjective'].push(word[i]);
            }
        }
        if(RiTa.isVerb(word[i])) {
            if(obj[noOfSylls]['verb'] !== undefined) {
                obj[noOfSylls]['verb'].push(word[i]);
            } else if(obj[noOfSylls]['verb'] === undefined) {
                obj[noOfSylls]['verb'] = [];
                obj[noOfSylls]['verb'].push(word[i]);
            }
        }
    } else {
        obj[noOfSylls] = {};
        if(RiTa.isNoun(word[i])) {
            if(obj[noOfSylls]['noun'] !== undefined) {
                obj[noOfSylls]['noun'].push(word[i]);
            } else if(obj[noOfSylls]['noun'] === undefined) {
                obj[noOfSylls]['noun'] = [];
                obj[noOfSylls]['noun'].push(word[i]);
            }
        }
        if(RiTa.isAdverb(word[i])) {
            if(obj[noOfSylls]['adverb'] !== undefined) {
                obj[noOfSylls]['adverb'].push(word[i]);
            } else if(obj[noOfSylls]['adverb'] === undefined) {
                obj[noOfSylls]['adverb'] = [];
                obj[noOfSylls]['adverb'].push(word[i]);
            }
        }
        if(RiTa.isAdjective(word[i])) {
            if(obj[noOfSylls]['adjective'] !== undefined) {
                obj[noOfSylls]['adjective'].push(word[i]);
            } else if(obj[noOfSylls]['adjective'] === undefined) {
                obj[noOfSylls]['adjective'] = [];
                obj[noOfSylls]['adjective'].push(word[i]);
            }
        }
        if(RiTa.isVerb(word[i])) {
            if(obj[noOfSylls]['verb'] !== undefined) {
                obj[noOfSylls]['verb'].push(word[i]);
            } else if(obj[noOfSylls]['verb'] === undefined) {
                obj[noOfSylls]['verb'] = [];
                obj[noOfSylls]['verb'].push(word[i]);
            }
        }
    }
}

console.log(obj);

