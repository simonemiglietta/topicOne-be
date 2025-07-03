"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThreadSchema = void 0;
const zod_1 = require("zod");
exports.createThreadSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    content: zod_1.z.string().min(1, 'Il contenuto è obbligatorio'),
    subject: zod_1.z.string().min(1, 'Il contenuto è obbligatorio'),
});
//# sourceMappingURL=thread.schema.js.map