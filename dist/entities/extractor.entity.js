"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageExtractor = void 0;
const keyword_extractor_1 = __importDefault(require("keyword-extractor"));
class MessageExtractor {
    constructor() {
        this.extractKeywords = (content) => {
            return keyword_extractor_1.default.extract(content, {
                language: "italian",
                remove_digits: true,
                return_changed_case: true,
                remove_duplicates: true,
            });
        };
    }
}
exports.MessageExtractor = MessageExtractor;
//# sourceMappingURL=extractor.entity.js.map