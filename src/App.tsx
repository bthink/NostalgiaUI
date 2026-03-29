import { Button } from './components/ui/Button'
import { Panel } from './components/ui/Panel'
import { StatCard } from './components/ui/StatCard'
import { SectionBox } from './components/ui/SectionBox'

export default function App() {
  return (
    <div className="min-h-screen bg-nfsu-bg p-8 flex flex-col gap-4">
      <h1 className="text-nfsu-cyan font-nfsu italic uppercase tracking-widest text-2xl">NFSU1 UI Kit</h1>

      <div className="flex gap-3 flex-wrap">
        <Button variant="accent">GO UNDERGROUND</Button>
        <Button variant="primary">SELECT</Button>
        <Button variant="secondary">CANCEL</Button>
        <Button variant="danger">QUIT</Button>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button variant="accent" size="sm">CONFIRM</Button>
        <Button variant="primary" size="sm">BACK</Button>
        <Button variant="secondary" size="lg">LARGE</Button>
        <Button variant="primary" disabled>DISABLED</Button>
      </div>

      <div className="flex gap-4 flex-wrap items-start mt-4">
        <Panel header="Engine Upgrade" badge="Stage 3" className="max-w-xs">
          <p className="text-nfsu-muted text-sm tracking-wide leading-relaxed font-medium">
            Turbocharged inline-4 with intercooler. Adds 48 HP.
          </p>
        </Panel>
        <div className="flex gap-3">
          <StatCard label="Top Speed" value={186} unit="mph" />
          <StatCard label="0 - 60" value="3.8" unit="seconds" />
          <StatCard label="Wins" value={47} unit="races" />
        </div>
        <SectionBox title="Car Specs" className="self-start">
          <p className="text-nfsu-muted text-sm">Nissan Sentra SE-R</p>
        </SectionBox>
      </div>
    </div>
  )
}
