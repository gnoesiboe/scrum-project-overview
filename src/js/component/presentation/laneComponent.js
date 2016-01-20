import React from 'react';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class LaneComponent extends React.Component {

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <h3>{this.props.title}</h3>
                </div>
                {this.props.children}
            </div>
        );
    }
}

LaneComponent.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default LaneComponent;
