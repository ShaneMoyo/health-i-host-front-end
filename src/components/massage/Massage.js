import React, { Component } from 'react';
import Article from '../utils/Article';
import Promo from '../utils/Promo';
import MediaLeft from '../utils/MediaLeft';
import MediaRight from '../utils/MediaRight';
import MediaTile from '../utils/MediaTile';
import Tile from '../utils/Tile';

class Massage extends Component {

  state = {
    text: [
      'Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.',
      'Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
      'Molestie ac feugiat sed lectus vestibulum. Feugiat sed lectus vestibulum mattis. Volutpat diam ut venenatis tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie at. Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.',
      'Feugiat sed lectus vestibulum mattis.',
      'Massage Therapy',
      'A natural, effective way to relieve stress and reduce pain and inflammation.',

    ]
  }

  render(){

    const { text } = this.state;

    return(
      <div>
        <Promo header1={text[4]} header2={text[5]}/>
        <Article  paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaTile paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]} imgsrc='https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6513e109e523b0d3866f1093c91d428&auto=format&fit=crop&w=751&q=80'/>
        <MediaLeft imgsrc='https://www.visitphillipisland.com/wp-content/uploads/2017/02/massage16.jpg'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaTile paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]} imgsrc='https://images.unsplash.com/photo-1475235035145-412844f9513a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf9e5eeea0af1116f80aeea981b5885b&auto=format&fit=crop&w=751&q=80'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <Tile/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaRight imgsrc='https://s3.amazonaws.com/mytime_prod/attachments/4376/large_arm/Fotolia_42144350_Subscription_Monthly_XXL.jpg?1391242196'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <Tile/>
      </div>
    );
  }
}

export default Massage;