import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    process.env.MONGO_URL,
    {
      dbName: "dngtube", // 접속은 admin db이지만 실제 사용할 db를 고를 수 있음.
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (error) => {
      // 접속했을 때 오류
      if (error) {
        console.log(`❌ Error on DB Connection:${error}`);
      }
    }
  );
};

const db = mongoose.connection;

const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

const handleDisconnected = () => {
  console.log("❌ Disconnected on DB Connection");
  connect();
};

db.on("error", handleError); // 계속 지켜봄
db.on("disconnected", handleDisconnected); // 계속 지켜봄

export default connect;
