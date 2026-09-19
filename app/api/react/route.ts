import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

const reactions = {
  loved: "reaction:loved",
  inspired: "reaction:inspired",
  thought: "reaction:thought",
  next: "reaction:next",
} as const;

type Reaction = keyof typeof reactions;

export async function GET() {
  const keys = Object.values(reactions);

  const values = await redis.mget<number[]>(...keys);

  return NextResponse.json({
    loved: values[0] ?? 0,
    inspired: values[1] ?? 0,
    thought: values[2] ?? 0,
    next: values[3] ?? 0,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const reaction = body?.reaction as Reaction;

  if (!reaction || !(reaction in reactions)) {
    return NextResponse.json(
      { error: "Invalid reaction." },
      { status: 400 },
    );
  }

  const count = await redis.incr(reactions[reaction]);

  return NextResponse.json({
    reaction,
    count,
  });
}