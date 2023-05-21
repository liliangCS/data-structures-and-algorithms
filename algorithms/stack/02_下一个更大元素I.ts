/**
 * leetcode: 71
 * @param nums1
 * @param nums2
 * @returns
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    const curValue = nums1[i]
    const index = nums2.indexOf(curValue)
    let j
    for (j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > curValue) {
        res.push(nums2[j])
        break
      }
    }
    if (j === nums2.length) {
      res.push(-1)
    }
  }
  return res
}
