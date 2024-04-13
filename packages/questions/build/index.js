import languages from './data/languages';
import path from 'path';
export async function getItems(languageCode = 'en') {
    try {
        const questions = (await import(path.join(__dirname, 'data', languageCode, 'questions'))).default;
        const choices = (await import(path.join(__dirname, 'data', languageCode, 'choices'))).default;
        return questions.map((question, i) => ({
            ...question,
            num: ++i,
            // @ts-ignore
            choices: choices[question.keyed]
        }));
    }
    catch (error) {
        console.log(error);
        throw new Error(`Inventory ./data/${languageCode}/questions not found. Try another language input.`);
    }
}
export function getInfo() {
    return {
        name: "Johnson's IPIP NEO-PI-R",
        id: 'johnson-120-ipip-neo-pi-r',
        shortId: 'b5-120',
        time: 10,
        questions: 120,
        languages
    };
}
