#! /usr/bin/env node
const [rawDelay] = process.argv.slice(2)

if (!rawDelay) {
  console.error('Usage: "waita <delay in ms>" (You omitted the delay argument)')
  process.exit(1)
}

const delay = parseInt(rawDelay)

if (delay !== delay) {
  console.error('Usage: "waita <delay in ms>" (The provided delay argument is not a number)')
  process.exit(1)
}

waita(delay)

async function waita(delay) {
  await new Promise(resolve => setTimeout(resolve, delay))
}
