import React from 'react';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class AddProjectComponent extends React.Component {

    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            subTitle: '',
            columnCid: '',
            laneCid: '',
            isValid: false
        };
    }

    /**
     * @param {Object} event
     *
     * @private
     */
    _onFormFieldChange(event) {
        var domElement = event.target;

        this.setState({
            [domElement.name]: domElement.value
        }, () => {
            this.setState({
                isValid: this._checkIfFormIsValid()
            });
        });
    }

    /**
     * @param {Object} event
     *
     * @private
     */
    _onFormSubmit(event) {

        // prevent backend submission
        event.preventDefault();

        if (this._checkIfFormIsValid()) {
            this.props.onAddProject(
                this.state.laneCid,
                this.state.columnCid,
                this.state.title,
                this.state.subTitle.length > 0 ? this.state.subTitle : null
            );
        }
    }

    /**
     * @returns {Boolean}
     *
     * @private
     */
    _checkIfFormIsValid() {
        return this.state.title.length > 0 &&
            this.state.columnCid.length > 0 &&
            this.state.laneCid.length > 0;
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <form className="form" onSubmit={this._onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="control-label" htmlFor="add-project-title-field">Title</label>
                        <input type="text"
                               name="title"
                               id="add-project-title-field"
                               value={this.state.title}
                               onChange={this._onFormFieldChange.bind(this)}
                               className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="add-project-sub-title-field">Sub-title</label>
                        <input type="text"
                               name="subTitle"
                               id="add-project-sub-title-field"
                               value={this.state.subTitle}
                               onChange={this._onFormFieldChange.bind(this)}
                               className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="add-project-column-field">Column</label>
                        <select value={this.state.columnCid}
                                name="columnCid"
                                className="form-control"
                                onChange={this._onFormFieldChange.bind(this)}>
                            <option key="root" value={''}>- choose a group -</option>
                            { this.props.columns.map(column => {
                                return (
                                    <option key={column.get('cid')}
                                            value={column.get('cid')}>
                                        {column.get('title')}
                                    </option>
                                )
                            }) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="add-project-column-field">Lane</label>
                        <select value={this.state.laneCid}
                                name="laneCid"
                                className="form-control"
                                onChange={this._onFormFieldChange.bind(this)}>
                            <option key="root" value={''}>- choose a lane -</option>
                            { this.props.lanes.map(lane => {
                                return (
                                    <option key={lane.get('cid')}
                                            value={lane.get('cid')}>
                                        {lane.get('title')}
                                    </option>
                                )
                            }) }
                        </select>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-success" disabled={!this.state.isValid}>Add project</button>
                    </div>
                </form>
            </div>
        );
    }
}

AddProjectComponent.propTypes = {
    columns: React.PropTypes.object.isRequired,
    lanes: React.PropTypes.object.isRequired,
    onAddProject: React.PropTypes.func.isRequired
};

export default AddProjectComponent;
