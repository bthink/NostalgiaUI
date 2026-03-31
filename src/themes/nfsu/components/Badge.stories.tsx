import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'NFSU/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['cyan', 'orange', 'muted', 'solid'],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Unlocked',
    variant: 'cyan',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="solid">New</Badge>
      <Badge variant="cyan">Unlocked</Badge>
      <Badge variant="orange">Stage 3</Badge>
      <Badge variant="muted">Locked</Badge>
    </div>
  ),
}

export const Default: Story = {}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-2 flex-wrap">
      <Badge {...args} variant="solid">New</Badge>
      <Badge {...args} variant="cyan">Unlocked</Badge>
      <Badge {...args} variant="orange">Stage 3</Badge>
      <Badge {...args} variant="muted">Locked</Badge>
    </div>
  ),
}
