const menuItems = [{
    text: 'CELEBRATE SUCCESS',
    path: ['/perform/huddle/celebateSuccess', '/perform/huddle/celebateSuccess2'],
}, {
    text: 'REPORT YOUR STATS',
    path: ['/perform/huddle/reportyTourStarts1', '/perform/huddle/reportyTourStarts2', '/perform/huddle/reportyTourStarts3', '/perform/huddle/reportyTourStarts4', '/perform/huddle/reportyTourStarts5', '/perform/huddle/reportyTourStarts6', '/perform/huddle/reportyTourStarts7'],
}, {
    text: 'CALL VOLUME',
    path: ['/perform/huddle/callVolume', '/perform/huddle/callVolume2', '/perform/huddle/callVolume3', '/perform/huddle/callVolume4', '/perform/huddle/callVolume5', '/perform/huddle/callVolume6', '/perform/huddle/callVolume7'],
}, {
    text: 'NET PROMOTER SCORE',
    path: ['/perform/huddle/netPromoterScore', '/perform/huddle/netPromoterScore2', '/perform/huddle/netPromoterScore3', '/perform/huddle/netPromoterScore4', '/perform/huddle/netPromoterScore5', '/perform/huddle/netPromoterScore6', '/perform/huddle/netPromoterScore7'],
}]

let array = [];
for (let item of menuItems) {
    array.push(...item.path);
}
console.log(array);