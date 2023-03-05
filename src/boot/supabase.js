import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ppflvisanzsyqpbgizhe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwZmx2aXNhbnpzeXFwYmdpemhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMjU0MTEsImV4cCI6MTk5MzYwMTQxMX0.BpvW0VCaU24DIy2IXV6Qj2gBTo3mJWYQEgykAYPz0JE'
const supabase = createClient(supabaseUrl, supabaseKey)


supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}


