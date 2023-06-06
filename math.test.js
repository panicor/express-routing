const {mean, median, mode} = require("./math");

describe("#mean", () => {
    it("gets mean of inputted numbers", () => {
        expect(mean([1,2,3,4])).toEqual(2.5)
    })

    it("gets mean of empty array", () => {
        expect(mean([])).toEqual(0)
    })
})

describe("#median", () => {
    it("gets median of even inputted numbers", () => {
        expect(median([1,2,3,4])).toEqual(2.5)
    })

    it("gets median of odd inputted numbers", () => {
        expect(median([1,2,3])).toEqual(2)
    })
})

describe("#mode", () => {
    it("gets mode of inputted numbers", () => {
        expect(mode([1,1,2,3,4])).toEqual(1)
    })
})