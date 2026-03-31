import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Badge } from './components/Badge'
import { Breadcrumb } from './components/Breadcrumb'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import { Modal } from './components/Modal'
import { NavMenu } from './components/NavMenu'
import { Panel } from './components/Panel'
import { Progress } from './components/Progress'
import { SectionBox } from './components/SectionBox'
import { Select } from './components/Select'
import { StatCard } from './components/StatCard'
import { Tabs } from './components/Tabs'
import { Tooltip } from './components/Tooltip'

const meta = {
  title: 'NFSU/Overview',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function SectionHeader({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="text-[10px] tracking-[4px] uppercase text-nfsu-cyan/60 font-medium font-nfsu whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-nfsu-border" />
    </div>
  )
}

function NFSUOverviewPage() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#07080f] p-8 pb-16">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Hero */}
        <div className="border-b border-nfsu-border pb-8">
          <div className="text-[10px] tracking-[4px] uppercase text-nfsu-cyan/50 font-medium font-nfsu mb-2">
            NostalgiaUI
          </div>
          <h1 className="font-nfsu italic uppercase tracking-[8px] text-[32px] text-white font-semibold leading-none mb-3">
            NFSU <span className="text-nfsu-cyan">Kit</span>
          </h1>
          <p className="text-nfsu-muted text-[13px] tracking-[2px] font-medium">
            Need For Speed Underground inspired component library — all components at a glance.
          </p>
        </div>

        {/* Badge */}
        <div>
          <SectionHeader>Badge</SectionHeader>
          <div className="flex flex-wrap gap-3">
            <Badge variant="cyan">Turbo</Badge>
            <Badge variant="orange">Nitro</Badge>
            <Badge variant="solid">Pro</Badge>
            <Badge variant="muted">Inactive</Badge>
          </div>
        </div>

        {/* Button */}
        <div>
          <SectionHeader>Button</SectionHeader>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <Button variant="accent">Go Underground</Button>
              <Button variant="primary">Select</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="danger">Quit</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="accent" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div>
          <SectionHeader>Progress</SectionHeader>
          <div className="flex flex-col gap-3 max-w-sm">
            <Progress value={75} label="Speed" variant="cyan" />
            <Progress value={48} label="Acceleration" variant="orange" />
            <Progress value={91} label="Handling" variant="cyan" />
            <Progress value={20} label="Weight" variant="orange" />
          </div>
        </div>

        {/* StatCard */}
        <div>
          <SectionHeader>StatCard</SectionHeader>
          <div className="flex flex-wrap gap-3">
            <StatCard label="Top Speed" value={247} unit="km/h" />
            <StatCard label="0–100" value="3.8" unit="seconds" />
            <StatCard label="Nitro" value={100} unit="%" />
            <StatCard label="Best Lap" value="1:42" unit="min" />
          </div>
        </div>

        {/* Forms */}
        <div>
          <SectionHeader>Forms</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            <Input label="Player Name" placeholder="Enter name..." />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Input
              label="Error State"
              placeholder="Username"
              error="Name already taken"
            />
            <Select
              label="Car Class"
              options={[
                { value: 'a', label: 'Class A — Race' },
                { value: 'b', label: 'Class B — Street' },
                { value: 'c', label: 'Class C — Drift' },
              ]}
            />
            <div className="flex flex-col gap-3">
              <Checkbox
                label="Enable Nitro"
                checked={checked1}
                onChange={e => setChecked1(e.target.checked)}
              />
              <Checkbox
                label="Turbo Boost"
                checked={checked2}
                onChange={e => setChecked2(e.target.checked)}
              />
              <Checkbox label="Disabled option" disabled />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <SectionHeader>Navigation</SectionHeader>
          <div className="flex flex-col gap-6">
            <Breadcrumb
              items={[
                { label: 'Garage', href: '#' },
                { label: 'Performance', href: '#' },
                { label: 'Engine' },
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <NavMenu
                items={[
                  { key: 'garage', label: 'Garage' },
                  { key: 'shop', label: 'Tuning Shop' },
                  { key: 'race', label: 'Quick Race' },
                  { key: 'career', label: 'Career' },
                  { key: 'online', label: 'Online' },
                ]}
                activeKey="garage"
              />
              <Tabs
                tabs={[
                  { key: 'engine', label: 'Engine', content: 'Engine performance tuning options.' },
                  { key: 'visual', label: 'Visual', content: 'Vinyls, paint, rims and more.' },
                  { key: 'nos', label: 'NOS', content: 'Nitrous oxide system configuration.' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div>
          <SectionHeader>Layout</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Panel header="Vehicle Stats" badge="Modified">
              <p className="text-nfsu-muted text-sm tracking-wide leading-relaxed">
                Engine, suspension, nitrous and visual modifications applied.
              </p>
            </Panel>
            <SectionBox title="Quick Info">
              <p className="text-nfsu-muted text-sm tracking-wide leading-relaxed">
                Highlighted information block with a cyan accent left border.
              </p>
            </SectionBox>
          </div>
        </div>

        {/* Overlays */}
        <div>
          <SectionHeader>Overlays</SectionHeader>
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[3px] uppercase text-nfsu-cyan/50 font-medium font-nfsu">
                Tooltip
              </span>
              <Tooltip content="Max performance upgrade">
                <Button variant="secondary" size="sm">Hover me</Button>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[3px] uppercase text-nfsu-cyan/50 font-medium font-nfsu">
                Modal
              </span>
              <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
            </div>
          </div>
        </div>

      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Enter Race"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="accent" size="sm" onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        Are you ready to race? Your vehicle will be entered in the next available event.
      </Modal>
    </div>
  )
}

export const Default: Story = {
  render: () => <NFSUOverviewPage />,
}
