'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
  let errorMsg = null;
  try {
    const supabase = await createClient()
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) errorMsg = error.message;
  } catch (err) {
    errorMsg = err.message;
  }

  if (errorMsg) {
    redirect('/login?error=' + encodeURIComponent(errorMsg))
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}

export async function signup(formData) {
  let errorMsg = null;
  try {
    const supabase = await createClient()
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const { error } = await supabase.auth.signUp(data)
    if (error) errorMsg = error.message;
  } catch (err) {
    errorMsg = err.message;
  }

  if (errorMsg) {
    redirect('/login?error=' + encodeURIComponent(errorMsg))
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}
