import passport from "passport";
import User from "./models/User"; // 컬렉션

// passport의 strategy 사용 방법임.
// 원래는 passport.use(new LocalStrategy(아주 긴 코드 필요)) 이렇게 사용
// 하지만 passport-local-mongoose에서 알아서 해줌. (User.createStrategy())
passport.use(User.createStrategy());

// serialization은 어떤 필드(열)가 쿠키에 포함될 것인지 알려주는 역할을 함.
// 민감한 정보는 담지 않아야 한다.(user.id 정도만 담는다)
// user 정보를 전달받아 세션(정확히는 req.session.passport.user)에 저장한다.
// passport-local-mongoose를 활용하면 알아서 해준다.(User.serializeUser())
passport.serializeUser(User.serializeUser());

// 쿠키값을 받아서 어떻게 사용자로 전환하는가를 의미한다.
// 실제 서버로 들어오는 요청마다 세션 정보(serializeUser에서 저장됨)를 실제 DB의 데이터와 비교한다.
// 해당하는 유저정보가 있다면 req.user에 저장시킨다.(middlewares.js에서 사용중)
// passport-local-mongoose를 활용하면 알아서 해준다.(User.deserializeUser())
passport.deserializeUser(User.deserializeUser());
