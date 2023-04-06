type PrintTestType = (action: string, callback: () => void) => void

export const printTest: PrintTestType = (action, callback) => {
  console.log(`START----------${action}----------`)
  callback()
  console.log(`##END----------${action}----------\n`)
}
