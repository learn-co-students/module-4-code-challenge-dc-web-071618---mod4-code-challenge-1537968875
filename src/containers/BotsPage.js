import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => this.setState({
      bots: data
    })
  )}

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
