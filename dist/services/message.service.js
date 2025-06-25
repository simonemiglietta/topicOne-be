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
exports.createMessage = void 0;
const prisma_1 = require("../prisma");
const extractor_entity_1 = require("../entities/extractor.entity");
const createMessage = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, content, threadId }) {
    const message = yield prisma_1.prisma.message.create({
        data: {
            email,
            content,
            thread: {
                connect: { id: threadId },
            },
        },
    });
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const keywords = new extractor_entity_1.MessageExtractor(content).extractKeywords();
        yield prisma_1.prisma.message.update({
            where: { id: message.id },
            data: { keywords: keywords.join(',') },
        });
    }))().catch(console.error);
    return message;
});
exports.createMessage = createMessage;
//# sourceMappingURL=message.service.js.map