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
exports.deleteMessage = exports.createThread = exports.showThread = exports.indexThreads = void 0;
const prisma_1 = require("../prisma");
;
const indexThreads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield prisma_1.prisma.thread.findMany();
    res.json(messages);
});
exports.indexThreads = indexThreads;
const showThread = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const messages = yield prisma_1.prisma.thread.findUnique({ where: { id: id } });
    res.json(messages);
});
exports.showThread = showThread;
const createThread = (threadService) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, email, subject } = req.body;
    const message = yield threadService.createThread({ email, content, subject });
    return res.status(201).json(message);
});
exports.createThread = createThread;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma_1.prisma.message.delete({ where: { id: String(id) } });
    res.status(204).send();
});
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=thread.controller.js.map