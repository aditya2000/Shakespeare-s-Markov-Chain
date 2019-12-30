let ngrams = [];
let order = 2;
let obj = {};

for(let i=0; i<data.length-order; i++) {
    ngrams.push(data.substring(i, i+order));
}

for(let i=0; i<ngrams.length; i++) {
    if(!obj[ngrams[i]]) {
        obj[ngrams[i]] = [];
    } 
    obj[ngrams[i]].push(data.charAt(i+order));
}


let currGram = data.substring(0, order);
let res = currGram;
let sentenceLen = 200;

for(let i=0; i<sentenceLen; i++) {
    let poss = obj[currGram];
    let next = poss[Math.floor(Math.random()*poss.length)]
    res += next;

    currGram = res.substring(res.length-order, res.length);
}

console.log(res);