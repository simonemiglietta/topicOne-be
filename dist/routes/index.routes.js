"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const validates_1 = require("../middlewares/validates");
const message_schema_1 = require("../schemas/message.schema");
const router = (0, express_1.Router)();
router.get('/', message_controller_1.getMessages);
router.post('/', (0, validates_1.validate)(message_schema_1.createMessageSchema), message_controller_1.createMessage);
exports.default = router;
//# sourceMappingURL=index.routes.js.map