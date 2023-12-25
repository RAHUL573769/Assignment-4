import * as argon2 from "argon2";

// Hashing password
export async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await argon2.hash(password);
    // console.log("From HashPassword MiddleWare", hashedPassword);
    return hashedPassword;
  } catch (error) {
    // console.error("Error hashing password:", hashPassword);
    throw error;
  }
}

// Verifying password
export async function verifyPassword(
  hashedPassword: string,
  inputPassword: string
): Promise<boolean> {
  try {
    const isPasswordValid = await argon2.verify(hashedPassword, inputPassword);
    return isPasswordValid;
  } catch (error) {
    console.error(
      "Error verifying password d From hashing password Folder:",
      error
    );
    throw error;
  }
}

// Example usage
(async () => {
  const passwordToHash = "your_password";

  try {
    // Hash the password
    const hashedPassword = await hashPassword(passwordToHash);
    console.log(
      "Hashed Password  From hashing password Folder:",
      hashedPassword
    );

    // Verify the password
    const isPasswordValid = await verifyPassword(
      hashedPassword,
      "user_input_password"
    );
    // console.log("Is Password Valid?", isPasswordValid);
  } catch (error) {
    console.error("An error occurred From hashing password Folder:", error);
  }
})();
