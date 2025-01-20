'use server'

import { sql } from '@vercel/postgres'
import { z } from 'zod'

const emailSchema = z.string().email()

export async function subscribeEmail(email: string) {
  try {
    // Validate email
    const validatedEmail = emailSchema.parse(email)

    // Check if email already exists
    const existingEmail = await sql`
      SELECT * FROM subscriptions WHERE email = ${validatedEmail}
    `

    if (existingEmail.rows.length > 0) {
      return {
        success: false,
        error: 'This email is already subscribed'
      }
    }

    // Insert new subscription
    await sql`
      INSERT INTO subscriptions (email, subscribed_at)
      VALUES (${validatedEmail}, NOW())
    `

    return {
      success: true
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return {
      success: false,
      error: 'Failed to subscribe. Please try again.'
    }
  }
}

