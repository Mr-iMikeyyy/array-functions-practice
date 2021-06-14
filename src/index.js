import emojipedia from "./emojipedia";

function meaning(emojiEntry) {
  return (emojiEntry = emojiEntry.meaning.substring(0, 100));
}

const newEmojipedia = emojipedia.map(meaning);
console.log(newEmojipedia);
