import Model from './../model';
import ProjectCollection from './../collection/projectCollection';
import * as arrayHelper from './../utility/arrayHelper';
import _ from 'lodash';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class Column extends Model {

    /**
     * @param {String} cid
     * @param {String} title
     */
    constructor(cid, title) {
        super({
            cid: cid,
            title: title,
            projectCids: []
        });
    }

    /**
     * @param {String} newProjectCid
     *
     * @returns {Column}
     */
    addProjectCid(newProjectCid) {
        var projectCids = this.get('projectCids');

        projectCids.push(newProjectCid);

        this.set('projectCids', projectCids);

        return this;
    }

    /**
     * @returns {Column}
     */
    clone() {
        var out = new Column(
            this.get('cid'),
            this.get('title')
        );

        out.set('projectCids', arrayHelper.clone(this.get('projectCids')));

        return out;
    }

    /**
     * @param {Object} nativeInput
     *
     * @returns {Column}
     */
    static fromNative(nativeInput) {

        // normalize input
        nativeInput = _.extend({
            cid: null,
            title: null,
            projectCids: []
        }, nativeInput);

        var out = new Column(nativeInput.cid, nativeInput.title);

        out.set('projectCids', nativeInput.projectCids);

        return out;
    }
}

export default Column;
