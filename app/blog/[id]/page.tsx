import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

async function getData(id: string) {
  const responce = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (await responce).json();
}

export default async function Blog({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
