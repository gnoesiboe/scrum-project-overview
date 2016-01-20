import * as projectRepository from './projectRepository';
import * as columnRepository from './columnRepository';
import * as laneRepository from './laneRepository';
import * as stateNamespace from './../stateNamespace';

/**
 * @param {Object} completeState
 */
export function persist(completeState) {
    projectRepository.persist(completeState[stateNamespace.PROJECTS]);
    columnRepository.persist(completeState[stateNamespace.COLUMNS]);
    laneRepository.persist(completeState[stateNamespace.LANES]);
}

/**
 * @returns {Object}
 */
export function getAll() {
    var out = {
        [stateNamespace.PROJECTS]: projectRepository.getAll(),
        [stateNamespace.LANES]: laneRepository.getAll(),
        [stateNamespace.COLUMNS]: columnRepository.getAll()
    };

    console.log('incoming state:', out);

    return out;
}
