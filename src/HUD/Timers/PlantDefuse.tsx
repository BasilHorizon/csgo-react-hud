import React from "react";
//import Lottie from 'react-lottie';
import * as animationData from './c4_anim.json'
import { Timer } from "../MatchBar/MatchBar";
import { Player } from "csgogsi";
import * as I from "./../../assets/Icons";

interface IProps {
  timer: Timer | null;
  side: "right" | "left"
}

// export default class LottieControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {isStopped: false, isPaused: false};
//   }

//   render() {
//     const buttonStyle = {
//       display: 'block',
//       margin: '10px auto'
//     };

//     const defaultOptions = {
//       loop: true,
//       autoplay: true, 
//       animationData: animationData,
//       rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice'
//       }
//     };

//     return <div>
//       <Lottie options={defaultOptions}
//               height={1080}
//               width={1920}
//               isStopped={this.state.isStopped}
//               isPaused={this.state.isPaused}/>
//     </div>
//   }
// }

export default class Bomb extends React.Component<IProps> {
  getCaption = (type: "defusing" | "planting", player: Player | null) => {
    if(!player) return null;
    if(type === "defusing"){
      return <>
        <img src={I.Defuse} height={22} alt={'Defuse'}/>
        <div className={'CT'}>{player.name} is defusing the bomb</div>
      </>;
    }
    return <>
      <img src={I.SmallBomb} alt={'C4'} />
      <div className={'T'}>{player.name} is planting the bomb</div>
    </>;
  }
  render() {
    const { side, timer } = this.props;
    return (
      <div className={`defuse_plant_container ${side} ${timer && timer.active ? 'show' :'hide'}`}>
        {
          timer ?
          <div className={`defuse_plant_caption`}>
            {this.getCaption(timer.type, timer.player)}
          </div> : null
        }
          
          <div className="defuse_plant_bar" style={{ width: `${(timer && timer.width) || 0}%` }}></div>
      </div>
    );
  }
}
