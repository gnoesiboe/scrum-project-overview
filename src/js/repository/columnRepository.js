import store from 'store';
import * as stateNamespaces from './../stateNamespace';
import * as columnFactory from './../model/factory/columnFactory';

/**
 * @param {ProjectCollection} projectCollection
 */
export function persist(projectCollection) {
    store.set(stateNamespaces.COLUMNS, projectCollection.toNative());
}

/**
 *
 * @return {Object}
 */
export function getAll() {
    var storageInput = store.get(stateNamespaces.COLUMNS, null);

    if (storageInput === null) {
        return columnFactory.createNewCollection([
            columnFactory.createColumn('Ready'),
            columnFactory.createColumn('Doing'),
            columnFactory.createColumn('Done')
        ]);
    }

    return columnFactory.createCollectionFromStorageInput(storageInput);
}
