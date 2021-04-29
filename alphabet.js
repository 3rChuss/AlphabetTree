
class AlphabetTree {
    constructor (value, children = []) {
        this.value = value;
        this.children = children;
    }

    getLetters () {
        return [this.value, ...this.children.map((node) => node.getLetters())].flat()
    } 

    getUniqueLetters (otherTree) {
        const firstLetters = new Set(this.getLetters())
        const secondLetters = new Set(otherTree.getLetters())

        const union = (s1, s2) => new Set([...s1, ...s2])
        const intersection = (s1, s2) => new Set([...s1].filter(item => s2.has(item)))
        const diff = (s1, s2) => new Set([...s1].filter(item => !s2.has(item)))

        return [...diff(
            union(firstLetters, secondLetters),
            intersection(firstLetters, secondLetters)
        )].sort()
    }

    addChildren (nodes) {
        this.children.push(...nodes) 
    }
}



module.exports = AlphabetTree
