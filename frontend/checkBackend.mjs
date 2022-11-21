import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config({ path: '.env.local' })

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const RETRY_INTERVAL = 5000
const MAX_RETRY = 30

const checkBackend = async () => {
  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/alive_check`
  for (let i = 0; i < MAX_RETRY; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        if (data && data.hasOwnProperty('is_alive') && data.is_alive) {
          console.log('Backend is alive')
          return
        }
      }
    } catch (e) {
      console.log(e)
    }

    console.log(`Backend is not alive. Retry after ${RETRY_INTERVAL}ms`)
    await sleep(RETRY_INTERVAL)
  }

  throw new Error(`Backend is not alive after ${MAX_RETRY} retries`)
}

checkBackend()
