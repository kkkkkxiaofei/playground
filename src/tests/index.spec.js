import { sayHello } from '../index'

describe('index', () => {
	describe('sayHello', () => {
		it('should say hello', () => {
			expect(sayHello()).to.be.equal('hello')
		})
	})
})
