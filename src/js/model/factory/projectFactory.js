import Lane from './../lane';
import { generateId } from './../../utility/idGenerator';
import Project from './../project';
import ProjectCollection from './../../collection/projectCollection';

/**
 * @param {String} cid
 * @param {String} title
 * @param {String=} subTitle
 *
 * @returns {Project}
 */
export function createProject(cid, title, subTitle = null) {
    return new Project(cid, title, subTitle);
}

/**
 * @param {Array} storageInput
 *
 * @returns {ProjectCollection}
 */
export function createCollectionFromStorageInput(storageInput) {
    return new ProjectCollection(
        storageInput.map(
            storageInputItem => Project.fromNative(storageInputItem)
        )
    );
}

/**
 * @param {Project[]=} data
 *
 * @return {ProjectCollection}
 */
export function createNewCollection(data = []) {
    return new ProjectCollection(data);
}
