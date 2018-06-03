/*
    This higher order component just wraps adjacent JSX elements
    negating the need for a wrapper element (should be replaced
    with native React.Fragment in React 16 as this is more performant,
    but this is what the course instructor uses so leaving it here for
    now)
*/

const aux = (props) => props.children;

export default aux;
