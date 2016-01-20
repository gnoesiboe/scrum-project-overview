import * as actionTypes from './../actions/actionTypes';
import Collection from './../collection';
import deepFreeze from 'deep-freeze-strict';
import ProjectCollection from './../collection/projectCollection';
import { createProject } from './../model/factory/projectFactory';

/**
 * @type {ProjectCollection}
 */
var _defaultState = new ProjectCollection();

/**
 * @param {ProjectCollection} currentProjectsCollection
 * @param {Object} action
 *
 * @return {ProjectCollection}
 *
 * @private
 */
var _handleAddProjectAction = function (currentProjectsCollection, action) {
    var newProjectsCollection = currentProjectsCollection.clone();

    newProjectsCollection.add(
        createProject(action.cid, action.title, action.subTitle)
    );

    return newProjectsCollection;
};

/**
 * @param {ProjectCollection} currentState
 * @param {Object} action
 *
 * @returns {ProjectCollection}
 */
export default function projectReducer(currentState = _defaultState, action) {

    // ensure that current state and action are not mutated!
    deepFreeze(currentState);
    deepFreeze(action);

    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return _handleAddProjectAction(currentState, action);

        default:
            return currentState;
    }
};
