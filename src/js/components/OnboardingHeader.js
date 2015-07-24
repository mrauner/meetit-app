var Container = require('react-container');
var React = require('react');

module.exports = React.createClass({
	getInitialState () {
		return {};
	},
	render () {
		return (
			<Container align="center" justify="center" direction="column" className="onboarding-header">
				<img src="./img/logo-meetit.gif" className="onboarding-logo" />
				<div className="onboarding-heading onboarding-heading-1">METRO Group</div>
				<div className="onboarding-heading onboarding-heading-1">meet IT 2015</div>
				<div className="onboarding-heading onboarding-heading-2">September 20th 2015</div>
				<div className="onboarding-heading onboarding-heading-2">Düsseldorf, Germany</div>
			</Container>
		);
	}
});

