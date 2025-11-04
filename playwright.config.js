import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
  },
})