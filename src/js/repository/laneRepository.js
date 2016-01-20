import store from 'store';
import * as stateNamespaces from './../stateNamespace';
import * as laneFactory from './../model/factory/laneFactory';

/**
 * @param {LanesCollection} laneCollection
 */
export function persist(laneCollection) {
    store.set(stateNamespaces.LANES, laneCollection.toNative());
}

/**
 *
 * @return {Object}
 */
export function getAll() {
    var storageInput = store.get(stateNamespaces.LANES, null);

    if (storageInput === null) {
        return laneFactory.createNewCollection([
            laneFactory.createLane('Team Oost'),
            laneFactory.createLane('Both'),
            laneFactory.createLane('Team Zuid')
        ]);
    }

    return laneFactory.createCollectionFromStorageInput(storageInput);
}
