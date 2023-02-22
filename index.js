// code your solution here

function saturdayFun(active = "roller-skate"){
    return `This Saturday, I want to ${active}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(thing = "go to the office"){
    return `This Monday, I will ${thing}.`;
}
function wrapAdjective(word = "*",msg = "You are"){
    return function(next_word = "special"){
        return `${msg} ${word}${next_word}${word}!`;
    };
}
wrapAdjective("||")("a hard worker");


