const AlphabetTree = require("./alphabet")

describe("Alphabet tree test", () => {
    it("Comparing a tree with one of its leaves", () => {
        const root = new AlphabetTree("A")

        const b = new AlphabetTree("B")
        const c = new AlphabetTree("C")
        const d = new AlphabetTree("D")

        const e = new AlphabetTree("E")
        const f = new AlphabetTree("F")
        const g = new AlphabetTree("G")
        const h = new AlphabetTree("H")

        b.addChildren([e, g])
        d.addChildren([f, h])
        root.addChildren([b, c, d])
        const unique = root.getUniqueLetters(h)
        expect(unique).toEqual(["A", "B", "C", "D", "E", "F", "G"])
    })

    it("Comparing a tree with itself", () => {
        const root = new AlphabetTree("A")

        const b = new AlphabetTree("B")
        const c = new AlphabetTree("C")
        const d = new AlphabetTree("D")

        const e = new AlphabetTree("E")
        const f = new AlphabetTree("F")
        const g = new AlphabetTree("G")
        const h = new AlphabetTree("H")

        b.addChildren([e, g])
        d.addChildren([f, h])
        root.addChildren([b, c, d])
        const unique = root.getUniqueLetters(root)
        expect(unique).toEqual([])
    })

    it("Comparing different trees", () => {
        const b12 = new AlphabetTree("B")
        const a1 = new AlphabetTree("A")
        const v1 = new AlphabetTree("V")
        const j1 = new AlphabetTree("J")
        const f1 = new AlphabetTree("F")
        const q1 = new AlphabetTree("Q")
        const h1 = new AlphabetTree("H")
        const j12 = new AlphabetTree("J")
        const tree1 = new AlphabetTree("B")

        j1.addChildren([b12, a1, v1])
        q1.addChildren([h1, j12])
        tree1.addChildren([j1, f1, q1])

        // Tree 2
        const h2 = new AlphabetTree("H")
        const z2 = new AlphabetTree("Z")
        const j2 = new AlphabetTree("J")
        const f2 = new AlphabetTree("F")
        const a2 = new AlphabetTree("A")
        const c2 = new AlphabetTree("C")
        const tree2 = new AlphabetTree("Q")

        a2.addChildren([h2, z2])
        c2.addChildren([j2, f2])
        tree2.addChildren([a2, c2])

        const unique = tree2.getUniqueLetters(tree1)
        expect(unique).toEqual([ 'B', 'C', 'V', 'Z' ])
    })
})