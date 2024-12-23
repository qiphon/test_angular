export const getSyncStr = (...params: any[]): Promise<string> => {
  console.log({ request_params: params })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(+new Date() + '')
    }, 3000)
  })
}
