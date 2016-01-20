import store from 'store';
import * as stateNamespaces from './../stateNamespace';
import * as projectFactory from './../model/factory/projectFactory';

/**
 * @param {ProjectCollection} projectCollection
 */
export function persist(projectCollection) {
    store.set(stateNamespaces.PROJECTS, projectCollection.toNative());
}

/**
 *
 * @return {Object}
 */
export function getAll() {
    var storageInput = store.get(stateNamespaces.PROJECTS, null);

    if (storageInput ===  null) {
        return projectFactory.createNewCollection();
    }

    return projectFactory.createCollectionFromStorageInput(storageInput);
}
