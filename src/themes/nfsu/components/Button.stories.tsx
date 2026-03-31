import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'NFSU/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Go Underground',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 flex-wrap">
        <Button variant="accent">Go Underground</Button>
        <Button variant="primary">Select</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Quit</Button>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button variant="accent" size="sm">Confirm</Button>
        <Button variant="primary" size="sm">Back</Button>
        <Button variant="secondary" size="lg">Large</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    </div>
  ),
}

export const Default: Story = {}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-3 flex-wrap">
      <Button {...args} variant="accent">Accent</Button>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-3 items-center flex-wrap">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, variant: 'accent' },
}
