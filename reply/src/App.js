import { Button } from "@mui/material";
import React, { useState } from "react";
import Comment from "./comment/Comment";

// 수정할 사항
/*
 - text-editor가 상위 margin으로 인해 사이즈 점점 줄어들음.
 - 컴포넌트 분리
 - 스타일 분리
*/

const App = () => {
  // mock user
  const [user, setUser] = useState("jamong");
  const changeUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      {/* mock user selector */}
      <div>{user}</div>
      <div>
        <Button onClick={changeUser} value="jamong">
          jamong
        </Button>
        <Button onClick={changeUser} value="자몽">
          자몽
        </Button>
        <Button onClick={changeUser} value="유저1">
          유저1
        </Button>
        <Button onClick={changeUser} value="유저2222222">
          유저2222222
        </Button>
      </div>
      {/* mock user selector end */}

      <div>
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          데이터 삭제
        </Button>

        <Comment user={user} />
      </div>
    </div>
  );
};

export default App;
