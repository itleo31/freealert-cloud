process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../bin/www')
let should = chai.should()

chai.use(chaiHttp)

describe('routes.index', () => {
	describe('GET /', () => {
		it('should response 200', (done) => {
			chai.request(server)
				.get('/')
				.end((err, res) => {
					res.should.have.status(200)
					done()
				})
		})
	})
})