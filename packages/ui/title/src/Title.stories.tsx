import type { ComponentProps } from "react"

import type { Meta, StoryFn } from "@storybook/react"

import { Title } from "./Title"

export default {
  title: "Components/Title",
  component: Title,
  args: {
    children: "Title",
  },
} as Meta<ComponentProps<typeof Title>>

const Template: StoryFn<ComponentProps<typeof Title>> = (props) => (
  <Title {...props} />
)

export const Default = Template.bind({})
