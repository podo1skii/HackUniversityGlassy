import React from 'react';


const Button = ({
    onClick, 
    loading,
    error,
  }) => (
    <button onClick={onClick} disabled={loading}>
      {error ? "Error" : loading ? "..." : "БАМП! <3"}
    </button>
  );
  

class TinderButton extends React.Component{
    

    render() {
        return (
            <div><Button></Button></div>
        );
    }
}

export default TinderButton;