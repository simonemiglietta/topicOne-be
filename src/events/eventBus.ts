import { EventEmitter } from 'events';

export enum Events {
    MessageKeywordsUpdate = 'message.keywords.update',
}

export const eventBus = new EventEmitter();
