import React from 'react';

/**
 * @author Gijs Nieuwenhuis <gijs.nieuwenhuis@freshheads.com>
 */
class ColumnComponent extends React.Component {

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div className="col-md-3">
                <h3>{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}

ColumnComponent.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default ColumnComponent;
