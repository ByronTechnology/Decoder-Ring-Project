const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar",()=>{
    const word = "caesar"
    it("Returns properly when given a proper input and shift",()=>{
        const expected = "ecguct"
        const shift = 2
        const encode = true
        const actual = caesar(word,shift, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns properly when given a proper input and negative shift",()=>{
        const expected = "xvznvm"
        const shift = -5
        const encode = true
        const actual = caesar(word,shift, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns properly when given a proper input and shift",()=>{
        const input = "ecguct"
        const shift = 2
        const decode = false
        const actual = caesar(input,shift, decode)
        expect(actual).to.equal(word)
    })
    it("Returns properly when given a proper input and negative shift",()=>{
        const input = "xvznvm"
        const shift = -5
        const decode = false
        const actual = caesar(input,shift, decode)
        expect(actual).to.equal(word)
    })
    it("Returns properly encoded when given a proper input and shift without decode/encode ",()=>{
        const expected = "ecguct"
        const shift = 2
        const actual = caesar(word,shift)
        expect(actual).to.equal(expected)
    })
    it("Returns false when given 0 for shift",()=>{
        const expected = false
        const shift = 0
        const encode = true
        const actual = caesar(word,shift, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns false when given a shift value >25",()=>{
        const expected = false
        const shift = 45
        const encode = true
        const actual = caesar(word,shift, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns false when given a shift value <-25",()=>{
        const expected = false
        const shift = 45
        const encode = true
        const actual = caesar(word,shift, encode)
        expect(actual).to.equal(expected)
    })
})