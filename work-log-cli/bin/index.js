#!/usr/bin/env node

const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

const uuid = require('uuid')
const fs = require('fs')

const baseDir = process.env.QUIVER_WORKLOG_BASEDIR

if (!baseDir) {
  console.log(`Error: ENV QUIVER_WORKLOG_BASEDIR doesn't exist`)
  process.exit(1)
}

const uuidValue = uuid.v4().toUpperCase()

const baseDate = dayjs()
const timestamp = dayjs().unix()

const title = `Z Week ${baseDate.week()}: ${baseDate.day(1).format('D/M')} - ${baseDate.day(5).format('D/M')}`
const body = [...Array(5).keys()].map(i => `${baseDate.day(i + 1).format('## D/M, dddd')}\n\n`).join('\n')

// A directory UUID.qvnote
const newDir = `${baseDir}/${uuidValue}.qvnote`
fs.mkdirSync(newDir)

// two files:
// - meta.json
const meta = {
  created_at : timestamp,
  tags: [],
  title,
  updated_at: timestamp,
  uuid: uuidValue
}

fs.writeFileSync(`${newDir}/meta.json`, JSON.stringify(meta, null, 2))

// - content.json
const content = {
  title,
  cells: [
    {
      type: 'markdown',
      data: body
    }
  ]
}

fs.writeFileSync(`${newDir}/content.json`, JSON.stringify(content, null, 2))

console.log(`new work-log ${title} has been created at ${newDir}\nPlease restart Quiver to take effect`)
