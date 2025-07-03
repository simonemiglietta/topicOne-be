"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./subscribers/messageKeywordsUpdate");
require("./subscribers/threadKeywordsUpdate");
const errors_1 = require("./middlewares/errors");
const message_container_1 = require("./containers/message.container");
const extractor_entity_1 = require("./entities/extractor.entity");
const message_service_1 = require("./services/message.service");
const thread_service_1 = require("./services/thread.service");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
dotenv_1.default.config();
const extractor = new extractor_entity_1.MessageExtractor();
const messageService = new message_service_1.MessageService(extractor);
const threadService = new thread_service_1.ThreadService(messageService);
const messageContainer = new message_container_1.MessageContainer(messageService, threadService, extractor);
app.use('/', (0, index_routes_1.default)(messageContainer));
app.use(errors_1.errorHandler);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map