import { useState } from 'react'
import { Button } from './themes/nfsu/components/Button'
import { Panel } from './themes/nfsu/components/Panel'
import { StatCard } from './themes/nfsu/components/StatCard'
import { SectionBox } from './themes/nfsu/components/SectionBox'
import { Input } from './themes/nfsu/components/Input'
import { Select } from './themes/nfsu/components/Select'
import { Checkbox } from './themes/nfsu/components/Checkbox'
import { Badge } from './themes/nfsu/components/Badge'
import { Progress } from './themes/nfsu/components/Progress'
import { Tabs } from './themes/nfsu/components/Tabs'
import { NavMenu } from './themes/nfsu/components/NavMenu'
import { Breadcrumb } from './themes/nfsu/components/Breadcrumb'
import { Tooltip } from './themes/nfsu/components/Tooltip'
import { Modal } from './themes/nfsu/components/Modal'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-[10px] tracking-[3px] uppercase text-nfsu-cyan/70 font-medium font-nfsu">
          {title}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-nfsu-cyan-dim to-transparent" />
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const [navActive, setNavActive] = useState('underground')
  const [nitro, setNitro] = useState(true)
  const [traffic, setTraffic] = useState(false)
  const [minimap, setMinimap] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-nfsu-bg p-8 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="font-nfsu italic uppercase text-4xl font-semibold tracking-[6px] text-white [text-shadow:0_0_20px_rgba(0,200,248,0.38)] leading-none">
          Underground
        </h1>
        <p className="text-nfsu-muted text-sm tracking-[3px] uppercase mt-2 font-medium">
          UI Kit - Need for Speed
        </p>
      </header>

      <Section title="Buttons">
        <div className="flex gap-3 flex-wrap mb-3">
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
      </Section>

      <Section title="Containers">
        <div className="flex gap-4 flex-wrap items-start">
          <Panel header="Engine Upgrade" badge="Stage 3" className="w-72">
            <p className="text-nfsu-muted text-sm tracking-wide leading-relaxed font-medium">
              Turbocharged inline-4 with intercooler. Adds 48 HP and 210 lb-ft torque.
            </p>
            <Progress label="Performance" value={68} className="mt-4" />
          </Panel>
          <div className="flex gap-3 flex-wrap">
            <StatCard label="Top Speed" value={186} unit="mph" />
            <StatCard label="0 - 60" value="3.8" unit="seconds" />
            <StatCard label="Wins" value={47} unit="races" />
          </div>
          <SectionBox title="Car Specs" className="self-start">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="cyan">Nissan Sentra</Badge>
              <Badge variant="orange">240 HP</Badge>
              <Badge variant="muted">RWD</Badge>
            </div>
          </SectionBox>
        </div>
      </Section>

      <Section title="Forms">
        <div className="flex gap-8 flex-wrap items-start">
          <div className="flex flex-col gap-4 w-64">
            <Input label="Player Name" placeholder="Enter callsign..." defaultValue="RazerX_88" />
            <Input label="Password" type="password" defaultValue="secret123" />
            <Input label="Race Code" defaultValue="INVLD" error="Invalid race code" />
            <Select
              label="Car Class"
              options={[
                { value: 'b', label: 'Class B - Street' },
                { value: 'a', label: 'Class A - Pro' },
                { value: 's', label: 'Class S - Underground' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <Checkbox label="Enable Nitrous" checked={nitro} onChange={e => setNitro(e.target.checked)} />
            <Checkbox label="Traffic Enabled" checked={traffic} onChange={e => setTraffic(e.target.checked)} />
            <Checkbox label="Show Minimap" checked={minimap} onChange={e => setMinimap(e.target.checked)} />
          </div>
        </div>
      </Section>

      <Section title="Status & Feedback">
        <div className="flex gap-8 flex-wrap items-start">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="solid">New</Badge>
            <Badge variant="cyan">Unlocked</Badge>
            <Badge variant="orange">Stage 3</Badge>
            <Badge variant="muted">Locked</Badge>
          </div>
          <div className="flex flex-col gap-3 w-56">
            <Progress label="Speed" value={82} />
            <Progress label="Nitro" value={45} variant="orange" />
            <Progress label="Handling" value={60} />
          </div>
        </div>
      </Section>

      <Section title="Navigation">
        <div className="flex gap-8 flex-wrap items-start">
          <Tabs
            className="w-72"
            tabs={[
              { key: 'engine', label: 'Engine', content: 'Turbocharged inline-4. Stage 3 installed. Max stage: 3.' },
              { key: 'visuals', label: 'Visuals', content: 'Neon underglow + carbon hood installed.' },
              { key: 'tires', label: 'Tires', content: 'Stage 2 tires. Grip rating: A.' },
            ]}
          />
          <NavMenu
            className="w-52"
            items={[
              { key: 'underground', label: 'Go Underground' },
              { key: 'quick', label: 'Quick Race' },
              { key: 'stats', label: 'Statistics' },
              { key: 'customize', label: 'Customize Ride' },
              { key: 'options', label: 'Options' },
            ]}
            activeKey={navActive}
            onSelect={setNavActive}
          />
          <div className="flex flex-col gap-4">
            <Breadcrumb
              items={[
                { label: 'Main Menu', href: '#' },
                { label: 'Customize', href: '#' },
                { label: 'Engine' },
              ]}
            />
            <Tooltip content="Stage 3 unlocks at 20 wins">
              <Button variant="secondary" size="sm">Hover for tooltip</Button>
            </Tooltip>
            <Button variant="accent" size="sm" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
          </div>
        </div>
      </Section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Purchase"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="accent" size="sm" onClick={() => setModalOpen(false)}>Confirm</Button>
          </>
        }
      >
        Install Stage 3 Turbo?<br />Cost: $8,400. This cannot be undone.
      </Modal>
    </div>
  )
}
