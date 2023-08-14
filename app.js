import fs from "fs";
import lodash from "lodash";

function countUniqueWords(str) {
    const wordsArray = str.split(/\s+/);
    const wordFrequency = {};
    for (const word of wordsArray) {
        const cleanedWord = word.toLowerCase().replace(/[.,!?]/g, '');
        wordFrequency[cleanedWord] = (wordFrequency[cleanedWord] || 0) + 1;
    }
    const uniqueWordCount = Object.keys(wordFrequency).length;
    return uniqueWordCount;
}
function readAndWriteFile() {
    fs.readFile('data.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        data += data;
        let numWord = lodash.words(data).length;
        let reverse = lodash.reverse(data.split(' ')).join(' ');
        let uniq = lodash.uniq(data.split(' ')).join(' ');
        let numUniq = countUniqueWords(data);
        let upperCase = lodash.uniq(data.split(' ')).join(' ').toUpperCase();
        fs.writeFile('newData.txt', data + '\n\n' + numWord + '\n\n' + reverse + '\n\n' + uniq + '\n\n' + numUniq + '\n\n' + upperCase, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}

module.exports = readAndWriteFile