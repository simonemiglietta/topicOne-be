"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBus = exports.Events = void 0;
const events_1 = require("events");
var Events;
(function (Events) {
    Events["MessageKeywordsUpdate"] = "message.keywords.update";
})(Events || (exports.Events = Events = {}));
exports.eventBus = new events_1.EventEmitter();
//# sourceMappingURL=eventBus.js.map