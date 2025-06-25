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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const messageService = __importStar(require("../services/message.service"));
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield prisma_1.prisma.message.findMany();
    res.json(messages);
});
exports.getMessages = getMessages;
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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