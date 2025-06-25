"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageSchema = void 0;
const zod_1 = require("zod");
exports.createMessageSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    content: zod_1.z.string().min(1, 'Il contenuto è obbligatorio'),
    threadId: zod_1.z.string()
});
//# sourceMappingURL=message.schema.js.map