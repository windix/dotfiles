#!/usr/bin/env node

const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

const baseDate = dayjs()

console.log(`Z Week ${baseDate.week()}: ${baseDate.day(1).format('D/M')} - ${baseDate.day(5).format('D/M')}`)

// Monday to Friday
for (let i = 1; i < 6; i++) {
  console.log(baseDate.day(i).format('## D/M, dddd'), '\n\n')
}

