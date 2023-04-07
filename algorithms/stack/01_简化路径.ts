import Stack from "../../data-structures/stack"

type SimplifyPathType = (path: string) => Stack
/**
 * leetcode: 71
 * @param path
 * @returns
 */
const simplifyPath: SimplifyPathType = (path) => {
  const pathStack = new Stack()
  const parts = path.split("/")
  for (const part of parts) {
    switch (part) {
      case "":
      case ".":
        break
      case "..":
        pathStack.pop()
        break
      default:
        pathStack.push(part)
    }
  }
  return pathStack
}

console.log(simplifyPath("/algorithms/stack/01_简化路径.ts"))
