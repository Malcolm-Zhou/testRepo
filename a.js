let url = "/perform/mobile/huddle/state2";
console.log(url.lastIndexOf('/'));
let path = url.substring(url.indexOf('state') + 5, url.indexOf('state') + 7).toString();
console.log(path);