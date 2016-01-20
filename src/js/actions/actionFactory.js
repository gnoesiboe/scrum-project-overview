import * as actionTypes from './actionTypes';
import { generateId } from './../utility/idGenerator';

/**
 *
 * @param {String} laneCid
 * @param {String} columnCid
 * @param {String} title
 * @param {String=} subTitle
 *
 * @returns {Object}
 */
export function createAddProjectAction(laneCid, columnCid, title, subTitle = null) {
    var newProjectCid = generateId();

    return {
        type: actionTypes.ADD_PROJECT,
        laneCid: laneCid,
        columnCid: columnCid,
        cid: newProjectCid,
        title: title,
        subTitle: subTitle
    };
}
