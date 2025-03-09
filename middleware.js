// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export default async function middleware(request) {
//   const token = await getToken({ req: request });

//   const url = request.nextUrl;

//   // If user is authenticated, redirect away from login/signup
//   if (token && ["/signup", "/login", "/verify"].some(path => url.pathname.startsWith(path))) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }
//    // Protect the /profile route - only allow access if authenticated
//   if (!token && url.pathname.startsWith("/profile")) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// // Apply middleware to specific routes
// export const config = {
//   matcher: ["/profile", "/signup", "/login", "/verify"],
// };


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET, secureCookie: process.env.NODE_ENV === "production" });

  const url = request.nextUrl;

  // ✅ Prevent logged-in users from accessing login/signup
  if (token && ["/signup", "/login", "/verify"].includes(url.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ Ensure only authenticated users can access /profile
  if (!token && url.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// ✅ Apply middleware to relevant routes
export const config = {
  matcher: ["/profile", "/signup", "/login", "/verify"],
};
