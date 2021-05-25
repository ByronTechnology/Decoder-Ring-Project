const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution",()=>{
    const word = "caesar"
    const word2 = "polybius"
    const word3 = "substitution"
    it("Returns properly when given a proper input and alphabet",()=>{
        const expected = "a$&i$b"
        const cypherAlphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const encode = true
        const actual = substitution(word, cypherAlphabet, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns properly when given a proper input and alphabet",()=>{
        const expected = "uvcpwxni"
        const cypherAlphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const encode = true
        const actual = substitution(word2, cypherAlphabet, encode)
        expect(actual).to.equal(expected)
    })
    it("Returns properly decoded when given a proper input and alphabet",()=>{
        const input = "inwijxjnjxvg"
        const cypherAlphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const encode = false
        const actual = substitution(input, cypherAlphabet, encode)
        expect(actual).to.equal(word3)
    })
    it("Returns false when given a proper input and an alphabet under 26 characters",()=>{
        const expected = "inwijxjnjxvg"
        const cypherAlphabet = "$wae&zrdxtfcygvuhbijno"
        const encode = true
        const actual = substitution(word3, cypherAlphabet, encode)
        expect(actual).to.be.false
    })
    it("Returns false when given no input and an alphabet under 26 characters",()=>{
        const expected = "inwijxjnjxvg"
        const cypherAlphabet = "$wae&zrdxtfcygvuhbijno"
        const actual = substitution(cypherAlphabet)
        expect(actual).to.be.false
    })
    it("Returns false when given a proper input and no alphabet",()=>{
        const expected = "inwijxjnjxvg"
        const actual = substitution(word3)
        expect(actual).to.be.false
    })
})