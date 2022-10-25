import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./images/3.jpg";
import profile2 from "./images/4.jpg";
import profile3 from "./images/5.jpg";
import Func_comp from "./Func_comp";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Anna"
          time="Today at 03:00pm"
          comment="good!"
          pic={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          time="Today at 08:00pm"
          comment="best!"
          pic={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Mary"
          time="Yesterday at 12:30pm"
          comment="amazing!"
          pic={profile3}
        />
      </UserCard>

      {/* <Func_comp/> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
