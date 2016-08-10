const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;

const OptionDisplay = React.createClass({

  render() {

    // _votePercentage(option) {
    //   if (this.state.votes !== undefined && this.state.votes.length > 0) {
    //     let tally = 0;
    //
    //     this.state.votes.forEach((vote) => {
    //       //Make sure selected_option_id and option.id are both integers
    //       if (vote.selected_option_id === option.id) {
    //         tally += 1;
    //       }
    //     });
    //
    //     return (tally / this.state.votes.length);
    //   }
    //
    //   else {
    //     return 0;
    //   }

    // // put this in the OptionDisplays function: percentage={this._votePercentage(option)}
    // },


    // let percentageBasedWidth = {
    //   width: `${this.props.percentage}%`

    // // Put this in the return: <p>{this.props.percentage}%</p>
    // // Put this in the option-vote-percentage div params: style={percentageBasedWidth}
    // };



    return (
      <div className="option-display group">
        <div className="option-vote-percentage">
          <h3>{this.props.option.option}</h3>
          <p>{this.props.optionTally} / {this.props.totalQuestionVotes}</p>
        </div>
      </div>
    );
  }
});

module.exports = OptionDisplay;


// this.props.question.options.forEach((option) => {
//
//   let percentageBasedWidth = {
//     width: `${this._votePercentage(option)}%`
//   };
//
//   displays.push(
//     <OptionDisplay
//       option={option}
//       style={percentageBasedWidth}
//     />
//   );
// });
