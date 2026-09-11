"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction, type ActionResult } from "./actions";
import { Button } from "@/components/ui/button";

const initialState: ActionResult | null = null;

export function LoginForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  useEffect(() => {
    if (state?.ok) router.refresh();
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-zinc-800">
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="h-11 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
        />
      </div>
      {state && !state.ok ? (
        <p className="text-sm text-red-600">{state.error}</p>
      ) : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
