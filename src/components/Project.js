import React from 'react';

import Card from './Card';

import augustino from '../assets/images/augustino.PNG';
import weedster from '../assets/images/weedster.PNG';
import trivia from '../assets/images/trivia.PNG';
import directory from '../assets/images/directory.PNG';
import notes from '../assets/images/notes.PNG';
import masters from '../assets/images/masters.PNG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [
        {
          id:0,
          title: "Note Taker",
          subtitle: "A simple notepad application",
          imgSrc: notes,
          link: "https://stormy-beach-20361.herokuapp.com/",
          selected: false,
        },
        {
          id:1,
          title: "Weedster",
          subtitle: "A forum about weed",
          imgSrc: weedster,
          link: "http://weedster.herokuapp.com/feature",
          selected: false,
        },        {
          id:2,
          title: "weedster2.0",
          subtitle: "an improved forum about weed",
          imgSrc: weedster,
          link: "https://newweedster.herokuapp.com/",
          selected: false,
        },        {
          id:3,
          title: "Trivia app",
          subtitle: "A trivia game",
          imgSrc: trivia,
          link: "https://marcos-cmd.github.io/Project1-Trivia-App/",
          selected: false,
        },
        {
          id:4,
          title: "Vessel Masters",
          subtitle: "A site for professional mariners",
          imgSrc: masters,
          link: "https://vesselmasters.com",
          selected: false,
        },
        {
          id:5,
          title: "Employee Directory",
          subtitle: "Phone, email list and birthday",
          imgSrc: directory,
          link: "https://aprzygocki.github.io/Employee_Directory/",
          selected: false,
        },
        { 
          id:6,
          title: "Augustino's Profile",
          subtitle: "gateway into the mind",
          imgSrc: augustino,
          link: "https://augustino.us",
          selected: false,
        },
      ]
    }
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}


makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render() {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;