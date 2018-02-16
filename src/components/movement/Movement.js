import React, { Component } from 'react';
import Article from '../utils/Article';
import Promo from '../utils/Promo';
import MediaLeft from '../utils/MediaLeft';
import MediaRight from '../utils/MediaRight';
import MediaTile from '../utils/MediaTile';
import Tile from '../utils/Tile';

class Movement extends Component {

  state = {
    text: [
      'Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.',
      'Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
      'Molestie ac feugiat sed lectus vestibulum. Feugiat sed lectus vestibulum mattis. Volutpat diam ut venenatis tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie at. Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.',
      'Feugiat sed lectus vestibulum mattis.',
      'Movement Therapy',
      'injury rehabilitation is one of the most important decisions you will have to make in the near future',

    ]
  }

  render(){

    const { text } = this.state;

    return(
      <div>
        <Promo header1={text[4]} header2={text[5]}/>
        <MediaTile paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]} imgsrc='https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a437732f90bc9951d6316ee9c1a2565&auto=format&fit=crop&w=800&q=80'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaLeft imgsrc='https://www.visitphillipisland.com/wp-content/uploads/2017/02/massage16.jpg'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaTile paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]} imgsrc='https://images.unsplash.com/photo-1468645547353-56d325bb57ff?ixlib=rb-0.3.5&s=20adeb56615d3f1f7b4444076b2a9134&auto=format&fit=crop&w=750&q=80'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <Tile/>
        <Promo header1={text[4]} header2={text[5]}/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <MediaRight imgsrc='https://s3.amazonaws.com/mytime_prod/attachments/4376/large_arm/Fotolia_42144350_Subscription_Monthly_XXL.jpg?1391242196'/>
        <Article paragraph1={text[0]} paragraph2={text[1]} paragraph3={text[2]} header={text[3]}/>
        <Tile/>
      </div>
    );
  }
}

export default Movement;