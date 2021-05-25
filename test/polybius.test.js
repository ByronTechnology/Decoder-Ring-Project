const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius",()=>{
    const word = 'caesar'
    const word2 = 'polybius'
    it("Returns properly when given a proper input",()=>{
        const expected = "311151341124"
        const encode = true
        const actual = polybius(word, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns properly when given a proper input as the only parameter passed",()=>{
        const expected = "5343134521425434"
        const actual = polybius(word2)
        expect(actual).to.equal(expected)
    })
    it("Returns properly when  decoding a proper input",()=>{
        const input = "311151341124"
        const encode = false
        const actual = polybius(input, encode)
        expect(actual).to.equal(word)
    })
    it("Returns properly when decoding a proper input",()=>{
        const input = "5343134521425434"
        const encode = false
        const actual = polybius(input, encode)
        expect(actual).to.equal("polyb(i/j)us")
    })
    it("Returns false when no input is passed",()=>{
        const actual = polybius()
        expect(actual).to.be.false;
    })
})