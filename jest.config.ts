import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectOpenHandles: true
}

export default config