import * as actionTypes from './../actions/actionTypes';
import Collection from './../collection';
import deepFreeze from 'deep-freeze-strict';
import LanesCollection from './../collection/lanesCollection';
import { createLane } from './../model/factory/laneFactory';

/**
 * @type {LanesCollection}
 */
var _defaultState = new LanesCollection([]);

/**
 * @param {LanesCollection} currentLaneCollection
 * @param {Object} action
 *
 * @return {LanesCollection}
 *
 * @private
 */
var _handleAddProjectAction = function (currentLaneCollection, action) {
    var newLaneCollection = currentLaneCollection.clone();

    var lane = newLaneCollection.findOneByCid(action.laneCid);

    if (!lane) {
        return currentLaneCollection;
    }

    lane.addProjectCid(action.cid);

    return newLaneCollection;
};

/**
 * @param {LanesCollection} currentLaneCollection
 * @param {Object} action
 *
 * @returns {LanesCollection}
 */
export default function lanesReducer(currentLaneCollection = _defaultState, action) {

    // ensure that current state and action are not mutated!
    deepFreeze(currentLaneCollection);
    deepFreeze(action);

    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return _handleAddProjectAction(currentLaneCollection, action);

        default:
            return currentLaneCollection;
    }
};
