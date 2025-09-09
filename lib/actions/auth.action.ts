"use server";

interface AuthData {
  email: string;
  password: string;
  name?: string; // only needed for signUp
}

// 🔹 Sign Up
export async function signUp(data: AuthData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { success: false, message: result.message || "Sign-up failed" };
    }

    return { success: true, ...result };
  } catch (error: any) {
    return { success: false, message: error.message || "Unexpected error" };
  }
}

// 🔹 Sign In
export async function signIn(data: AuthData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { success: false, message: result.message || "Sign-in failed" };
    }

    return { success: true, ...result };
  } catch (error: any) {
    return { success: false, message: error.message || "Unexpected error" };
  }
}
