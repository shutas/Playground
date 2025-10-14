const browserType = "mozilla";

console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType[browserType.length - 1]);

if (browserType.includes("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

const tagline = "MDN - Resources for developers, by developers";

console.log(tagline.indexOf("developers"));
console.log(tagline.indexOf("x"));

const firstOccurence = tagline.indexOf("developers");
const secondOccurence = tagline.indexOf("developers", firstOccurence + 1);

console.log(firstOccurence);
console.log(secondOccurence);

console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));

const radData = "My NaMe Is MuD";

console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

const updated = browserType.replace("moz", "van");

console.log(updated);
console.log(browserType);

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);