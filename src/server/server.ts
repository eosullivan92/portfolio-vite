import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('dist/app'))

app.get('*', (_req, res) => {
	res.sendFile(path.join(__dirname, 'app/index.html'))
})

app.listen(PORT, function () {
	// eslint-disable-next-line no-console
	console.log('Listening on port', PORT)
})
