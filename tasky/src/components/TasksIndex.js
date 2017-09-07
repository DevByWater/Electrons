import React, { Component } from "react";

class TasksIndex extends Component {
  renderActionButtons() {
    if (this.props.timer.active) {
      return (
        <div style={styles.buttonContainer}>
          <button className="btn red" onClick={() => this.props.onTimerStop()}>
            Stop Timer
          </button>
        </div>
      );
    }

    return (
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          className="btn green"
          onClick={() => this.props.onTimerStart()}
        >
          Start Timer
        </button>
        <button
          className="btn"
          onClick={() => this.props.onTaskDeactivate(this.props.activeTask)}
        >
          Deactivate Task
        </button>
      </div>
    );
  }

  render() {
    const { activeTask, timer } = this.props;

    if (!activeTask) {
      return (
        <div style={styles.container}>
          <h3>
            No Active tasks.
          </h3>
        </div>
      );
    }

    return (
      <div style={styles.container}>
        <h4>{`Time Left ${timer.display}`}</h4>
        <h6>{`Current Task: ${activeTask.task}`}</h6>
        {this.renderActionButtons()}
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginBottom: "15px"
  }
};

export default TasksIndex;
