import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'NFSU/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Enable Nitrous',
    checked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-[10px]">
      <Checkbox label="Enable Nitrous" checked onChange={() => {}} />
      <Checkbox label="Traffic Enabled" checked={false} onChange={() => {}} />
      <Checkbox label="Show Minimap" checked onChange={() => {}} />
      <Checkbox label="Locked Option" disabled onChange={() => {}} />
    </div>
  ),
}

export const Unchecked: Story = {}

export const Checked: Story = {
  args: { checked: true },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Locked Option' },
}
