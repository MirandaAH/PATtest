import React, { Component } from 'react';

class GoalProgress extends Component {
    render() {
        return (
            <div className="col-lg-7">
                <div className="goal-progress text-center">
                    <button type="button" className="btn btn-success">Add Progress</button>
                    <div className="goal-container">
                        <div className="card">
                            <div className="card-block">
                                <p>Date</p>
                                <hr />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                              </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default GoalProgress;
