"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createRoutes;
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const validates_1 = require("../middlewares/validates");
const message_schema_1 = require("../schemas/message.schema");
const thread_schema_1 = require("../schemas/thread.schema");
const thread_controller_1 = require("../controllers/thread.controller");
function createRoutes(container) {
    const router = (0, express_1.Router)();
    router.get('/messages', message_controller_1.getMessages);
    router.post('/messages', (0, validates_1.validate)(message_schema_1.createMessageSchema), (0, message_controller_1.createMessage)(container.messageService));
    router.post('/thread', (0, validates_1.validate)(thread_schema_1.createThreadSchema), (0, thread_controller_1.createThread)(container.threadService));
    return router;
}
//# sourceMappingURL=index.routes.js.map