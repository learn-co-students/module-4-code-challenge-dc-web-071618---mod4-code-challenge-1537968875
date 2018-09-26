import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots

          {this.props.bots.map(bot => {
            <BotCard />
          })}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
