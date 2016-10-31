function UpdateComponent(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                val: 0
            };

            this.onUpdate = this.onUpdate.bind(this);
        }

        onUpdate(event) {
            this.setState({
                val: this.state.val + 1
            });

            console.log("Updated performed. #" + (this.state.val + 1));
        }

        render() {
            let newProps = {
                updates: {}
            };

            newProps.updates[this.props.update] = this.onUpdate;
            return <WrappedComponent {...this.state} {...this.props} {...newProps} />
        }
    };
}

function Button(props) {
    return (
        <button {...props.updates}>
            {props.text}
        </button>
    );
}

const UpdateButton = UpdateComponent(Button);