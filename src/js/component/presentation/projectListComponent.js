import React from 'react';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class ProjectListComponent extends React.Component {

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <ul className="list-group">
                    { this.props.projects.map((project) => {
                        console.log('project:', project);

                        return (
                            <li className="list-group-item" key={project.get('cid')}>
                                { project.get('title') }
                            </li>
                        )
                    }) }
                </ul>
            </div>
        );
    }
}

ProjectListComponent.propTypes = {
    projects: React.PropTypes.object.isRequired
};

export default ProjectListComponent;
