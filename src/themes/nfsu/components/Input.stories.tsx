import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'NFSU/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password'],
    },
  },
  args: {
    label: 'Player Name',
    placeholder: 'Enter callsign...',
    type: 'text',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input label="Player Name" placeholder="Enter callsign..." defaultValue="RazerX_88" />
      <Input label="Password" type="password" defaultValue="secret123" />
      <Input label="Race Code" defaultValue="INVLD" error="Invalid race code" />
      <Input label="Disabled" defaultValue="RazerX_88" disabled />
    </div>
  ),
}

export const Default: Story = {}

export const WithValue: Story = {
  args: { defaultValue: 'RazerX_88' },
}

export const WithError: Story = {
  args: { defaultValue: 'INVLD', error: 'Invalid race code' },
}

export const Password: Story = {
  args: { label: 'Password', type: 'password', defaultValue: 'secret123' },
}

export const Disabled: Story = {
  args: { defaultValue: 'RazerX_88', disabled: true },
}
