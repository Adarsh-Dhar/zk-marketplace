"use client"
import { createHelia } from 'helia'
import {useState, useEffect } from 'react'
import { json } from '@helia/json'
import { CID } from 'multiformats/cid'
import { init } from 'next/dist/compiled/webpack/webpack'

interface PostProductProps {
  seller : string
  title : string
  description : string
  amount : number
  quantity : number
  
}

export const IpfsComponent = () => {
  const [id, setId] = useState(null)
  const [helia, setHelia] = useState(null)
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    const init = async () => {
      if (helia) return

      const heliaNode = await createHelia()

      const nodeId = heliaNode.libp2p.peerId.toString()
      const nodeIsOnline = heliaNode.libp2p.status === 'started'
//@ts-ignore
      setHelia(heliaNode)
//@ts-ignore

      setId(nodeId)
      setIsOnline(nodeIsOnline)
      return (heliaNode)
    }

    init()
  }, [helia])
}

export const PostToIpfs = async ({
  seller,
  title,
  description,
  amount,
  quantity
}: PostProductProps) => {
  try {
    // Create Helia node
    const heliaNode = await createHelia()
    
    // Create JSON interface for Helia
    const j = json(heliaNode)
    
    // Prepare product data
    const productData = {
      seller,
      title,
      description,
      amount,
      quantity,
      timestamp: new Date().toISOString()
    }

    // Add data to IPFS
    const cid = await j.add(productData)
    
    // Verify the data was added correctly
    const retrievedObject = await j.get(cid)
    
    // Stop the Helia node to free up resources
    await heliaNode.stop()

    // Return the CID and the stored object for confirmation
    return {
      success: true,
      cid: cid.toString(), // Convert CID to string for easy sharing
      storedProduct: retrievedObject
    }
  } catch (error) {
    console.error("Error posting to IPFS:", error)
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      cid: null
    }
  }
}

export const GetFromIpfs = () => {
    
}