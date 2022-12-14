import type { ComponentProps } from "react"

import type { Meta, StoryFn } from "@storybook/react"

import { Button } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<ComponentProps<typeof Button>>

const Template: StoryFn<ComponentProps<typeof Button>> = (props) => (
  <Button {...props} />
)

export const Default = Template.bind({})
