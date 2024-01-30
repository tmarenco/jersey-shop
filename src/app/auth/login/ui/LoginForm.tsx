"use client";

import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === "Success") {
      // router.replace("/");

      // Previously we had the option with router but there is a problem when we use the login option in the sidebar.
      // When we click on that, it redirects us to the login page, and then after we log in we use router to go to the root.
      // But the options in the sidebar are not fully refreshed so we don't see the options we should, if we refresh, we can see them.
      // Thats why we use window.location, to fully refresh and see the correct options.
      window.location.replace("/");
    }
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 k bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Invalid credentials</p>
          </div>
        )}
      </div>

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Create new account
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        "btn-primary": !pending,
        "btn-disabled": pending,
      })}
      disabled={pending}
    >
      Log In
    </button>
  );
}
