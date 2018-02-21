import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      active: !this.state.active,
    });
    if (this.state.active) {
      // trigger save to saveToFavorites
    } else {
      // trigger delete from favorites
    }
    console.log('this is the state: ', this.state.active);
  }

  render() {
    const imageURL = this.props.result.images;
    const { active } = this.state;
    return (
      <div style={{
          border: '1px solid black',
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'cover',
          display: 'grid',
        }}
      >
        <Button
          icon="star"
          onClick={this.handleButtonClick}
          toggle active={active}
          size="large"
        />
        <span>
          ${this.props.result.prices}
        </span>
        <span>
          - {this.props.result.addresses}
        </span>
        <span>
          - <a href={imageURL}>Property Image</a>
        </span>
      </div>
    );
  }
}


// import React from 'react';
// import { Button, Icon } from 'semantic-ui-react';
//
// export default function Result(props) {
//   const imageURL = props.result.images;
//   let buttonState = false;
//   const saveToFavorites = () => {
//     console.log('clicked button');
//     buttonState = !buttonState;
//     console.log('button state: ', buttonState);
//   };
//   return (
//     <div style={{
//       border: '1px solid black',
//       backgroundImage: `url(${imageURL})`,
//       backgroundSize: 'cover',
//       display: 'grid',
//       }}
//     >
//       <Button
//         icon="star"
//         onClick={saveToFavorites}
//         color="yellow"
//         toggle active={true}
//       />
//       <span>
//         ${props.result.prices}
//       </span>
//       <span>
//         - {props.result.addresses}
//       </span>
//       <span>
//         - <a href={imageURL}>Property Image</a>
//       </span>
//     </div>
//   );
// }
