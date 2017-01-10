
import React from 'react'

const switchClass = t => {
    switch(t) {
        case "number":
            return "btn-primary";
            break;
        case "clear":
            return "btn-danger";
            break;
        case "eval":
            return "btn-success";
            break;
        case "info":
            return "btn-info";
            break;
    }
}


var Button = React.createClass({

    render: function() {
        return (
            <div className="col-xs-3 col-md-3 col-sm-3">
                <a id={this.props.type} className={"btn btn-block btn-raised " + switchClass(this.props.type)} onClick={this.props.onClick}>{this.props.value}</a>
            </div>
        );
    }
});

module.exports = Button;

