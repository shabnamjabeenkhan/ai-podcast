// utils/data/user/userUpdate.ts
'server only';
import { userUpdateProps } from '@/utils/types';
import { createDirectClient } from '@/lib/drizzle';
import { users } from '@/db/schema/users'; // Import your users schema
import { eq } from 'drizzle-orm';
import { isAuthorized } from '@/utils/data/user/isAuthorized'; // <-- Import your authorization function

export const userUpdate = async ({
  email, // <-- Parameter used in the where clause
  first_name,
  last_name,
  profile_image_url,
  user_id, // <-- Parameter used for authorization check
}: userUpdateProps) => {

  // --- APPLY THE AUTHORIZATION CHECK HERE ---
  // Checks if the *current logged-in user* is authorized to update the user with ID `user_id`.
  const { authorized, message } = await isAuthorized(user_id); // Correctly using the user_id parameter here

  // --- If NOT authorized, stop immediately ---
  if (!authorized) {
    console.error(`Unauthorized attempt to update user ${user_id}: ${message}`);
    // Returning an error object for auth failure
    return { error: `Authorization failed: ${message}` };
  }
  // --- If authorized, continue with the database operation ---

  try {
    const db = createDirectClient();

    const updated = await db.update(users)
      .set({
        // Assuming your Drizzle schema uses these exact field names:
        email: email, // Setting email
        firstName: first_name, // Setting firstName
        lastName: last_name,   // Setting lastName
        profileImageUrl: profile_image_url, // Setting profileImageUrl
        // userId: user_id, // <-- POTENTIAL ISSUE: You likely DO NOT want to change the user's unique ID.
                           // This line should probably be removed unless there's a very specific reason to allow changing the user_id itself.
      })
      // IMPORTANT: The where clause determines *which* row to update.
      // Your schema doc uses `user_id` (CUID, unique) as the primary identifier.
      // It is safer and more reliable to use the `user_id` parameter here, consistent with the auth check.
      .where(eq(users.userId, user_id)) // <-- SUGGESTION: Use the user_id parameter and schema field here
      // .where(eq(users.email, email)) // <-- CURRENT CODE: Uses email parameter. Less reliable if email isn't guaranteed unique or you need to update by ID.
      .returning(); // Keep returning to get the updated row

    if (updated.length > 0) {
      console.log(`User ${user_id} updated successfully.`);
      return updated[0]; // Return the updated user object
    } else {
      // This case means authorization passed, but no row was found with that `user_id` (or email in your current code) to update.
      // This implies the `user_id` (or email) provided to the function didn't exist in the DB.
      console.warn(`Update attempted for non-existent user ID ${user_id} (or email ${email}) after authorization passed.`);
      // Return an error indicating that the target user wasn't found.
      return { error: 'Target user not found for update.' };
    }
  } catch (error: any) {
    console.error(`Failed to update user ${user_id}:`, error);
    // Return a consistent error structure for database operation failures
    return { error: `Database update failed: ${error.message || String(error)}` };
  }
};