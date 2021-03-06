var React = require('react');

var Button = require('./Button.jsx');
var whichSign = (val) => {
    var plus = val.indexOf("+");
    var minus = val.indexOf("-");
    var times = val.indexOf("*");
    var division = val.indexOf("÷");
    var pow = val.indexOf("^");
    var sin = val.indexOf("s");
    var log = val.indexOf("l");

    var sum = plus + minus + times + division;
    if (plus !== -1)
        return "+";
    if (minus !== -1)
        return "-";
    if (times !== -1 )
        return "*";
    if (division !== -1 )
        return "÷";
    if (pow !== -1)
        return "^";
    if (sin !== -1)
        return "s";
    if (log !== -1)
        return "l";

};
var evaluate = (fN, sign, sN) => {
    switch (sign) {
        case "+":
            return fN + sN;
            break;
        case "-":
            return fN - sN;
            break;
        case "*":
            return fN * sN;
            break;
        case "÷":
            return fN / sN;
            break;
        case "^":
            return Math.pow(fN,sN);
            break;
        case "s":
            return Math.sin(fN);
            break;   
        case "l":
            return Math.log(fN);
    }
};
var whetherDot = false;

var AppManager = React.createClass({
    getInitialState: function() {
        return {value: ""}
    },
    onClick: function(val) {
        var val1 = this.state.value;
        if (val !== "." ||  (val === "." && !whetherDot)){
            val1 = val1 + val;

        }
        if (val === "."){
            whetherDot = true;
        }
        this.setState({value: val1});
    },
    onClear: function(e) {
        this.setState({value: ""});
        whetherDot = false;
    },
    onChange: function(e) {
        this.setState({value: e.target.value});
    },
    onEvaluate: function() {
        var val = this.state.value;
        var sign = whichSign(val);
        if (sign === "fail")
            this.setState({value: ""});
        else {
            var pos = val.indexOf(sign);
            if (pos === val.length - 1) {
                this.setState({value: ""});
            } 

            else if (sign === "l" || sign === "s") {
                var firstNumber = parseInt(val.substring(pos + 3));
                let result = evaluate(firstNumber, sign, 1);
                this.setState({value: result});
            }
            else {
                var firstNumber = parseInt(val.substring(0, pos));
                var secondNumber = parseInt(val.substring(pos + 1));
                let result = evaluate(firstNumber, sign, secondNumber);
                this.setState({value: result});
            }
        }
    },
    render: function() {
        var centerText = {};
        centerText.align = "center";
        return (
            <div className="panel panel-primary">
                <div className="panel-body row">
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input id="searchBox" type="text" className="form-control" onChange={this.onChange} value={this.state.value}/>
                        </div>
                    </div>
                    <Button type="number" onClick={this.onClick.bind(this,"1")} value="1"/>
                    <Button type="number" onClick={this.onClick.bind(this, "2")} value="2"/>
                    <Button type="number" onClick={this.onClick.bind(this, "3")} value="3"/>
                    <Button type="info" onClick={this.onClick.bind(this, "+")} value="+"/>
                    <Button type="number" onClick={this.onClick.bind(this, "4")} value="4"/>
                    <Button type="number" onClick={this.onClick.bind(this, "5")} value="5"/>
                    <Button type="number" onClick={this.onClick.bind(this, "6")} value="6"/>
                    <Button type="info" onClick={this.onClick.bind(this, "-")} value="–"/>
                    <Button type="number" onClick={this.onClick.bind(this, "7")} value="7"/>
                    <Button type="number" onClick={this.onClick.bind(this, "8")} value="8"/>
                    <Button type="number" onClick={this.onClick.bind(this, "9")} value="9"/>
                    <Button type="info" onClick={this.onClick.bind(this, "*")} value="*"/>
                    <Button type="clear" onClick={this.onClear} value="C"/>
                    <Button type="number" onClick={this.onClick.bind(this, "0")} value="0"/>
                    <Button type="eval" onClick={this.onEvaluate.bind(this)} value="="/>
                    <Button type="info" onClick={this.onClick.bind(this, "÷")} value="÷"/>
                    <Button type="info" onClick={this.onClick.bind(this, ".")} value="."/>
                    <Button type="info" onClick={this.onClick.bind(this, "log")} value="log"/>
                    <Button type="info" onClick={this.onClick.bind(this, "sin")} value="sin"/>
                    <Button type="info" onClick={this.onClick.bind(this, "^")} value="^"/>
                </div>
            </div>
        );
    }
});

module.exports = AppManager;
