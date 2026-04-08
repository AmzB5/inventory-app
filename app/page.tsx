'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const [equipment, setEquipment] = useState(0)
  const [items, setItems] = useState(0)
  const [requests, setRequests] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data: eq } = await supabase.from('equipment').select('*')
    const { data: it } = await supabase.from('items').select('*')
    const { data: rq } = await supabase.from('requests').select('*')

    setEquipment(eq.length)
    setItems(it.length)
    setRequests(rq.length)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Inventory Dashboard</h1>

      <div style={{ display: 'flex', gap: 20 }}>
        <div>Equipment: {equipment}</div>
        <div>Items: {items}</div>
        <div>Requests: {requests}</div>
      </div>
    </div>
  )
}