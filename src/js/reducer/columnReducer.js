import * as actionTypes from './../actions/actionTypes';
import ColumnCollection from './../collection/columnCollection';
import deepFreeze from 'deep-freeze-strict';
import { createColumn } from './../model/factory/columnFactory';

/**
 * @type {ColumnCollection}
 */
var _defaultState = new ColumnCollection();

/**
 * @param {ColumnCollection} currentColumnCollection
 * @param {Object} action
 *
 * @return {ColumnCollection}
 *
 * @private
 */
var _handleAddProjectAction = function (currentColumnCollection, action) {
    var newColumnCollection = currentColumnCollection.clone();

    var column = newColumnCollection.findOneByCid(action.columnCid);

    if (!column) {
        return currentColumnCollection;
    }

    column.addProjectCid(action.cid);

    return newColumnCollection;
};

/**
 * @param {ColumnCollection} currentColumnCollection
 * @param {Object} action
 *
 * @returns {ColumnCollection}
 */
export default function columnReducer(currentColumnCollection = _defaultState, action) {

    // ensure that current state and action are not mutated!
    deepFreeze(currentColumnCollection);
    deepFreeze(action);

    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return _handleAddProjectAction(currentColumnCollection, action);

        default:
            return currentColumnCollection;
    }
};
