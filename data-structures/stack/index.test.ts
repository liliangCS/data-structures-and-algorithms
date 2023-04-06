import Stack from "."
import { printTest } from "../../utils"

const studentStack = new Stack([
  { name: "张三", score: 55 },
  { name: "李四", score: 66 },
  { name: "王五", score: 77 }
])

// 添加一个学生的信息
printTest("push", () => {
  studentStack.push({ name: "赵六", score: 88 })
  console.log(studentStack)
})
// 删除栈顶学生的信息
printTest("pop", () => {
  const s1 = studentStack.pop()
  console.log(s1)
  console.log(studentStack)
})
// 获取栈顶的学生信息
printTest("peek", () => {
  const s1 = studentStack.peek()
  console.log(s1)
})
// 计算栈中学生数量
printTest("size", () => {
  const count = studentStack.size()
  console.log(count)
})
// 清除栈中学生信息
printTest("clear", () => {
  studentStack.clear()
  console.log(studentStack)
})
