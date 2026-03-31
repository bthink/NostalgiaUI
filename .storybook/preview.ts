import type { Preview } from '@storybook/react-vite'
import '../src/styles/base.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['NFSU', ['Overview', '*']],
      },
    },
    backgrounds: {
      default: 'nfsu',
      values: [{ name: 'nfsu', value: '#07080f' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
