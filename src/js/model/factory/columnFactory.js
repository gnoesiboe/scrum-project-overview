import Column from './../../model/column';
import { generateId } from './../../utility/idGenerator';
import ColumnCollection from './../../collection/columnCollection';

/**
 * @param {String} title
 *
 * @returns {Column}
 */
export function createColumn(title) {
    return new Column(generateId(), title);
}

/**
 * @param {Array} storageInput
 *
 * @return {ColumnCollection}
 */
export function createCollectionFromStorageInput(storageInput) {
    return new ColumnCollection(
        storageInput.map(
            storageInputItem => Column.fromNative(storageInputItem)
        )
    );
}

/**
 * @param {Column[]=} data
 *
 * @return {ColumnCollection}
 */
export function createNewCollection(data = []) {
    return new ColumnCollection(data);
}
