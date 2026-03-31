import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'NFSU/Progress',
  component: Progress,
  argTypes: {
    variant: {
      control: 'select',
      options: ['cyan', 'orange'],
    },
    value: { control: { type: 'range', min: 0, max: 100 } },
    label: { control: 'text' },
    showValue: { control: 'boolean' },
  },
  args: {
    value: 65,
    variant: 'cyan',
    label: 'Speed',
    showValue: true,
  },
  decorators: [
    (Story) => (
      <div className="w-56">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="w-56 flex flex-col gap-3">
      <Progress label="Speed" value={82} variant="cyan" showValue />
      <Progress label="Nitro" value={45} variant="orange" showValue />
      <Progress label="Handling" value={60} variant="cyan" showValue />
    </div>
  ),
}

export const Default: Story = {}

export const BothVariants: Story = {
  render: (args) => (
    <div className="w-56 flex flex-col gap-3">
      <Progress {...args} variant="cyan" label="Nitro" />
      <Progress {...args} variant="orange" label="Heat" />
    </div>
  ),
}
