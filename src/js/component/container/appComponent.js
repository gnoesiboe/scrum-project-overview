import React from 'react';
import * as reactRedux from 'react-redux';
import * as actionFactory from '../../actions/actionFactory';
import * as stateNamespace from './../../stateNamespace';
import ColumnComponent from './../presentation/columnComponent';
import AddProjectComponent from './../presentation/addProjectComponent';
import LaneComponent from './../presentation/laneComponent';
import ProjectListComponent from './../presentation/projectListComponent';
import * as arrayHelper from './../../utility/arrayHelper';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class AppComponent extends React.Component {

    /**
     * @param {String} laneCid
     * @param {String} columnCid
     * @param {String} title
     * @param {String} subTitle
     *
     * @private
     */
    _onAddProject(laneCid, columnCid, title, subTitle) {
        this.props.dispatch(
            actionFactory.createAddProjectAction(laneCid, columnCid, title, subTitle)
        );
    }

    /**
     * @returns {XML}
     *
     * @private
     */
    _renderLanes() {
        return this.props.lanes.map(lane => this._renderLane(lane));
    }

    /**
     * @param {Lane} lane
     *
     * @returns {XML}
     *
     * @private
     */
    _renderLane(lane) {
        return (
            <LaneComponent title={lane.get('title')} key={lane.get('cid')}>
                {this._renderColumns(lane)}
            </LaneComponent>
        );
    }

    /**
     * @param {Lane} lane
     *
     * @returns {XML[]}
     *
     * @private
     */
    _renderColumns(lane) {
        return this.props.columns.map(column => this._renderColumn(column, lane));
    }

    /**
     * @param {Column} column
     * @param {Lane} lane
     *
     * @returns {XML}
     *
     * @private
     */
    _renderColumn(column, lane) {
        var projectCids = arrayHelper.intersect(lane.get('projectCids'), column.get('projectCids'));

        return (
            <ColumnComponent key={column.get('cid')} title={column.get('title')}>
                <ProjectListComponent projects={this.props.projects.filterCidIn(projectCids)} />
            </ColumnComponent>
        )
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div className="app-component">
                {this._renderLanes()}
                <div className="row">
                    <div className="col-sm-4">
                        <AddProjectComponent columns={this.props.columns} lanes={this.props.lanes} onAddProject={this._onAddProject.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * @param {Object} completeState
 *
 * @returns {Object}
 */
var mapCompleteStateToAppComponentProps = function (completeState) {
    return {
        columns: completeState[stateNamespace.COLUMNS],
        projects: completeState[stateNamespace.PROJECTS],
        lanes: completeState[stateNamespace.LANES]
    }
};

export default reactRedux.connect(mapCompleteStateToAppComponentProps)(AppComponent);
