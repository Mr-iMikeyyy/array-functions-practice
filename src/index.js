import emojipedia from "./emojipedia";

// function meaning(emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// }

// const newEmojipedia = emojipedia.map(meaning);

const newEmojipedia = emojipedia.map((emojiEntry) =>
  emojiEntry.meaning.substring(0, 100)
);

console.log(newEmojipedia);
