import React from "react";

import { Story, Meta } from "@storybook/react";

import { Card, CardProps } from "./index";
import { GridLayout } from "./GridLayout";

export default {
  component: Card,
  title: "Components/Card",
  argTypes: {
    type: {
      options: ["work", "play", "study", "exercise", "social", "self-care"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Work",
  hrs: "32hrs",
  lastHrs: "Last Week - 5hrs",
  type: "work",
};

export const CaseOfUse = () => {
  return (
    <GridLayout>
      <Card
        title={"work"}
        hrs={"32hrs"}
        lastHrs={"Last Week - 5hrs"}
        type={"work"}
      />
    </GridLayout>
  );
};
