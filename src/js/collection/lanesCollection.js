import Collection from './../collection';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class LanesCollection extends Collection {

    /**
     * @param {String} cid
     * @returns {Lane|null}
     */
    findOneByCid(cid) {
        return this.first((lane) => lane.is('cid', cid));
    }

    /**
     * @param {Function} callback
     *
     * @returns {Lane|null}
     */
    first(callback) {
        for (let i = 0, l = this._items.length; i < l; i++) {
            let lane = this._items[i];

            if (callback(lane) === true) {
                return lane;
            }
        }
    }

    /**
     * @returns {LanesCollection}
     */
    clone() {
        var lanes = [];

        for (let i = 0, l = this._items.length; i < l; i++) {
            let lane = this._items[i];

            lanes.push(lane.clone());
        }

        return new LanesCollection(lanes);
    }
}

export default LanesCollection;
