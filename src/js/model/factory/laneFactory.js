import Lane from './../lane';
import { generateId } from './../../utility/idGenerator';
import LanesCollection from './../../collection/lanesCollection';

/**
 * @param {String} title
 *
 * @returns {Lane}
 */
export function createLane(title) {
    return new Lane(generateId(), title);
}

/**
 * @param {array} storageInput
 *
 * @return {LanesCollection}
 */
export function createCollectionFromStorageInput(storageInput) {
    return new LanesCollection(
        storageInput.map(
            storageInputItem => Lane.fromNative(storageInputItem)
        )
    );
}

/**
 * @param {Lane[]=} data
 *
 * @return {LanesCollection}
 */
export function createNewCollection(data = []) {
    return new LanesCollection(data);
}
