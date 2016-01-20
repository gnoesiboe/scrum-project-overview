import Model from './../model';
import _ from 'lodash';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class Project extends Model {

    /**
     * @param {String} cid
     * @param {String} title
     * @param {String=} subTitle
     */
    constructor(cid, title, subTitle = null) {
        super({
            cid: cid,
            title: title,
            subTitle: subTitle
        });
    }

    /**
     * @returns {Project}
     */
    clone() {
        return new Project(
            this.get('cid'),
            this.get('title'),
            this.get('subTitle')
        );
    }

    /**
     * @param {Object} nativeInput
     *
     * @returns {Project}
     */
    static fromNative(nativeInput) {

        // normalize input
        nativeInput = _.extend({
            cid: null,
            title: null,
            subTitle: null
        }, nativeInput);

        return new Project(nativeInput.cid, nativeInput.title, nativeInput.subTitle);
    }
}

export default Project;
