// const express = require('express')
// const path = require('path')

import express from 'express'
import path from 'path'
/**
 * Setup express
 */
const app = express()

const outputPath = path.resolve(process.cwd(), 'dist')
app.use(express.static(outputPath))

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(outputPath, 'index.html'))
})


// get the intended port number, use port 3000 if not provided
const port = process.env.PORT || 3030

// Start your app.
app.listen(port, (err) => {
 console.log(`started at 127.0.0.1:${port}`)
})

