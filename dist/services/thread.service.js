"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadService = void 0;
const prisma_1 = require("../prisma");
const extractor_entity_1 = require("../entities/extractor.entity");
class ThreadService {
    constructor(messageService) {
        this.messageService = messageService;
        this.createThread = (_a) => __awaiter(this, [_a], void 0, function* ({ email, content, subject }) {
            const thread = yield prisma_1.prisma.thread.create({
                data: {
                    subject,
                },
            });
            const message = yield this.messageService.createMessage({ email, content, threadId: thread.id });
            (() => __awaiter(this, void 0, void 0, function* () {
                const keywords = new extractor_entity_1.MessageExtractor().extractKeywords(content);
                yield prisma_1.prisma.thread.update({
                    where: { id: thread.id },
                    data: { keywords: keywords.join(',') },
                });
            }))().catch(console.error);
            return thread;
        });
    }
}
exports.ThreadService = ThreadService;
//# sourceMappingURL=thread.service.js.map