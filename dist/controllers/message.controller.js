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
exports.deleteMessage = exports.createMessage = exports.getMessages = void 0;
const prisma_1 = require("../prisma");
const notfound_exception_1 = require("../exceptions/notfound.exception");
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield prisma_1.prisma.message.findMany();
    res.json(messages);
});
exports.getMessages = getMessages;
const createMessage = (messageService) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, email, threadId } = req.body;
    const thread = yield prisma_1.prisma.thread.findUnique({ where: { id: threadId } });
    if (!thread) {
        throw new notfound_exception_1.NotFoundException('Thread', threadId);
    }
    const message = yield messageService.createMessage({ email, content, threadId });
    return res.status(201).json(message);
});
exports.createMessage = createMessage;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma_1.prisma.message.delete({ where: { id: String(id) } });
    res.status(204).send();
});
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=message.controller.js.map