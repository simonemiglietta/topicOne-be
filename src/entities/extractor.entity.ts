import keyword_extractor from "keyword-extractor";

export class MessageExtractor {
    private content: string;

    constructor(content: string) {
        this.content =  content;
    }

     public extractKeywords = (): string[] => {
        return keyword_extractor.extract(this.content, {
            language: "italian",
            remove_digits: true,
            return_changed_case: true,
            remove_duplicates: true,
        })
    };

}