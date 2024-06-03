"use client";

export default function Error({ error }: { error: Error }) {
  return <h1>opps... {error.message}</h1>;
}
