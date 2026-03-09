import fs from 'fs'
import path from 'path'

export function getComponentSource(name: string): string {
  try {
    const filePath = path.join(process.cwd(), 'components', 'ui', `${name}.tsx`)
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return `// Source not found for ${name}`
  }
}

export function getAllComponentSources(): Record<string, string> {
  const uiDir = path.join(process.cwd(), 'components', 'ui')
  const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx'))
  return Object.fromEntries(
    files.map(file => [
      file.replace('.tsx', ''),
      fs.readFileSync(path.join(uiDir, file), 'utf-8')
    ])
  )
}