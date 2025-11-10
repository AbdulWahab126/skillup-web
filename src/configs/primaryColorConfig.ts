export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  secondary?: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#312d4b',
    main: '#312d4b',
    secondary: '#905eff',
    dark: '#7E4EE6'
  }
]

export default primaryColorConfig
