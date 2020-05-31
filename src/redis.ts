import { connect } from "https://deno.land/x/redis/mod.ts";
console.log('start')
const redis = await connect({
  hostname: "redis",
  port: 6379
});
console.log('connected')
const ok = await redis.set("hoge", "fuga");
console.log(ok);
const fuga = await redis.get("hoge");
console.log(fuga);


const ok2 = await redis.set("hoge", "fuga");
console.log(ok2);
const fuga2 = await redis.get("hoge");
console.log(fuga2);


