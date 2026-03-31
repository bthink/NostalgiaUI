import { useState } from 'react'
import { Button } from './themes/diablo/components/Button'
import { Panel } from './themes/diablo/components/Panel'
import { StatCard } from './themes/diablo/components/StatCard'
import { SectionBox } from './themes/diablo/components/SectionBox'
import { Input } from './themes/diablo/components/Input'
import { Select } from './themes/diablo/components/Select'
import { Checkbox } from './themes/diablo/components/Checkbox'
import { Badge } from './themes/diablo/components/Badge'
import { Progress } from './themes/diablo/components/Progress'
import { Tabs } from './themes/diablo/components/Tabs'
import { NavMenu } from './themes/diablo/components/NavMenu'
import { Breadcrumb } from './themes/diablo/components/Breadcrumb'
import { Tooltip } from './themes/diablo/components/Tooltip'
import { Modal } from './themes/diablo/components/Modal'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-diablo-gold-dim" />
        <span aria-hidden className="text-diablo-gold/50 text-[9px] leading-none select-none">◆</span>
        <div className="text-[10px] tracking-[4px] uppercase text-diablo-gold/70 font-medium font-diablo">
          {title}
        </div>
        <span aria-hidden className="text-diablo-gold/50 text-[9px] leading-none select-none">◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-diablo-gold-dim" />
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const [navActive, setNavActive] = useState('singleplayer')
  const [autoPickup, setAutoPickup] = useState(true)
  const [showClock, setShowClock] = useState(false)
  const [diffFilter, setDiffFilter] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-diablo-bg p-8 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="font-diablo uppercase text-4xl font-semibold tracking-[5px] text-diablo-gold [text-shadow:0_0_24px_rgba(200,168,75,0.35)] leading-none">
          Diablo II
        </h1>
        <p className="text-diablo-text-dim text-sm tracking-[3px] uppercase mt-2 font-medium font-diablo">
          UI Kit — Lord of Destruction
        </p>
      </header>

      <Section title="Buttons">
        <div className="flex gap-3 flex-wrap mb-3">
          <Button variant="accent">New Game</Button>
          <Button variant="primary">Open Game</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Delete Hero</Button>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button variant="accent" size="sm">Accept</Button>
          <Button variant="primary" size="sm">Back</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Containers">
        <div className="flex gap-4 flex-wrap items-start">
          <Panel header="Character Info" badge="Nightmare" className="w-72">
            <p className="text-diablo-text text-sm tracking-wide leading-relaxed font-medium font-diablo">
              Sorceress, Level 42. Adept of Frozen Orb and Chain Lightning. Seeks the Dark Wanderer.
            </p>
            <Progress label="Experience" value={63} variant="experience" className="mt-4" />
          </Panel>
          <div className="flex gap-3 flex-wrap">
            <StatCard label="Strength" value={85} unit="attribute" />
            <StatCard label="Vitality" value={120} unit="attribute" />
            <StatCard label="Level" value={42} unit="sorceress" />
          </div>
          <SectionBox title="Class Info" className="self-start">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="gold">Sorceress</Badge>
              <Badge variant="red">Hardcore</Badge>
              <Badge variant="muted">Nightmare</Badge>
            </div>
          </SectionBox>
        </div>
      </Section>

      <Section title="Forms">
        <div className="flex gap-8 flex-wrap items-start">
          <div className="flex flex-col gap-4 w-64">
            <Input label="Hero Name" placeholder="Enter name..." defaultValue="Yesenia" />
            <Input label="Battle.net Key" type="password" defaultValue="xxxx-xxxx" />
            <Input label="Game Name" defaultValue="DEAD" error="Game not found" />
            <Select
              label="Difficulty"
              options={[
                { value: 'normal', label: 'Normal' },
                { value: 'nightmare', label: 'Nightmare' },
                { value: 'hell', label: 'Hell' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <Checkbox label="Auto Gold Pickup" checked={autoPickup} onChange={e => setAutoPickup(e.target.checked)} />
            <Checkbox label="Show Clock" checked={showClock} onChange={e => setShowClock(e.target.checked)} />
            <Checkbox label="Difficulty Filter" checked={diffFilter} onChange={e => setDiffFilter(e.target.checked)} />
          </div>
        </div>
      </Section>

      <Section title="Status & Feedback">
        <div className="flex gap-8 flex-wrap items-start">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="muted">Normal</Badge>
              <Badge variant="magic">Magic</Badge>
              <Badge variant="rare">Rare</Badge>
              <Badge variant="set">Set Item</Badge>
              <Badge variant="unique">Unique</Badge>
              <Badge variant="rune">Rune</Badge>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="solid">Socketed</Badge>
              <Badge variant="gold">Crafted</Badge>
              <Badge variant="red">Cursed</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-56">
            <Progress label="Life" value={78} variant="life" />
            <Progress label="Mana" value={52} variant="mana" />
            <Progress label="Experience" value={63} variant="experience" />
          </div>
        </div>
      </Section>

      <Section title="Navigation">
        <div className="flex gap-8 flex-wrap items-start">
          <Tabs
            className="w-72"
            tabs={[
              { key: 'skills', label: 'Skills', content: 'Frozen Orb: Lv 20. Chain Lightning: Lv 15. Static Field: Lv 10.' },
              { key: 'stats', label: 'Stats', content: 'Strength 85 · Dexterity 60 · Vitality 120 · Energy 95.' },
              { key: 'quests', label: 'Quests', content: 'Den of Evil: Complete. Andariel: Complete. Mephisto: Active.' },
            ]}
          />
          <NavMenu
            className="w-52"
            items={[
              { key: 'singleplayer', label: 'Single Player' },
              { key: 'battlenet', label: 'Battle.net' },
              { key: 'other', label: 'Other Multiplayer' },
              { key: 'cinematics', label: 'Cinematics' },
              { key: 'options', label: 'Options' },
            ]}
            activeKey={navActive}
            onSelect={setNavActive}
          />
          <div className="flex flex-col gap-4">
            <Breadcrumb
              items={[
                { label: 'Main Menu', href: '#' },
                { label: 'Options', href: '#' },
                { label: 'Gameplay' },
              ]}
            />
            <Tooltip content="Requires 100 gold to enter">
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
        title="Confirm Sacrifice"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="accent" size="sm" onClick={() => setModalOpen(false)}>Accept</Button>
          </>
        }
      >
        Transmute Stones of Jordan?<br />This action cannot be undone. Diablo will walk the earth.
      </Modal>
    </div>
  )
}
