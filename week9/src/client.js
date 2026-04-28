import { createClient } from '@supabase/supabase-js'

const URL = 'https://kcoaduayujtkxcemvbzd.supabase.co'
const API_KEY = 'sb_publishable_b50yrgWZxqx0DxdHLlAjxg_EIqwGeGT'

export const supabase = createClient(URL, API_KEY)
