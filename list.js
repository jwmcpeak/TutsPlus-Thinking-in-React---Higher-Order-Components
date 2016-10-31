function List(props) {
    let values = props.values;

    let listElements = values.map((value, index) =>
        <li key={index}>{value}</li>
    );

    return (
        <ul>{listElements}</ul>
    );
}

function ContentBox(props) {
    return (
        <p>{props.content}</p>
    );
}

function TitledComponent(WrappedComponent) {
    return function(props) {
        return (
            <div>
                <h3>{props.title}</h3>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

const TitledList = TitledComponent(List);
const TitledContentBox = TitledComponent(ContentBox);