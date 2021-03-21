import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments){
    if (comments != null) {
      const dishComments = comments.map((comment) => {
        return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {comment.date}</p>
                </li>
        );
      });

      return (
        <div>
          {dishComments}
        </div>
      );

    } else {
      return <div></div>
    }
  }

  renderDish(dish) {
    if (dish != null) {

      return (
        <div>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );

    } else {

      return (<div></div>);
    }
  }

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(this.props.selectedDish.comments)}
            </ul>
          </div>
        </div>
      );

    } else {

      return (<div></div>);
    }

  }


}

export default DishDetail;
