// import connectRedis from "connect-redis";
import memoryStore from "memorystore";
import session from "express-session";

// const RedisStore = connectRedis(session);

const MemoryStore = memoryStore(session);

export default (app) =>
    session({
        store: new MemoryStore(),
        name: "sessId",
        secret: process.env.SESSIONSECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: app.get("env") === "production",
            httpOnly: true,
            maxAge: 18000000, // 5 hours
        },
    });
