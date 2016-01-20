import Collection from './../collection';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class ColumnCollection extends Collection {

    /**
     * @param {String} cid
     * @returns {Column|null}
     */
    findOneByCid(cid) {
        return this.first((column) => column.is('cid', cid));
    }

    /**
     * @param {Function} callback
     *
     * @returns {Column|null}
     */
    first(callback) {
        for (let i = 0, l = this._items.length; i < l; i++) {
            let column = this._items[i];

            if (callback(column) === true) {
                return column;
            }
        }
    }

    /**
     * @returns {ColumnCollection}
     */
    clone() {
        var columns = [];

        for (let i = 0, l = this._items.length; i < l; i++) {
            let column = this._items[i];

            columns.push(column.clone());
        }

        return new ColumnCollection(columns);
    }
}

export default ColumnCollection;
