import Collection from './../collection';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class ProjectCollection extends Collection {

    /**
     * @param {Number[]} cids
     */
    filterCidIn(cids) {
        return this.filter((project) => cids.indexOf(project.get('cid')) !== -1);
    }

    /**
     * @param {Function} callback
     *
     * @returns {ProjectCollection}
     */
    filter(callback) {
        var out = [];

        for (let i = 0, l = this._items.length; i < l; i++) {
            var item = this._items[i];

            if (callback(item) === true) {
                out.push(item);
            }
        }

        return new ProjectCollection(out);
    }

    /**
     * @returns {ProjectCollection}
     */
    clone() {
        var projects = [];

        for (let i = 0, l = this._items.length; i < l; i++) {
            let project = this._items[i];

            projects.push(project.clone());
        }

        return new ProjectCollection(projects);
    }
}

export default ProjectCollection;
