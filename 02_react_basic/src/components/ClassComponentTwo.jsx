import { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
    }

    // RUNS ONCE WHEN THE COMPONENT MOUNTS
    componentDidMount() {
        console.log("Timer MOUNTS");
        this.timer = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    // RUNS AFTER EVERY UPDATE (E.G., WHEN STATE CHANGES)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.seconds !== this.state.seconds) {
            console.log(`Timer Updated: ${this.state.seconds} Seconds`);
        }
    }

    // RUNS BEFORE THE COMPONENT IS REMOVE
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Timer unmounted and cleaned up");
    }

    render() {
        return <h1>Timer: {this.state.seconds} Seconds</h1>;
    }
}

export default Timer;
