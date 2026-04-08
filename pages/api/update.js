import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  // Example: reduce item stock daily
  await supabase
    .from('items')
    .update({ quantity: 10 }) // customize this logic

  res.status(200).json({ message: 'Updated' })
}