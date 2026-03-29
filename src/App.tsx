import { Button } from './components/ui/Button'

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
    </div>
  )
}
