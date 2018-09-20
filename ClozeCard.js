let ClozeCard = function (text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.replace(cloze, "...");
};

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze);

module.exports = ClozeCard;