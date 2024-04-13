"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.getItems = void 0;
const languages_1 = __importDefault(require("./data/languages"));
async function getItems(languageCode = 'en') {
    try {
        const questions = (await Promise.resolve(`${`./data/${languageCode}/questions.json`}`).then(s => __importStar(require(s)))).default;
        const choices = await Promise.resolve(`${`./data/${languageCode}/choices`}`).then(s => __importStar(require(s)));
        return questions.map((question, i) => ({
            ...question,
            num: ++i,
            // @ts-ignore
            choices: choices[question.keyed]
        }));
    }
    catch (error) {
        console.log(error);
        throw new Error('Inventory not found. Try another language input.');
    }
}
exports.getItems = getItems;
function getInfo() {
    return {
        name: "Johnson's IPIP NEO-PI-R",
        id: 'johnson-120-ipip-neo-pi-r',
        shortId: 'b5-120',
        time: 10,
        questions: 120,
        languages: languages_1.default
    };
}
exports.getInfo = getInfo;
