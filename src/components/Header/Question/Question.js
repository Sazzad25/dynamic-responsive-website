import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h1>Q.1 How does react work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h1>Q.2 Difference between props and state?</h1>
                <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h1>Q.3 What else does the useEffect api do other than load data?</h1>
                <p>1. Running on state change: validating input field
                    2. Running on state change: live filtering
                    3. Running on state change: trigger animation on new array value
                    4. Running on props change: update paragraph list on fetched API data update
                    5. Running on props change: updating fetched API data to get BTC updated price</p>
            </div>
        </div>
    );
};

export default Question;