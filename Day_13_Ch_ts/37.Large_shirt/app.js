"use strict";
// Q:37
function large_shirt(size = "large", message = "I love Typescript") {
    console.log(`Size should be "${size}", and the message is ${message}!`);
}
large_shirt();
large_shirt("medium", "live is fun");
large_shirt("small", "I am loving it");
