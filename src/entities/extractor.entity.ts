import keyword_extractor from "keyword-extractor";
import {IKeywordExtractor} from "../interfaces/extractor.interface";

export class MessageExtractor implements IKeywordExtractor {

    constructor() {
    }

    public extractKeywords = (content: string): string[] => {
        return keyword_extractor.extract(content, {
            language: "italian",
            remove_digits: true,
            return_changed_case: true,
            remove_duplicates: true,
        })
    };

}