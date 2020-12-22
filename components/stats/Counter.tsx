import React, { Component } from "react";

import moment from "moment";
import styled from "styled-components";
import { motion } from "framer-motion";

const formatTimerDigit = (digit) => {
  return digit > 9 ? digit : "0" + digit;
};

const formatCountdownTextLabel = (digit, label, strict) => {
  if (strict) return digit > 0 ? formatTimerDigit(digit) + label : "";
  else return formatTimerDigit(digit) + label;
};

class Counter extends Component {
  state = {
    newYear: "2021",
    countdownText: "",
  };

  timer = (newYear) => {
    const eventTime = moment(
      `01-01-${newYear} 00:00:00`,
      "DD-MM-YYYY HH:mm:ss"
    ).unix();
    const currentTime = moment().unix();
    const diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime * 1000, "milliseconds");
    const interval = 1000;

    if (diffTime > 0) {
      setInterval(() => {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          "milliseconds"
        );

        // Format the months/days/hours/mins/secs with labels
        const months = formatCountdownTextLabel(duration.months(), "mo ", true);
        const days = formatCountdownTextLabel(duration.days(), "d ", true);
        const hours = formatCountdownTextLabel(duration.hours(), "h ", true);
        const mins = formatCountdownTextLabel(duration.minutes(), "m ", true);
        const secs = formatCountdownTextLabel(duration.seconds(), "s ", false);

        this.setState({ countdownText: months + days + hours + mins + secs });
      }, interval);
    } else {
      this.setState({ countdownText: "Happy New Year!" });
    }
  };

  render() {
    const { newYear, countdownText } = this.state;

    return (
      <Container>
        <Text
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {countdownText}
        </Text>
      </Container>
    );
  }

  componentDidMount() {
    const { newYear } = this.state;
    this.timer(newYear);
  }
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled(motion.p)`
  font-size: 2em;
  font-weight: 400;
`;
export default Counter;
